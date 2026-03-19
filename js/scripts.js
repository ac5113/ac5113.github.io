/*!
    Agniv Chatterjee – Portfolio Scripts
*/

(function($) {

    // ---- Remove no-js class ----
    $('html').removeClass('no-js');

    // ---- Set current year in footer ----
    $('#current-year').text(new Date().getFullYear());

    // ---- Sticky nav shadow on scroll ----
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('#site-nav').addClass('scrolled');
        } else {
            $('#site-nav').removeClass('scrolled');
        }
    });

    // ---- Smooth scroll for internal anchor links ----
    $('#site-nav a:not(.no-scroll)').on('click', function(e) {
        var href = $(this).attr('href');
        if (href && href.charAt(0) === '#') {
            e.preventDefault();
            var target = $(href);
            if (target.length) {
                var navHeight = $('#site-nav').outerHeight() || 50;
                var scrollTo = target.offset().top - navHeight - 10;
                $('html, body').animate({ scrollTop: scrollTo }, 380);
            }
            // Close mobile menu if open
            $('#nav-links').removeClass('is-open');
        }
    });

    // ---- Mobile nav toggle ----
    $('#mobile-nav-toggle').on('click', function() {
        $('#nav-links').toggleClass('is-open');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#site-nav').length) {
            $('#nav-links').removeClass('is-open');
        }
    });

    // ---- News: show / hide older items ----
    var $olderNews = $('.news-older');
    var $newsToggle = $('#news-toggle');

    if ($olderNews.length === 0) {
        $newsToggle.hide();
    }

    $newsToggle.on('click', function() {
        var isShowing = $olderNews.first().is(':visible');
        if (isShowing) {
            $olderNews.slideUp(200);
            $(this).text('Show older news');
        } else {
            $olderNews.slideDown(200);
            $(this).text('Hide older news');
        }
    });

    // ---- Dark / light mode toggle ----
    var $html = $('html');
    var $icon = $('#theme-icon');

    function applyThemeIcon() {
        if ($html.hasClass('dark')) {
            $icon.removeClass('fa-moon-o').addClass('fa-sun-o');
        } else {
            $icon.removeClass('fa-sun-o').addClass('fa-moon-o');
        }
    }

    // Apply correct icon on load (theme class already set by inline script in <head>)
    applyThemeIcon();

    $('#theme-toggle').on('click', function() {
        $html.toggleClass('dark');
        var isDark = $html.hasClass('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        applyThemeIcon();
    });

})(jQuery);
