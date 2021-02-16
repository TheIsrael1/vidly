import React, { Component } from 'react';

class NavMessage extends Component {
 state = {}
 render() {
  return (
   <div className="container py-3">showing <span>{this.props.totalMovies}</span> movies in database</div>
  );
 }
}

export default NavMessage;