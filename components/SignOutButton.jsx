import { auth, googleAuthProvider } from "../lib/firebase";

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

export default SignOutButton;
