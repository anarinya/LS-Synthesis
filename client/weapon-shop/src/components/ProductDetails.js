import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItemDetails } from '../actions';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {

  componentWillMount() {
    this.props.getItemDetails(this.props.match.params.id);
  }

  render() {
    const { name, price, img, desc1, desc2 } = this.props.item;
    const rupee = `/img/rupee.gif`;

    return (
      <div className="ProductDetails">
        <div className="breadcrumbs">
          <h2><Link to="/products">products</Link> > {name}</h2>
        </div>
        <div className="product-area">
          <div className="img-area">
            <img className="product-img" src={img} alt={name} />
          </div>
          <div className="img-desc">
            <p>{desc1}</p>
            <p>{desc2}</p>
            <p className="price">
              <img className="rupee" alt="rupee" src={rupee} />
              {price}
            </p>
          </div>
        </div>
      </div>
    );
  }

};

const mapStateToProps = ({ item }) => ({ item });
export default connect(mapStateToProps, { getItemDetails })(ProductDetails);