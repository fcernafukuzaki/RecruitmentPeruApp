import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state){
  debugger
}

class CategoryList extends Component {
  render() {
    return this.props.children
  }
}

export default connect(mapStateToProps)(CategoryList);
