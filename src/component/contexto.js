import { createContext, useState, useReducer } from "react";
import axios from "axios";
export const todos = createContext();

export const Cargatodo = ({ children }) => {
  const initial = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case "unico":
        console.log("soy el unico");
        return [
          ...state,
          {
            title: action.payload.title,
            description: action.payload.description,
            precio: action.payload.precio,
            cantidad: 1,
          },
        ];
      case "repetido":
        console.log(state);
        return state.map((valor) =>
          action.payload.title === valor.title
            ? { ...valor, cantidad: valor.cantidad + 1 }
            : valor
        );
      case "disminuir":
        if (action.payload.cantidad === 0) {
          return state;
        }
        return state.map((valor) =>
          action.payload.title === valor.title
            ? { ...valor, cantidad: valor.cantidad - 1 }
            : valor
        );
      case "reiniciar":
        console.log("reini");
        return initial;
      
      case "eliminar":
      const rescatados =  state.filter(val=>val.title !== action.payload.title)
      return rescatados
      default:
        return state;
    }
  };

  const [productos, dispath] = useReducer(reducer, initial);

  const [datos, setdatos] = useState([]);

  const [total, settotal] = useState(0);
  const Carga = async () => {
    const recibido = await axios(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=30"
    );
    setdatos(recibido.data);
    return recibido;
  };
  return (
    <todos.Provider
      value={{
        Carga,
        datos,
        setdatos,

        total,
        settotal,

        productos,
        dispath,
      }}
    >
      {children}
    </todos.Provider>
  );
};
