const store = new Map();

async function lookup(key) {
  return store.has(key) ? store.get(key) : null;
}

async function set(key, value) {
  store.set(key, value);
  return value;
}

module.exports = {
  lookup,
  set,
};
