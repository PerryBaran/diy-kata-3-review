const reachDestination = (distance, speed) => {
  if (speed === 0) {
    return "You are not moving, so you're already there!";
  }

  const time = distance / speed;
  if (time < 1) {
    const minutes = Math.round(time * 60);
    return `You will arrive in ${minutes} minute${minutes > 1 ? "s" : ""}.`;
  }
  return `You will arrive in ${time} hour${time > 1 ? "s" : ""}.`;
};

module.exports = reachDestination;
