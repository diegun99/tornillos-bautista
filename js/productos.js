const imagenesHerramienta = [
    {
        src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
        alt: 'Gatitos, no se puede decir más',
        titulo: 'Imgen1',
        precio: "HEX. M1/2  30mm",
        descripcion: "",
        
    },
    {
        src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
        alt: 'Gatitos, no se puede decir más',
        titulo: 'COPA STANLEY',
        precio: "HEX. M1/2  30mm",
        descripcion: "",
        
    }
];

const imagenesTornilleria = [
    {
        src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
        alt: 'Gatitos, no se puede decir más',
        titulo: 'tornillerias ',
        precio: "HEX. M1/2  30mm",
        descripcion: "",
        
    },
    {
        src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
        alt: 'Gatitos, no se puede decir más',
        titulo: 'COPA STANLEY',
        precio: "HEX. M1/2  30mm",
        descripcion: "",
        
    }
];

const imagenesOtro = [
    {
        src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
        alt: 'Gatitos, no se puede decir más',
        titulo: 'Otros',
        precio: "HEX. M1/2  30mm",
        descripcion: "",

    },
    {
        src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
        alt: 'Gatitos, no se puede decir más',
        titulo: 'COPA STANLEY',
        precio: "HEX. M1/2  30mm",
        descripcion: "",
    }
];


function mostrarCatalogo(imagenes,id) {
    var j = 0;
    var content = "";
    for (var i in imagenes) {
      if (i % 3 === 0) {
        $(`#${id}`).append(`<div id="row${i}" class="row"></div>`);
        j = i;
      }
      $("#row" + j).append(`
      <div class="col-md-4">
      <section class="caja-catalogo">
      <img
        src="${imagenes[i].src}"
        width=60% alt="${imagenes[i].alt}">
      <hr width="100%" size="3" noshade="noshade">
      <h2> ${imagenes[i].titulo}</h2>
      <p>HEX. M1/2  30mm</p>
      <button class="boton-catalogo">Ver más</button>
    </section>
    </div>`);
    }

  }
  
  $(document).ready(function() {
    mostrarCatalogo(imagenesOtro,"otro");
  });

$(document).ready(function() {
    mostrarCatalogo(imagenesTornilleria,"tornilleria");

  });

  $(document).ready(function() {
    mostrarCatalogo(imagenesHerramienta,"herramienta");

  });
  
