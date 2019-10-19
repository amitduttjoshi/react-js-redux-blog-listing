import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
  render () {
    // const user = this.props.users.find (user => user.id === this.props.userId);
    const {user} = this.props;

    return !user
      ? <div>Loading Author</div>
      : <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find (user => user.id === ownProps.userId)};
};

export default connect (mapStateToProps) (UserDetail);
