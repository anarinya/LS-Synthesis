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
            <th>Description 1</th>
            <th>Description 2</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          { items.map(item => (
            <tr key={item.id}>
              <td className="product-img"><img src={item.img} alt={item.name} /></td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img src={rupee} className="rupee" alt="rupee" /> {item.price}</td>
              <td>{item.desc1}</td>
              <td>{item.desc2}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

}

const mapStateToProps = ({items}) => ({items});
export default connect(mapStateToProps, { getItems })(Inventory);