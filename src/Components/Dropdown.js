import React, { useState, useEffect } from 'react';

const Dropdown = ({countries, getCountryInfo}) => {

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelection = (e) => {
    setSelectedCountry(e.target.value);
  }

  // console.log(selectedCountry)

  const returnCountryInfo = () => {
    const findCountry = countries.find(country => country.name === selectedCountry)
    getCountryInfo(findCountry)
  }

  useEffect(() => returnCountryInfo(), [selectedCountry])


  return (
    <select onChange={handleCountrySelection} name="countries" id="countries">
      <option value="" select>Select the country</option>
      {countries.map(country => <option key={country.name} value = {country.name}>{country.name}</option>)}
    </select>
  )
}

export default Dropdown;