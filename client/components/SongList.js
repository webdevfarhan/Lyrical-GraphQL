import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => (
      <li className='collection-item' key={song.id}>
        {song.title}
      </li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul className='collection'>{this.renderSongs()}</ul>
      </div>
    );
  }
}

export default graphql(query)(SongList);
