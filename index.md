# Practica 5: Objetos clases e interfaces

## Ejercicio 1

[Link al codigo en github](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-lucianosekulic/tree/master/src/ejercicio-1)

En este ejercicio nos piden que a partir del ejercicio 9 realizado en la practica 3, creemos lo siguiente:

* una clase ***pokedex*** donde almacenamos la información de los distintos pokemons con los siguientes aspectos
  * Nombre
  * peso
  * altura
  * tipo
  * estadisticas basicas: ataque, defensa, velocidad y HP
 * una clase ***combat*** donde se simule el combate entre dos pokemons

En este caso, he decidido crear tres clases llamadas ***combat, pokedex y pokemon***. En la clase combat incorporamos código reciclado del ejercicio 9 de la practica 3 para saber la efectividad del ataque de cada pokemon dependiendo de su tipo llamada ***damagePokemon*** y una funcion ***start*** donde le damos los parametros necesarios para dar comienzo al combate entre los dos pokemons.

En la clase pokedex, simplemente ponemos un setpokemon donde incluimos un pokemon nuevo a nuestro array que representa la pokedex y una funcion showPokemons donde imprimimos la pokedex en formato tabla.

En la clase pokemon llevamos a cabo todo lo pertinente a las estadisticas, es decir, ahí es donde inicializamos los datos como el ataque, defensa, hp, etc. Del pokemon para posteriormente utilizarlo enm otras clases. 

## Ejercicio 2

[link al codigo en github](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-lucianosekulic/tree/master/src/ejercicio-2)

Para este ejercicio 2, se nos pide crear un gestor bibliografico para almacenar, consultar y exportar articulos, filtrando su contenido de una base de datos. Para ello he decidido crear dos clases con los siguientes metodos y atributos:

* clase articulo
  * titulo
  * autor
  * mail
  * keywords
  * resumen del articulo
  * fecha de publicación
  * editorial donde se publicó
  * numero de veces que se ha citado en otros trabajos
* clase gestor bibliografico
  * almacenaremos la informacion de los articulos
  * mostrar por consola en formato de tabla
  * permitir busquedas mediante filtrado por fecha, editorial y autor
  * permitir la exportacion a formato APA

Para la clase ***articulo*** solamente creamos los setters y los getters de los atributos que se nos pedía en el guíon para ser usados más adelante. Además hacemos una funcion que exporta a formato APA.

Para la clase ***gestorBibliografico***, creamos sus respectivos setters, getters y una funcion llamada ***showArticlesOnTable*** para mostrar por consola en forma de tabla los articulos. Luego creamos una funcion ***searchArticles*** donde mediante 3 bucles for anidados donde el primero va de cero hasta la longitud de keyword. el segundo desde 0 hasta la longitus de articles y el tercero desde 0 hasta la longitud de filter, lograremos ver si el filtro que le pasamos es igual a la keyword o diferenciamos si el filtrado es por autor, por fecha o editorial.


## Ejercicio 3

[link al codigo en github](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-lucianosekulic/tree/master/src/ejercicio-3)

Para este ejercicio se nos pide crear una serie de clases que nos permita representar diferentes medios de transporte que pueden concurrir en la calle. En este caso he decidido crear una interfaz movable comun a todos los vehiculos con los atributos type y speed, ya que consideré que no se necesitaba nada más para identificar a los "vehiculos" en una carretera. 

Luego una clase ***street*** donde vamos a tener la localización de la calle y los distintos tipos de vehiculos que transitan por la misma. Con la función ***speed*** ordenamos mediante un bucle for y un while los vehiculos con su respectiva velocidad a la que transitan.

Una clase ***vehicle*** que es la clase padre de los demas medios de transporte que circulan por la carretera donde tenemos un constructor con los atributos speed y type.

## Conclusión

Esta practica 5 me ha servido para indagar y practicas más con typescript haciendo uso de objetos y clases. Aunque hay ocasiones en la cual se dificulta el hecho de entender y razonar ciertos errores que se puedan dar al llevar a cabo la practica, es gratificante aprender un poco más sobre este lenguaje.

