module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("main.css");
    eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));
};