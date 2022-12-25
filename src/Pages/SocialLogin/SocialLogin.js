import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.log(error));
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Button
        onClick={handleGoogleSignIn}
        variant="outline-success"
        className="w-100 fs-5 mt-3"
      >
        Login With Google <FaGoogle className="ms-2"></FaGoogle>
      </Button>
      <Button variant="outline-primary" className="w-100 fs-5 my-2">
        Login With FaceBook <FaFacebook className="ms-2"></FaFacebook>
      </Button>
      <Button
        onClick={handleGithubSignIn}
        variant="outline-danger"
        className="w-100 fs-5 "
      >
        Login With Github <FaGithub className="ms-2"></FaGithub>
      </Button>
    </div>
  );
};

export default SocialLogin;
