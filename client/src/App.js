import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Products from "./routes/products/products.component";

import Login from "./routes/login/login.component";
import Register from "./routes/register/register.component";
import { GlobalContainer } from "./App.styles";

function App() {
  return (
    <>
      <Navigation />
      <GlobalContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route path=":categoryParam" element={<Products />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </GlobalContainer>
    </>
  );
}

export default App;
