import { useContext } from "react";
import SignOutButton from "../components/SignOutButton";
import UsernameForm from "../components/UsernameForm";
import SignInButton from "../components/SignInButton";
import { UserContext } from "../lib/context";

export default function Enter(props) {
  const { user, username } = useContext(UserContext);

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}
