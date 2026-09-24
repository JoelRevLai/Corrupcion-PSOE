(function () {
  "use strict";

  var CASOS = (window.CASOS || []).slice();
  var ACTUALIZADO = window.ACTUALIZADO || "";

  var CLASES = [
    { id: "suceso", label: "Suceso" },
    { id: "judicial", label: "Judicial en curso" },
    { id: "sentencia", label: "Con sentencia" }
  ];
  var CLASE_LABEL = {};
  CLASES.forEach(function (c) { CLASE_LABEL[c.id] = c.label; });

  var AMBITOS = {
    partido: "Partido",
    gobierno: "Gobierno",
    entorno: "Entorno",
    territorial: "Territorial"
  };

  var MEDIOS = {
    "elespanol.com": "El Español",
    "eldiario.es": "elDiario.es",
    "theobjective.com": "The Objective",
    "vozpopuli.com": "Vozpópuli",
    "elindependiente.com": "El Independiente",
    "libertaddigital.com": "Libertad Digital",
    "infolibre.es": "infoLibre",
    "cope.es": "COPE",
    "eldebate.com": "El Debate",
    "eleconomista.es": "elEconomista",
    "publico.es": "Público",
    "okdiario.com": "OKDiario",
    "canarias7.es": "Canarias7",
    "elplural.com": "El Plural",
    "elpais.com": "El País",
    "elmundo.es": "El Mundo",
    "abc.es": "ABC",
    "elconfidencial.com": "El Confidencial",
    "lavanguardia.com": "La Vanguardia",
    "larazon.es": "La Razón",
    "rtve.es": "RTVE",
    "europapress.es": "Europa Press",
    "20minutos.es": "20minutos",
    "elperiodico.com": "El Periódico"
  };

  var MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  var MESES_LARGOS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  var CHECK = '<svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5L10 17L19 7"/></svg>';

  function medio(url) {
    var host;
    try { host = new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return "Enlace"; }
    if (MEDIOS[host]) return MEDIOS[host];
    var partes = host.split(".");
    for (var i = 1; i < partes.length - 1; i++) {
      var base = partes.slice(i).join(".");
      if (MEDIOS[base]) {
        if (partes[0] === "diariodeavisos") return "Diario de Avisos";
        if (partes[0] === "cronicaglobal") return "Crónica Global";
        if (partes[0] === "ecodiario") return "elEconomista";
        if (partes[0] === "eldiariocantabria") return "El Diario Cantabria";
        return MEDIOS[base];
      }
    }
    return host;
  }

  function fechaCorta(f, conAnio) {
    var p = f.split("-");
    var m = MESES[parseInt(p[1], 10) - 1];
    if (p.length === 2) return m + " " + p[0];
    return parseInt(p[2], 10) + " " + m + (conAnio === false ? "" : " " + p[0]);
  }

  function fechaLarga(f) {
    var p = f.split("-");
    var m = MESES_LARGOS[parseInt(p[1], 10) - 1];
    if (p.length === 2) return m + " de " + p[0];
    return parseInt(p[2], 10) + " de " + m + " de " + p[0];
  }

  // Clave ordenable: los hitos con solo mes se colocan al principio del mes.
  function clave(f) { return f.length === 7 ? f + "-00" : f; }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function plural(n, uno, varios) { return n + " " + (n === 1 ? uno : varios); }

  // ---------- Preparación de datos ----------

  CASOS.forEach(function (c) {
    c.eventos.sort(function (a, b) { return clave(a.f) < clave(b.f) ? -1 : clave(a.f) > clave(b.f) ? 1 : 0; });
    c.inicio = clave(c.eventos[0].f);
  });
  CASOS.sort(function (a, b) { return a.inicio < b.inicio ? -1 : a.inicio > b.inicio ? 1 : 0; });

  var POR_ID = {};
  var HITOS = [];
  CASOS.forEach(function (c, i) {
    c.num = String(i + 1).padStart(2, "0");
    c.anioInicio = c.inicio.slice(0, 4);
    POR_ID[c.id] = c;
    c.texto = norm([c.titulo, c.resumen, c.estado, (c.personas || []).join(" "), AMBITOS[c.ambito]].join(" "));
    c.enlaces = 0;
    c.eventos.forEach(function (e) {
      e.caso = c;
      e.k = clave(e.f);
      e.anio = e.f.slice(0, 4);
      e.medios = e.s.map(medio);
      e.texto = norm([e.h, e.t, e.medios.join(" ")].join(" "));
      c.enlaces += e.s.length;
      HITOS.push(e);
    });
  });

  var ANIOS = [];
  var POR_ANIO = {};
  HITOS.forEach(function (e) {
    if (!POR_ANIO[e.anio]) { POR_ANIO[e.anio] = 0; ANIOS.push(e.anio); }
    POR_ANIO[e.anio]++;
  });
  ANIOS.sort();
  var MAX_ANIO = Math.max.apply(null, ANIOS.map(function (a) { return POR_ANIO[a]; }));

  var TOTAL_ENLACES = HITOS.reduce(function (n, e) { return n + e.s.length; }, 0);

  var CUENTA_CLASE = { suceso: 0, judicial: 0, sentencia: 0 };
  var CUENTA_AMBITO = {};
  CASOS.forEach(function (c) {
    CUENTA_CLASE[c.clase]++;
    CUENTA_AMBITO[c.ambito] = (CUENTA_AMBITO[c.ambito] || 0) + 1;
  });

  // ---------- Estado ----------

  var estado = {
    clases: { suceso: true, judicial: true, sentencia: true },
    ambito: "",
    anio: "",
    q: "",
    vista: "crono",
    orden: "desc",
    caso: ""
  };

  function leerPreferencias() {
    try {
      var v = localStorage.getItem("registro.vista");
      var o = localStorage.getItem("registro.orden");
      if (v === "crono" || v === "casos") estado.vista = v;
      if (o === "asc" || o === "desc") estado.orden = o;
    } catch (e) { /* sin almacenamiento */ }
  }
  function guardarPreferencias() {
    try {
      localStorage.setItem("registro.vista", estado.vista);
      localStorage.setItem("registro.orden", estado.orden);
    } catch (e) { /* sin almacenamiento */ }
  }

  function leerHash() {
    var h = (location.hash || "").replace(/^#/, "");
    if (h.indexOf("caso-") === 0 && POR_ID[h.slice(5)]) estado.caso = h.slice(5);
    else estado.caso = "";
  }

  function filtrosActivos() {
    var n = 0;
    if (estado.q) n++;
    if (estado.ambito) n++;
    if (estado.anio) n++;
    CLASES.forEach(function (c) { if (!estado.clases[c.id]) n++; });
    return n;
  }

  // ---------- Filtros ----------

  function casoPasa(c) {
    if (!estado.clases[c.clase]) return false;
    if (estado.ambito && c.ambito !== estado.ambito) return false;
    if (estado.caso && c.id !== estado.caso) return false;
    return true;
  }

  function hitoPasa(e) {
    if (!casoPasa(e.caso)) return false;
    if (estado.anio && e.anio !== estado.anio) return false;
    if (estado.q) {
      var q = norm(estado.q);
      if (e.texto.indexOf(q) < 0 && e.caso.texto.indexOf(q) < 0) return false;
    }
    return true;
  }

  function casoVisible(c) {
    if (!casoPasa(c)) return false;
    var q = estado.q ? norm(estado.q) : "";
    return c.eventos.some(function (e) {
      if (estado.anio && e.anio !== estado.anio) return false;
      if (q && e.texto.indexOf(q) < 0 && c.texto.indexOf(q) < 0) return false;
      return true;
    });
  }

  // ---------- Plantillas ----------

  function fuentesHTML(e) {
    return '<ul class="fuentes">' + e.s.map(function (u, i) {
      return '<li><a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(e.medios[i]) + "</a></li>";
    }).join("") + "</ul>";
  }

  function selloHTML(clase) {
    return '<span class="sello sello-' + clase + '">' + esc(CLASE_LABEL[clase]) + "</span>";
  }

  function hitoHTML(e) {
    var c = e.caso;
    return '<li class="hito">' +
      '<time class="hito-fecha" datetime="' + esc(e.f) + '">' + esc(fechaCorta(e.f, false)) + "</time>" +
      '<div class="hito-cuerpo">' +
        '<div class="hito-meta">' +
          '<button type="button" class="caso-link" data-caso="' + c.id + '"><span class="num">Exp. ' + c.num + "</span>" + esc(c.titulo) + "</button>" +
          selloHTML(c.clase) +
          '<span class="tipo">' + esc(e.t) + "</span>" +
        "</div>" +
        "<h3>" + esc(e.h) + "</h3>" +
        fuentesHTML(e) +
      "</div>" +
    "</li>";
  }

  function fichaHTML(c, abierta) {
    var lista = c.eventos.filter(function (e) { return !estado.anio || e.anio === estado.anio; });
    if (estado.orden === "desc") lista.reverse();
    return '<article class="ficha c-' + c.clase + '" id="ficha-' + c.id + '">' +
      '<div class="ficha-cab"><span>Exp. ' + c.num + " · " + esc(AMBITOS[c.ambito]) + " · desde " + c.anioInicio + "</span>" + selloHTML(c.clase) + "</div>" +
      '<h3><button type="button" data-caso="' + c.id + '">' + esc(c.titulo) + "</button></h3>" +
      '<p class="estado"><b>Estado</b>' + esc(c.estado) + "</p>" +
      '<p class="resumen">' + esc(c.resumen) + "</p>" +
      (c.personas && c.personas.length ? '<ul class="personas" aria-label="Personas señaladas">' + c.personas.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" : "") +
      "<details" + (abierta ? " open" : "") + "><summary><span>" + plural(lista.length, "hito", "hitos") + " · " + plural(c.enlaces, "noticia", "noticias") + '</span><span class="abrir" aria-hidden="true"></span></summary>' +
        '<ol class="mini-hitos">' + lista.map(function (e) {
          return '<li><time class="f" datetime="' + esc(e.f) + '">' + esc(fechaCorta(e.f)) + "</time><div>" + esc(e.h) + fuentesHTML(e) + "</div></li>";
        }).join("") + "</ol>" +
      "</details>" +
    "</article>";
  }

  // ---------- Render ----------

  var $ = function (id) { return document.getElementById(id); };

  function renderTally() {
    var filas = [
      ["casos", CASOS.length],
      ["hitos", HITOS.length],
      ["noticias enlazadas", TOTAL_ENLACES],
      ["con sentencia", CUENTA_CLASE.sentencia, "destacado"]
    ];
    $("tally").innerHTML = filas.map(function (f) {
      return "<div" + (f[2] ? ' class="' + f[2] + '"' : "") + "><dt>" + f[0] + "</dt><dd>" + f[1] + "</dd></div>";
    }).join("");
  }

  function renderBarras() {
    $("barras").innerHTML = ANIOS.map(function (a) {
      var n = POR_ANIO[a];
      return '<button type="button" class="barra" data-anio="' + a + '" aria-pressed="false" aria-label="' + a + ": " + plural(n, "hito", "hitos") + '">' +
        '<span class="pista"><span class="v">' + n + '</span><span class="col" style="--p:' + (n / MAX_ANIO).toFixed(3) + '"></span></span>' +
        '<span class="y">' + a + "</span></button>";
    }).join("");
  }

  function renderFiltros() {
    $("clases").innerHTML = CLASES.map(function (cl) {
      return '<button type="button" class="opcion opcion-clase c-' + cl.id + '" data-clase="' + cl.id + '" aria-pressed="true">' +
        '<span class="caja">' + CHECK + '</span><span class="txt">' + esc(cl.label) + '</span><span class="n">' + CUENTA_CLASE[cl.id] + "</span></button>";
    }).join("");

    var amb = [["", "Todos", CASOS.length]];
    Object.keys(AMBITOS).forEach(function (k) { amb.push([k, AMBITOS[k], CUENTA_AMBITO[k] || 0]); });
    $("ambitos").innerHTML = amb.map(function (a) {
      return '<button type="button" class="opcion opcion-ambito" data-ambito="' + a[0] + '" aria-pressed="false">' +
        '<span class="txt">' + a[1] + '</span><span class="n">' + a[2] + "</span></button>";
    }).join("");

    var an = '<option value="">Todos</option>';
    ANIOS.slice().reverse().forEach(function (a) { an += '<option value="' + a + '">' + a + "</option>"; });
    $("anio").innerHTML = an;
  }

  function marcar(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), function (el) {
      el.setAttribute("aria-pressed", String(!!fn(el)));
    });
  }

  function sincronizarControles() {
    $("vista-crono").setAttribute("aria-pressed", String(estado.vista === "crono"));
    $("vista-casos").setAttribute("aria-pressed", String(estado.vista === "casos"));
    $("orden-asc").setAttribute("aria-pressed", String(estado.orden === "asc"));
    $("orden-desc").setAttribute("aria-pressed", String(estado.orden === "desc"));
    marcar(".opcion-clase", function (b) { return estado.clases[b.getAttribute("data-clase")]; });
    marcar(".opcion-ambito", function (b) { return b.getAttribute("data-ambito") === estado.ambito; });
    marcar(".barra", function (b) { return b.getAttribute("data-anio") === estado.anio; });
    $("barras").classList.toggle("con-anio", !!estado.anio);
    $("anio").value = estado.anio;
    if ($("q").value.trim() !== estado.q) $("q").value = estado.q;

    var n = filtrosActivos();
    $("limpiar").hidden = n === 0;
    $("n-filtros").hidden = n === 0;
    $("n-filtros").textContent = n;
  }

  function renderFocus() {
    var el = $("focus");
    if (!estado.caso) { el.hidden = true; el.innerHTML = ""; return; }
    var c = POR_ID[estado.caso];
    el.hidden = false;
    el.innerHTML = '<div class="focus-bar"><span>Expediente seleccionado</span><button type="button" class="btn-quitar" id="quitar-caso">Ver todos los casos</button></div>' +
      fichaHTML(c, estado.vista === "casos");
  }

  var VACIO = '<p class="vacio">Nada coincide con los filtros. Prueba a quitar la búsqueda o a activar más clasificaciones.</p>';

  function renderCrono() {
    var lista = HITOS.filter(hitoPasa);
    lista.sort(function (a, b) { return a.k < b.k ? -1 : a.k > b.k ? 1 : 0; });
    if (estado.orden === "desc") lista.reverse();

    var nCasos = {};
    lista.forEach(function (e) { nCasos[e.caso.id] = 1; });
    $("resultado").textContent = plural(lista.length, "hito", "hitos") + " de " + plural(Object.keys(nCasos).length, "caso", "casos");

    if (!lista.length) { $("contenido").innerHTML = VACIO; return; }

    var html = "";
    var anioActual = null;
    var grupo = [];
    function cerrar() {
      if (!grupo.length) return;
      html += '<section class="anio" aria-labelledby="a-' + anioActual + '"><h2 id="a-' + anioActual + '">' + anioActual +
        " <small>" + plural(grupo.length, "hito", "hitos") + "</small></h2>" +
        '<ol class="hitos">' + grupo.map(hitoHTML).join("") + "</ol></section>";
      grupo = [];
    }
    lista.forEach(function (e) {
      if (e.anio !== anioActual) { cerrar(); anioActual = e.anio; }
      grupo.push(e);
    });
    cerrar();
    $("contenido").innerHTML = html;
  }

  function renderCasos() {
    if (estado.caso) {
      $("resultado").textContent = "1 caso";
      $("contenido").innerHTML = "";
      return;
    }
    var lista = CASOS.filter(casoVisible);
    if (estado.orden === "desc") lista = lista.slice().reverse();
    $("resultado").textContent = plural(lista.length, "caso", "casos");
    if (!lista.length) { $("contenido").innerHTML = VACIO; return; }
    $("contenido").innerHTML = '<div class="fichas">' + lista.map(function (c) { return fichaHTML(c, false); }).join("") + "</div>";
  }

  function render() {
    sincronizarControles();
    renderFocus();
    if (estado.vista === "casos") renderCasos();
    else renderCrono();
  }

  // ---------- Eventos ----------

  function irAlRegistro() {
    var ancla = $("focus");
    if (!ancla || ancla.hidden) ancla = $("lista");
    ancla.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function seleccionarCaso(id) {
    if (id && POR_ID[id]) {
      if (location.hash !== "#caso-" + id) history.pushState(null, "", "#caso-" + id);
      estado.caso = id;
    } else {
      if (location.hash) history.pushState(null, "", location.pathname + location.search);
      estado.caso = "";
    }
    render();
    irAlRegistro();
  }

  function limpiarFiltros() {
    estado.clases = { suceso: true, judicial: true, sentencia: true };
    estado.ambito = "";
    estado.anio = "";
    estado.q = "";
    render();
  }

  document.addEventListener("click", function (ev) {
    var t = ev.target.closest ? ev.target.closest("[data-caso], .opcion-clase, .opcion-ambito, .barra, [data-vista], [data-orden], #quitar-caso, #limpiar, #btn-filtros") : null;
    if (!t) return;
    if (t.id === "quitar-caso") { seleccionarCaso(""); return; }
    if (t.id === "limpiar") { limpiarFiltros(); return; }
    if (t.id === "btn-filtros") {
      var abierta = $("filtros").classList.toggle("abierta");
      t.setAttribute("aria-expanded", String(abierta));
      return;
    }
    if (t.hasAttribute("data-caso")) { seleccionarCaso(t.getAttribute("data-caso")); return; }
    if (t.classList.contains("opcion-clase")) {
      var k = t.getAttribute("data-clase");
      estado.clases[k] = !estado.clases[k];
      if (!estado.clases.suceso && !estado.clases.judicial && !estado.clases.sentencia) estado.clases[k] = true;
      render();
      return;
    }
    if (t.classList.contains("opcion-ambito")) { estado.ambito = t.getAttribute("data-ambito"); render(); return; }
    if (t.classList.contains("barra")) {
      var a = t.getAttribute("data-anio");
      estado.anio = estado.anio === a ? "" : a;
      render();
      return;
    }
    if (t.hasAttribute("data-vista")) { estado.vista = t.getAttribute("data-vista"); guardarPreferencias(); render(); return; }
    if (t.hasAttribute("data-orden")) { estado.orden = t.getAttribute("data-orden"); guardarPreferencias(); render(); return; }
  });

  var temporizador;
  $("q").addEventListener("input", function (ev) {
    clearTimeout(temporizador);
    var v = ev.target.value;
    temporizador = setTimeout(function () { estado.q = v.trim(); render(); }, 120);
  });
  $("anio").addEventListener("change", function (ev) { estado.anio = ev.target.value; render(); });
  window.addEventListener("hashchange", function () { leerHash(); render(); });
  window.addEventListener("popstate", function () { leerHash(); render(); });

  // ---------- Inicio ----------

  if (ACTUALIZADO) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-actualizado]"), function (el) { el.textContent = fechaLarga(ACTUALIZADO); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-actualizado-mes]"), function (el) { el.textContent = fechaLarga(ACTUALIZADO.slice(0, 7)); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-actualizado-corto]"), function (el) { el.textContent = fechaCorta(ACTUALIZADO); });
  }
  leerPreferencias();
  leerHash();
  renderTally();
  renderBarras();
  renderFiltros();
  render();
})();
