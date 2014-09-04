$(document).ready(function() {
    var toggleBackgroundInfo = function toggleBackgroundInfo() {
        var wrapper = $('.en_right_wrapper');
        var inner = $('#Action_headline_FlorianDiv');
        wrapper.toggleClass('background-info');

        if (inner.find('#thex').length === 0) {
            inner.prepend(
                $('<a href="#close" id="thex" ' +
                  'title="Close the background info">Close</a>'
                 ).on('click', toggleBackgroundInfo)
            );
        }
    }

    var windowResized = function(mql) {
        if (mql.matches) { // window is at least 900px wide;
            $('a.toggle-background-info').on('click', toggleBackgroundInfo);
        } else { // window is less than 900px wide;
            $('a.toggle-background-info').off('click', toggleBackgroundInfo);
        }
    }

    var mql = window.matchMedia("(min-width: 900px)");
    windowResized(mql);
    mql.addListener(windowResized);
});
