module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
    eleventyConfig.addPassthroughCopy("./src/common/price-panel-list.json");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "common-data",
            output: "public"
        }
    };
}