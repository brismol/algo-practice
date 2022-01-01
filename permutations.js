const permutations = (items, i = 0) => {
  if (i === items.length) return [[]];

  const char = items[i];

  const permsSoFar = permutations(items, i + 1);

  const perms = [];

  for (const perm of permsSoFar) {
    perms.push([char, ...perm]);

    for (let i = 1; i <= perm.length; i++) {
      const left = perm.slice(0, i);
      const right = perm.slice(i);
      perms.push([...left, char, ...right]);
    }
  }

  return perms;
};
