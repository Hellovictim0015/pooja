import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import KitchenBasket from '../../img/product/KitchenBasket.png';
import KITCHENBASKET2 from '../../img/product/KITCHENBASKET2.png';
import CopyKITCHENBASKET from '../../img/product/CopyKITCHENBASKET.png';
import IB0_9851 from '../../img/product/IB0_9851.png';
import microwaveRange from '../../img/microwave-range.jpg';
import coc from '../../img/coc.jpg';
import './ProductDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const products = [
  { name: 'KitchenBasket', category: 'Kitchen Products', img: KitchenBasket, description: 'A versatile kitchen basket.' },
  { name: 'KITCHEN BASKET2', category: 'Kitchen Products', img: KITCHENBASKET2, description: 'Another high-quality kitchen basket.' },
  { name: 'KITCHEN', category: 'Kitchen Products', img: CopyKITCHENBASKET, description: 'A practical kitchen basket.' },
  { name: 'BASKET', category: 'Kitchen Products', img: IB0_9851, description: 'A useful kitchen basket.' },
  { name: 'Soap Dish', category: 'Bathroom Accessories', img: microwaveRange, description: 'A stylish soap dish for your bathroom.' },
  { name: 'Spatula', category: 'Kitchen Products', img: coc, description: 'A high-quality spatula for your kitchen.' },
  { name: 'Garden Shovel', category: 'Gardening', description: 'A sturdy shovel for your gardening needs.' },
  { name: 'Plastic Stool', category: 'Pata and Stools', description: 'A durable plastic stool.' },
  { name: 'Storage Box', category: 'Storage Organisers', description: 'A spacious storage box.' },
  { name: 'Broom', category: 'Cleaning Utilities', description: 'A long-lasting broom.' },
  { name: 'Unbreakable Plate', category: 'Unbreakable Accessories', description: 'An unbreakable plate for everyday use.' },
  { name: 'Moulded Chair', category: 'Moulded Furniture Range', description: 'A comfortable moulded chair.' },
];

function ProductDetail() {
  const { productName } = useParams();
  const product = products.find(p => p.name === productName);
  const [searchQuery, setSearchQuery] = useState('');
  
  if (!product) {
    return <h1>Product not found</h1>;
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.name !== product.name)
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="ProductDetail">
      <div className='uper'>
        <h1>{product.name}</h1>
      </div>
      <div className='main'>
        <div className="filters">
          <div className='input_section'>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <div className='icons'>
              <FontAwesomeIcon className='icon' color='#ffff' icon={faSearch} />
            </div>
          </div>
        </div>
        <div>
          <img src={product.img} alt={product.name} />
          <p>{product.description}</p>
          <h2>Related Products</h2>
        </div>
      </div>
      <div className="related-products">
        {relatedProducts.map(rp => (
          <div key={rp.name} className="related-product-item">
            <Link to={`/product/${rp.name}`}>
              {rp.img && <img src={rp.img} alt={rp.name} />}
              <h3>{rp.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
