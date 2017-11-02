$(function(){

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/es_LA/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  var App = {};

  // Facebook base script
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '10150127511695333',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
    FB.AppEvents.logPageView();

    App.loginStatus(FB);
  };

  App.loginStatus = function(FB) {

    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log("conenected");
        // the user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token
        // and signed request each expire
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
      } else if (response.status === 'not_authorized') {
        console.log("Not autohrized");
        // the user is logged in to Facebook,
        // but has not authenticated your app
      } else {
        // the user isn't logged in to Facebook.
      }
    });
  };


  // /* make the API call */
  // FB.api(
  //     "/{page-id}",
  //     function (response) {
  //       if (response && !response.error) {
  //         /* handle the result */
  //       }
  //     }
  // );

});
