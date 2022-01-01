const decompressBraces = (s) => {
  const stack = [];

  for (const char of s) {
    if (char === '}') {
      const internalStr = [];

      while (true) {
        const current = stack.pop();
        if (current === '{') break;
        internalStr.push(current);
      }

      const num = stack.pop() * 1;

      internalStr.reverse();

      for (let i = 0; i < num; i++) {
        stack.push(...internalStr);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
