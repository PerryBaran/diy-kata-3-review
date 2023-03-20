// should return a string "I should be there in (time) hours."
// 2 inputs (distance & speed) both of which are known
// work out (time) by distance / speed.
// (time) rounded to the nearest 0.5

const reachDestination = (distance, speed) => {
  const time = Math.round((distance / speed) * 2)/2;

  return "I should be there in " + time + " hours.";
};

module.exports = reachDestination;
