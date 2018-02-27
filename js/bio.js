(
    function () {
    var bio = $('#bio');
    var bioCounter = $('#bio-count');
    bio.on('focus', updateCounter);
    bio.on('keyup', updateCounter);
    bio.on('blur', function () {
        if(!bio.val()){
            bioCounter.addClass('hide');
        }
    });

    function updateCounter(e) {
        var count = 140 - bio.val().length;
        var status = '';
        if (count < 0) {
            status = 'error';

        }
        bioCounter.removeClass('error hide');
        bioCounter.addClass(status);
        bioCounter.text(count+'字');
    }

}());