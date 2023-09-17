import "./App.css";
import Articulos from "./component/articulos";
import { Cargatodo } from "./component/contexto";
import Navbar from "./component/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalles from "./component/detalles";
function App() {
  return (
    <BrowserRouter>
      <Cargatodo>
        <div
          className="App"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignContent: "center",
            gap: "10px",
          }}
        >
          <div
            classname="titulo"
            style={{
              width: "100%",
              height: "100px",
              textAlign: "center",
              paddingTop: "20px",
              color: "white",
            }}
          >
            <Navbar></Navbar>
          </div>
         
          <Routes>
            <Route path="/" element={ <Articulos></Articulos>} />
            <Route path="/detalles" element={<Detalles></Detalles>} />
          </Routes>
        </div>
      </Cargatodo>
    </BrowserRouter>
  );
}

export default App;
