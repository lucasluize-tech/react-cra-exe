const choice = (items) => {
  return items[Math.floor(Math.random()) * items.length];
};

const remove = (items, item) => {
  items.splice(items.indexOf(item), 1);
  return item;
};

export { choice, remove };
