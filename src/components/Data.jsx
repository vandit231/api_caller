// Data.jsx

import React from 'react';
import PropTypes from 'prop-types';

const Data = ({ Data }) => {
  if (!Array.isArray(Data) || Data.length === 0) {
    return (
      <tr>
        <td colSpan="9">No data available</td>
      </tr>
    );
  }

  return (
    <>
      {Data.map((currUser) => (
        <tr key={currUser.id}>
          <td>{currUser.id}</td>
          <td>{currUser.image}</td>
          <td>{currUser.firstName}</td>
          <td>{currUser.lastName}</td>
          <td>{currUser.email}</td>
          <td>{currUser.username}</td>
          <td>{currUser.domain}</td>
          <td>{currUser.ip}</td>
          <td>{currUser.university}</td>
        </tr>
      ))}
    </>
  );
}

Data.propTypes = {
  Data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    ip: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
  })).isRequired,
};

export default Data;
