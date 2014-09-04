$(document).ready(function() {
    var share_links = {
        'tw_share_link': 'http://www.facebook.com/sharer.php?u={{url}}',
        'fb_share_link': 'http://www.twitter.com/share?url={{url}}',
        'email_share_link' :'',
        'email_signup_link': ''
    }

    $('.share_buttons').each(function(i, buttons) {
        var url;
        var $post = $(buttons).closest('article.post');
        if ($post.length > 0) {
            url = $post.find('.small a').first().attr('href');
        } else {
            url = window.location;
        }

        $(buttons).find('a').each(function(i, link) {
            var dest = share_links[link.className]
                .replace(/{{url}}/, encodeURIComponent(url));
            $(link).attr('href', dest);
        });
    });
});
