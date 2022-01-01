const subsets = (elements, i = 0) => {
  if (i === elements.length) return [[]];

  const subs = subsets(elements, i + 1);

  const newSubs = [];

  for (const sub of subs) {
    newSubs.push([elements[i], ...sub]);
  }

  return [...newSubs, ...subs];
};
