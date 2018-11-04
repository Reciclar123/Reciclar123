# Greenty (Ciudad verde)

Es un prototipo de app  que ayuda a las personas a identificar o clasificar los materiales reciclables guardando la estimación de peso y conversión a “gotas”, unidad de recompensa por el material entregado, también permitirá  tener un record de los materiales reciclados junto con los puntos recibidos. Esto para usuarios generadores de materiales reciclables quienes se registrarán como  “Yo Dono”.

Por otro lado los usuarios registrados como “Yo recojo” por medio de la app tendrán acceso a la información publicada por los donantes y pueden programar la recolección de los materiales y entregar las recompensas “gotas”.

Existe un tercer actor que son los patrocinadores quienes publicitan en la app y generan promociones para que los usuarios “Yo dono” rediman sus “gotas”.

Consume los servicios alojados en https://greenty.herokuapp.com, los wireframes del proyecto se encuentran en la carpeta DocumentosProyecto/Wireframes, el backend está en la carpeta server y el front  está en la carpeta client.

# manage service

[Documento](https://github.com/Reciclar123/Reciclar123/tree/master/DocumentosProyecto/Servicios.pdf)

# Instalacion #

El proyecto se dividio en front y server, cada parte tiene su propia aplicacion

 ## Server

Es un api-rest desarrollado en nodejs con el framework loopback en la version 3.19

  1.  estando en la raiz ejecutar

  ```
    $  npm install
  ```
  2.  correr aplicacion

  ```
    $  node .
  ```

  ## Client

  aplicacion desarrollada en ionic framework con la version  4.15

   1.  ir a la carpeta del client

   ```
     $  cd 'client/ReciclarFrontend
   ```
   2.  instalar dependencias  

   ```
     $  npm install
   ```

   3.  correr proyecto

   ```
     $  ionic serve
   ```
