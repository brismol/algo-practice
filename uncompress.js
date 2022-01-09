const uncompress = (s) => {
  const final = [];

  let num = [];

  let i = 0;
  let j = 0;

  while (i < s.length) {
    if (isNaN(s[i])) {
      const multiplier = s.slice(j, i) * 1;
      for (let m = 0; m < multiplier; m++) {
        final.push(s[i]);
      }
      i++;
      j = i;
    } else {
      i++;
    }
  }

  return final.join('');
};
