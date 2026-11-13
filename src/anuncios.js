/* ==========================================================
   anuncios.js — Anuncios para "Comal de casa"
   Se agrega SIN modificar el código original de index.html.
   Solo necesitas UNA línea antes de </body>, después de temas.js:

       <script src="src/anuncios.js"></script>

   Qué hace:
   - Inserta 5 anuncios repartidos por la página.
   - Cada uno se puede cerrar con la ✕.
   - Al cerrar el último, en ese mismo lugar aparece un anuncio
     con la imagen que tú elijas (IMAGEN_FINAL).
   ========================================================== */

(function () {
  "use strict";

  /* ============================================================
     👉 CAMBIA AQUÍ TU IMAGEN FINAL
     Ruta de un archivo de tu proyecto (ej. "Img/mi-anuncio.jpg")
     o una URL completa (https://...).
     ============================================================ */
  const IMAGEN_FINAL = "./Img/AnuncioFinal.png";
  const TEXTO_ALT_FINAL = "Anuncio de Comal de casa";

  /* Fotos de Wikimedia Commons (verifica la licencia/atribución
     de cada una si vas a publicar la página). Si alguna no carga,
     se usa automáticamente la foto de tu propia carpeta Img/carta. */
  const commons = (archivo) =>
    "https://commons.wikimedia.org/wiki/Special:FilePath/" +
    encodeURIComponent(archivo) + "?width=1200";

  /* ---------- Anuncios ---------- */
  const ANUNCIOS = [
    {
      etiqueta: "Martes de tacos",
      titulo: "Tacos al pastor con piña y cilantro",
      texto: "Tortilla recién hecha, trompo y mucho sabor mexicano.",
      boton: "Ver tacos",
      enlace: "paginas/tacos.html",
      imagen: commons("01 Tacos al Pastor.jpg"),
      respaldo: "./Img/carta/tacos.jpg",
      punto: "header", posicion: "afterend"
    },
    {
      etiqueta: "Hora feliz",
      titulo: "Margaritas para brindar a la mexicana",
      texto: "Tequila, limón y el borde con sal. Prueba nuestra carta de cocteles.",
      boton: "Ver cocteles",
      enlace: "paginas/cocteles-licores.html",
      imagen: commons("MargaritaReal.jpg"),
      respaldo: "./Img/carta/cocteles-licores.jpg",
      punto: "aside", posicion: "afterend"
    },
    {
      etiqueta: "Para compartir",
      titulo: "Nachos cargados de queso y jalapeño",
      texto: "Ideales para la mesa, con tus amigos y tu familia.",
      boton: "Ver nachos",
      enlace: "paginas/nachos.html",
      imagen: "./Img/carta/nachos.jpg",
      respaldo: "",
      punto: "section.bg-black-forest-800", posicion: "beforebegin"
    },
    {
      etiqueta: "Dulce final",
      titulo: "Churros calientitos con chocolate",
      texto: "El postre perfecto para cerrar la comida.",
      boton: "Ver postres",
      enlace: "paginas/postres.html",
      imagen: commons("Churros con chocolate Mexico (32539051653).jpg"),
      respaldo: "./Img/carta/postres.jpg",
      punto: "main > img[src*='patron_verde']", posicion: "beforebegin"
    },
    {
      etiqueta: "Refréscate",
      titulo: "Bebidas tradicionales y aguas frescas",
      texto: "Sabores de México para acompañar cada platillo.",
      boton: "Ver bebidas",
      enlace: "paginas/bebidas.html",
      imagen: "./Img/carta/bebidas.jpg",
      respaldo: "",
      punto: "footer", posicion: "beforebegin"
    }
  ];

  /* ---------- Estilos (se inyectan solos) ---------- */
  const css = `
    .cdc-slot { padding: 16px; background: #f6f1e5; }
    .cdc-ad {
      position: relative; overflow: hidden;
      max-width: 72rem; margin: 0 auto;
      min-height: 210px; border-radius: 18px;
      display: flex; align-items: center;
      color: #fff; background: #3a1d12;
      box-shadow: 0 8px 22px rgba(0,0,0,.22);
      animation: cdc-entrar .4s ease;
    }
    .cdc-ad > img.cdc-foto {
      position: absolute; inset: 0; width: 100%; height: 100%;
      object-fit: cover; transition: transform .8s ease;
    }
    .cdc-ad:hover > img.cdc-foto { transform: scale(1.04); }
    .cdc-ad::before {
      content: ""; position: absolute; inset: 0; z-index: 1;
      background: linear-gradient(90deg, rgba(25,10,4,.85) 0%, rgba(25,10,4,.55) 45%, rgba(25,10,4,0) 80%);
    }
    .cdc-contenido {
      position: relative; z-index: 2;
      padding: 28px 64px 28px 32px; max-width: 34rem;
    }
    .cdc-etiqueta {
      display: inline-block; font-size: .72rem; letter-spacing: .2em;
      text-transform: uppercase; color: #facc15; margin-bottom: 8px;
    }
    .cdc-titulo {
      margin: 0 0 8px; font-family: "Cormorant Garamond", serif;
      font-size: clamp(1.5rem, 3.2vw, 2.2rem); line-height: 1.1; font-weight: 700;
    }
    .cdc-texto { margin: 0 0 16px; font-size: .98rem; opacity: .95; }
    .cdc-boton {
      display: inline-block; background: #fff; color: #3a1d12;
      padding: 9px 20px; border-radius: 999px; font-weight: 700;
      text-decoration: none; font-size: .92rem;
    }
    .cdc-boton:hover { background: #facc15; }
    .cdc-cerrar {
      position: absolute; top: 12px; right: 12px; z-index: 3;
      width: 34px; height: 34px; border: 0; border-radius: 50%;
      background: rgba(0,0,0,.5); color: #fff; font-size: 17px;
      line-height: 1; cursor: pointer;
    }
    .cdc-cerrar:hover { background: rgba(0,0,0,.8); }
    .cdc-marca {
      position: absolute; top: 14px; left: 14px; z-index: 3;
      background: rgba(0,0,0,.55); color: #fff; font-size: .68rem;
      letter-spacing: .1em; padding: 3px 8px; border-radius: 6px;
    }
    /* Anuncio final: solo la imagen, en formato de anuncio */
    .cdc-ad.cdc-final { min-height: 0; background: #000; }
    .cdc-ad.cdc-final::before { display: none; }
    .cdc-ad.cdc-final { justify-content: center; }
    .cdc-ad.cdc-final > img.cdc-foto-final {
      position: static; display: block;
      width: auto; height: auto;
      max-width: 100%; max-height: 85vh;
      margin: 0 auto; object-fit: contain;
    }
    .cdc-saliendo { animation: cdc-salir .35s ease forwards; }
    @keyframes cdc-entrar { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
    @keyframes cdc-salir  { to { opacity: 0; transform: scale(.96); } }
    @media (max-width: 640px) {
      .cdc-ad { min-height: 240px; }
      .cdc-ad::before { background: linear-gradient(0deg, rgba(25,10,4,.9) 0%, rgba(25,10,4,.45) 70%, rgba(25,10,4,.1) 100%); }
      .cdc-ad { align-items: flex-end; }
      .cdc-contenido { padding: 20px 56px 20px 20px; }
    }
  `;

  function inyectarEstilos() {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ---------- Construcción de un anuncio ---------- */
  function crearAnuncio(datos) {
    const ad = document.createElement("div");
    ad.className = "cdc-ad";
    ad.setAttribute("role", "complementary");

    const img = document.createElement("img");
    img.className = "cdc-foto";
    img.alt = datos.titulo;
    img.loading = "lazy";
    img.decoding = "async";
    img.src = datos.imagen;
    if (datos.respaldo) {
      img.addEventListener("error", () => {
        if (!img.dataset.fallo) {
          img.dataset.fallo = "1";
          img.src = datos.respaldo;
        }
      });
    }

    const marca = document.createElement("span");
    marca.className = "cdc-marca";
    marca.textContent = "ANUNCIO";

    const cerrar = document.createElement("button");
    cerrar.className = "cdc-cerrar";
    cerrar.type = "button";
    cerrar.setAttribute("aria-label", "Cerrar anuncio");
    cerrar.textContent = "✕";

    const cont = document.createElement("div");
    cont.className = "cdc-contenido";
    cont.innerHTML =
      '<span class="cdc-etiqueta"></span>' +
      '<h3 class="cdc-titulo"></h3>' +
      '<p class="cdc-texto"></p>' +
      '<a class="cdc-boton"></a>';
    cont.querySelector(".cdc-etiqueta").textContent = datos.etiqueta;
    cont.querySelector(".cdc-titulo").textContent = datos.titulo;
    cont.querySelector(".cdc-texto").textContent = datos.texto;
    const boton = cont.querySelector(".cdc-boton");
    boton.textContent = datos.boton;
    boton.href = datos.enlace;

    ad.append(img, marca, cont, cerrar);
    return { ad, cerrar };
  }

  function crearAnuncioFinal() {
    const ad = document.createElement("div");
    ad.className = "cdc-ad cdc-final";
    ad.setAttribute("role", "complementary");

    const img = document.createElement("img");
    img.className = "cdc-foto-final";
    img.alt = TEXTO_ALT_FINAL;
    img.src = IMAGEN_FINAL;

    const marca = document.createElement("span");
    marca.className = "cdc-marca";
    marca.textContent = "ANUNCIO";

    const cerrar = document.createElement("button");
    cerrar.className = "cdc-cerrar";
    cerrar.type = "button";
    cerrar.setAttribute("aria-label", "Cerrar anuncio");
    cerrar.textContent = "✕";

    ad.append(img, marca, cerrar);
    return { ad, cerrar };
  }

  /* ---------- Lógica ---------- */
  function iniciar() {
    inyectarEstilos();
    let restantes = 0;

    ANUNCIOS.forEach((datos) => {
      const punto = document.querySelector(datos.punto);
      if (!punto) return; // si no existe ese lugar, se omite

      const slot = document.createElement("div");
      slot.className = "cdc-slot";
      const { ad, cerrar } = crearAnuncio(datos);
      slot.appendChild(ad);
      punto.insertAdjacentElement(datos.posicion, slot);
      restantes++;

      cerrar.addEventListener("click", () => {
        restantes--;
        if (restantes === 0) {
          // Último anuncio: en su mismo lugar aparece la imagen elegida
          slot.innerHTML = "";
          const final = crearAnuncioFinal();
          slot.appendChild(final.ad);
          final.cerrar.addEventListener("click", () => quitar(slot, final.ad));
        } else {
          quitar(slot, ad);
        }
      });
    });
  }

  function quitar(slot, ad) {
    ad.classList.add("cdc-saliendo");
    ad.addEventListener("animationend", () => slot.remove(), { once: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
