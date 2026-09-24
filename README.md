# Registro de escándalos del PSOE

Registro hemerográfico, ordenado cronológicamente, de los casos de corrupción y escándalos que afectan al PSOE, a sus cargos y al Gobierno desde que Pedro Sánchez llegó a la Moncloa (2 de junio de 2018). Cada hito enlaza a la noticia publicada en prensa. No se enlazan vídeos.

Actualizado a 24 de septiembre de 2026: 41 casos, 192 hitos y 389 noticias enlazadas.

## Qué hace la página

- **Cronología**: todos los hitos (dimisiones, imputaciones, detenciones, sentencias…) ordenados por fecha y agrupados por año.
- **Casos**: una ficha por caso con su número de expediente, clasificación, estado actual, resumen, personas señaladas y sus hitos.
- **Filtros**: clasificación, ámbito (partido, Gobierno, entorno, territorial), año y búsqueda libre por persona, caso o medio.
- Cada caso tiene un enlace directo: `index.html#caso-<id>` (por ejemplo, `#caso-koldo-mascarillas`).

## Clasificación

| Clasificación | Criterio |
| --- | --- |
| Suceso | Hechos documentados por la prensa sin causa penal abierta contra las personas señaladas. Incluye causas archivadas. |
| Judicial en curso | Causa penal abierta: diligencias, imputación, procesamiento o juicio pendiente. |
| Con sentencia | Hay al menos una sentencia; el estado indica si es firme, si está recurrida o si se ha modificado. |

Salvo sentencia firme, rige la presunción de inocencia. Los archivos, absoluciones y correcciones de tribunales superiores también se registran.

## Estructura

```
index.html        página
assets/styles.css estilos (tema claro y oscuro)
assets/app.js     lógica de filtros y vistas
data/casos.js     datos: casos, hitos y enlaces
```

No necesita servidor ni compilación: basta con abrir `index.html` o publicar la carpeta en GitHub Pages (Settings → Pages → rama y carpeta raíz).

## Cómo añadir o corregir datos

Todo el contenido está en `data/casos.js`. Cada caso tiene esta forma:

```js
{
  id: "identificador-corto",
  titulo: "Nombre del caso",
  clase: "suceso" | "judicial" | "sentencia",
  ambito: "partido" | "gobierno" | "entorno" | "territorial",
  estado: "Situación a la fecha de actualización.",
  resumen: "Descripción breve y neutral.",
  personas: ["Nombre Apellido"],
  eventos: [
    { f: "2025-06-12", t: "dimisión", h: "Titular del hito", s: ["https://…", "https://…"] }
  ]
}
```

- `f` admite `AAAA-MM-DD` o `AAAA-MM` si solo se conoce el mes.
- Para añadir otra fuente a un hito (por ejemplo, la noticia de ABC, El Mundo o El País), añade su URL al array `s`. El nombre del medio se deduce del dominio.
- Si se enlaza la publicación del diario en X (`https://x.com/<cuenta>/status/<id>`), el medio se deduce de la cuenta (tabla `CUENTAS_X` en `assets/app.js`) y se muestra como «El Mundo (X)».
- Los casos se numeran solos por orden de aparición del primer hito.

## Fuentes

Las noticias enlazadas proceden de El Español, elDiario.es, The Objective, Vozpópuli, El Independiente, El Debate, Público, infoLibre, elEconomista, Libertad Digital, COPE y Canarias7. Todas las URL se han obtenido de resultados de búsqueda; ninguna se ha construido a mano.

Las webs de El País, El Mundo, ABC, El Confidencial, La Razón, 20minutos y Europa Press no se pudieron consultar directamente. Para esos diarios se enlaza la publicación de su cuenta oficial en X (@el_pais, @elmundoes, @abc_es, @elconfidencial, @larazon_es, @20m, @europapress), que remite a la noticia. Solo se han incluido publicaciones cuya fecha, deducida del identificador del tuit, coincide con la del hito o difiere de ella en uno o dos días y cuyo texto trata el mismo hecho. Son 33 publicaciones repartidas en 27 hitos, casi todas de 2024 a 2026: las publicaciones anteriores apenas aparecen en los buscadores.
