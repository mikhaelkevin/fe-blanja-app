import React from 'react';
import PropTypes from 'prop-types';

function TabMenuContent({ children, contentName }) {
  return (
    <div className="tab-pane fade" id={contentName} role="tabpanel" aria-labelledby={`${contentName}-tab`}>
      {children}
    </div>
  );
}

TabMenuContent.propTypes = {
  children: PropTypes.element.isRequired,
  contentName: PropTypes.string.isRequired,
};

export default TabMenuContent;
