import React, { useContext } from "react";
import { todos } from "./contexto";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./detalles.css";
function Detalles() {
  const { total, productos, dispath, settotal } = useContext(todos);

  return (
    <div style={{ marginTop: "30px", height: "100%" }}>
      {console.log(productos, "hola")}
      <img
        src="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg"
        alt=""
      />
      <h1 style={{ color: "greenyellow", marginTop: "20px" }}>Ver Detalles</h1>
      <div className="table-responsive" style={{ marginTop: "20px" }}>
        <table className="table table-striped-columns ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Destino</th>
             

              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Disminuir</th>
              <th scope="col">Aumentar</th>
              <th scope="col">Eliminar</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {console.log(productos, "aqui")}
            {productos.map((val, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.title}</td>
               
                <td>${val.precio}</td>
                <td>{val.cantidad}</td>
                <td>
                  <i
                    class="fa-solid fa-down-long"
                    onClick={() => {
                      dispath({
                        type: "disminuir",
                        payload: {
                          title: val.title,
                          description: val.description,
                          precio: val.price,
                          cantidad: val.cantidad,
                        },
                      });
                      if (val.cantidad > 0) {
                        console.log(val.cantidad, "qqqqqqqqqqqqqqqqq");
                        settotal(total - val.precio);
                      }
                      if (val.cantidad === 0) {
                        dispath({
                          type: "eliminar",
                          payload: {
                            title: val.title,
                            description: val.description,
                            precio: val.price,
                            cantidad: val.cantidad,
                          },
                        });
                        console.log("soy cero no jodas");
                      }
                    }}
                  ></i>
                </td>
                <td>
                  <i
                    class="fa-solid fa-up-long"
                    onClick={() => {
                      settotal(total + val.precio);
                      dispath({
                        type: "repetido",
                        payload: {
                          title: val.title,
                          description: val.description,
                          precio: val.price,
                        },
                      });
                    }}
                  ></i>
                </td>
                <td>
                  <i
                    class="fa-solid fa-trash"
                    
                    onClick={() =>{
                      settotal(total-val.precio * val.cantidad)
                      dispath({
                        type: "eliminar",
                        payload: { title: val.title },
                      })}
                    }
                  ></i>
                </td>
                <td>$ {val.precio * val.cantidad}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={5}>TOTAL</td>
              <td colSpan={2}>
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (total === 0) {
                      toast.error("Error ingrese destinos !", {
                        position: toast.POSITION.TOP_RIGHT,
                      });
                    } else {
                      toast.success("Factura Pagada exitosamente!", {
                        position: toast.POSITION.TOP_RIGHT,
                      });
                    }
                    settotal(0);

                    dispath({ type: "reiniciar" });
                  }}
                >
                  PAGAR
                </button>
                <ToastContainer />
              </td>

              <td>$ {total}</td>
            </tr>
          </tbody>
        </table>
        <p>hikas</p>
      </div>
    </div>
  );
}

export default Detalles;
