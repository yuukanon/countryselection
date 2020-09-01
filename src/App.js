import React from 'react';
import './App.css';
import { Component } from 'react';
import Dropdown from './Components/Dropdown';
import CountryInfo from './Components/CountryInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedCountryInfo: {}
    }
  }

  fetchData = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => {this.setState({
      data: data
    })})
  }

  componentDidMount() {
    this.fetchData()
  }

  getCountryInfo = (countryInfo) => {
    this.setState({selectedCountryInfo: countryInfo })
  }

  render() {

    return (
      <div className="App">
        <Dropdown getCountryInfo = {this.getCountryInfo} countries = {this.state.data}/>
        {this.state.selectedCountryInfo && <CountryInfo info={this.state.selectedCountryInfo} />}
      </div>
    );

  }
}

export default App;
