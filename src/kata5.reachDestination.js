const reachDestination = (distance, speed) => {
    result = Math.round(distance/speed * 2) / 2;
    return`I should be there in ${result} hours.`
};

module.exports = reachDestination;