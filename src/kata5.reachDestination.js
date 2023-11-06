const reachDestination = (distance, speed) => {
  const arrivalTime = Math.ceil((distance / speed) * 2) / 2;
  return `I will be there in ${arrivalTime}, see you soon.`;
};

module.exports = reachDestination;
