import React from 'react';
import Restaurant from './restaurant';

export default ({restaurants}) => {
  return (
    <div>
      <h3>Restaurants list !</h3>
      {restaurants.map((restaurant) => {
        return (
        <div>
          <Restaurant
            name={restaurant.name}
           />
        </div>
        );
      })}
    </div>
  );
};
