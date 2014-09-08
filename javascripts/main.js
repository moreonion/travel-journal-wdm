$(document).ready(function() {
    var toggleBackgroundInfo = function toggleBackgroundInfo() {
        var wrapper = $('.en_right_wrapper');
        var inner = $('#MORE_ONION_action_1_background_infoDiv');
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

    $('input[onchange="checkdep(this);"]')
        .removeAttr('onchange')
        .on('change', function (ev) {
            if (typeof window.checkdep !== 'undefined') {
                window.checkdep(ev.target);
            }
        });
    $('input[onclick="checkdep(this);"]')
        .removeAttr('onclick')
        .on('cick', function (ev) {
            if (typeof window.checkdep !== 'undefined') {
                window.checkdep(ev.target);
            }
        });
    $('input[onblur="validatefield(this);"]')
        .removeAttr('onblur')
        .on('blur', function (ev) {
            if (typeof window.validatefield !== 'undefined') {
                window.validatefield(ev.target);
            }
        });
});
