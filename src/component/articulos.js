import React, { Fragment, useContext, useEffect } from "react";
import { todos } from "./contexto";
import "./articulos.css";
function Articulos() {
  const { Carga, datos, total, settotal,  dispath ,productos} =
    useContext(todos);

  useEffect(() => {
    Carga();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <img
        src="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg"
        alt=""
        style={{ marginTop: "20px", width: "1700px", height: "500px" }}
      ></img>

      <div class="titulo">
        <h2>Selecciona tu Destino</h2>
      </div>

      {datos.map((val, index) => (
        <div className="card" key={val.id}>
          <img
            src={val.images[1]}
            className="card-img-top"
            alt="..."
            style={{ alignSelf: "center" }}
          />
          <div className="card-body">
            <h5 className="card-title">{val.title}</h5>
            <p className="card-text">{val.description}</p>
            <p>Precio: ${val.price}</p>
          </div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
            

              

              settotal(total + val.price);

             
              const repe = productos.filter((valu) => valu.title === val.title);
              console.log(repe.length);
              if (repe.length >= 1) {
                console.log("elemento repetido");
                dispath({type:"repetido",payload:{title: val.title,
                  description: val.description,
                  precio: val.price,}})
              } else {
                console.log("unico");
                dispath({type:"unico",payload:{title: val.title,
                  description: val.description,
                  precio: val.price,cantidad:1}})
               
                
              }
            }}
          >
            Seleccionar
          </button>
        </div>
      ))}
    </Fragment>
  );
}

export default Articulos;
