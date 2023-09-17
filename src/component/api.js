export const Carga = async () => {
    const recibido = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
    const datos = await recibido.json();
    
  
    return datos;
  };

