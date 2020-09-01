import React from 'react';

const CountryInfo = (props) => {
  return (
    <div>
      <h1>Country Information You Selected</h1>
      <p>Country: {props.info.name}</p>
      <p>Population: {props.info.population}</p>
    </div>
  )
}

export default CountryInfo;