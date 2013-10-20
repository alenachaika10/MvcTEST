console.log('asp.net is not normal');

var scheduleGetter = {

    authKey: 'who11are06you_10102013_kgnc62ldn8',

    getFacultiesList: function () {
        $('<iframe>', {
            src: 'http://services.ksue.edu.ua:8081/schedule/xmlmetadata?q=faculties&auth=who11are06you_10102013_kgnc62ldn8',
            id: 'faculties-list',
            class: 'hide'
        }).appendTo('body');

        c
    }


};

scheduleGetter.getFacultiesList();