$(document).ready(function() {
    $("#Submit").click(function () {

    
        var login__name = $("#login__name").val();
        var login__password = $("#login__password").val();
        var login__confirmpassword = $("#login__confirmpassword").val();

        console.log(login__name);
        console.log(login__password);
        console.log(login__confirmpassword);
        localStorage.setItem("login__name", login__name);
        localStorage.setItem("login__password", login__password);
        localStorage.setItem("login__confirmpassword", login__confirmpassword);
        if (localStorage.getItem("login__password") == localStorage.getItem("login__confirmpassword")) {

            alert('REGISTERED');
            var x = document.getElementById('changer');
            x.style.display = 'block';
            var y = document.getElementById('forms');
            y.style.display = 'none';
        }
        else {
            alert("NO LUCK");
        }
    });

    $("#log_submit").click(function (){
        var dataName = localStorage.getItem('login__name');
        var datapass = localStorage.getItem('login__password');
        console.log(dataName);
        console.log(datapass);
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username);
        console.log(password);
        if (username == dataName && password == datapass) {
            alert('You are logged in.');
            var x = document.getElementById('changer1');
            x.style.display = 'block';
            var y = document.getElementById('forms');
            y.style.display = 'none';

        } else {
            alert('ERROR.');
        }
    });
});

