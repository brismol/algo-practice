const befittingBrackets = (str) => {
  const opens = new Set(['(', '[', '{']);
  const closed = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const stack = [];

  for (const char of str) {
    if (opens.has(char)) stack.push(char);
    else if (char in closed) {
      const prev = stack.pop();
      if (closed[char] !== prev) return false;
    }
  }

  return !stack.length;
};
