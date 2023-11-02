$( document ).ready(function() {
    console.log( "ready!" );
    $('#go').click(function(){
        var userName = $("#fname").val()+" "+$("#lname").val();
        $('#jumbotron').html(userName);
        return false;
    });
});
