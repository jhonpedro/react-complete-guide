import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Product tal</Link>
        </li>
        <li>
          <Link to="/products/p2">Product esse</Link>
        </li>
        <li>
          <Link to="/products/p3">Product aquele</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
