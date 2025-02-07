module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("main.css");
    
    
    // ARRAY
    eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));
    eleventyConfig.addFilter("find", (arr, key, value) => {
        return arr.find((val) => val.data[key] === value)
    });
    
};