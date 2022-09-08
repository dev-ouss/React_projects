const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=12e8bc0583244950bceb71ae01f30674&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login = () => {
  return (
    <div className="container">
      <a className="btn" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  );
};

export default Login;
