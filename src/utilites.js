export function titleCase(str) {
  return str.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export function tagTitleCase(tag) {
  return titleCase(tag.replace(/-/g, ' '));
};

export function categoriesToTags(categories) {
  return categories.trim().split(' ').map((category) => category.trim());
}
