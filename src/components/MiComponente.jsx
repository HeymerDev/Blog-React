const MiComponente = () => {
  let receta = {
    nombre: "Pizza",
    ingredientes: ["queso", "jamon", "tomate"],
    colorias: 400,
  };

  return (
    <div>
      <h2>{receta.nombre}</h2>
      <h3>ingredientes:</h3>
      <ul>
        {receta.ingredientes.map((ingrediente, index) => {
          return <li key={index}>{ingrediente}</li>;
        })}
      </ul>
      <p>{`Calorias: ${receta.colorias}`}</p>
    </div>
  );
};

export default MiComponente;
