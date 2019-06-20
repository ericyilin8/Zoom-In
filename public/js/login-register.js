var is_register = false;

function showAuthView(logged_in, email) {

  if (logged_in) {

    $('form').hide();

    $('#login').hide();

    $('#user-email').text(email);

    $('#logout').show();

  } else {

    $('form').show();

    $('#login').show();

    $('#user-email').hide();

    $('#logout').hide();



  }





}



function loginOrRegister(event) {

  event.preventDefault();

  //console.log($('#email').val());


  var email = $('#email').val().trim();

  var password = $('#password').val().trim();

  //var confirm_pass = $('#confirm').val().trim();




  // if (password !== confirm_pass) {

  //   return showPasswordConfirmationError();



  //console.log(is_register);
  if (is_register) {
    console.log('hi');
    var name = $('#name').val().trim();
    var zip = $('#zip').val().trim();
    var categoryid = $('#category').val().trim();

    var data = 
      {
        name: name,
        zip: zip,
        email: email,
        password: password,
        categoryid: categoryid
    };

    console.log(data);
    $.ajax({
      method: "POST",
      url: "api/CreateUser",
      data: data
    }).then(function (response) {
      //console.log(response);
      setSession(response.userid, response.name);
      alert("Successfully registered!");
      window.location.pathname = "/find.html";

    })

    /*auth.createUserWithEmailAndPassword(email, password)

      .then(function (data) {

        db.ref('users').child(data.user.uid).set({

          email: email,
          favorites: ''

        })

        window.location = 'index.html';
      })

      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);


      })*/

  } else { //sign in

    var data = {
      email: email,
      password: password

    }

    $.ajax({
      method: "POST",
      url: "api/SignIn",
      data: data
    }).then(function (response) {

      if (response) {
        setSession(response.userid, response.name);
        alert("Logged in!");
        window.location.pathname = "/find.html";
      }
      else {
        alert("User password combination not found!");
      }

    })

  }
}


function toggleRegisterState() {

  $('.toggle span').toggleClass('toggled');

  is_register = !is_register;
  //console.log(is_register);
  if (is_register) {

    $('form h3').text('Sign Up');

    $('form #confirm').show();

    $('form #name').show();

    $('#category').show();

    $('#zip').show();

  } else {

    $('form h3').text('Log In');

    $('form #confirm').hide();

    $('form #name').hide();

    $('#category').hide();

    $('#zip').hide();

  }





}


function logUserOut() {

  showAuthView(false, null);

}
function init() {

  //$('#submit').on('click', loginOrRegister);

  $('form #confirm').hide();

  $('form #name').hide();
  
  $('#category').hide();

  $('#zip').hide();

  $('#toggle-btn').on('click', toggleRegisterState);

  $('#logout').on('click', logUserOut);

  // checkAuthState();

}


function checkAuthState(user) {

  showAuthView(true, user.email);
  showAuthView(false, null);

}
// Start The App
function setSession(userid, name) {
  sessionStorage.setItem('userid', userid);
  sessionStorage.setItem('name', name);

}

init();