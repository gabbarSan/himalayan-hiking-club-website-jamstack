const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "public"
        }
    };
}