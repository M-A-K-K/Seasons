import './SeasonDisplay.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
const seasonConfig = {
  summer: {
    text : " Let's hit the beach",
    icon : 'sun'
  },
  winter:
  {
    text : " Burr! It's Cold",
    icon : 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text , iconName}=seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i c  lassName={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
