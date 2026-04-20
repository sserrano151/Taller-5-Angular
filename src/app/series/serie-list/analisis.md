# Análisis - Preguntas de Razonamiento

## 1. Asincronismo

**¿Por qué usamos un Observable y un .subscribe() en lugar de simplemente asignar el resultado de http.get() a nuestra variable?**

Porque la petición HTTP es una operación asíncrona: cuando llamamos http.get(), los datos no están disponibles de inmediato ya que deben viajar por la red. Si intentáramos asignar directamente el resultado a una variable (por ejemplo, this.series = this.http.get(...)), estaríamos asignando un Observable, no los datos en sí. El Observable es como una "promesa de datos futuros". Al usar .subscribe(), le decimos a Angular: "cuando los datos lleguen, ejecuta esta función". Así, la aplicación no se bloquea esperando la respuesta y la interfaz sigue funcionando mientras los datos se cargan en segundo plano.

## 2. Modularización

**¿Qué sucede si olvidamos declarar nuestro SerieListComponent en el arreglo de declarations del módulo, pero intentamos usar su selector en el app.component.html?**

Angular lanzará un error en tiempo de compilación indicando que el selector 'app-serie-list' no es un elemento conocido. Esto ocurre porque Angular necesita que cada componente esté registrado (declarado) en un módulo para poder reconocer su selector. Sin esa declaración, Angular no sabe que ese componente existe, por lo que no puede renderizarlo ni interpretar su etiqueta HTML. En nuestro caso, al usar componentes standalone con imports, el principio es el mismo: si no importamos el componente en el arreglo de imports del componente padre, Angular no lo reconocerá.