import Login from "./Login";

function App() {
  console.log(
    process.env.REACT_APP_CLIENT_ID,
    process.env.REACT_APP_CLIENT_SECRET
  );
  return <Login />;
}

export default App;
