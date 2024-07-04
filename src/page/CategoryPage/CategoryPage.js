import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import img from '../../img/categories/Gardening.png';
import KitchenBasket from '../../img/product/KitchenBasket.png';
import KITCHENBASKET2 from '../../img/product/KITCHENBASKET2.png';
import CopyKITCHENBASKET from '../../img/product/CopyKITCHENBASKET.png';
import IB0_9851 from '../../img/product/IB0_9851.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './CategoryPage.css'; // Ensure you have the CSS file imported

const categories = [
  'Bathroom Accessories',
  'Kitchen Products',
  'Gardening',
  'Pata and Stools',
  'Storage Organisers',
  'Cleaning Utilities',
  'Unbreakable Accessories',
  'Moulded Furniture Range',
];

const products = [
  { name: 'Soap Dish', category: 'Bathroom Accessories', img: img },

// new 

  // { name: 'Spatula', category: 'Kitchen Products', img: img },
  { name: 'KitchenBasket', category: 'Kitchen Products', img: KitchenBasket },
  { name: 'KITCHEN BASKET2', category: 'Kitchen Products', img: KITCHENBASKET2 },
  { name: 'KITCHEN', category: 'Kitchen Products', img: CopyKITCHENBASKET },
  { name: 'BASKET', category: 'Kitchen Products', img: IB0_9851 },
 



  { name: 'Garden Shovel', category: 'Gardening', img: img },
  { name: 'Plastic Stool', category: 'Pata and Stools', img: img },
  { name: 'Storage Box', category: 'Storage Organisers', img: img },
  { name: 'Broom', category: 'Cleaning Utilities', img: img },
  { name: 'Unbreakable Plate', category: 'Unbreakable Accessories', img: img },
  { name: 'Moulded Chair', category: 'Moulded Furniture Range', img: img }

];

function CategoryPage() {
  const { categoryName } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  const categoryProducts = products.filter(
    product =>
      product.category === categoryName &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="CategoryPage">
      <div className='uper'>
        <h1>{categoryName}</h1>
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
          <h4>PRODUCT CATEGORIES</h4>
          <select onChange={e => setSearchQuery(e.target.value)}>
            <option value="">All</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="product-list">
          {categoryProducts.map(product => (
            <div key={product.name} className="product-item">
              <Link to={`/product/${product.name}`}>
                {product.img && <img src={product.img} alt={product.name} />}
                <h1>{product.name}</h1>
                <h2>{product.category}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
