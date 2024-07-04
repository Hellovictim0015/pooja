import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/microwave-range.jpg';
import BathroomAccessories from '../../img/categories/BathroomAccessories.png'
import KitchenProducts from '../../img/categories/KitchenProducts.png'
import Gardening from '../../img/categories/Gardening.png'
import PataStools from '../../img/categories/PataStools.png'
import StorageOrganisers from '../../img/categories/StorageOrganisers.png'
import UtilityProducts from '../../img/categories/UtilityProducts.png'
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


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
  { category: 'Bathroom Accessories', img:BathroomAccessories},
  { category: 'Kitchen Products', img:KitchenProducts},
  { category: 'Gardening', img: Gardening },
  { category: 'Pata and Stools', img:PataStools},
  { category: 'Storage Organisers', img:StorageOrganisers },
  { category: 'Cleaning Utilities', img: UtilityProducts },
  { category: 'Unbreakable Accessories', img: Gardening },
  { category: 'Moulded Furniture Range', img: KitchenProducts },
];

function Product() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearchQuery = product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  return (
    <div className="App">
      <div className='uper'>
        <h1>Premium Household Plastic Products</h1>
        <p>Joyo - Joy Of Life</p>
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
          <div className='icons' > <FontAwesomeIcon className='icon' color='#ffff' icon={faSearch} /></div>
          </div>
            <h4>PRODUCT CATEGORIES</h4>
          <select onChange={e => setSelectedCategory(e.target.value)}>
            <option value="All">All</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          
        </div>
        <div className="product-list">
          {filteredProducts.map(product => (
            <div key={product.category} className="product-item">
              <Link to={`/category/${product.category}`}>
                {product.img && <img src={product.img} alt={product.category} />}
                <h2>{product.category}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
