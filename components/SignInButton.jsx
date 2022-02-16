import { auth, googleAuthProvider } from "../lib/firebase";

function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} width="30px" /> Sign in with Google
    </button>
  );
}
export default SignInButton;
