import React from 'react';
import PropTypes from 'prop-types';

function TabMenu({ data: { tabName, tabTitle } }) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className="nav-link rounded-pill"
        id={`${tabName}-tab`}
        data-bs-toggle="pill"
        data-bs-target={`#${tabName}`}
        type="button"
        role="tab"
        aria-controls={tabName}
        aria-selected="false"
      >
        {tabTitle}
      </button>
    </li>

  );
}

TabMenu.propTypes = {
  data: PropTypes.shape({
    tabName: PropTypes.string.isRequired,
    tabTitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabMenu;
