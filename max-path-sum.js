const maxPathSum = (grid) => {
  const copy = [];
  for (const row of grid) copy.push([...row]);

  for (let r = 0; r < copy.length; r++) {
    for (let c = 0; c < copy[r].length; c++) {
      let up = r - 1 < 0 ? 0 : copy[r - 1][c];
      let left = c - 1 < 0 ? 0 : copy[r][c - 1];

      copy[r][c] += Math.max(up, left);
    }
  }

  return copy[copy.length - 1][copy[0].length - 1];
};
