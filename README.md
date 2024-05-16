## Pasos de desarrollo
1. Crear Angular app
    1. Crear folder del proyecto
    2. Installar @angular/cli y verificar con comando ng v
    3. Crear app como frontend
2. Añadir Header
    1. generar component con "cd frontend      ng g c components/partials/header"
    2. add hmtl
    3. add css
3. Lista de comidas
    1. Crear el modelo de comidas
    2. crear el data.ts
        1. a;adir comidas de prueba
    3. a;adir imagenes 
    4. Crear el service de comidas      ng g s service/comida
    5. Crear el Home component
        1. a;adir ts
        2. a;adir html
        3. a;adir css
4. tags bar
    1. crear un tag model
    2. a;adir los tags a data.ts
    3. comida service
        1. a;adir los metodos getAll para los tags
        2. a;adir los metodos tags getAll para las comidas
    4. a;adir la ruta de los tags
    5. mostar el resultado del tag en el homeComponent
    6. generar el componente para los tags
        1. agregarla al homeComponent
        2. agregar ts
        3. agregar html
        4. agregar css
5. pagina de comidas
    1. agregar el metodo en comidaService
    2. Generar el componente pagina-comida
        1. agregar ruta
        2. agregar ts
        3. agregar html
        4. agregar css
6. pagina del carrito
    1. crear el modelo del itemCarro
    2. crear el modelo de carro
    3. generar el carroService
    4. boton de agreagr al carro en la pagina de comida
    5. generar el componente paginaCarro
        1. agregar ruta
        2. agregar ts
        3. agregar html
        4. agregar css
7. No encontrado!
    1. Generar el componente
        1. agregar ts
        2. agregar html
        3. agregar css
    2. agregar las paginas
        1. pagina home
        2. pagina comida
        3. pagina carrito
8. Conectar el backend
    1. Crear el folder de Backend
    2. npm init
    3. npm install typescript
    4. crear el tsconfig.json
    5. crear el .gitignore
    6. copiar data.td al backend/src
    7. npm install express cors
    8. crear server.ts
        1. instalar @types
        2. agregar apis
    9. npm install nodemon ts-node --save-dev
    10. agregar urs.ts al frontend
    11. agregar el modulo httpClient
    12. actualizar comidaService
9. Login page
    1. Generar el component
        1. agregar las rutas
        2. agregar ts
        3. agregat html
            1. importar Reactive forms module
        4. agregar css
    2. agreagr el Login api
        1. usar Json
        2. agregar jsonwebtoken
        3. probar en postman
    3. Generar el UserService
        1. generar el user model
        2. agregar el user subject
        3. agregar el login method
            1. agregar el user a las urls
            2. generar la interfaz IUserLogin 
            3. Agregar ngx-toastr
                1. importar el module
                2. importar BowserAnmationsModule
                3. agregar Styles en el Angular.json
            4. agregar al header
        4. agregar el local storage methods
        5. agregar el logout method
            1. agregar al header
10. crear los componenetes para el login page'
    1. Input container
    2. Validacion de los inputs
    3. input text  
    4. default button
11. Conectar la API login a MongoDB atlas
    1. mover las Apis a los routers
    2. Crear la base de datos de mongo en atlas
    3. crear el archivo .env
    4. instalar:
        1. mongoose
        2. dotenv
        3. bcryptjs
        4. jsonwebtoken
        5. express-async-handler
    5. conectar a la Mongodb atlas
    6. usar mongoDb en lugar del data.ts 
12. Registar usuario
    1. agregar Register api
    1. agregar register service method
    1. agregar register link
    1. agregar register component
13. Loading
    1. agregar la imagen
    2. agregar el componente
    3. agregar el service
    4. agregar el interceptor
14. pagina verificacion de orden
    1. crear el modelo de order
    2. crear el componente de la pagina de verificacion
        1. agregar al router
    3. agregar el usuario a User service
    4. agregar el carrito a carrito service
    5. crear la lista de componenetes de los items de la orden 
    6. Agregar un mapa al chekout
        1. agregar leaflet npm package
            2. agregar @types/leaflet
            1. agregar css a angular.json
        2. agregar AddresLatLng a order model
        3. crear el map component
            1. agregarlo al checkou page
            2. agregar ts
                1. cambiar app-map selector a map
            3. agregar html
            4. agregar css
        4. agregar auth guard
