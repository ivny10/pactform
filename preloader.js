(function () {
    document.documentElement.classList.add('preloader-active');

    document.addEventListener('DOMContentLoaded', function () {
        var preloader = document.getElementById('site-preloader');
        if (!preloader) {
            document.documentElement.classList.remove('preloader-active');
            return;
        }

        // Total time the icon+wordmark animation needs before we start hiding
        var HOLD_MS = 1600;  // icon-in (450ms) + text-reveal (650ms) with slight overlap, plus a short hold
        var FADE_MS = 500;   // matches the CSS transition on .site-preloader

        setTimeout(function () {
            preloader.classList.add('is-hiding');
            document.documentElement.classList.remove('preloader-active');

            setTimeout(function () {
                preloader.classList.add('is-hidden');
            }, FADE_MS);
        }, HOLD_MS);
    });
})();
