export const isRoot = (_ID) => {
  return _ID === ".";
};

export const isBlogPage = (_ID) => {
  // Root page is the blog list, everything else is an individual blog post
  return !isRoot(_ID);
};

export const getBlogUrl = (_ID, url) => {
  return url;
};
