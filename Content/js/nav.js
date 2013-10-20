var Navigation = {

    showSettings: function () {
        $('button.settings').click(function () {
            $('#settingsPopup').fadeIn();
        });
    },

    photoAction: function () {
        $('.sh-image').click(function () {
            window.location.href = "/account/settings";
        });
    },

    init: function () {
        window.onload = function () {
            Navigation.photoAction();
        };
    }
};

Navigation.init();