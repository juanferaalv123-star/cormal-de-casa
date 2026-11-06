---
name: brand-design
description: Sistema de diseño y guía de identidad visual para [NOMBRE DE LA MARCA], una marca de restaurante mexicano contemporáneo. Úsala siempre que se cree o modifique cualquier interfaz, sitio web, landing, menú digital, pieza gráfica, presentación o documento de la marca, para aplicar la paleta, la tipografía, el layout y el tono de voz correctos. Actívala aunque el usuario no mencione "branding", si el entregable es de [NOMBRE DE LA MARCA].
---

# Brand Design: [NOMBRE DE LA MARCA]

Actúa como el director de diseño de un estudio reconocido por darle a cada restaurante una identidad que nadie confunde con otra. El cliente ya rechazó propuestas genéricas: quiere un punto de vista claro, decisiones deliberadas y un resultado que se sienta como una mesa reservada con semanas de anticipación, no como una plantilla.

Esta skill extiende los principios de `frontend-design` con las decisiones de marca ya tomadas. **Dentro de esta skill, la paleta, las fuentes y las reglas de abajo ganan sobre cualquier default.** Donde no digan nada, aplican los principios generales de frontend-design.

---

## 1. Sujeto, público y trabajo del diseño

- **Sujeto:** restaurante mexicano de alto nivel en reseñas. La referencia es la identidad de los mejores restaurantes mexicanos (alta cocina contemporánea, cocinas de mercado y taquerías de culto), no el imaginario turístico.
- **Público:** comensales que investigan antes de ir, leen reseñas, comparan menús y reservan desde el celular.
- **Trabajo principal de cada pieza:** que la persona entienda en segundos qué se come, dónde, cuánto cuesta y cómo reservar. La apetencia viene primero; la decoración, después.

Si el brief no dice qué se está diseñando (sitio, menú, promo, etc.), propón una interpretación concreta en una frase y confírmala antes de construir.

## 2. Qué significa "mexicano" aquí

El carácter sale del oficio y los materiales, no de los clichés.

**Fuentes de inspiración válidas:** azulejo de talavera y cerámica de barro, rotulación pintada a mano de mercados y fondas, papel de china y papel picado, empaque de tortillería, cantera y madera oscura de comedor, mantel y servilleta bordada, la geometría de textiles y cenefas, la luz cálida de una cocina con comal y brasa, la frescura de hierbas, limón y chile.

**Evita (a menos que el brief lo pida):** sombreros, cactus de caricatura, calaveras decorativas, bigotes, tipografías "far west" o de cantina, neón de fiesta, confeti de colores sin jerarquía, banderas tricolor literales, guacamole-verde como fondo plano.

La marca se siente **cálida, orgullosa, precisa y generosa**. Lujo cercano, no solemne.

---

## 3. Color

### 3.1 Tokens completos

Los cinco ramps van como variables CSS. No inventes tonos fuera de ellos; si necesitas una variante, usa el escalón vecino.

```css
:root {
  /* Rich Mahogany: el rojo de la marca y sus fondos profundos */
  --rich-mahogany-50:  #fce9ea;
  --rich-mahogany-100: #f8d3d5;
  --rich-mahogany-200: #f1a7ac;
  --rich-mahogany-300: #ea7b82;
  --rich-mahogany-400: #e34f58;
  --rich-mahogany-500: #dd222f;
  --rich-mahogany-600: #b01c25;
  --rich-mahogany-700: #84151c;
  --rich-mahogany-800: #580e13;
  --rich-mahogany-900: #2c0709;
  --rich-mahogany-950: #1f0507;

  /* Champagne Mist: ámbar cálido, papel y luz de vela */
  --champagne-mist-50:  #fdf4e7;
  --champagne-mist-100: #fce9cf;
  --champagne-mist-200: #f9d39f;
  --champagne-mist-300: #f6be6f;
  --champagne-mist-400: #f3a83f;
  --champagne-mist-500: #f0920f;
  --champagne-mist-600: #c0750c;
  --champagne-mist-700: #905809;
  --champagne-mist-800: #603a06;
  --champagne-mist-900: #301d03;
  --champagne-mist-950: #221402;

  /* Black Forest: verde de hierba fresca, nopal y cilantro */
  --black-forest-50:  #eff8ed;
  --black-forest-100: #dff0db;
  --black-forest-200: #bee2b6;
  --black-forest-300: #9ed392;
  --black-forest-400: #7dc56d;
  --black-forest-500: #5db649;
  --black-forest-600: #4a923a;
  --black-forest-700: #386d2c;
  --black-forest-800: #25491d;
  --black-forest-900: #13240f;
  --black-forest-950: #0d1a0a;

  /* Bright Lemon: la chispa de limón, uso mínimo */
  --bright-lemon-50:  #fffce5;
  --bright-lemon-100: #fffacc;
  --bright-lemon-200: #fff599;
  --bright-lemon-300: #fff066;
  --bright-lemon-400: #ffeb33;
  --bright-lemon-500: #ffe500;
  --bright-lemon-600: #ccb800;
  --bright-lemon-700: #998a00;
  --bright-lemon-800: #665c00;
  --bright-lemon-900: #332e00;
  --bright-lemon-950: #242000;

  /* Mahogany Red: rojo funcional (estados y alertas) */
  --mahogany-red-50:  #fce8e9;
  --mahogany-red-100: #fad1d2;
  --mahogany-red-200: #f4a4a5;
  --mahogany-red-300: #ef7678;
  --mahogany-red-400: #ea484b;
  --mahogany-red-500: #e41b1e;
  --mahogany-red-600: #b71518;
  --mahogany-red-700: #891012;
  --mahogany-red-800: #5b0b0c;
  --mahogany-red-900: #2e0506;
  --mahogany-red-950: #200404;
}
```

### 3.2 Roles semánticos

Los componentes consumen estos alias, nunca el hex directo.

```css
:root {
  /* Superficies */
  --surface-light:      var(--champagne-mist-50);     /* fondo claro: papel cálido */
  --surface-light-alt:  var(--champagne-mist-100);    /* bandas y tarjetas sobre claro */
  --surface-dark:       var(--rich-mahogany-950);     /* fondo oscuro principal: comedor de noche */
  --surface-dark-alt:   var(--rich-mahogany-900);
  --surface-green:      var(--black-forest-900);      /* fondo oscuro secundario: cocina y hierbas */

  /* Texto */
  --text-on-light:        var(--rich-mahogany-950);
  --text-on-light-muted:  var(--champagne-mist-800);
  --text-on-dark:         var(--champagne-mist-50);
  --text-on-dark-muted:   var(--champagne-mist-200);

  /* Marca y acción */
  --brand:          var(--rich-mahogany-600);   /* texto/enlaces de marca sobre claro */
  --brand-strong:   var(--rich-mahogany-500);   /* botón primario, relleno grande */
  --brand-hover:    var(--rich-mahogany-700);
  --accent-warm:    var(--champagne-mist-500);  /* detalles, filetes, iconos */
  --accent-fresh:   var(--black-forest-600);    /* etiquetas "vegetariano", "de temporada" */
  --spark:          var(--bright-lemon-500);    /* un único punto focal por pantalla */

  /* Sistema */
  --danger:   var(--mahogany-red-600);
  --success:  var(--black-forest-700);
  --warning:  var(--champagne-mist-600);
  --focus:    var(--champagne-mist-500);
}
```

### 3.3 Reglas de uso

1. **Proporción 60 / 30 / 10.** 60 % superficie (champagne-50 *o* rich-mahogany-950), 30 % color de marca (mahogany, black-forest), 10 % acentos (ámbar, limón).
2. **Dos modos, un carácter.** Modo claro = papel cálido con tinta color caoba. Modo oscuro = caoba casi negro con texto champagne. No mezcles las dos bases en la misma sección.
3. **Rich Mahogany y Mahogany Red son casi el mismo rojo.** No los pongas juntos como decoración. `rich-mahogany` es el rojo de marca; `mahogany-red` queda reservado para estados de error o acciones destructivas.
4. **Bright Lemon es una chispa, no un tono base.** Máximo un elemento por pantalla (un sello, un indicador de "abierto ahora", un subrayado puntual). Nunca como fondo de áreas grandes. Sobre limón, el texto siempre es `bright-lemon-950` o `rich-mahogany-950`.
5. **Black Forest no es "verde ecológico".** Úsalo oscuro (800-950) como fondo alterno elegante o en 500-600 como acento de frescura. Evita combinarlo con rojo en proporciones iguales (efecto navideño): si conviven, que domine uno y el otro sea detalle.
6. **Nada de negro puro ni grises neutros.** Los oscuros son caoba (`rich-mahogany-950`) o bosque (`black-forest-950`); los grises vienen de los escalones tostados de champagne.
7. **Sin degradados decorativos.** Si hay gradiente, es entre dos escalones del mismo ramp y justificado (por ejemplo, un scrim oscuro sobre una foto para legibilidad).

### 3.4 Contraste (obligatorio)

Los tonos 500 de varios ramps **no** alcanzan contraste de texto sobre fondo claro. Reglas:

| Uso sobre fondo claro (`champagne-50`) | Escalón mínimo |
|---|---|
| Texto de cuerpo | `rich-mahogany-950` o `-900` |
| Texto/enlace de marca | `rich-mahogany-600` o más oscuro |
| Texto ámbar | `champagne-mist-700` o más oscuro |
| Texto verde | `black-forest-700` o más oscuro |
| Texto limón | No usar; usar limón solo como relleno |

Sobre fondos oscuros (`rich-mahogany-950`), el texto usa `champagne-mist-50` a `-200`, y los acentos pueden subir a `champagne-mist-400/500` y `bright-lemon-400/500`.
Verifica 4.5:1 para texto normal y 3:1 para texto grande y componentes de interfaz. Si dudas, mide.

---

## 4. Tipografía

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: "Cormorant Garamond", "Cormorant", Georgia, "Times New Roman", serif;
  --font-body:    "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
}
```

### Roles

- **Cormorant Garamond (600, 700, itálica 600): voz de la marca.** Titulares, nombres de platillos, citas, precios destacados, números grandes. Es una serif de alto contraste con personalidad editorial; su elegancia es el lujo de la marca.
- **Plus Jakarta Sans (400, 500, 600, 700): trabajo.** Cuerpo de texto, navegación, botones, formularios, descripciones de menú, horarios, direcciones, etiquetas.

### Reglas

- **Cormorant solo a partir de ~28 px.** Sus trazos finos se rompen en tamaños pequeños. Si el texto es menor, usa Plus Jakarta Sans.
- **Itálica 600 de Cormorant** para citas de reseñas, notas del chef y subtítulos de carácter. No la uses para énfasis suelto dentro de un titular.
- **Escala base** (razón ≈ 1.25, ajustable con `clamp()`):
  - Display: `clamp(2.75rem, 6vw + 1rem, 5.5rem)`, line-height 1.02, tracking −0.01em, Cormorant 700.
  - H1: `clamp(2.25rem, 4vw + 1rem, 3.75rem)`, line-height 1.08, Cormorant 700.
  - H2: `clamp(1.75rem, 2.5vw + 1rem, 2.5rem)`, line-height 1.15, Cormorant 600.
  - H3 / nombre de platillo: `1.75rem`, line-height 1.2, Cormorant 600.
  - Cuerpo: `1rem` a `1.125rem`, line-height 1.6, Plus Jakarta Sans 400.
  - Apoyo / detalle: `0.875rem`, line-height 1.5, Plus Jakarta Sans 500.
- **Largo de línea:** máximo ~65 caracteres en sans; hasta ~72 si es serif.
- **Tracking:** nunca expandido en titulares. Los titulares son de tamaño y peso, no de mayúsculas espaciadas.
- **Sin mayúsculas sostenidas** para etiquetas ni "eyebrows" sobre cada título. Usa sentence case. Si una etiqueta pequeña es necesaria (por ejemplo "De temporada"), va en Plus Jakarta Sans 600, sentence case.
- **No resaltes una sola palabra de un titular** con otro color o itálica. Si el titular necesita jerarquía interna, divídelo en dos líneas con tamaños distintos con intención.
- **Precios** en Cormorant 600 con cifras de tamaño cómodo; la moneda en peso 400 y un poco más pequeña.
- `font-display: swap` ya viene en la URL; define fallbacks de métrica similar para evitar saltos de layout.

---

## 5. Layout y composición

### Concepto

**"La carta sobre la mesa."** Composiciones tranquilas, con mucho aire, donde el platillo y el titular serif llevan la historia. La estructura recuerda a una carta impresa de buen restaurante: columnas claras, jerarquía por tamaño y espacio, filetes finos con significado.

### Principios

- **Una sola cosa memorable por pantalla.** La firma de la marca es la **franja de azulejo (talavera)**: un patrón geométrico construido en SVG/CSS con la paleta (caoba, ámbar, champagne, y verde como acento), usado como cenefa de separación o borde en momentos clave (cabecera del hero, cierre de página, borde de la tarjeta de reservas). Todo lo demás es sobrio.
  - La franja es **estrecha** (alto 12-32 px en pantalla, nunca un fondo completo), con un motivo repetible y simétrico.
  - Máximo **una o dos apariciones** por página.
  - Debe poder cortarse limpio en cualquier ancho (patrón teselable).
- **El hero abre con lo más característico del mundo del restaurante.** En orden de preferencia: (1) una fotografía real del platillo estrella o de la cocina con luz cálida, (2) el nombre del restaurante en Cormorant 700 enorme sobre fondo `rich-mahogany-950`, (3) la carta del día como tipografía. Evita el hero genérico de "número grande + estadísticas + degradado".
- **Alineación:** titulares y cuerpo **alineados a la izquierda**. El centrado se reserva para momentos ceremoniales cortos (una cita, el cierre con reserva). El texto nunca va justificado.
- **Ritmo de secciones:** alterna fondos con intención (claro → oscuro → claro), no por costumbre. Cada cambio de fondo debe marcar un cambio de tema (por ejemplo, de "La cocina" a "Reservar").
- **Espacio:** escala base de 8 px. Secciones con 96-160 px de respiro vertical en escritorio, 56-80 px en móvil. El aire comunica precio y confianza.
- **Radios y formas:** esquinas **suaves pero pocas**: 4 px para campos e imágenes, 999 px solo para botones y etiquetas. Cuidado con el "kit SaaS" de tarjetas idénticas con la misma sombra: evítalo. Prefiere filetes de 1 px en `champagne-mist-300` (claro) o `rich-mahogany-800` (oscuro) y variación de escala entre elementos.
- **Estructura con significado.** Los filetes, bordes y separadores existen para agrupar información real (categorías de la carta, horarios vs. dirección). No numeres secciones salvo que sean pasos reales (por ejemplo, el flujo de reserva).

### Wireframe: inicio (escritorio)

```
┌──────────────────────────────────────────────────────────┐
│ Logo            Carta  Historia  Eventos     [ Reservar ]│  fondo: mahogany-950
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Titular en Cormorant 700            ┌──────────────┐    │
│  (2 líneas, alineado a la izquierda) │              │    │
│                                      │   FOTO DEL   │    │
│  Una frase de apoyo (sans, 1-2       │   PLATILLO   │    │
│  líneas).                            │   ESTRELLA   │    │
│  [ Reservar mesa ]  Ver la carta     │              │    │
│                                      └──────────────┘    │
│▒▒▒▒▒▒▒▒▒▒▒▒ franja de azulejo (única aparición) ▒▒▒▒▒▒▒▒▒│
├──────────────────────────────────────────────────────────┤
│ fondo champagne-50                                       │
│  La carta, por momentos del día  (H2)                    │
│  ───────────────────────────────────────────────         │
│  Nombre del platillo (H3)                    $ 000       │
│  Descripción breve en sans, 1-2 líneas.                  │
│  ───────────────────────────────────────────────         │
├──────────────────────────────────────────────────────────┤
│ Reseñas reales: cita en itálica Cormorant, fuente citada │  fondo: black-forest-900
├──────────────────────────────────────────────────────────┤
│ Horario · Dirección · Cómo llegar · [ Reservar ]         │  fondo: mahogany-950
└──────────────────────────────────────────────────────────┘
```

### Móvil

Prioriza la acción: **Reservar**, **Ver carta**, **Cómo llegar** y **Llamar** siempre alcanzables con el pulgar (barra inferior fija con `padding-bottom: env(safe-area-inset-bottom)`). Áreas táctiles de mínimo 44 × 44 px.

---

## 6. Componentes clave

**Botón primario:** relleno `--brand-strong` (`rich-mahogany-500`) con texto `champagne-mist-50`, hover `rich-mahogany-700`, radio 999 px, Plus Jakarta Sans 600. Sobre fondo oscuro, alternativa: relleno `champagne-mist-300` con texto `rich-mahogany-950`.
**Botón secundario:** contorno 1.5 px en `--brand` (claro) o `champagne-mist-300` (oscuro), sin relleno.
**Enlace de texto:** `--brand`, subrayado con `text-underline-offset: 0.25em`; sin flechas "→" añadidas por costumbre.
**Ítem de carta:** nombre en Cormorant 600, precio alineado a la derecha, descripción en sans muted, filete inferior de 1 px. Etiquetas pequeñas (de temporada, vegetariano, picante) como píldoras de borde fino con punto de color del ramp correspondiente (verde = fresco, ámbar = de temporada, caoba = picante).
**Tarjeta de reserva:** fondo `champagne-mist-100`, borde superior con la franja de azulejo, campos con borde `champagne-mist-300`, foco visible en `--focus` de 3 px.
**Citas de reseñas:** Cormorant itálica 600, tamaño grande, con fuente y plataforma al pie en sans. Solo reseñas reales y verificables; nunca inventes calificaciones ni número de reseñas.
**Insignia "abierto ahora":** el único lugar donde puede aparecer `--spark` (limón) en una pantalla de información.

---

## 7. Imagen e iconografía

- **Fotografía:** luz natural cálida o luz de cocina; superficies reales (barro, madera, piedra, lino); platillos en el momento de servirse, con manos y vapor cuando sea posible. Evita fondos blancos de catálogo y filtros saturados. Un tratamiento coherente: tonos cálidos, sombras ligeramente caoba, sin viraje verde.
- **Recortes y ratios:** 4:5 y 3:2 como base; ningún recorte que corte el platillo.
- **Ilustración y patrón:** líneas limpias, geométricas, inspiradas en azulejo y textil; siempre dentro de la paleta. No uses ilustración de clip-art ni emojis como elementos de marca.
- **Iconos:** trazo uniforme de 1.5 px, esquinas ligeramente redondeadas, color heredado del texto. Pocos y útiles.
- **Alt text** descriptivo en toda imagen informativa.

---

## 8. Movimiento

- Una sola secuencia orquestada al cargar el hero (por ejemplo, el titular y la foto aparecen con un fundido suave de ≤ 600 ms). Nada de entradas "fade-up" en cada sección.
- Movimiento que responde a una acción sí es bienvenido: abrir un acordeón de la carta, confirmar una reserva, cambiar de pestaña.
- Respeta `prefers-reduced-motion`: sin animaciones no esenciales.

---

## 9. Voz y copy

Idioma por defecto: **español de México**, a menos que el brief indique otro.

- **Tono:** cálido, seguro, cercano. Habla como un anfitrión que conoce la cocina, no como un anuncio. Usa "tú" o "usted" según el brief; por defecto, **tú** con respeto.
- **Describe, no vendas.** Di qué es el platillo, de dónde vienen los ingredientes, cómo se cocina. "Tortilla de maíz nixtamalizado, hecha a diario" es mejor que "una experiencia inolvidable".
- **Específico antes que ingenioso.** Nombra la región, el chile, la técnica, el producto. Cuida la ortografía y los acentos de los nombres de platillos e ingredientes.
- **Botones con verbos exactos:** "Reservar mesa", "Ver la carta", "Cómo llegar", "Llamar". La misma acción se llama igual en todo el flujo (el botón dice "Reservar mesa" y la confirmación dice "Mesa reservada").
- **Oraciones en sentence case**, sin mayúsculas sostenidas ni signos de exclamación en cadena.
- **Errores y vacíos:** explican qué pasó y cómo resolverlo. Ejemplo: "No hay mesas a las 8:30 p. m. Prueba a las 7:00 o a las 9:15." Los errores no se disculpan.
- **Contenido real:** no inventes premios, reseñas, cifras ni nombres de platillos como si fueran reales. Si faltan datos, usa marcadores claros como `[Platillo estrella]`, `[Dirección]`, `[Reseña verificada]` y avisa al cliente.
- **Evita:** "auténtico" como muletilla, "sabores que bailan", "viaje culinario", "fusión de tradición e innovación" y similares.

---

## 10. Calidad mínima (no se anuncia, se cumple)

- Responsive de 320 px a pantallas grandes.
- Foco de teclado visible en todos los elementos interactivos (`outline` de 3 px en `--focus` con offset de 2 px).
- Contraste según la sección 3.4.
- HTML semántico (`header`, `nav`, `main`, `section`, `footer`), jerarquía de encabezados correcta, formularios con `label` asociado.
- `prefers-reduced-motion` respetado.
- Imágenes optimizadas, con `width` y `height` definidos y `loading="lazy"` fuera del primer pliegue.
- Datos del negocio (horarios, dirección, teléfono) en texto real, nunca solo dentro de una imagen.
- Si es posible, añade datos estructurados `Restaurant` (schema.org) en los sitios web.

---

## 11. Proceso de trabajo

Sigue el proceso de `frontend-design`: **planear, revisar contra el brief, construir, criticar.**

1. **Plan breve (antes de escribir código):**
   - Color: qué superficie domina (claro u oscuro) y cuál es el acento de esta pieza.
   - Tipo: qué se compone en Cormorant y qué en Plus Jakarta Sans.
   - Layout: un wireframe ASCII y la alineación elegida.
   - Principios: cuál es **la única cosa memorable** de esta pieza.
2. **Revisión contra el brief y contra esta skill.** Pregúntate:
   - ¿Se parece a una plantilla genérica de "restaurante" (foto grande + tres tarjetas iguales + degradado)? Si sí, rediseña esa parte.
   - ¿Cayó en el default de "crema + terracota" o en "negro + un único acento neón"? Esta marca tiene su propia paleta: caoba, bosque, ámbar y limón. Úsala con intención.
   - ¿Aparecen clichés de la sección 2? Quítalos.
   - ¿Hay etiquetas en mayúsculas, números decorativos, flechas "→" o eyebrows sin función? Quítalos.
3. **Construcción** con las variables CSS de la sección 3.2. Cuida la especificidad de los selectores para que `padding` y `margin` de secciones no se anulen entre sí.
4. **Crítica final:** revisa capturas en escritorio y móvil si tu entorno lo permite. Antes de entregar, quita un accesorio: elimina el elemento decorativo que menos le sirva al brief.

---

## 12. Entrega

Cuando termines una pieza, resume en 2-3 líneas: qué dominó (superficie y acento), cuál fue el elemento memorable y qué contenido quedó como marcador pendiente de confirmar por el cliente.
