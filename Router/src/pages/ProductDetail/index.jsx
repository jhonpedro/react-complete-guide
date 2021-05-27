import { useParams } from 'react-router';

const ProductDetail = () => {
  const { productId } = useParams();

  return <h1>Product id = {productId}</h1>;
};

export default ProductDetail;
