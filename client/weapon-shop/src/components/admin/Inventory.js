import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../actions';

class Inventory extends Component {
  
  componentWillMount() {
    this.props.getItems();
  }

  componentWillUpdate() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props;
    const rupee = '/img/rupee.gif';

    return (
      <table className="Inventory">
        <thead>
          <tr>
            <th>Image</th>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Effect</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          { items.map(item => (
            <tr key={item.id}>
              <td className="product-img"><img src={item.img} alt={item.name} /></td>
              <td data-label="ID">{item.id}</td>
              <td data-label="Name">{item.name}</td>
              <td data-label="Price"><img src={rupee} className="rupee" alt="rupee" /> {item.price}</td>
              <td data-label="Description">{item.desc1}</td>
              <td data-label="Effect">{item.desc2}</td>
              <td data-label="Quantity">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

}

const mapStateToProps = ({items}) => ({items});
export default connect(mapStateToProps, { getItems })(Inventory);