// Table.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Wrestler from './../wrestler/Wrestler';

const Table = (props) => {
  const wrestlerNodes = (props.data || []).map(wrestler => (
    <Wrestler
      id={wrestler.id}
      first_name={wrestler.first_name}
      last_name={wrestler.last_name}
      dob={wrestler.dob}
      weight={wrestler.weight}
      school={wrestler.school}
    >
		{wrestler.first_name}
    </Wrestler>
  ));
  return (
    <div>
      <h2>Wrestlers</h2>
      <div>
        { wrestlerNodes }
      </div>
    </div>
  );
};

Table.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		first_name:PropTypes.string,	
  })),
};

Table.defaultProps = {
  data: [],
}

export default Table;
