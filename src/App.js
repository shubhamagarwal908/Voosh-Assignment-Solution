import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import BookDemo from "./BookDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
