import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import * as userActions from './users.actions.js';
import { connect } from 'react-redux';

class UsersList extends React.Component {
  goNext = () => {
    this.props.goNext();
  };

  goPrev = () => {
    this.props.goPrev();
  };

  render() {
    console.log(this.props);

    const itemsPerPage = 3;
    const { currentPage, usersList } = this.props.users;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const usersToDisplay = usersList.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={usersList.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersToDisplay.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: {
      usersList: state.users.usersList,
      currentPage: state.users.currentPage,
    },
  };
};

const mapDispatch = {
  goNext: userActions.goNext,
  goPrev: userActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
