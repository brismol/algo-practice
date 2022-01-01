const nestingScore = (str) => {
  const stack = [];

  for (const char of str) {
    if (char === ']') {
      let score = 0;

      while (true) {
        const current = stack.pop();
        if (current === '[') {
          if (score === 0) {
            stack.push(1);
            break;
          } else {
            stack.push(score * 2);
            break;
          }
        } else {
          score += current;
        }
      }
    } else {
      stack.push(char);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};
