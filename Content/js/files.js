var Files = {

    checkboxHandler: function () {
        $('#main').click(function () {
            $('input.element').prop('checked', $('#main').prop('checked'));
        });

        $('input.element').click(function (e) {
            if ($('#main').prop('checked') && !$(e.target).prop('checked')) {
                $('#main').prop('checked', false);
            }
        });
    },

    uploadBox: function () {
        $('body').append('<div id="upload"></div>');
    },

    downloadBox: function () {
        $('body').append('<div id="upload"></div>');
    },

    init: function () {
        window.onload = function () {
            Files.checkboxHandler();
        };
    }
};


Files.init();
