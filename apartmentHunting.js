function apartmentHunting(blocks, reqs) {
  const distanceMap = new Array(blocks.length).fill(1).map((a) => {
    return {};
  });

  for (const req of reqs) {
    let distance = Infinity;

    for (let i = 0; i < blocks.length; i++) {
      distance++;
      if (blocks[i][req]) {
        distance = 0;
      }
      distanceMap[i][req] = distance;
    }
  }

  for (const req of reqs) {
    let distance = Infinity;
    for (let i = blocks.length - 1; i >= 0; i--) {
      distance++;
      if (blocks[i][req]) {
        distance = 0;
      }
      distanceMap[i][req] = Math.min(distanceMap[i][req], distance);
    }
  }

  let maxDistance = Infinity;
  let bestBlock;

  for (let i = 0; i < distanceMap.length; i++) {
    const block = distanceMap[i];

    const farthest = Math.max(...Object.values(block));

    if (farthest < maxDistance) {
      maxDistance = farthest;
      bestBlock = i;
    }
  }

  return bestBlock;
}
