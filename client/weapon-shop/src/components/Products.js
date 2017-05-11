import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions';
import { Link } from 'react-router-dom';

class Products extends Component {

  componentWillMount() {
    this.props.getItems();
  }

  renderItem(item) {
    const { id, name, img } = item;
    return (
      <li key={id}>
        <Link to={`/products/${id}/${name}`}>
          <img className="prod-img" src={img} alt={name} />
        </Link>
      </li>
    );
  }

  render() {
    const { items } = this.props;

    return (
      <div className="Products">
        <h2>products</h2>
        <ul className="product-list">
          { items.map(item => this.renderItem(item)) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => ({ items });
export default connect(mapStateToProps, { getItems })(Products);