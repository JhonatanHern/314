$(document).ready(function () {
    $("#send").click(function (event) {
        $.post('./assets/php/contact.php', {
                name: $('#author').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                message: $('#message').val(),
            },
            function (resp) {
                alert(resp)

            });
    });
});
