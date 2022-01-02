class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      let current = this.root;
      for (let j = i; j < string.length; j++) {
        const char = string[j]; //b
        current[char] = current[char] || {};
        current = current[char];
      }
      current[this.endSymbol] = true;
    }
  }

  contains(string) {
    let current = this.root;
    for (const char of string) {
      if (char in current) current = current[char];
      else return false;
    }
    if (this.endSymbol in current) return true;
    return false;
  }
}
