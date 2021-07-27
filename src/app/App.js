import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


function App() {

  const responseGoogle = (response) => {
    alert("Logueado con Google");
  };

  const responseFacebook = (response) => {
    alert("Logueado con Facebook");
  };
  
  return (
    <div className="App">
      <GoogleLogin
        clientId="869046792808-8joqd94e499a1rtsuvj6d6rflo2kq32d.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <FacebookLogin
        appId="4686835494664497"
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    </div>
  );
};

export default App;



