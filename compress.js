const compress = (s) => {
  let i = 0;
  let j = 0;

  const final = [];

  while (i <= s.length) {
    if (s[i] !== s[j]) {
      if (i - j === 1) {
        final.push(s[j]);
      } else {
        final.push(i - j, s[j]);
      }
      j = i;
    } else {
      i++;
    }
  }

  return final.join('');
};
