

const API = 'http://palmira.rts.com.co:4010/getTrama';


fetch(API)
   .then(res => res.json())
   .then(data => {
      //funcion para convertir de hexadecimal a decimal
      function convertirHexADec(hexadecimal) {
         if (hexadecimal.constructor != String) {
            return null
         }

         hexadecimal = hexadecimal.replace(/[^0-9A-Fa-f]/gi, '');

         return Number.parseInt(hexadecimal, 16);
      }


      //Toda la trama
      //console.log(data.trama)
      let mod = document.getElementById("modal")
      mod.innerHTML = `<font size="1">${data.trama}</font>`

      //ok
      //console.log(data.trama.slice(0,2))

      //codigo del equipo
      let inpu1 = document.getElementById("exampleFormControlInput1")
      inpu1.innerHTML = `<label for="exampleFormControlInput1" class="form-label">Codigo del equipo</label>
    <input type="codigo"  readOnly  class="form-control" readOnly value="${data.trama.slice(2, 6)}">`




      //clave de tiempo
      let inpu2 = document.getElementById("exampleFormControlInput2")
      inpu2.innerHTML = `<label for="exampleFormControlInput2" class="form-label">Clave de Tiempo</label>
    <input type="clave"  readOnly  class="form-control" readOnly value="${data.trama.slice(6, 17)}">`

      //hora
      //SE CONVIRTIO LA HORA A DECIMAL
      let inpu3 = document.getElementById("exampleFormControlInput3")
      inpu3.innerHTML = `<label for="exampleFormControlInput3" class="form-label">Hora</label>
    <input type="hora"  readOnly  class="form-control" readOnly value="${(convertirHexADec(data.trama.slice(17, 19)))}">`




      //minutos
      //SE CONVIRTIO MINUTOS A DECIMAL
      let minutos = document.getElementById("exampleFormControlInput4")
      minutos.innerHTML = `<label for="exampleFormControlInput4" class="form-label">Minutos</label>
     <input type="minutos"  readOnly  class="form-control" readOnly value="${(convertirHexADec(data.trama.slice(19, 21)))}">`


      //console.log(data.trama.slice(19, 21))


      //segundos
      //SE CONVIRTIO SEGUNDOS A DECIMAL

      let inpu5 = document.getElementById("exampleFormControlInput5")
      inpu5.innerHTML = `<label for="exampleFormControlInput5" class="form-label">Segundos</label>
     <input type="segundos"  readOnly  class="form-control" readOnly value="${(convertirHexADec(data.trama.slice(21, 23)))}">`
      //console.log(data.trama.slice(21, 23))


      //año
      // //SE CONVIRTIO EL AÑO A DECIMAL
      let inpu6 = document.getElementById("exampleFormControlInput6")
      inpu6.innerHTML = `<label for="exampleFormControlInput6" class="form-label">Año</label>
     <input type="año"  readOnly  class="form-control" readOnly value="${(convertirHexADec(data.trama.slice(23, 25)))}">`
      //console.log(data.trama.slice(23, 25))

      //mes
      //SE CONVIRTIO EL MES A DECIMAL
      let inpu7 = document.getElementById("exampleFormControlInput7")
      inpu7.innerHTML = `<label for="exampleFormControlInput7" class="form-label">Mes</label>
     <input type="mes"  readOnly  class="form-control" readOnly value="${(convertirHexADec(data.trama.slice(25, 27)))}">`
      //console.log(data.trama.slice(25, 27))

      //dia
      //SE CONVIRTIO EL DIA A DECIMAL
      let inpu8 = document.getElementById("exampleFormControlInput8")
      inpu8.innerHTML = `<label for="exampleFormControlInput8" class="form-label">Dia</label>
     <input type="dia"  readOnly  class="form-control" readOnly value="${(convertirHexADec(data.trama.slice(27, 29)))}">`
      //console.log(data.trama.slice(27, 29))

      //contador de cruce
      let inpu9 = document.getElementById("exampleFormControlInput9")
      inpu9.innerHTML = `<label for="exampleFormControlInput9" class="form-label"> Contador de cruce </label>
     <input type="contador"  readOnly  class="form-control" readOnly value="${data.trama.slice(29, 31)}">`
     // console.log(data.trama.slice(29, 31))

      //B1
      //console.log(data.trama.slice(31,32))

      //B2
      //console.log(data.trama.slice(32,33))

      //B4
      //console.log(data.trama.slice(33,35))


   })

   .catch(err => console.log(err))

