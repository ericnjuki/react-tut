import React from "react";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat < 0 ? 'summer' : 'winter'
    }
}
const SeasonDisplay = ({ lat }) => {
    const season  = getSeason(lat, new Date().getMonth());
    return <div>current season wherever you aaarree: {season}</div>
};

export default SeasonDisplay;