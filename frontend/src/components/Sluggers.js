import React, { Component } from 'react';
import axios from 'axios';
import SluggerItem from './SluggerItem';

export class Sluggers extends Component {
  state = {
    sluggers: [],
    isLoaded: false
  };

  componentDidMount() {
    axios.get('/wp-json/wp/v2/sluggers')
      .then(res => this.setState({
        sluggers: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { sluggers, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          { sluggers.map(slugger => (
            <SluggerItem key={slugger.id} slugger={slugger} />
          ))}
        </div>
      );
    }

    return <h3>Loading...</h3>
  }
}

export default Sluggers;