const imagenesHerramienta = [
  {
    src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
    alt: 'Gatitos, no se puede decir más',
    titulo: 'herramienta ',
    precio: "30.000",
    descripcion: "descripcion breve del producto",
    
},
{
  src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
  alt: 'Gatitos, no se puede decir más',
  titulo: 'tornillerias ',
  precio: "30.000",
  descripcion: "descripcion breve del producto",
  
}
];

const imagenesTornilleria = [
    {
        src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
        alt: 'Gatitos, no se puede decir más',
        titulo: 'tornillerias ',
        precio: "30.000",
        descripcion: "descripcion breve del producto",
        
    },
    {
      src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
      alt: 'Gatitos, no se puede decir más',
      titulo: 'tornillerias ',
      precio: "30.000",
      descripcion: "descripcion breve del producto",
      
  }
];

const imagenesOtro = [
  {
    src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
    alt: 'imagej',
    titulo: 'otro ',
    precio: "30.000",
    descripcion: "descripcion breve del producto",
    
},
{
  src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
  alt: 'imagej',
  titulo: 'otro ',
  precio: "30.000",
  descripcion: "descripcion breve del producto",
  
},
{
  src: "https://cdn1.totalcode.net/easy/product-zoom/es/tornillo-lamina-8-mm-x-3~4%22-avellanado-phillips-zincado-x12und-3.webp",
  alt: 'imagej',
  titulo: 'otro ',
  precio: "30.000",
  descripcion: "descripcion breve del producto",
  
},


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
      <p>${imagenes[i].descripcion}</p>
      <h2 class="boton-catalogo">$ ${imagenes[i].precio}</h2>
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
  
