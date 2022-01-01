const parentheticalPossibilities = (s, i = 0) => {
  if (i === s.length) return [''];

  let options = [];

  if (s[i] === '(') {
    for (i; i < s.length; i++) {
      if (s[i] === '(') continue;
      if (s[i] === ')') break;
      options.push(s[i]);
    }
  } else {
    options.push(s[i]);
  }

  const possibilitiesWithout = parentheticalPossibilities(s, i + 1);

  const finalPoss = [];

  for (const option of options) {
    for (const pos of possibilitiesWithout) {
      finalPoss.push(option + pos);
    }
  }

  return finalPoss;
};
