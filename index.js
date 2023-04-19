const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// PUNTO A

const impar = pizzas.filter( (sabores) => {
  return sabores.id % 2 == 1;
} )

impar.forEach( (sabores)=> {
  console.log(`El producto ${sabores.nombre} tiene id impar`);
} )

// PUNTO B

const preciosMenorA = (precio) => {
    return pizzas.some( (sabores)=> {
        return sabores.precio > precio;
    }) 
        ? console.log(`Hay pizzas que valen menos de $ ${precio}`) 
      : console.log(`No hay pizzas que valen menos de $ ${precio}`);
};
preciosMenorA(600);

// PUNTO C

const pizzasPrecios = pizzas.filter ( (sabor) => {
  return sabor.nombre && sabor.precio;
})

pizzasPrecios.forEach ( (sabor) => {
    console.log(`La ${sabor.nombre} cuesta $${sabor.precio}`);
} )

// PUNTO D

const ingredientes = pizzas.map(pizza => pizza.ingredientes).flat()

pizzas.map(pizza => {
  console.log(`Los ingredientes de la ${pizza.nombre} son: ${pizza.ingredientes.join(', ')}`);
  return pizza.ingredientes;
}).flat();