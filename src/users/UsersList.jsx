import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import { connect } from 'react-redux';
import * as userActions from './user.action';

class UsersList extends React.Component {
  goNext = () => {
    this.props.goNext()
  };

  goPrev = () => {
    this.props.goPrev();
  };

  render() {
    const usersPerPage = 3;
    const { currentPage, userList } = this.props.users;
    console.log(this.props.users);
    console.log(userList);

    const startIndex = currentPage * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToDisplay = userList.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={userList.length}
          itemsPerPage={usersPerPage}
        />
        <ul className="users">
          {usersToDisplay.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: {
      userList: state.users.userList,
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
