import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <ul className="Menu">
      <li><Link to="/">home</Link></li>
      <li><Link to="/products">products</Link></li>
      <li><Link to="/admin">admin</Link></li>
    </ul>
  );
};