import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class SluggerSide extends Component {
  state = {
    slugger: {},
    isLoaded: false
  };

  componentDidMount() {
    axios.get(`/wp-json/wp/v2/books/${this.props.match.params.id}`)
      .then(res => this.setState({
        slugger: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { slugger, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <Fragment>
          <Link to='/'>Get back there</Link>
          <hr />
          <h1>{slugger.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: slugger.content.rendered }}></div>
          <h4>Publisher: {slugger.acf.publisher}</h4>
        </Fragment>
      );
    }

    return <h3>Loading...</h3>
  }
}

export default SluggerSide;
