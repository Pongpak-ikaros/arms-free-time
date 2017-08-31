$(document).ready(function(){
    $('body').on('click','#modal',function(e){
        var fastcode = $('#fastcode').val().length;
        if(fastcode > 0){
            $('#loginModal').modal('show');
        }
    });

    $('body').on('keydown',function(e){
        var username = $("#fastcode").val();
        if(isNaN(username)){
            $("#fastcode").val('');
        }
    });
});