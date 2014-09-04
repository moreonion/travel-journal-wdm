$(document).ready(function() {
    var toggleBackgroundInfo = function toggleBackgroundInfo() {
        var wrapper = $('.en_right_wrapper');
        wrapper.toggleClass('background-info');

        if (wrapper.find('#thex').length === 0) {
            wrapper.prepend(
                $('<a href="#close" id="thex" ' +
                  'title="Close the background info">Close</a>'
                 ).on('click', toggleBackgroundInfo)
            );
        }
    }

    var windowResized = function(mql) {
        if (mql.matches) { // window is at least 900px wide;
            $('a[title="Click here to read the background info"]')
                .on('click', toggleBackgroundInfo);
        } else { // window is less than 900px wide;
            $('a[title="Click here to read the background info"]')
                .off('click', toggleBackgroundInfo);
        }
    }

    var mql = window.matchMedia("(min-width: 900px)");
    windowResized(mql);
    mql.addListener(windowResized);

});
