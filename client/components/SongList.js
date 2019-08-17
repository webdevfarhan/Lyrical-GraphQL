import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
  {
    songs {
      title
    }
  }
`;

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
  }
}

export default graphql(query)(SongList);
