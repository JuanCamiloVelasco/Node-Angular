

export const prueba_comidas: any[] = [{
    id:'1',
    nombre: 'Pizza Pepperoni',
    precio: 10,
    tiempoComida: '10-20',
    favorito: false,
    origen: ['italia'],
    estrellas: 4.5,
    urlImagen: 'assets/food-1.jpg',
    tags: ['ComidaRapida', 'Pizza', 'Almuerzo'],
  },
  {
    id:'2',
    nombre: 'Albondigas',
    precio: 20,
    tiempoComida: '20-30',
    favorito: true,
    origen: ['persia', 'este medio', 'china'],
    estrellas: 4.7,
    urlImagen: 'assets/food-2.jpg',
    tags: ['ComidaLenta', 'Almuerzo'],
  },
  {
    id:'3',
    nombre: 'Hamburguesa',
    precio: 5,
    tiempoComida: '10-15',
    favorito: false,
    origen: ['alemania', 'us'],
    estrellas: 3.5,
    urlImagen: 'assets/food-3.jpg',
    tags: ['ComidaRapida', 'Hamburguesa'],
  },
  {
    id:'4',
    nombre: 'Papas Fritas',
    precio: 2,
    tiempoComida: '15-20',
    favorito: true,
    origen: ['belgica', 'francia'],
    estrellas: 3.3,
    urlImagen: 'assets/food-4.jpg',
    tags: ['ComidaRapida', 'Frito'],
  },
  {
    id:'5',
    nombre: 'Sopa de pollo',
    precio: 11,
    tiempoComida: '40-50',
    favorito: false,
    origen: ['india', 'asia'],
    estrellas: 3.0,
    urlImagen: 'assets/food-5.jpg',
    tags: ['ComidaLenta', 'sopa'],
  },
  {
    id:'6',
    nombre: 'Pizza de Vegetales',
    precio: 9,
    tiempoComida: '40-50',
    favorito: false,
    origen: ['italia'],
    estrellas: 4.0,
    urlImagen: 'assets/food-6.jpg',
    tags: ['ComidaRapida', 'Pizza', 'Almuerzo'],
  },
]

export const sample_tags:any[] = [
  { nombre: 'Todo', count: 6 },
  { nombre: 'ComidaRapida', count: 4 },
  { nombre: 'Pizza', count: 2 },
  { nombre: 'Almuerzo', count: 3 },
  { nombre: 'ComidaLenta', count: 2 },
  { nombre: 'Hamburguesa', count: 1 },
  { nombre: 'Frito', count: 1 },
  { nombre: 'sopa', count: 1 },
];

export const sample_users: any[] = [
  {
    nombre: 'John Doe',
    email: 'john@gmail.com',
    password: '12345',
    direccion: 'Toronto On',
    isAdmin: true,
  },
  {
    nombre: 'Jane Doe',
    email: 'Jane@gmail.com',
    password: '12345',
    direccion: 'Shanghai',
    isAdmin: false,
  },
];