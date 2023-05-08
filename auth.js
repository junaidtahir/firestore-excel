
function initApp() {
  var userTables = [];
  // Listening for auth state changes.
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      var today = new Date();


      // if (email != "alpburak@hotmail.com") {
      //   firebase.auth().signOut();
      // }
    }

    else {
      $("#spinner").css("display", "none");
      console.log("User is signed out");
      // User is signed out.
      window.location.replace("login.html");
    }
  });
}
$(document).ready(function () {
  // $(".main-container *").attr("disabled", true).off('click');
  initApp();
});