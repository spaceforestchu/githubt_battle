import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
import PropTypes from 'prop-types';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} style={{width: 100, height: 100}}/>
        <h1>Name: {this.props.name} </h1>
        <h3>username: {this.props.username} </h3>
      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

ReactDOM.render(
  <Badge
    name='Tyler McGinnis'
    username='tylermcginnis'
    img='https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'/>,
  document.getElementById('app')
);

/*
OBJECT SHAPE

<Users lists={[
  {name: 'Tyler', friend: true},
  {name: 'Tyler', friend: true},
  {name: 'Tyler', friend: true}
]}

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  friend: PropTypes.bool.isRequired
  }))
}

*/
