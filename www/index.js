$(document).ready(function() {
    console.log( "ready!" );
});

//$.get( "/myfirst.html",).done(function( data ) {
   //alert( "Data Loaded: " + data );});

   


    $('#loginform').submit(function(e){
        e.preventDefault();
        console.log("submit working");
        console.log($("#email").val();

        var formData = {
            email: $("#email"),
            psw: $("#psw")
        };
        alert("test"+$("#psw").val());


        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "/test1",
            dataType : 'json',
            data: JSON.stringify(formData)
        })
    });
