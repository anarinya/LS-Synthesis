import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';
import { Field, reduxForm } from 'redux-form';

const FIELDS = {
  name: {
    type: 'input',
    label: 'Name',
    placeholder: 'Ex: Sword'
  },
  price: {
    type: 'input',
    label: 'Price (Rupees)',
    placeholder: 'Ex: 100'
  },
  quantity: {
    type: 'input',
    label: 'Quantity',
    placeholder: 'Ex: 5'
  },
  img: {
    type: 'input',
    label: 'Image URL',
    placeholder: 'Ex: /img/sword.gif'
  },
  desc1: {
    type: 'input',
    label: 'Description 1',
    placeholder: 'Ex: A super basic sword.'
  },
  desc2: {
    type: 'input',
    label: 'Description 2',
    placeholder: 'Ex: Defense +2'
  }
};

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const newItem = {
      name: values.name,
      price: values.price || 0,
      img: values.img || '/img/none.gif',
      desc1: values.desc1 || 'No description available.',
      desc2: values.desc2 || '',
      quantity: values.quantity || 0
    };

    this.props.addItem(newItem, () => {
      this.props.reset();
    });
  }

  renderField(field) {
    const { input, label, type, placeholder, meta: { touched, error }} = field;
    return (
      <div className="field-area">
        <label className="field-label">{label}: </label>
        <input className={touched && error ? 'input-error' : ''} 
               placeholder={placeholder}
               type={type} { ...input } />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="AddProduct" onSubmit={ handleSubmit(this.onSubmit) }>
        <h2>Add a Product</h2>
        { Object.keys(FIELDS).map((field, index) => 
          <Field key={index} 
                 label={FIELDS[field].label} 
                 name={field} 
                 placeholder={FIELDS[field].placeholder}
                 component={ this.renderField } 
          />
        )}
        { this.state.errors }
        <button className="add-btn">Add</button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.name || values.name.length < 3) {
    errors.name = "Enter a valid name"
  }

  if (values.price && isNaN(values.price) && values.price === parseInt(values.price, 2)) {
    errors.price = "Enter a valid number";
  }

  if (values.quantity && isNaN(values.quantity)) errors.quantity = "Enter a valid number";

  return errors;
};

export default 
reduxForm({
  validate,
  fields: Object.keys(FIELDS),
  form: 'AddProductForm'
})(connect(null, { addItem })(AddProduct));