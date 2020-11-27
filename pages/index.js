import React from 'react';
import Layout from '../components/layout/Layout';
import ProductDetail from '../components/layout/productDetail';
import useProducts from '../hooks/useProducts';

const Home = () => {

  const { products } = useProducts('created');

  return (
    <div>
      <Layout>
        <div className="productList">
          <div className="content">
            <ul className="bg-white">
              { products.map( product => (
                <ProductDetail
                  key={product.id}
                  product={product}
                />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home