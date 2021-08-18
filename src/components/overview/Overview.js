import React from 'react';
import { connect } from 'react-redux';

import './overview.css';

const Overview = ({ contributions, pinnedItems, username, darkMode }) => {
  return (
    <div className="overview-container">
     

      <div className={`contributions ${darkMode && 'hide-contribution'}`}>
        <h2 className="contributions-text">
          <span>{contributions} contributions in the last year</span>
          <span className="contributions-btn">
            contributions settings
            <i className="fas fa-caret-down"></i>
          </span>
        </h2>
        <div className="graph-container">
          <div className="graph-content">
            <img
              className="graph-img"
              src={`https://ghchart.rshah.org/40c463/${username}`}
              alt="my github chart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ data, darkMode }) => ({
  contributions:
    data &&
    data.contributionsCollection.contributionCalendar.totalContributions,
  pinnedItems: data && data.pinnedItems.nodes,
  username: data && data.login,
  darkMode,
});

export default connect(mapStateToProps)(Overview);
