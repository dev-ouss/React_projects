import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <section className="container">
      <BrowserRouter>
        <Header />
        <SearchBar />
        <Filter />
        <Pages />
      </BrowserRouter>
    </section>
  );
}

export default App;
