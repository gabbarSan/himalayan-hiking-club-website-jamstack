module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/bootstrap-image-gallery.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/bootstrap-image-gallery.min.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/bootstrap.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/bootstrap.min.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/datepicker.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/extralayers.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/navstylechange.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/owl.carousel.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/owl.theme.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/superfish.css");
    eleventyConfig.addPassthroughCopy("./src/assets/templates/css/weather.css");
    eleventyConfig.addPassthroughCopy("./src/assets");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}