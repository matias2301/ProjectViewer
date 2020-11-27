import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout';
import ProductDetail from '../components/layout/productDetail';
import useProducts from '../hooks/useProducts';
import { useRouter } from "next/router";

const Search = () => {  

  const [prodSearched, setProdSearched] = useState([])
  const router = useRouter();
  const { query: { q }} = router;

  const { products } = useProducts('created');

  useEffect(() => {
    const term = q.toLowerCase();
    const productFiltered = products.filter( prod => {
      return (
        prod.name.toLowerCase().includes( term ) ||
        prod.description.toLowerCase().includes( term )
      )
    });
    setProdSearched(productFiltered);
  }, [ q, products]);

  return (
    <div>
      <Layout>
        <div className="productList">
          <div className="content">
            <ul className="bg-white">
              { prodSearched.map( product => (
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

export default Search