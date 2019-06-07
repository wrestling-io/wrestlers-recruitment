// WrestlerTable.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Wrestler from './../wrestler/Wrestler';

const WrestlerTable = (props) => {
  const wrestlerNodes = (props.data || []).map(wrestler => (
    <Wrestler
      key={wrestler._id}
      _id={wrestler._id}
      first_name={wrestler.first_name}
      last_name={wrestler.last_name}
      dob={wrestler.dob}
      weight={wrestler.weight}
      school={wrestler.school}
      accomplishments={wrestler.accomplishments}
    >
		{wrestler.first_name}
    </Wrestler>
  ));
  return (
    <div>
      <h1>Wrestlers</h1>
      <div>
        { wrestlerNodes }
      </div>
    </div>
  );
};

WrestlerTable.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
  })),
};

WrestlerTable.defaultProps = {
  data: [],
}

export default WrestlerTable;
