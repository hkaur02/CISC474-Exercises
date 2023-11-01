$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).on( "click", '#go', function(e) {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    e.preventDefault();
    const userName = fname.concat(' ', lname);
    document.querySelector('#jumbotron').append(userName);
    return false;
} );
