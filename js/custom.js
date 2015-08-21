// Custom Script
// Developed by: Samson.Onna
var customScripts = {
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                //I get fired when the animation is ending
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
            }
        });
    },

    init: function () {
        customScripts.onePageNav();
    }
}
$('document').ready(function () {
    customScripts.init();
});// JavaScript Document