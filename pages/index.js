import { useAuth } from "@/utils/auth";

export default function Index() {
  const auth = useAuth();
  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <p>
        Hey there {auth.user.name} you are logged in via {auth.user.provider}
      </p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
  );
}
