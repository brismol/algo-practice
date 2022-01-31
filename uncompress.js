const uncompress = (s) => {
  const decom = [];

  let slow = 0;
  let fast = 0;

  while (fast <= s.length) {
    if (isNaN(s[fast])) {
      const num = s.slice(slow, fast) * 1;
      const char = s[fast];

      for (let i = 0; i < num; i++) {
        decom.push(char);
      }

      fast++;
      slow = fast;
    } else {
      fast++;
    }
  }

  return decom.join('');
};
