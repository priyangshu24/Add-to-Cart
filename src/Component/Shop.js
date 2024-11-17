import React from 'react'
import list from '../list'
import Card from './Card'

const Shop = ({ handleClick }) => {
  return (
      <section className="shop-container">
          {list.map((item) => (
              <Card 
                  key={item.id} 
                  item={item} 
                  handleClick={handleClick} 
              />
          ))}
      </section>
  );
};

export default Shop;
