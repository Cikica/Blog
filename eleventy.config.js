module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("main.css");

    // COLLECTIONS
    eleventyConfig.addFilter("getNextPost", (collection, orderAsString) => {
        let order = parseInt(orderAsString)
        let totalPosts = collection.length;
        let isLastPost = totalPosts === order;        
        let orderToFind = isLastPost ? 1 : order + 1;        
        let nextPost = collection.find((post) => {
            console.log("- Visible order:", post.data.order)
            console.log("- Sought order:", `${orderToFind}`)
            console.log("-");
            return post.data.order === `${orderToFind}`;
        });

        return nextPost
    });
    
    // ARRAY
    eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));
    eleventyConfig.addFilter("find", (arr, key, value) => {
        return arr.find((val) => val.data[key] === value)
    });

    // STRING
    eleventyConfig.addFilter("toTitleCase", (string) => {
        return string
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.substring(1))
            .join(' ')
    }
    );
    
};