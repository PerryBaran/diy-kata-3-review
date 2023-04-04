const reachDestination = (distance, speed) => {
  const journeyTime = distance / speed;
  const roundedUp = Math.round(journeyTime * 2) / 2;
  return `I will be there in ${roundedUp} hours`;
};

module.exports = reachDestination;
