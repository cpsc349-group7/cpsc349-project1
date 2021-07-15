module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPassthroughCopy('css')
  return {
    passthroughFileCopy: true
  }
};
