/*
 * Registro hemerográfico de escándalos del PSOE (junio 2018 – septiembre 2026)
 *
 * Cada caso:
 *   id        identificador corto (se usa en la URL: #caso-<id>)
 *   titulo    nombre del caso
 *   clase     "suceso" | "judicial" | "sentencia"
 *               suceso    → hechos documentados por la prensa sin causa penal abierta
 *                           contra los señalados (incluye causas archivadas)
 *               judicial  → causa penal abierta (diligencias, imputación, procesamiento o juicio pendiente)
 *               sentencia → existe al menos una sentencia (firme o recurrida)
 *   ambito    "partido" | "gobierno" | "entorno" | "territorial"
 *   estado    situación a fecha de actualización
 *   resumen   descripción breve y neutral
 *   personas  personas señaladas (cargos públicos o figuras públicas)
 *   eventos   hitos con fecha y enlaces a la prensa
 *     f  fecha ISO (AAAA-MM-DD, o AAAA-MM si solo se conoce el mes)
 *     t  tipo de hito
 *     h  titular del hito (redacción propia)
 *     s  enlaces a noticias de prensa (nunca vídeos)
 *
 * Para añadir un enlace de otro diario (ABC, El Mundo, El País…) basta con
 * añadir la URL al array "s" del hito correspondiente.
 */
window.ACTUALIZADO = "2026-09-24";

window.CASOS = [
  {
    id: "huerta",
    titulo: "Màxim Huerta y su deuda con Hacienda",
    clase: "suceso",
    ambito: "gobierno",
    estado: "Dimitió como ministro de Cultura y Deporte a los seis días de su nombramiento.",
    resumen: "Se conoció que Hacienda le había sancionado por tributar a través de una sociedad los ingresos de 2006-2008 (unos 218.000 euros). Dimitió declarándose inocente.",
    personas: ["Màxim Huerta"],
    eventos: [
      { f: "2018-06-13", t: "dimisión", h: "Huerta dimite como ministro de Cultura tras conocerse su condena por defraudar a Hacienda", s: [
        "https://www.elespanol.com/espana/20180613/maxim-huerta-dimite-ministro-cultura-escandalo-impuestos/314719415_0.html",
        "https://www.eleconomista.es/politica/noticias/9205684/06/18/Mxim-Huerta-anunciara-su-dimision-como-ministro-de-Cultura-tras-conocerse-su-condena-por-defraudar-a-Hacienda.html",
        "https://www.cope.es/actualidad/cultura/noticias/maxim-huerta-dimite-por-escandalo-del-fraude-hacienda-20180613_226913"
      ] }
    ]
  },
  {
    id: "falcon-fib",
    titulo: "El Falcon al Festival de Benicàssim",
    clase: "suceso",
    ambito: "gobierno",
    estado: "Sin consecuencias judiciales. El Gobierno declaró el viaje secreto oficial.",
    resumen: "Pedro Sánchez viajó en el avión oficial a Castellón, donde asistió con su mujer a un concierto del FIB tras una breve reunión con Ximo Puig. Moncloa clasificó el viaje y después cifró su coste en 283 euros de protocolo.",
    personas: ["Pedro Sánchez"],
    eventos: [
      { f: "2018-07-21", t: "revelación", h: "Sánchez utiliza el avión oficial para asistir con su mujer al concierto de The Killers en el FIB", s: [
        "https://www.elindependiente.com/politica/2018/07/21/pedro-sanchez-utiliza-avion-oficial-asistir-mujer-al-concierto-del-fib/"
      ] },
      { f: "2018-08-19", t: "decisión política", h: "El Gobierno declara secreto oficial el viaje de Sánchez al FIB en el Falcon", s: [
        "https://www.elespanol.com/espana/politica/20180819/pp-verguenza-nacional-sanchez-oculte-fib-secreto/331467182_0.html",
        "https://www.elindependiente.com/politica/2018/08/19/pp-tacha-verguenza-nacional-viaje-sanchez-al-fib-sea-secreto-estado/"
      ] },
      { f: "2019-01-02", t: "decisión política", h: "Moncloa cifra en 283 euros el coste del viaje al FIB y mantiene el resto en secreto", s: [
        "https://www.elespanol.com/espana/politica/20190102/gobierno-aclara-sanchez-fib-falcon-secreto-protocolo/365464010_0.html"
      ] }
    ]
  },
  {
    id: "monton",
    titulo: "El máster de Carmen Montón",
    clase: "suceso",
    ambito: "gobierno",
    estado: "Dimitió como ministra de Sanidad. En 2020 fue nombrada embajadora ante la OEA.",
    resumen: "Irregularidades en su máster de Estudios de Género en la Universidad Rey Juan Carlos: notas modificadas a posteriori y 19 de las 52 páginas del trabajo final con textos coincidentes con otros autores.",
    personas: ["Carmen Montón"],
    eventos: [
      { f: "2018-09-11", t: "dimisión", h: "Carmen Montón dimite como ministra de Sanidad por las irregularidades de su máster", s: [
        "https://www.eldiario.es/politica/ministra-carmen-monton-dimite-irregularidades_1_1940816.html",
        "https://www.elespanol.com/espana/politica/20180911/ministra-monton-dimite-irregularidades-master/337217277_0.html",
        "https://www.publico.es/politica/dimite-ministra-carmen-monton.html"
      ] },
      { f: "2020-03", t: "decisión política", h: "Sánchez recupera a Montón y la nombra embajadora ante la OEA", s: [
        "https://www.eldiario.es/politica/Sanchez-Carmen-Monton-embajadora-OEA_0_1004400525.html"
      ] }
    ]
  },
  {
    id: "tesis",
    titulo: "La tesis doctoral de Pedro Sánchez",
    clase: "suceso",
    ambito: "gobierno",
    estado: "Sin causa judicial. Moncloa sostuvo que la tesis superaba los controles antiplagio.",
    resumen: "Polémica por el grado de coincidencias de la tesis del presidente (Universidad Camilo José Cela, 2012). Moncloa publicó análisis de Turnitin (13 %) y PlagScan (0,96 %); la propia PlagScan elevó después la coincidencia al 21 %.",
    personas: ["Pedro Sánchez"],
    eventos: [
      { f: "2018-09-14", t: "revelación", h: "Moncloa publica la tesis y los análisis antiplagio de Turnitin y PlagScan", s: [
        "https://www.elindependiente.com/politica/2018/09/14/que-es-y-como-funciona-turnitin-el-programa-antiplagio-que-se-uso-en-la-tesis-de-sanchez/",
        "https://www.publico.es/politica/tesis-pedro-sanchez-tesis-doctoral-sanchez-supera-controles-detectar-plagios-moncloa.html"
      ] },
      { f: "2018-09-19", t: "revelación", h: "PlagScan eleva al 21 % el porcentaje de coincidencia en la tesis de Sánchez", s: [
        "https://www.elespanol.com/espana/politica/20180919/plagscan-eleva-porcentaje-coincidencia-tesis-sanchez/339216280_0.html"
      ] }
    ]
  },
  {
    id: "delgado-villarejo",
    titulo: "Dolores Delgado: audios con Villarejo y salto a la Fiscalía",
    clase: "suceso",
    ambito: "gobierno",
    estado: "Sin causa penal. Fue fiscal general del Estado entre 2020 y 2022.",
    resumen: "Se publicaron grabaciones de una comida de 2009 de la entonces ministra de Justicia con el comisario Villarejo y Baltasar Garzón. En 2020 Sánchez la propuso como fiscal general del Estado directamente desde el Ministerio, lo que las asociaciones de fiscales criticaron como injerencia.",
    personas: ["Dolores Delgado"],
    eventos: [
      { f: "2018-09-24", t: "revelación", h: "Se publican los audios de la comida de la ministra Delgado con Villarejo y Garzón", s: [
        "https://www.elespanol.com/espana/tribunales/20180924/ministra-justicia-convierte-relacion-villarejo-garzon-gobierno/340466476_0.html",
        "https://www.libertaddigital.com/espana/2018-09-24/los-audios-de-la-comida-de-villarejo-garzon-y-su-pareja-dolores-delgado-1276625357/"
      ] },
      { f: "2020-01-13", t: "decisión política", h: "Sánchez propone a la exministra Delgado como fiscal general del Estado", s: [
        "https://www.elindependiente.com/politica/2020/01/13/dolores-delgado-la-fiscal-general-del-estado-que-daba-mitines-del-psoe/",
        "https://www.eleconomista.es/politica/noticias/10294518/01/20/La-Asociacion-de-Fiscales-en-contra-de-que-Delgado-sea-Fiscal-General-del-Estado-el-Gobierno-quiere-tener-sometida-a-la-Fiscalia.html"
      ] }
    ]
  },
  {
    id: "delcygate",
    titulo: "Delcygate: Ábalos y Delcy Rodríguez en Barajas",
    clase: "suceso",
    ambito: "gobierno",
    estado: "Las causas contra funcionarios se archivaron en 2021. El episodio reaparece en la investigación de Aldama sobre la financiación del PSOE.",
    resumen: "El ministro Ábalos, acompañado de Koldo García, se reunió de madrugada en Barajas con la vicepresidenta venezolana Delcy Rodríguez, que tenía prohibida la entrada en el espacio Schengen.",
    personas: ["José Luis Ábalos", "Koldo García"],
    eventos: [
      { f: "2020-01-23", t: "revelación", h: "Se revela el encuentro secreto de Ábalos con Delcy Rodríguez en Barajas", s: [
        "https://www.vozpopuli.com/espana/claves-caso-delcygate_0_1394561997.html"
      ] },
      { f: "2021-06-04", t: "archivo", h: "Los tribunales archivan las causas abiertas por la escala de Delcy Rodríguez en Barajas", s: [
        "https://www.eldiario.es/politica/audiencia-madrid-archiva-definitivamente-caso-encuentro-abalos-delcy-rodriguez_1_7799937.html",
        "https://www.cope.es/actualidad/espana/noticias/cierra-caso-que-investigaba-abalos-por-reunirse-con-delcy-rodriguez-barajas-20210604_1326352"
      ] },
      { f: "2026-03-24", t: "declaración", h: "Aldama sostiene ante el juez que Delcy negoció en Barajas con Ábalos los barriles de crudo del sobre de la financiación del PSOE", s: [
        "https://www.elespanol.com/espana/20260324/delcy-negocio-barajas-abalos-barriles-crudo-estipulados-aldama-financiar-psoe/1003744180956_0.html"
      ] }
    ]
  },
  {
    id: "ere",
    titulo: "Caso ERE de Andalucía",
    clase: "sentencia",
    ambito: "territorial",
    estado: "Condenas confirmadas por el Supremo en 2022; el Constitucional anuló en 2024 la condena de cárcel de Griñán y rebajó la de Chaves.",
    resumen: "Sistema de ayudas sociolaborales de la Junta de Andalucía (gobiernos del PSOE) que el Supremo consideró fuera de todo control administrativo, con unos 680 millones de euros. Los hechos son anteriores a 2018; las sentencias se dictaron durante el Gobierno de Sánchez.",
    personas: ["José Antonio Griñán", "Manuel Chaves", "Antonio Fernández", "Magdalena Álvarez", "Gaspar Zarrías"],
    eventos: [
      { f: "2019-11-19", t: "sentencia", h: "La Audiencia de Sevilla condena a Griñán a seis años de cárcel y a Chaves a nueve de inhabilitación", s: [
        "https://www.libertaddigital.com/espana/2019-11-19/sentencia-ere-grinan-chaves-corrupcion-socialista-1276648203/",
        "https://www.publico.es/politica/fraude-ere-caso-liquido-hegemonia-psoe-andalucia-seis-claves.html"
      ] },
      { f: "2022-07-26", t: "sentencia", h: "El Supremo confirma por mayoría las condenas de Griñán y Chaves", s: [
        "https://www.elespanol.com/espana/tribunales/20220726/mayoria-supremo-confirmar-condena-grinan-chaves-ere/686931736_0.html",
        "https://www.elindependiente.com/espana/2022/07/26/el-supremo-confirma-la-sentencia-de-los-ere-y-coloca-a-grinan-a-un-paso-de-la-carcel/",
        "https://www.eldiario.es/andalucia/sentencia-supremo-confirma-condenas-ere-andalucia-actuaron-conocimiento-irregularidades_1_9314597.html"
      ] },
      { f: "2024-07-16", t: "sentencia", h: "El Constitucional anula la condena de cárcel de Griñán y rebaja la inhabilitación de Chaves", s: [
        "https://www.eldiario.es/andalucia/constitucional-ordena-rebajar-condena-inhabilitacion-expresidente-chaves-ere-andalucia_1_11525694.html",
        "https://www.eldebate.com/espana/20240716/pumpido-consuma-indulto-ere-psoe-anula-condena-manuel-chaves_213556.html",
        "https://www.eleconomista.es/legal/noticias/12911733/07/24/el-tribunal-constitucional-anula-la-condena-a-manuel-chaves-en-el-caso-de-los-ere.html"
      ] }
    ]
  },
  {
    id: "plus-ultra",
    titulo: "Rescate de Plus Ultra y caso Zapatero",
    clase: "judicial",
    ambito: "gobierno",
    estado: "En instrucción en la Audiencia Nacional. Zapatero, imputado desde mayo de 2026; sus hijas, citadas como investigadas el 30 de noviembre de 2026.",
    resumen: "La SEPI rescató en 2021 con 53 millones a una aerolínea con un solo avión operativo. La causa por el rescate se archivó en 2023; una nueva investigación por blanqueo llevó a detenciones en 2025 y a la imputación del expresidente Zapatero por organización criminal, tráfico de influencias y falsedad.",
    personas: ["José Luis Rodríguez Zapatero", "Julio Martínez Martínez", "Julio Martínez Sola", "Roberto Roselli"],
    eventos: [
      { f: "2021-03-09", t: "decisión política", h: "El Consejo de Ministros aprueba el rescate de 53 millones a Plus Ultra", s: [
        "https://www.eldiario.es/economia/puntos-oscuros-rescate-estatal-53-millones-aerolinea-plus-ultra_1_7348049.html",
        "https://www.eleconomista.es/empresas-finanzas/noticias/11099824/03/21/La-Sepi-rescata-a-la-aerolinea-ligada-a-Maduro-pese-a-llevar-anos-en-perdidas.html",
        "https://www.elespanol.com/invertia/empresas/turismo/20210323/informes-independientes-avalan-millones-sepi-plus-ultra/568193988_0.html"
      ] },
      { f: "2022-07-26", t: "revelación", h: "Sale a la luz un informe confidencial que desaconsejaba el rescate", s: [
        "https://www.eldebate.com/espana/20220726/debate-desvela-informe-confidencial-gobierno-oculto-rescatar-plus-ultra-millonada.html",
        "https://www.vozpopuli.com/economia/tres-informes-confidenciales-plus-ultra-incumplia-criterios-rescatada-53-millones.html"
      ] },
      { f: "2025-12-11", t: "detención", h: "Detenidos el presidente y el consejero delegado de Plus Ultra y el consultor Julio Martínez, amigo de Zapatero", s: [
        "https://www.eleconomista.es/actualidad/noticias/13691063/12/25/julio-martinez-cliente-de-las-hijas-de-zapatero-entre-los-detenidos-en-la-investigacion-a-plus-ultra.html",
        "https://www.vozpopuli.com/espana/detienen-al-cliente-de-las-hijas-de-zapatero-que-se-hizo-broker-aereo-por-el-caso-plus-ultra.html",
        "https://www.elespanol.com/espana/tribunales/20251213/libertad-leves-medidas-cautelares-ceo-presidente-plus-ultra-empresario-julio-martinez/1003744054181_0.html"
      ] },
      { f: "2025-12-16", t: "informe", h: "La Policía sitúa a Julio Martínez como testaferro de Zapatero y la UCO recoge reuniones del expresidente con la SEPI", s: [
        "https://theobjective.com/espana/2025-12-16/policia-julio-martinez-testaferro-zapatero-venezuela/",
        "https://www.libertaddigital.com/espana/2025-12-16/zapatero-se-reunio-con-la-sepi-y-escriva-durante-el-rescate-de-plus-ultra-segun-la-uco-7334105/"
      ] },
      { f: "2026-01-12", t: "revelación", h: "Los imputados recibieron un soplo de la investigación dos meses antes de las detenciones", s: [
        "https://www.elespanol.com/espana/tribunales/20260112/imputados-caso-plus-ultra-recibieron-soplo-investigados-meses-detenciones/1003744085389_0.html"
      ] },
      { f: "2026-05-19", t: "imputación", h: "La Audiencia Nacional imputa a Zapatero por organización criminal, tráfico de influencias y falsedad", s: [
        "https://www.eldiario.es/politica/zapatero-imputado-blanqueo-capitales-caso-plus-ultra_1_13231540.html",
        "https://theobjective.com/espana/tribunales/2026-05-19/zapatero-imputado-blanqueo-audiencia-nacional/",
        "https://www.publico.es/politica/tribunales/zapatero-imputado-caso-plus-ultra-blanqueo-capitales.html"
      ] },
      { f: "2026-07-20", t: "declaración", h: "Julio Martínez declara que Zapatero pactó una comisión del 1 % por el rescate", s: [
        "https://www.libertaddigital.com/espana/2026-07-20/julio-martinez-julito-tira-manta-zapatero-pacto-comision-1-por-rescate-gobierno-plus-ultra-7438278/",
        "https://www.libertaddigital.com/espana/2026-07-20/plus-ultra-reconoce-que-contrato-a-julito-martinez-por-su-relacion-con-zapatero-7438338/"
      ] },
      { f: "2026-07-24", t: "dimisión", h: "Dimiten el presidente y el consejero delegado de Plus Ultra, investigados por el rescate", s: [
        "https://www.eldiario.es/politica/dimiten-presidente-ceo-plus-ultra-investigados-rescate-aerolinea_1_13406035.html",
        "https://www.eldebate.com/espana/20260724/dimiten-presidente-ceo-plus-ultra-investigados-prestamo-aerolinea_443531.html"
      ] },
      { f: "2026-09-21", t: "imputación", h: "El juez cita a las hijas de Zapatero como investigadas el 30 de noviembre", s: [
        "https://www.vozpopuli.com/tribunales/la-audiencia-nacional-cita-a-las-hijas-de-zapatero-como-imputadas-en-el-caso-plus-ultra.html",
        "https://www.libertaddigital.com/espana/2026-09-21/el-juez-cita-a-las-hijas-de-zapatero-el-30-de-noviembre-por-el-caso-plus-ultra-7463421/"
      ] }
    ]
  },
  {
    id: "azud",
    titulo: "Caso Azud: comisiones y financiación del PSPV",
    clase: "judicial",
    ambito: "territorial",
    estado: "Instrucción cerrada en septiembre de 2026 con 38 procesados; la jueza ve financiación ilegal del PSOE de Valencia. Pendiente de juicio.",
    resumen: "Macrocausa por cobro de comisiones a empresarios en Valencia. Afecta sobre todo a antiguos cargos del PP, pero la jueza procesa también a Rafael Rubio, exportavoz socialista en el Ayuntamiento y subdelegado del Gobierno de Sánchez en 2020-2021, y aprecia pagos para gastos electorales del PSPV.",
    personas: ["Rafael Rubio"],
    eventos: [
      { f: "2021-05-13", t: "detención", h: "Detenidos, entre otros, el subdelegado del Gobierno en Valencia, Rafael Rubio, en la operación Azud", s: [
        "https://www.cope.es/actualidad/espana/noticias/grau-rubio-seran-trasladados-comandancia-tras-presenciar-los-registros-20210513_1288062"
      ] },
      { f: "2025-06-20", t: "informe", h: "La UCO atribuye al exportavoz socialista cobros de la trama e ingresos de 200.000 euros en efectivo", s: [
        "https://theobjective.com/espana/politica/2025-06-20/ex-subdelegado-psoe-valenciano-200-000-euros-efectivo-uco/",
        "https://www.eldiario.es/comunitat-valenciana/uco-acredita-exportavoz-socialista-ayuntamiento-valencia-cobro-comisiones-300-000-euros_1_12402195.html"
      ] },
      { f: "2026-09-04", t: "procesamiento", h: "La jueza cierra la instrucción con 38 procesados y aprecia financiación ilegal del PSOE valenciano", s: [
        "https://www.elindependiente.com/espana/2026/09/04/la-jueza-cierra-la-instruccion-del-caso-azud-con-38-imputados-y-ve-financiacion-ilegal-del-psoe-de-valencia/",
        "https://www.eldebate.com/espana/comunidad-valenciana/20260903/procesan-exnumero-dos-rita-barbera-exsubdelegado-gobierno-sanchez-macrocausa-corrupcion-caso-azud_455153.html",
        "https://www.eldebate.com/espana/comunidad-valenciana/20260905/pagos-484000-euros-gastos-electorales-psoe-valenciano-exsubdelegado-gobierno-sanchez-procesado_455532.html"
      ] },
      { f: "2026-09-16", t: "recurso", h: "Rubio niega ser el «RR» de las anotaciones de pagos y recurre su procesamiento", s: [
        "https://www.eldiario.es/comunitat-valenciana/rafael-rubio-ex-subdelegado-gobierno-procesado-caso-azud-niega-rr-mordidas_1_13508073.html",
        "https://www.eldebate.com/espana/comunidad-valenciana/20260916/rafael-rubio-exsubdelegado-sanchez-valencia-niega-rr-comisiones-ilicitas-recurre-procesamiento_458782.html"
      ] }
    ]
  },
  {
    id: "echavarri",
    titulo: "Gabriel Echávarri, exalcalde de Alicante",
    clase: "sentencia",
    ambito: "territorial",
    estado: "Condenas firmes por dos delitos de prevaricación. En 2025 el PSOE de Alicante lo recuperó como delegado de congreso.",
    resumen: "El alcalde socialista de Alicante (2015-2018) fue condenado por fraccionar contratos del área de Comercio y por despedir de forma arbitraria a la cuñada del portavoz del PP.",
    personas: ["Gabriel Echávarri"],
    eventos: [
      { f: "2022-05-11", t: "sentencia", h: "Confirmadas las condenas al exalcalde de Alicante por fraccionar contratos y despedir por venganza", s: [
        "https://www.elespanol.com/alicante/20220511/confirman-exalcalde-alicante-psoe-fraccionar-contratos-despedir/671682998_0.html",
        "https://www.publico.es/politica/exalcalde-socialista-alicante-gabriel-echavarri-condenado-ocho-anos-seis-meses-inhabilitacion-prevaricacion.html",
        "https://www.eldiario.es/comunitat-valenciana/alicante/condenado-alicante-gabriel-echavarri-pp_1_1139388.html"
      ] },
      { f: "2025-05-29", t: "decisión política", h: "El PSOE recupera como delegado de su congreso de Alicante al exalcalde condenado", s: [
        "https://www.eldebate.com/espana/comunidad-valenciana/20250529/psoe-recupera-como-delegado-congreso-alicante-exalcalde-condenado-prevaricacion_301650.html"
      ] }
    ]
  },
  {
    id: "ascenso-delgado",
    titulo: "El ascenso de Dolores Delgado, anulado por «desviación de poder»",
    clase: "sentencia",
    ambito: "gobierno",
    estado: "Sentencias del Supremo (vía contencioso-administrativa, no penal). El Constitucional admitió a trámite el amparo de Delgado en 2025.",
    resumen: "El fiscal general García Ortiz promovió a su antecesora a fiscal de Sala. El Supremo anuló ese ascenso por desviación de poder y, meses después, también su nombramiento como fiscal de Memoria Democrática.",
    personas: ["Dolores Delgado", "Álvaro García Ortiz"],
    eventos: [
      { f: "2023-11-21", t: "sentencia", h: "El Supremo anula el ascenso de Delgado a fiscal de Sala por desviación de poder", s: [
        "https://www.elespanol.com/espana/tribunales/20231121/supremo-tumba-desviacion-poder-ascenso-dolores-delgado-fiscal-sala/811419033_0.html",
        "https://www.infolibre.es/politica/supremo-anula-ascenso-dolores-delgado-fiscal-sala-hubo-desviacion_1_1647053.html",
        "https://theobjective.com/espana/tribunales/2023-11-21/supremo-ascenso-delgado-desviacion-poder/"
      ] },
      { f: "2024-05", t: "sentencia", h: "El Supremo anula también el nombramiento de Delgado como fiscal de Memoria Democrática", s: [
        "https://www.eldiario.es/politica/segundo-varapalo-supremo-dolores-delgado-anula-nombramiento-fiscal-memoria-democratica_1_11343187.html",
        "https://www.publico.es/politica/supremo-anula-nombramiento-dolores-delgado-fiscal-memoria-democratica.html"
      ] },
      { f: "2025-01-28", t: "recurso", h: "El Constitucional admite a trámite el amparo de Delgado contra la anulación de su ascenso", s: [
        "https://www.elespanol.com/espana/tribunales/20250128/tc-revisara-decision-supremo-anular-ascenso-dolores-delgado-fiscal-sala-desviacion-poder/919908225_0.html"
      ] }
    ]
  },
  {
    id: "mediador",
    titulo: "Caso Mediador («Tito Berni»)",
    clase: "judicial",
    ambito: "partido",
    estado: "Instrucción concluida en febrero de 2026 con 23 procesados. La Fiscalía pide ocho años de cárcel para Fuentes Curbelo. Pendiente de juicio.",
    resumen: "Trama de cobros a empresarios canarios a cambio de ayudas y gestiones, en la que se sitúa como cabecilla al diputado socialista Juan Bernardo Fuentes Curbelo. La investigación recogió fiestas pagadas por la trama.",
    personas: ["Juan Bernardo Fuentes Curbelo", "Taishet Fuentes", "Francisco Espinosa"],
    eventos: [
      { f: "2023-02-14", t: "detención", h: "Estalla el caso Mediador; el PSOE obliga al diputado Fuentes Curbelo a entregar el acta", s: [
        "https://www.eldiario.es/politica/no-sales-entregar-acta-ultimo-dia-congreso-diputado-psoe-detenido-corrupcion_1_9979989.html",
        "https://theobjective.com/espana/politica/2023-03-01/tito-berni-papa-caso-mediador/"
      ] },
      { f: "2023-02-27", t: "declaración", h: "«Tito Berni» se presenta como víctima y lamenta que su partido le dé la espalda", s: [
        "https://www.elindependiente.com/espana/2023/02/27/el-exdiputado-del-psoe-tito-berni-dice-que-es-una-victima-y-lamenta-que-su-partido-le-de-la-espalda/"
      ] },
      { f: "2023-07-11", t: "informe", h: "La Policía identifica a media docena de diputados del PSOE en fiestas de la trama", s: [
        "https://theobjective.com/espana/tribunales/2023-07-11/policia-tito-berni-diputados-psoe/"
      ] },
      { f: "2026-02-12", t: "procesamiento", h: "La jueza cierra la instrucción y procesa a 23 personas, entre ellas Fuentes Curbelo", s: [
        "https://www.eldiario.es/canariasahora/tribunales/juez-caso-mediador-concluye-instruccion-procesa-23-personas-nueve-delitos_1_12985141.html",
        "https://www.elespanol.com/espana/tribunales/20260212/juez-caso-mediador-propone-juzgar-exdiputado-psoe-tito-berni-estafa-cohecho-malversacion/1003744127572_0.html"
      ] },
      { f: "2026-06", t: "procesamiento", h: "La Fiscalía pide ocho años de cárcel para «Tito Berni», once para su sobrino y trece para el mediador", s: [
        "https://www.publico.es/politica/tribunales/fiscalia-pide-ocho-anos-tito-berni-11-sobrino-13-mediador.html"
      ] }
    ]
  },
  {
    id: "maracena",
    titulo: "Secuestro de una concejala en Maracena",
    clase: "suceso",
    ambito: "territorial",
    estado: "Causa archivada en enero de 2024 para los dirigentes socialistas; solo siguió investigado el autor material.",
    resumen: "La pareja de la alcaldesa socialista de Maracena (Granada) secuestró a una concejala del PSOE. El juez llegó a señalar como posibles inductores al número tres del PSOE andaluz, Noel López, y a la alcaldesa, que dimitieron.",
    personas: ["Noel López", "Berta Linares"],
    eventos: [
      { f: "2023-05-25", t: "imputación", h: "El juez pide imputar al número tres del PSOE andaluz, que deja temporalmente el cargo", s: [
        "https://theobjective.com/espana/tribunales/2023-05-25/imputan-psoe-secuestro-maracena/",
        "https://www.eldiario.es/andalucia/numero-3-psoe-andaluz-dimite-verse-salpicado-secuestro-edil-socialista-maracena_1_10252968.html"
      ] },
      { f: "2023-06-09", t: "dimisión", h: "Dimite la alcaldesa socialista de Maracena", s: [
        "https://www.elespanol.com/espana/andalucia/20230609/dimite-alcaldesa-maracena-secuestro-exigencia-iu-psoe/770173101_0.html"
      ] },
      { f: "2024-01", t: "archivo", h: "El juez archiva la investigación a los dirigentes socialistas", s: [
        "https://www.infolibre.es/politica/juez-provoco-terremoto-psoe-visperas-municipales-cierra-caso_1_1684572.html"
      ] }
    ]
  },
  {
    id: "mojacar",
    titulo: "Compra de votos en Mojácar",
    clase: "judicial",
    ambito: "territorial",
    estado: "Investigación judicial abierta en el Juzgado de Vera; no consta sentencia.",
    resumen: "La Guardia Civil detuvo antes de las municipales de 2023 a los números dos y cinco de la lista del PSOE en Mojácar (Almería) por presunta compra de votos por correo. El PSOE suspendió de militancia a su número dos.",
    personas: ["Francisco Bartolomé Flores", "Cristóbal Vizcaíno"],
    eventos: [
      { f: "2023-05-24", t: "detención", h: "Detenidos dos candidatos del PSOE en Mojácar por presunta compra de votos", s: [
        "https://www.eldiario.es/andalucia/cuatro-personas-detenidas-compra-votos-mojacar-almeria_1_10232505.html",
        "https://theobjective.com/espana/2023-05-24/detenidos-compra-votos-mojacar-almeria/"
      ] },
      { f: "2023-05-26", t: "informe", h: "La Fiscalía cuenta con numerosos testigos y apunta a una trama organizada", s: [
        "https://www.elespanol.com/espana/tribunales/20230526/fiscal-numerosos-testigos-compra-mojacar-apunta-tramaorganizada/766423819_0.html",
        "https://www.vozpopuli.com/espana/trama-mojacar-psoe-500-votos-alcaldia.html"
      ] },
      { f: "2025-04-25", t: "declaración", h: "Un testigo afirma que el PSOE le ofreció trabajo a cambio del voto por correo", s: [
        "https://theobjective.com/espana/tribunales/2025-04-25/testigo-fraude-voto-correo-psoe/"
      ] }
    ]
  },
  {
    id: "faffe",
    titulo: "Caso Faffe: gastos en prostíbulos y enchufes",
    clase: "sentencia",
    ambito: "territorial",
    estado: "Condenados el exdirector y la exdirectora financiera por el pago en prostíbulos (pena rebajada por el TSJA en 2026). Siguen abiertas otras piezas.",
    resumen: "La Fundación Andaluza Fondo de Formación y Empleo, creada por la Junta socialista, pagó con tarjetas públicas 32.566 euros en clubes de alterne y contrató a cargos afines, entre ellos un exalcalde socialista que no iba a trabajar.",
    personas: ["Fernando Villén"],
    eventos: [
      { f: "2023-09-21", t: "sentencia", h: "Seis años de cárcel para el exdirector de la Faffe por pagar prostíbulos con dinero público", s: [
        "https://www.eldiario.es/andalucia/condenado-seis-anos-carcel-exdirectivo-junta-andalucia-pago-dinero-publico-prostibulos_1_10532366.html",
        "https://www.elespanol.com/espana/tribunales/20230921/condenan-anos-excargo-andaluz-gasto-eur-fondos-publicos-prostibulos/796170402_0.html"
      ] },
      { f: "2025-04", t: "sentencia", h: "Condenado un exalcalde socialista de Lebrija contratado en la Faffe sin hacer «trabajo alguno»", s: [
        "https://www.eldiario.es/sevilla/condenado-exalcalde-psoe-sevilla-empresa-publica-junta-trabajo_1_12259347.html",
        "https://www.publico.es/politica/tribunales/carcel-exalcalde-psoe-iba-trabajar-exdirector-fundacion-andaluza-contrato.html"
      ] },
      { f: "2025-05-04", t: "informe", h: "Nueve años después siguen investigados 84 enchufes y 21 excargos de la Junta", s: [
        "https://www.elespanol.com/espana/andalucia/20250504/queda-caso-faffe-anos-despues-enchufes-picota-excargos-junta-andaluza-investigados/1003743739763_0.html"
      ] },
      { f: "2026-04-24", t: "sentencia", h: "El TSJA rebaja a cinco años y tres meses la condena del exdirector de la Faffe", s: [
        "https://theobjective.com/espana/tribunales/2026-04-24/rebajan-pena-exdirector-fundacion-andaluza-condenado-prostibulos/",
        "https://www.eldebate.com/espana/andalucia/20260424/rebajan-condena-exdirector-faffe-fernando-villen-gastos-32000-euros-prostibulos_410721.html"
      ] }
    ]
  },
  {
    id: "cursos-formacion",
    titulo: "Fraude de los cursos de formación en Andalucía",
    clase: "judicial",
    ambito: "territorial",
    estado: "En instrucción. La UCO cifra en 950 millones las ayudas sin justificar (no es una cifra de fraude declarada judicialmente).",
    resumen: "Investigación sobre las subvenciones para cursos de formación concedidas por la Junta durante los gobiernos del PSOE, sin justificación ni reintegro. Parte de la causa llegó a la Fiscalía Europea.",
    personas: [],
    eventos: [
      { f: "2022-10-03", t: "informe", h: "El juez concluye que parte del dinero de la formación acabó en Luxemburgo", s: [
        "https://www.elespanol.com/espana/andalucia/20221003/fraude-formacion-acorrala-psoe-concluye-dinero-luxemburgo/706929352_0.html"
      ] },
      { f: "2024-03-21", t: "informe", h: "El fraude en los cursos del ex número dos del PSOE andaluz llega a la Fiscalía Europea", s: [
        "https://www.elespanol.com/espana/tribunales/20240321/fraude-cursos-formacion-ex-numero-psoe-andaluz-llega-fiscalia-europea/841665988_0.html"
      ] },
      { f: "2026-09-02", t: "informe", h: "La UCO cifra en 950 millones las ayudas a la formación sin justificar", s: [
        "https://www.eldebate.com/espana/andalucia/20260902/uco-cifra-950-millones-fraude-psoe-trama-cursos-formacion-andalucia_454414.html",
        "https://www.eldebate.com/espana/andalucia/20260919/laberinto-judicial-cursos-formacion-12-anos-950-millones-justificar-psoe_460356.html"
      ] }
    ]
  },
  {
    id: "koldo-mascarillas",
    titulo: "Caso Koldo: mascarillas y enchufes en Transportes",
    clase: "sentencia",
    ambito: "gobierno",
    estado: "Condenados por el Supremo el 22 de junio de 2026: Ábalos, 24 años; Koldo García, 19; Aldama, 4 y medio (suspendida por colaborar).",
    resumen: "Cobro de comisiones por contratos de mascarillas durante la pandemia en organismos de Transportes e Interior, y contratación en empresas públicas (Ineco y Tragsatec) de la pareja del ministro sin que trabajara. Es la primera condena a un exministro de Sánchez.",
    personas: ["José Luis Ábalos", "Koldo García", "Víctor de Aldama", "Jésica Rodríguez"],
    eventos: [
      { f: "2024-02-20", t: "detención", h: "La UCO detiene a Koldo García, asesor de Ábalos, y a Víctor de Aldama en la operación Delorme", s: [
        "https://theobjective.com/espana/politica/2024-02-21/detenido-asesor-abalos-koldo-comisiones/",
        "https://www.eldiario.es/politica/caso-koldo-claves-trama-mascarillas-vinculada-exasesor-abalos_1_10953838.html",
        "https://www.eldiario.es/economia/abalos-coloco-asesor-consejo-puertos-entidad-publica-mayor-pelotazo-adjudico-trama_1_10949548.html"
      ] },
      { f: "2024-02-27", t: "decisión política", h: "Ábalos se niega a entregar el acta y pasa al Grupo Mixto; el PSOE le suspende de militancia", s: [
        "https://www.elespanol.com/espana/politica/20240227/abalos-no-cede-presion-psoe-conserva-escano-marcha-grupo-mixto-congreso/834917006_0.html",
        "https://www.eldiario.es/politica/abalos-no-renuncia-escano-seguira-diputado-grupo-mixto_1_10957910.html",
        "https://www.cope.es/actualidad/espana/noticias/psoe-suspende-militancia-abalos-tras-decision-mantener-escano-diputado-20240227_3168570"
      ] },
      { f: "2024-10-23", t: "imputación", h: "El juez de la Audiencia Nacional pide al Supremo imputar a Ábalos por su «papel principal» en la trama", s: [
        "https://www.elespanol.com/espana/tribunales/20241023/juez-caso-koldo-pide-supremo-imputacion-exministro-abalos-papel-principal-trama/895160685_0.html"
      ] },
      { f: "2024-11-07", t: "imputación", h: "El Supremo abre causa contra Ábalos por organización criminal, tráfico de influencias y cohecho", s: [
        "https://www.elindependiente.com/espana/tribunales/2024/11/07/el-supremo-abre-una-investigacion-contra-abalos-por-el-caso-koldo-2/",
        "https://www.cope.es/actualidad/espana/noticias/supremo-abre-causa-abalos-papel-principal-caso-koldo-20241107_3041659.html",
        "https://www.eleconomista.es/actualidad/noticias/13072104/11/24/el-tribunal-supremo-imputa-a-jose-luis-abalos-por-su-implicacion-en-el-caso-koldo.html"
      ] },
      { f: "2024-11-21", t: "declaración", h: "Aldama sale de prisión tras declarar y acusa a Cerdán, Torres y al entorno de Montero", s: [
        "https://theobjective.com/espana/tribunales/2024-11-21/aldama-declaracion-audiencia-nacional-sanchez-abalos/",
        "https://www.elespanol.com/espana/politica/20241122/acusaciones-bomba-aldama-lanzado-sanchez-gobierno-audiencia-nacional/900410466_0.html",
        "https://www.elindependiente.com/espana/2024/11/21/anticorrupcion-apoya-la-puesta-en-libertad-de-aldama-que-podria-salir-hoy-de-prision/"
      ] },
      { f: "2025-06", t: "decisión política", h: "El PSOE expulsa a Ábalos dieciséis meses después de estallar el caso", s: [
        "https://www.eleconomista.es/actualidad/noticias/13417205/06/25/el-psoe-cierra-el-expediente-sancionador-de-abalos-y-le-expulsa-como-militante-del-partido.html"
      ] },
      { f: "2025-08-21", t: "revelación", h: "Ineco y Tragsatec pagaron 43.978 euros a Jésica Rodríguez por el tiempo que estuvo contratada", s: [
        "https://www.eldebate.com/espana/20250821/tragsatec-e-ineco-pagaron-43978-euros-jesica-rodriguez-tiempo-estuvo-contratada_327457.html"
      ] },
      { f: "2025-11-27", t: "prisión", h: "El juez del Supremo envía a prisión a Ábalos y Koldo por riesgo «extremo» de fuga", s: [
        "https://www.eldiario.es/politica/juez-tribunal-supremo-envia-prision-provisional-jose-luis-abalos-koldo-garcia_1_12801994.html",
        "https://www.elindependiente.com/espana/2025/11/27/juez-envia-prision-koldo-abalos-el-primer-diputado-congreso-carcel/",
        "https://www.publico.es/politica/tribunales/juez-supremo-envia-prision-abalos.html"
      ] },
      { f: "2025-12-11", t: "procesamiento", h: "El Supremo abre juicio oral contra Ábalos, Koldo y Aldama y mantiene a los dos primeros en prisión", s: [
        "https://www.elindependiente.com/espana/2025/12/11/el-supremo-envia-a-juicio-a-abalos-y-koldo-garcia-y-les-mantiene-en-prision/",
        "https://www.eldiario.es/politica/supremo-abre-juicio-oral-abalos-aldama-koldo-contratos-mascarillas_1_12836439.html"
      ] },
      { f: "2026-01-28", t: "dimisión", h: "Ábalos renuncia a su escaño de diputado", s: [
        "https://www.elindependiente.com/espana/2026/01/28/abalos-renuncia-a-su-acta-de-diputado-en-el-congreso-y-libera-su-escano-para-el-psoe/",
        "https://www.eldebate.com/espana/20260128/abalos-renuncia-acta-diputado_379141.html"
      ] },
      { f: "2026-04-06", t: "juicio", h: "Comienza en el Supremo el juicio de las mascarillas", s: [
        "https://theobjective.com/espana/tribunales/2026-04-06/abalos-koldo-supremo-juicio-mascarillas/",
        "https://www.vozpopuli.com/espana/juicio-a-abalos-koldo-y-aldama-por-el-caso-mascarillas-en-directo-declaraciones-en-el-supremo-y-reacciones.html"
      ] },
      { f: "2026-04-08", t: "juicio", h: "La expareja de Ábalos reconoce en el juicio que cobró de dos empresas públicas sin ir a trabajar", s: [
        "https://www.eldiario.es/politica/expareja-abalos-reconoce-juicio-cobro-sueldo-empresas-publicas-trabajar_1_13124782.html",
        "https://www.elespanol.com/espana/tribunales/20260408/mujeres-abalos-jesica-directivas-ineco-tragsatec-apuntalan-enchufe-costa-fondos-publicos/1003744198314_0.html"
      ] },
      { f: "2026-06-22", t: "sentencia", h: "El Supremo condena a Ábalos a 24 años de prisión, a Koldo a 19 y a Aldama a 4 y medio", s: [
        "https://www.elespanol.com/espana/tribunales/20260622/supremo-condena-abalos-anos-prision-liderar-grupo-criminal-koldo-libra-aldama-carcel-ayudar-justicia/1003744278646_0.html",
        "https://www.elindependiente.com/espana/2026/06/22/supremo-condena-abalos-koldo-prision-por-mordidas-contratos-mascarillas/",
        "https://www.eldebate.com/espana/20260622/supremo-condena-24-anos-carcel-abalos-19-koldo-4-medio-aldama_425000.html",
        "https://theobjective.com/espana/tribunales/2026-06-22/sentencia-tribunal-supremo-abalos-koldo-aldama/"
      ] }
    ]
  },
  {
    id: "koldo-an",
    titulo: "Caso Koldo en la Audiencia Nacional: Adif y contratos de Jésica",
    clase: "judicial",
    ambito: "gobierno",
    estado: "En instrucción en la Audiencia Nacional (juez Ismael Moreno). Pardo de Vera y Jésica Rodríguez, investigadas.",
    resumen: "Piezas del caso Koldo que siguen en la Audiencia Nacional: las adjudicaciones de obra en Adif y Carreteras y la contratación de la expareja de Ábalos en empresas públicas. La UCO señala a la expresidenta de Adif Isabel Pardo de Vera, aunque no le atribuye lucro personal.",
    personas: ["Isabel Pardo de Vera", "Javier Herrero", "Jésica Rodríguez"],
    eventos: [
      { f: "2025-06", t: "revelación", h: "Un audio de la trama implica a la expresidenta de Adif en el amaño de obra pública", s: [
        "https://www.eleconomista.es/actualidad/noticias/13413709/06/25/el-audio-que-implica-a-la-expresidenta-de-adif-en-el-amano-de-la-obra-publica-le-hemos-dado-700000-euros-otra-mas-va-cantar.html"
      ] },
      { f: "2025-07", t: "imputación", h: "El juez retira el pasaporte a Isabel Pardo de Vera, imputada en el caso Koldo", s: [
        "https://www.eldiario.es/politica/juez-retira-pasaporte-expresidenta-adif-imputada-caso-koldo_1_12480512.html"
      ] },
      { f: "2026-02-26", t: "informe", h: "La UCO señala a Pardo de Vera en las adjudicaciones sin atribuirle un lucro personal", s: [
        "https://www.eldiario.es/politica/uco-senala-pardo-vera-adjudicaciones-caso-mascarillas-atribuirle-lucro-personal_1_13024046.html",
        "https://www.eldebate.com/espana/20260226/uco-apunta-pardo-vera-conocia-papel-koldo-trama-ayudo-abalos-defensa-imputado_389856.html",
        "https://www.elespanol.com/espana/tribunales/20260227/pardo-vera-engano-uco-desvincularse-trama-mascarillas-detencion-koldo-aldama/1003744147655_0.html"
      ] },
      { f: "2026-07-20", t: "declaración", h: "Jésica Rodríguez se acoge a su derecho a no declarar ante la Audiencia Nacional", s: [
        "https://www.eldiario.es/politica/jesica-rodriguez-expareja-abalos-acoge-derecho-no-declarar-audiencia-nacional_1_13392551.html",
        "https://www.elespanol.com/espana/tribunales/20260720/jesica-rodriguez-acoge-derecho-no-declarar-audiencia-nacional-enchufe-empresas-publicas/1003744328174_0.html"
      ] },
      { f: "2026-07-24", t: "imputación", h: "El juez confirma la imputación de Jésica y sostiene que no debió cobrar sin trabajar", s: [
        "https://theobjective.com/espana/tribunales/2026-07-24/jesica-rodriguez-expareja-abalos-imputada-prevaricacion/",
        "https://www.elespanol.com/espana/tribunales/20260826/fiscalia-apoya-jesica-ex-abalos-siga-investigada-cobrar-sueldo-empresas-publicas-sin-trabajar/1003744363899_0.html"
      ] }
    ]
  },
  {
    id: "cerdan-obras",
    titulo: "Caso Cerdán: comisiones por obra pública",
    clase: "judicial",
    ambito: "partido",
    estado: "En instrucción. Cerdán estuvo cinco meses en prisión provisional (junio-noviembre de 2025). La investigación se ha extendido a los túneles de Belate (Navarra).",
    resumen: "La UCO atribuye al secretario de Organización del PSOE la gestión de comisiones de Acciona para Ábalos y Koldo a cambio de amañar adjudicaciones (13 obras por 637 millones) a través de Servinabar, empresa de su socio Antxon Alonso. Cerdán niega haber cometido ninguna ilegalidad.",
    personas: ["Santos Cerdán", "Antxon Alonso", "José Luis Ábalos", "Koldo García"],
    eventos: [
      { f: "2025-06-12", t: "dimisión", h: "Un informe de la UCO sitúa a Cerdán en el reparto de comisiones; dimite y deja el escaño", s: [
        "https://www.eldiario.es/politica/santos-cerdan-dimite-secretario-organizacion-entrega-acta-diputado_1_12379618.html",
        "https://theobjective.com/espana/politica/2025-06-12/santos-cerdan-dimite/",
        "https://www.eldiario.es/economia/13-obras-recoge-informe-uco-tumbado-cerdan-suman-637-millones-e-incluyen-fondos-europeos_1_12380100.html",
        "https://www.publico.es/politica/tribunales/claves-informe-uco-santos-cerdan-acorrala-psoe.html"
      ] },
      { f: "2025-06-15", t: "revelación", h: "Los audios grabados por Koldo que implican a Ábalos, Cerdán y Koldo", s: [
        "https://theobjective.com/espana/tribunales/2025-06-15/diez-audios-corrupcion-abalos-cerdan-koldo/",
        "https://www.vozpopuli.com/tribunales/la-uco-concluye-que-los-audios-de-koldo-que-comprometen-a-santos-cerdan-no-fueron-manipulados.html"
      ] },
      { f: "2025-06-30", t: "prisión", h: "El juez del Supremo envía a prisión provisional a Santos Cerdán", s: [
        "https://www.eldiario.es/politica/juez-envia-prision-santos-cerdan-declaracion-supremo_1_12425853.html",
        "https://www.elespanol.com/espana/tribunales/20250630/juez-supremo-manda-prision-mano-derecha-sanchez-psoe-lider-trama-corrupcion/1003743827345_0.html",
        "https://www.eldebate.com/espana/20250630/supremo-ordena-prision-incomunicada-fianza-santos-cerdan_312343.html"
      ] },
      { f: "2025-07-09", t: "decisión política", h: "Sánchez comparece en el Congreso, admite que se planteó dimitir y anuncia un plan anticorrupción", s: [
        "https://www.eldiario.es/politica/sanchez-anuncia-plan-anticorrupcion-15-medidas-escandalo-santos_1_12449609.html",
        "https://www.elespanol.com/espana/politica/20250709/sanchez-revela-planteo-dimitir-informe-uco-cerdan-decidio-no-hacerlo-oir/1003743840007_0.html"
      ] },
      { f: "2025-11", t: "informe", h: "La UCO pide investigar la adjudicación de los túneles de Belate a la UTE de Acciona y Servinabar", s: [
        "https://www.eldiario.es/navarra/uco-pide-juez-supremo-investigar-adjudicacion-belate-ute-acciona-servinabar-2000_1_12778045.html",
        "https://www.eldiario.es/navarra/claves-obra-belate-adjudicada-62-millones-acciona-oses-servinabar-empresa-alonso-cerdan_1_12690384.html"
      ] },
      { f: "2025-11-19", t: "libertad", h: "Cerdán sale de prisión tras 142 días: «Se han dicho mentiras»", s: [
        "https://www.eldiario.es/politica/santos-cerdan-sale-carcel-soto-real-cinco-meses-despues_1_12780119.html",
        "https://theobjective.com/espana/tribunales/2025-11-19/santos-cerdan-soto-real-cinco-meses-prision/",
        "https://www.elindependiente.com/espana/2025/11/19/por-que-sale-santos-cerdan-carcel-demoledor-informe-uco/"
      ] },
      { f: "2026-03-18", t: "revelación", h: "Acciona admite irregularidades en los contratos con la empresa del socio de Cerdán", s: [
        "https://theobjective.com/espana/tribunales/2026-03-18/acciona-irregularidades-contratos-empresa-cerdan/",
        "https://www.vozpopuli.com/tribunales/acciona-detecta-mendacidad-y-ocultacion-en-dos-obras-realizadas-junto-a-la-empresa-de-cerdan.html"
      ] },
      { f: "2026-07-17", t: "informe", h: "La UCO concluye que Cerdán pudo blanquear comisiones de Servinabar con los gastos que pasaba al PSOE", s: [
        "https://www.elespanol.com/espana/tribunales/20260717/uco-concluye-santos-cerdan-pudo-blanquear-comisiones-servinabar-gastos-pasaba-psoe/1003744325302_0.amp.html"
      ] },
      { f: "2026-07-22", t: "imputación", h: "El juez ordena investigar las cuentas de la mujer, la hermana y el cuñado de Cerdán", s: [
        "https://www.elindependiente.com/espana/2026/07/22/audiencia-nacional-cuentas-familia-santos-cerdan-caso-koldo/",
        "https://www.libertaddigital.com/espana/2026-07-23/el-juez-ordena-investigar-las-cuentas-de-la-mujer-la-hermana-y-el-cunado-de-cerdan-por-comisiones-de-obra-publica-7439750/"
      ] },
      { f: "2026-07-28", t: "informe", h: "La investigación se extiende a los túneles de Belate y alcanza al Gobierno de Chivite", s: [
        "https://www.cope.es/emisoras/navarra/noticias/investigacion-caso-koldo-extiende-tuneles-belate-acorrala-chivite-20260728_3411466.html",
        "https://www.eldiario.es/euskadi/uco-prepara-informe-mayor-adjudicacion-servinabar-tuneles-belate-navarra_1_13410353.html"
      ] },
      { f: "2026-09", t: "decisión política", h: "Navarra romperá el contrato de Belate adjudicado a Acciona, Osés y Servinabar", s: [
        "https://www.eldiario.es/navarra/navarra-rompera-contrato-tunel-belate-adjudico-acciona-oses-servinabar-76-millones_1_13514822.html",
        "https://theobjective.com/espana/2026-09-22/chivite-pago-extra-obras-belate/"
      ] }
    ]
  },
  {
    id: "financiacion-psoe",
    titulo: "Pagos en metálico en Ferraz y financiación del PSOE",
    clase: "judicial",
    ambito: "partido",
    estado: "Pieza secreta en la Audiencia Nacional sobre los pagos en efectivo del PSOE (2017-2024) y la supuesta financiación con crudo venezolano. El PSOE no está imputado como persona jurídica.",
    resumen: "La UCO detectó pagos en sobres de Ferraz a Ábalos y Koldo sin soporte documental. El PSOE sostiene que eran liquidaciones de gastos legales. Una empresaria asegura haber llevado 90.000 euros a la sede por orden de Aldama, y Aldama entregó al juez un documento de PDVSA que vincula con la financiación del partido.",
    personas: ["Mariano Moreno Pavón", "Ana María Fuentes", "Víctor de Aldama", "Carmen Pano"],
    eventos: [
      { f: "2024-11-28", t: "declaración", h: "La empresaria Carmen Pano asegura al juez que entregó 90.000 euros en Ferraz por indicación de Aldama", s: [
        "https://www.elespanol.com/espana/20241128/empresaria-carmen-pano-asegura-entregado-euros-ferraz-indicacion-aldama/904410102_0.html",
        "https://www.publico.es/politica/tribunales/empresaria-carmen-pano-asegura-juez-entrego-90-000-euros-ferraz-orden-aldama.html"
      ] },
      { f: "2025-10-03", t: "informe", h: "La UCO detecta pagos en metálico del PSOE a Ábalos y Koldo: «el sobre de Ferraz»", s: [
        "https://theobjective.com/espana/tribunales/2025-10-03/uco-abalos-koldo-psoe-sobre-ferraz/",
        "https://www.eldebate.com/espana/20251004/uco-destapa-caja-b-abalos-koldo-conduce-imputacion-psoe-financiacion-ilegal_341041.html"
      ] },
      { f: "2025-10-20", t: "informe", h: "El juez del Supremo ve indicios de una «caja b» y cita a testigos del PSOE", s: [
        "https://theobjective.com/espana/tribunales/2025-10-20/juez-cita-testigos-psoe-pagos-abalos-koldo/"
      ] },
      { f: "2025-10-28", t: "revelación", h: "El PSOE admite en el Supremo 735.000 euros en billetes pagados a otros altos cargos", s: [
        "https://www.elespanol.com/espana/tribunales/20251028/psoe-admite-ahora-supremo-pago-eur-billetes-altos-cargos-no-abalos-cerdan-koldo/1003743989957_0.html"
      ] },
      { f: "2025-10-29", t: "declaración", h: "El exgerente del PSOE reconoce que no hubo control exhaustivo de los tickets pagados en efectivo", s: [
        "https://www.eldebate.com/espana/20251029/ex-gerente-psoe-reconoce-no-hubo-vigilancia-exhaustiva-tickets-pagaron-efectivo-koldo-abalos_349686.html",
        "https://www.eldebate.com/espana/20251031/gerente-psoe-oculto-juez-ferraz-conserva-decenas-tickets-falsos-justificar-pagos-sobres_349854.html"
      ] },
      { f: "2025-10-30", t: "declaración", h: "Sánchez comparece en la comisión Koldo del Senado y reconoce cobros en efectivo del partido", s: [
        "https://www.eldiario.es/politica/ultima-hora-actualidad-politica-declaracion-sanchez-senado-directo_6_12726886.html",
        "https://www.elindependiente.com/espana/2025/10/30/siga-directo-comparecencia-pedro-sanchez-comision-investigacion-senado/"
      ] },
      { f: "2025-11", t: "imputación", h: "La Audiencia Nacional acepta investigar los pagos en metálico del PSOE a Ábalos y Koldo", s: [
        "https://www.eldiario.es/politica/audiencia-nacional-acepta-investigar-pagos-metalico-psoe-abalos-koldo-garcia_1_12746937.html"
      ] },
      { f: "2026-01-20", t: "revelación", h: "El PSOE pagaba en metálico a trabajadores sin contrato en campañas electorales", s: [
        "https://www.elespanol.com/espana/politica/20260120/psoe-pagaba-metalico-trabajadores-sin-contrato-campanas-electorales-koldo-entregaba-billetes/1003744096814_0.html"
      ] },
      { f: "2026-01-30", t: "declaración", h: "Carmen Pano se reafirma ante el juez y la Fiscalía pide a Aldama las pruebas sobre el crudo venezolano", s: [
        "https://www.elindependiente.com/espana/2026/01/30/empresaria-carmen-pano-insiste-juez-entrego-90-000-euros-ferraz-situa-origen-dinero-socio-aldama/",
        "https://www.elespanol.com/espana/tribunales/20260130/fiscal-intenta-aldama-aflore-pruebas-dice-tener-financiacion-psoe-petroleo-venezuela/1003744109622_0.html"
      ] },
      { f: "2026-03-24", t: "declaración", h: "Aldama declara que Zapatero canalizó una venta de petróleo de PDVSA para financiar al PSOE", s: [
        "https://www.elespanol.com/espana/20260324/aldama-declaro-juez-zapatero-canalizo-visita-delcy-venta-petroleo-pdvsa-financiar-psoe/1003744182164_0.html",
        "https://www.elindependiente.com/espana/2026/03/21/sobre-aldama-resto-pistas-apuntan-financiacion-irregular-psoe/"
      ] },
      { f: "2026-04-09", t: "juicio", h: "Carmen Pano ratifica en el juicio del Supremo que llevó 90.000 euros a la sede del PSOE", s: [
        "https://theobjective.com/espana/tribunales/2026-04-09/carmen-pano-ferraz-claudio-rivas/"
      ] },
      { f: "2026-04-22", t: "declaración", h: "El exgerente del PSOE reconoce que pudo gestionar «algún ingreso atípico»", s: [
        "https://theobjective.com/espana/tribunales/2026-04-22/exgerente-psoe-ingreso-atipico/"
      ] },
      { f: "2026-06-11", t: "informe", h: "La UCO detecta 52 facturas falsas en la causa sobre la financiación del PSOE", s: [
        "https://theobjective.com/espana/2026-06-11/uco-facturas-falsas-psoe-financiacion-irregular/"
      ] },
      { f: "2026-07-08", t: "declaración", h: "Aldama declara en la pieza secreta y entrega al juez el sobre de PDVSA", s: [
        "https://theobjective.com/espana/tribunales/2026-07-08/aldama-pieza-caso-koldo-financiacion-psoe/",
        "https://www.vozpopuli.com/tribunales/aldama-entrega-al-juez-que-investiga-los-pagos-en-efectivo-del-psoe-el-sobre-de-pdvsa-.html"
      ] }
    ]
  },
  {
    id: "cloacas-leire",
    titulo: "Caso Leire Díez: las «cloacas» contra la UCO, fiscales y jueces",
    clase: "judicial",
    ambito: "partido",
    estado: "En instrucción en la Audiencia Nacional (juez Santiago Pedraz). Imputados, entre otros, Santos Cerdán, la gerente del PSOE, Gaspar Zarrías, la directora y el DAO de la Guardia Civil y Juanma Serrano.",
    resumen: "Según la UCO, una estructura coordinada por la exmilitante Leire Díez y dirigida por Cerdán buscó información comprometedora sobre mandos de la UCO, fiscales y jueces para neutralizar causas que afectaban al PSOE y al entorno del presidente. El PSOE niega que actuara en su nombre.",
    personas: ["Leire Díez", "Santos Cerdán", "Ana María Fuentes", "Gaspar Zarrías", "Juan Manuel Serrano", "Mercedes González", "Manuel Llamas"],
    eventos: [
      { f: "2025-05-26", t: "revelación", h: "Salen a la luz los audios de Leire Díez pidiendo información contra mandos de la UCO; Ferraz se desvincula", s: [
        "https://www.elindependiente.com/espana/2025/05/26/ferraz-desmiente-que-tenga-una-fontanera-para-maniobrar-contra-la-uco-no-habla-en-nombre-del-psoe/",
        "https://www.elindependiente.com/espana/2025/05/26/el-psoe-maniobro-para-danar-al-jefe-de-la-uco-al-frente-de-las-investigaciones-que-salpican-a-sanchez/"
      ] },
      { f: "2025-06-03", t: "dimisión", h: "Leire Díez se da de baja del PSOE tras reunirse con Cerdán en Ferraz", s: [
        "https://www.elespanol.com/espana/politica/20250603/fontanera-psoe-leire-da-baja-voluntariamente-afiliada-resolverse-expediente/1003743787862_0.html"
      ] },
      { f: "2025-07-31", t: "imputación", h: "Un juez de Madrid imputa a Leire Díez por cohecho y tráfico de influencias", s: [
        "https://theobjective.com/espana/tribunales/2025-07-31/imputan-leire-diez-cohecho-trafico-influencias-audios-uco/",
        "https://www.publico.es/politica/juez-cita-imputada-exmilitante-psoe-leire-diez-cohecho-trafico-influencias.html",
        "https://www.elespanol.com/espana/tribunales/20250724/fiscalia-apoya-investigar-fontanera-psoe-leire-apreciar-indicios-delito-audios-uco/1003743861215_0.html"
      ] },
      { f: "2025-10-10", t: "imputación", h: "El juez admite la denuncia de dos fiscales por intento de soborno", s: [
        "https://www.eldebate.com/espana/20251010/juez-investiga-fontanera-psoe-admite-denuncia-dos-fiscales-intento-soborno_343471.html"
      ] },
      { f: "2025-11-11", t: "revelación", h: "Se publica la grabación de Leire Díez con el fiscal Stampa: «Soy la persona que ha puesto el PSOE»", s: [
        "https://www.elespanol.com/espana/tribunales/20251111/escuche-audio-leire-fiscal-stampa-persona-puesto-psoe-saber-detras/1003744008771_0.html",
        "https://www.eldebate.com/espana/20251111/claves-caso-fontanera-leire-diez-maniobras-contra-uco-e-intentos-soborno-fiscales_352267.html"
      ] },
      { f: "2026-05-27", t: "imputación", h: "La UCO registra Ferraz durante doce horas; el juez imputa a Cerdán, a la gerente del PSOE y a Zarrías", s: [
        "https://www.publico.es/politica/uco-entra-sede-psoe-ferraz-pedir-informacion-presuntos-pagos-leire-diez.html",
        "https://theobjective.com/espana/tribunales/2026-05-27/uco-sale-ferraz-12-horas-registro-psoe/",
        "https://www.infolibre.es/politica/uco-entra-sede-psoe-ferraz-marco-diligencias-secretas-juez-pedraz_1_2199454.html",
        "https://www.eldebate.com/espana/20260527/audiencia-nacional-imputa-cerdan-gerente-psoe-zarrias-caso-leire_422078.html"
      ] },
      { f: "2026-05-27", t: "revelación", h: "La trama ofreció 50.000 euros a Carmen Pano para que no ratificara la entrega de dinero en Ferraz", s: [
        "https://www.elespanol.com/espana/tribunales/20260527/trama-leire-cerdan-ofrecio-euros-carmen-pano-no-ratificase-entrego-dinero-psoe/1003744262257_0.html"
      ] },
      { f: "2026-06-03", t: "informe", h: "La UCO sostiene que la trama buscaba «proteger al PSOE, al Gobierno y a su presidente»", s: [
        "https://www.elespanol.com/espana/tribunales/20260603/uco-sostiene-actuacion-trama-leire-buscaba-proteger-psoe-gobierno-presidente/1003744272032_0.html",
        "https://www.eldiario.es/politica/causa-cobro-mordidas-cambio-contratos-trama-jueces-fiscales-guardias-civiles-proteger-psoe_129_13253525.html"
      ] },
      { f: "2026-07-02", t: "imputación", h: "Pedraz imputa a la directora general y al DAO de la Guardia Civil", s: [
        "https://www.publico.es/politica/tribunales/pedraz-imputa-caso-leire-diez-directora-general-director-adjunto-operativo-guardia-civil.html",
        "https://www.eldiario.es/politica/imputacion-directora-general-guardia-civil-caso-leire-diez-embarra-gobierno_1_13352048.html",
        "https://www.eldebate.com/espana/20260702/trama-salpica-cupula-guardia-civil-buscaba-neutralizar-causas-judiciales-beneficio-propio-psoe-entorno-presidente-gobierno_435199.html"
      ] },
      { f: "2026-07-10", t: "imputación", h: "Pedraz imputa a Juanma Serrano, exjefe de gabinete de Sánchez y expresidente de Correos", s: [
        "https://www.eldiario.es/politica/juez-pedraz-imputa-ex-jefe-gabinete-sanchez-psoe-caso-leire-diez_1_13370534.html",
        "https://www.publico.es/politica/juez-pedraz-imputa-exjefe-gabinete-sanchez-expresidente-correos-caso-leire.html",
        "https://www.elindependiente.com/espana/2026/07/10/pedraz-imputa-al-exjefe-de-gabinete-de-sanchez-juanma-serrano-en-el-caso-leire/"
      ] },
      { f: "2026-07-17", t: "informe", h: "La UCO apunta a que el PSOE de Andalucía también habría financiado a la trama", s: [
        "https://www.eldebate.com/espana/andalucia/20260717/uco-destapa-psoe-andalucia-tambien-habria-financiado-cloacas-sanchismo_440436.html",
        "https://www.elindependiente.com/espana/2026/07/18/indicios-psoe-imputacion-caso-cloacas/"
      ] },
      { f: "2026-08-12", t: "decisión judicial", h: "El primer juez del caso entrega toda la investigación a la Audiencia Nacional", s: [
        "https://theobjective.com/espana/tribunales/2026-08-12/primer-juez-caso-leire-diez-audiencia-nacional/",
        "https://www.publico.es/politica/tribunales/juez-madrid-investigaba-leire-diez-deja-caso-audiencia-nacional.html"
      ] },
      { f: "2026-09-09", t: "declaración", h: "La gerente del PSOE declara que los pagos a Leire Díez se hicieron por orden de Cerdán", s: [
        "https://www.eldebate.com/espana/20260909/gerente-psoe-confirma-cloacas-leire-diaz-pagaron-orden-santos-cerdan_456986.html",
        "https://www.cope.es/actualidad/espana/noticias/caso-cloacas-juez-pedraz-cita-imputada-gerente-psoe-9-septiembre-20260714_3404180.html"
      ] },
      { f: "2026-09-23", t: "declaración", h: "Zarrías niega el soborno a Carmen Pano y acusa a Anticorrupción de construir una causa «artificiosa»", s: [
        "https://www.libertaddigital.com/espana/2026-09-23/zarrias-niega-el-soborno-del-psoe-a-carmen-pano-y-ataca-a-anticorrupcion-por-construir-una-causa-artificiosa-7464696/",
        "https://www.vozpopuli.com/espana/politica/ofensiva-de-zarrias-tilda-de-fantasmal-la-trama-de-sobornos-del-psoe-y-acusa-a-anticorrupcion-de-fabricar-un-relato-a-medida.html"
      ] },
      { f: "2026-09-24", t: "revelación", h: "La UCO tiene audios que implican a la trama en «dar un susto» a la jueza del caso David Sánchez", s: [
        "https://theobjective.com/espana/2026-09-24/uco-audios-cloacas-psoe-juez-biedma/",
        "https://www.cope.es/actualidad/espana/noticias/jueza-proceso-hermano-sanchez-pide-personarse-acusacion-particular-caso-cloacas-tratar-desacreditarla-promover-denuncias-20260916_3437657.html"
      ] }
    ]
  },
  {
    id: "sepi-hirurok",
    titulo: "Trama SEPI («Hirurok»): contratos y rescates",
    clase: "judicial",
    ambito: "gobierno",
    estado: "En instrucción en la Audiencia Nacional (juez Pedraz). Imputados el expresidente de la SEPI Vicente Fernández, la presidenta Belén Gualda y otras 24 personas.",
    resumen: "Leire Díez, el expresidente de la SEPI Vicente Fernández y Antxon Alonso, socio de Cerdán, habrían cobrado comisiones por mediar en contratos y ayudas de empresas públicas (SEPI, Enusa, Mercasa, SEPIDES) por unos 133 millones. Incluye el rescate de Tubos Reunidos.",
    personas: ["Vicente Fernández", "Leire Díez", "Antxon Alonso", "Belén Gualda"],
    eventos: [
      { f: "2025-12-10", t: "detención", h: "La UCO detiene a Leire Díez, al expresidente de la SEPI Vicente Fernández y a Antxon Alonso", s: [
        "https://www.eldiario.es/politica/guardia-civil-detiene-exmilitante-socialista-leire-diez_1_12834729.html",
        "https://www.elespanol.com/espana/tribunales/20251210/uco-detiene-leire-fontanera-psoe-presidente-sepi-orden-audiencia-nacional/1003744049836_0.html",
        "https://theobjective.com/espana/tribunales/2025-12-11/uco-detiene-antxon-alonso-socio-cerdan/"
      ] },
      { f: "2025-12-11", t: "registro", h: "La UCO registra la sede de Forestalia en Zaragoza", s: [
        "https://www.eldiario.es/aragon/politica/uco-registra-forestalia-zaragoza-marco-investigacion-presuntas-irregularidades-contratos-publicos_1_12836387.html",
        "https://www.elindependiente.com/espana/2025/12/11/detencion-leire-diez-expresidente-sepi-abre-nuevo-frente-psoe/"
      ] },
      { f: "2025-12-14", t: "informe", h: "La trama habría cobrado comisiones por rescates y contratos que suman 133 millones", s: [
        "https://theobjective.com/espana/tribunales/2025-12-14/trama-sepi-comisiones-rescates-contratos/",
        "https://www.publico.es/politica/tribunales/caso-leire-diez-revela-origen-trama-sepi-cerdan-nexo-comun.html"
      ] },
      { f: "2026-06-29", t: "imputación", h: "Pedraz imputa a la presidenta de la SEPI, Belén Gualda, y a otras 24 personas", s: [
        "https://www.eldiario.es/politica/juez-caso-leire-imputa-presidenta-sepi-24-personas-supuestos-amanos-contratacion-publica_1_13342324.html",
        "https://theobjective.com/espana/tribunales/2026-06-29/pedraz-presidenta-sepi-trama-leire/",
        "https://www.infolibre.es/politica/pedraz-imputa-presidenta-sepi-belen-gualda-24-personas-caso-leire_1_2216758.html"
      ] },
      { f: "2026-07-05", t: "informe", h: "La trama pidió a Cerdán que intercediera a favor de Forestalia", s: [
        "https://theobjective.com/espana/tribunales/2026-07-05/trama-leire-cerdan-autorizaciones-forestalia/"
      ] }
    ]
  },
  {
    id: "begona-gomez",
    titulo: "Caso Begoña Gómez",
    clase: "judicial",
    ambito: "entorno",
    estado: "Juicio oral abierto el 21 de septiembre de 2026 ante jurado por tráfico de influencias y malversación. La Fiscalía pide la absolución; la acusación popular, trece años.",
    resumen: "Investigación a la mujer del presidente por el uso de su posición en su actividad privada: cartas de apoyo a licitaciones de Barrabés, la cátedra de la Complutense y su software, y el uso de su asesora de Moncloa para tareas privadas. Las instancias superiores corrigieron al juez Peinado en varias ocasiones.",
    personas: ["Begoña Gómez", "Cristina Álvarez", "Juan Carlos Barrabés"],
    eventos: [
      { f: "2024-04-24", t: "imputación", h: "Se conoce la investigación judicial a Begoña Gómez; Sánchez se retira cinco días a reflexionar", s: [
        "https://www.publico.es/politica/lee-carta-integra-pedro-sanchez-ciudadania-citacion-juez-begona-gomez.html",
        "https://www.elespanol.com/espana/politica/20241225/presidente-gobierno-encerro-dias-reflexionar-necesito-parar/911408982_0.html"
      ] },
      { f: "2024-06-04", t: "informe", h: "El juez estudia si las cartas de Begoña Gómez a favor de Barrabés buscaban influir en la mesa de contratación", s: [
        "https://theobjective.com/espana/2024-06-04/juez-cartas-begona-gomez-influir/",
        "https://www.eldiario.es/politica/barrabes-nego-haber-pedido-cartas-recomendacion-begona-gomez-contratos-publicos_1_11639963.html"
      ] },
      { f: "2024-07", t: "revelación", h: "El registro de la marca y el software de la cátedra de la Complutense entran en la causa", s: [
        "https://www.eldiario.es/politica/correo-muestra-complutense-registro-marca-begona-gomez-crean-dominios_1_11536327.html",
        "https://www.publico.es/politica/tribunales/complutense-reclama-begona-gomez-asesora-113-000-euros-software.html"
      ] },
      { f: "2024-07-30", t: "declaración", h: "Sánchez se acoge en Moncloa a su derecho a no declarar como testigo", s: [
        "https://www.eldiario.es/politica/pedro-sanchez-acoge-derecho-no-declarar-causa-mujer_1_11558233.html",
        "https://www.vozpopuli.com/espana/declaracion-pedro-sanchez-juez-peinado.html"
      ] },
      { f: "2025-05", t: "imputación", h: "Peinado imputa al delegado del Gobierno en Madrid por la contratación de la asesora", s: [
        "https://www.eldiario.es/politica/juez-peinado-imputa-delegado-gobierno-madrid-contratacion-asistente-begona-gomez_1_12275310.html"
      ] },
      { f: "2025-06-19", t: "imputación", h: "La Fiscalía Europea ve irregularidades en los contratos de Red.es que avaló Begoña Gómez e imputa a Barrabés", s: [
        "https://www.elespanol.com/espana/tribunales/20250619/fiscalia-europea-encuentra-irregularidades-contratos-redes-avalo-begona-gomez-imputa-barrabes/1003743811582_0.html"
      ] },
      { f: "2025-07-15", t: "archivo", h: "El Supremo rechaza la petición de Peinado de imputar al ministro Bolaños", s: [
        "https://www.elindependiente.com/espana/2025/07/15/el-tribunal-supremo-rechaza-la-peticion-del-juez-peinado-de-imputar-a-bolanos/",
        "https://theobjective.com/espana/tribunales/2025-06-24/juez-peinado-supremo-bolanos-malversacion-testimonio/"
      ] },
      { f: "2025-08", t: "imputación", h: "Peinado imputa a Begoña Gómez y a su asesora por malversación", s: [
        "https://www.eleconomista.es/economia/noticias/13509296/08/25/el-juez-peinado-imputa-a-begona-gomez-y-su-asesora-por-malversacion.html",
        "https://www.eldebate.com/espana/20250820/penas-enfrenta-begona-gomez-delito-malversacion-le-imputa-juez-peinado_326922.html"
      ] },
      { f: "2025-09-10", t: "declaración", h: "Begoña Gómez y su asesora declaran como investigadas por malversación", s: [
        "https://www.cope.es/actualidad/espana/noticias/begona-gomez-asesora-moncloa-declaran-investigadas-presunta-malversacion-20250910_3211023.html"
      ] },
      { f: "2025-12-18", t: "archivo", h: "Tras la orden de la Audiencia de Madrid, Peinado archiva la causa para el delegado del Gobierno", s: [
        "https://www.elindependiente.com/espana/2025/12/18/el-juez-del-caso-begona-gomez-acata-la-orden-de-la-audiencia-y-archiva-para-el-delegado-del-gobierno-en-madrid/",
        "https://www.eldiario.es/politica/audiencia-provincial-corrige-juez-peinado-anula-imputacion-delegado-gobierno-madrid_1_12821051.html"
      ] },
      { f: "2026-05-05", t: "declaración", h: "Begoña Gómez declara ante la Fiscalía Europea que no intervino en los contratos de Barrabés", s: [
        "https://www.elespanol.com/espana/tribunales/20260505/begona-gomez-declara-fiscalia-europea-no-intervino-barrabes-lograse-contratos-publicos/1003744234164_0.html"
      ] },
      { f: "2026-06-26", t: "informe", h: "Correos internos de Red.es recogidos por la UCO apuntan a un amaño a favor de Barrabés", s: [
        "https://www.elespanol.com/espana/tribunales/20260626/mails-prueban-amano-favor-barrabes-contratos-avalo-begona-bajar/1003744300782_0.html"
      ] },
      { f: "2026-07-16", t: "procesamiento", h: "La Audiencia de Madrid avala que Begoña Gómez sea juzgada por un jurado", s: [
        "https://theobjective.com/espana/tribunales/2026-07-16/audiencia-madrid-juicio-jurado-begona-gomez/",
        "https://www.libertaddigital.com/espana/2026-07-16/la-audiencia-provincial-madrid-confirma-procesamiento-begona-gomez-trafico-influencias-malversacion-7436502/"
      ] },
      { f: "2026-09-21", t: "procesamiento", h: "Peinado abre juicio oral con jurado contra Begoña Gómez por tráfico de influencias y malversación", s: [
        "https://theobjective.com/espana/tribunales/2026-09-21/juez-peinado-jurado-begona-gomez-asesora/",
        "https://www.eleconomista.es/actualidad/noticias/14015368/09/26/el-juez-peinado-sienta-de-nuevo-en-el-banquillo-a-begona-gomez-por-malversacion-y-trafico-de-influencias.html",
        "https://www.eldebate.com/espana/20260921/peinado-envia-begona-gomez-banquillo-dos-delitos-malversacion-trafico-influencias_460951.html",
        "https://www.publico.es/politica/tribunales/peinado-culmina-instruccion-plagada-despropositos-sentar-banquillo-begona-gomez.html"
      ] }
    ]
  },
  {
    id: "air-europa",
    titulo: "El rescate de Air Europa y los contactos con Begoña Gómez",
    clase: "suceso",
    ambito: "entorno",
    estado: "Sin sentencia. El rescate aparece en varias causas y en la comisión del Senado; Air Europa niega cualquier pago.",
    resumen: "La SEPI aprobó en noviembre de 2020 un rescate de 475 millones a Air Europa. Globalia patrocinaba el centro que dirigía Begoña Gómez, que se reunió con su consejero delegado, Javier Hidalgo, durante la negociación.",
    personas: ["Begoña Gómez", "Javier Hidalgo", "José Luis Ábalos"],
    eventos: [
      { f: "2025-09-17", t: "revelación", h: "El Gobierno admite que Begoña Gómez trabajó para una entidad patrocinada por los dueños de Air Europa", s: [
        "https://theobjective.com/espana/tribunales/2025-09-17/gobierno-begona-gomez-air-europa-sanchez/",
        "https://www.vozpopuli.com/espana/cuatro-reuniones-begona-gomez-koldo-globalia-facilitaron-mayor-rescate-pandemia.html"
      ] },
      { f: "2025-10-29", t: "revelación", h: "Ábalos negociaba con Sánchez el rescate mientras Hidalgo se reunía con Begoña Gómez", s: [
        "https://www.elespanol.com/espana/politica/20251029/abalos-negocio-sanchez-rescate-air-europa-hidalgo-reunia-begona-mismo-dia-funeral-covid/1003743990125_0.html"
      ] },
      { f: "2025-12-02", t: "declaración", h: "Air Europa niega haber pagado a Begoña Gómez por el rescate", s: [
        "https://www.elespanol.com/invertia/empresas/turismo/20251202/air-europa-niega-pagado-begona-gomez-rescate-aerolinea-insinuaciones-koldo-abalos/1003744038076_0.html"
      ] },
      { f: "2026-07-03", t: "declaración", h: "El número dos de la SEPI admite ante el juez que se vio con Hidalgo antes del rescate", s: [
        "https://theobjective.com/espana/tribunales/2026-07-03/sepi-hidalgo-globalia-rescate-air-europa/",
        "https://www.elindependiente.com/espana/2026/04/26/rescates-malditos-acechan-gobierno-air-europa-plus-ultra-vuelan-bajo-nubes-negras/"
      ] }
    ]
  },
  {
    id: "david-sanchez",
    titulo: "Caso David Sánchez (Diputación de Badajoz)",
    clase: "sentencia",
    ambito: "entorno",
    estado: "Condenado el 14 de julio de 2026 a nueve años de inhabilitación por prevaricación; absuelto de tráfico de influencias. Gallardo, 18 años de inhabilitación. Sentencia recurrida.",
    resumen: "La Diputación de Badajoz, presidida por el socialista Miguel Ángel Gallardo, creó en 2017 una plaza de coordinador de conservatorios para el hermano del presidente. La Audiencia de Badajoz la consideró «un traje a medida». La Fiscalía había pedido la absolución.",
    personas: ["David Sánchez Pérez-Castejón", "Miguel Ángel Gallardo", "Luis María Carrero"],
    eventos: [
      { f: "2023-12-15", t: "revelación", h: "El hermano de Sánchez teletrabaja desde Portugal para la Diputación de Badajoz", s: [
        "https://www.eldebate.com/espana/20231215/el-hermano-de-sanchez-teletrabaja-desde-portugal-para-la-diputacion-de-badajoz-alegando-productividad_160401.html"
      ] },
      { f: "2024-04-02", t: "revelación", h: "La Diputación cancela la oficina de 1,5 millones que dirigía David Sánchez tras las revelaciones", s: [
        "https://www.eldebate.com/espana/20240402/diputacion-badajoz-da-15-millones-oficina-hermano-sanchez-cancela-revelaciones-debate_185884.html"
      ] },
      { f: "2024-11-27", t: "revelación", h: "David Sánchez propuso por escrito trabajar dos días al mes y la Diputación aceptó", s: [
        "https://www.eldebate.com/espana/20241127/hermano-sanchez-propuso-escrito-trabajar-solo-2-dias-mes-diputacion-badajoz-acepto_248658.html"
      ] },
      { f: "2025-02-05", t: "dimisión", h: "David Sánchez renuncia al puesto por el que está investigado", s: [
        "https://www.eldiario.es/extremadura/politica/hermano-pedro-sanchez-renuncia-puesto-diputacion-badajoz_1_12030176.html",
        "https://theobjective.com/espana/tribunales/2025-02-05/hermano-sanchez-puesto-diputacion-badajoz/"
      ] },
      { f: "2025-04", t: "procesamiento", h: "La jueza procesa al hermano del presidente por prevaricación y tráfico de influencias", s: [
        "https://www.eldiario.es/extremadura/politica/jueza-procesa-hermano-pedro-sanchez-prevaricacion-trafico-influencias_1_12252703.html",
        "https://www.eleconomista.es/actualidad/noticias/13337108/04/25/david-sanchez-procesado-por-la-jueza-por-prevaricacion-y-trafico-de-influencias.html"
      ] },
      { f: "2025-05", t: "procesamiento", h: "Juicio oral para David Sánchez y Gallardo, que se convierte en diputado autonómico y aforado", s: [
        "https://www.eldiario.es/extremadura/politica/jueza-envia-juicio-hermano-pedro-sanchez-presidente-diputacion-badajoz_1_12321083.html",
        "https://www.eldiario.es/extremadura/politica/gallardo-convierte-diputado-aforado-plena-ofensiva-judicial-caso-hermano-sanchez_1_12339192.html",
        "https://www.cope.es/actualidad/espana/noticias/ferraz-confian-polemico-aforamiento-gallardo-eleve-causa-hermano-sanchez-tsj-extremadura-20250529_3159782.html"
      ] },
      { f: "2025-06-10", t: "informe", h: "La jueza acusa a Gallardo de fraude de ley con su aforamiento", s: [
        "https://www.elespanol.com/reportajes/20250610/jueza-acusa-gallardo-fraude-enlatador-repudiado-mentor-senalado-colocar-hermano-sanchez/1003743769702_0.html"
      ] },
      { f: "2026-01-14", t: "dimisión", h: "Gallardo renuncia a su acta y pierde el aforamiento", s: [
        "https://www.eldebate.com/espana/20260114/gallardo-renuncia-acta-diputado-perdera-aforamiento-caso-hermano-sanchez_374277.html",
        "https://www.publico.es/politica/gallardo-renuncia-acta-diputado-extremadura-dejara-estar-aforado-caso-hermano-sanchez.html"
      ] },
      { f: "2026-05-28", t: "juicio", h: "Comienza el juicio en la Audiencia Provincial de Badajoz", s: [
        "https://theobjective.com/espana/tribunales/2026-05-28/juicio-hermano-pedro-sanchez-badajoz/",
        "https://www.eleconomista.es/actualidad/noticias/13941076/05/26/arranca-el-juicio-contra-el-hermano-de-pedro-sanchez-las-claves-del-proceso-por-presunto-enchufe-en-la-diputacion-de-badajoz.html"
      ] },
      { f: "2026-07-14", t: "sentencia", h: "La Audiencia de Badajoz condena a David Sánchez a nueve años de inhabilitación por prevaricación", s: [
        "https://www.elindependiente.com/espana/2026/07/14/david-sanchez-condenado-inhabilitacion-prevaricacion-contratacion-badajoz/",
        "https://www.eldiario.es/extremadura/consulta-integra-sentencia-caso-david-sanchez-hermano-presidente_1_13378172.html",
        "https://www.vozpopuli.com/tribunales/9-anos-de-inhabilitacion-para-david-sanchez-primera-condena-al-hermano-de-un-presidente-del-gobierno-por-corrupcion.html"
      ] },
      { f: "2026-09-20", t: "recurso", h: "Las acusaciones populares recurren y piden seis años de prisión para David Sánchez", s: [
        "https://www.libertaddigital.com/espana/2026-09-20/caso-david-sanchez-recurren-la-sentencia-para-exigir-6-anos-de-prision-al-hermano-del-presidente-y-4-a-gallardo-7462037/"
      ] }
    ]
  },
  {
    id: "fiscal-general",
    titulo: "Condena del fiscal general García Ortiz",
    clase: "sentencia",
    ambito: "gobierno",
    estado: "Condenado por el Supremo a dos años de inhabilitación por revelación de datos reservados (con dos votos particulares). Dimitió. El Supremo rechazó anular la condena.",
    resumen: "El fiscal general nombrado por el Gobierno fue condenado por filtrar el correo en el que el abogado de la pareja de Isabel Díaz Ayuso reconocía dos delitos fiscales. Es el primer fiscal general condenado en democracia.",
    personas: ["Álvaro García Ortiz"],
    eventos: [
      { f: "2024-10-16", t: "imputación", h: "El Supremo abre causa contra el fiscal general, la primera contra un fiscal general en ejercicio", s: [
        "https://theobjective.com/espana/tribunales/2024-10-16/supremo-garcia-ortiz-investiga-fiscal-general/",
        "https://www.eleconomista.es/actualidad/noticias/13035549/10/24/el-supremo-imputa-a-alvaro-garcia-ortiz-fiscal-general-del-estado-por-revelacion-de-secretos.html",
        "https://www.elespanol.com/espana/tribunales/20241016/claves-entender-caso-fiscal-general-imputan-garcia-ortiz-puede-pasar-partir-ahora/893910803_0.html"
      ] },
      { f: "2025-11-20", t: "sentencia", h: "El Supremo condena al fiscal general a dos años de inhabilitación por la filtración", s: [
        "https://www.eldiario.es/politica/supremo-condena-fiscal-general-multa-7-200-euros-anos-inhabilitacion-filtracion-correo-pareja-ayuso_1_12773048.html",
        "https://theobjective.com/espana/tribunales/2025-11-20/supremo-condena-fiscal-general-inhabilitacion/",
        "https://www.publico.es/politica/tribunales/supremo-condena-fiscal-general-dos-anos-inhabilitacion-revelacion-secretos.html"
      ] },
      { f: "2025-11-24", t: "dimisión", h: "García Ortiz dimite tras la condena: «He servido fielmente a la institución»", s: [
        "https://www.eldiario.es/politica/fiscal-general-dimite-despues-condenado-supremo-he-servido-fielmente-institucion_1_12791200.html",
        "https://theobjective.com/espana/tribunales/2025-11-24/fiscal-general-dimite-condena-supremo/"
      ] },
      { f: "2026-02-26", t: "recurso", h: "El Supremo rechaza anular la condena; el exfiscal general acudirá al Constitucional", s: [
        "https://www.elespanol.com/espana/tribunales/20260226/tribunal-supremo-rechaza-anular-condena-garcia-ortiz-exfiscal-general-puede-acudir-constitucional/1003744147061_0.html"
      ] }
    ]
  },
  {
    id: "lobato",
    titulo: "Caso Lobato: los mensajes de Moncloa sobre la pareja de Ayuso",
    clase: "suceso",
    ambito: "partido",
    estado: "Lobato dimitió como líder del PSOE de Madrid y declaró como testigo en el Supremo.",
    resumen: "El secretario general del PSOE-M protocolizó ante notario los mensajes en los que la jefa de gabinete de Óscar López en Moncloa le ofrecía el correo del abogado de Alberto González Amador. Tras hacerse público, fue forzado a dimitir.",
    personas: ["Juan Lobato", "Pilar Sánchez Acera"],
    eventos: [
      { f: "2024-11-24", t: "revelación", h: "Lobato llevó al notario los mensajes de la jefa de gabinete de Óscar López", s: [
        "https://www.elespanol.com/espana/politica/20241124/lobato-llevo-notario-mensajes-jefa-gabinete-oscar-lopez-instandole-divulgar-mails-novio-ayuso/903659793_0.html"
      ] },
      { f: "2024-11-27", t: "dimisión", h: "Lobato dimite y critica a la dirección del PSOE", s: [
        "https://www.eldiario.es/madrid/lobato-dimite-lider-psoe-madrid-gestion-mensajes-moncloa_1_11856568.html",
        "https://www.publico.es/politica/claves-caso-lobato-filtracion-sobre-novio-ayuso-notario-ocho-meses-despues-dimision-forzada.html"
      ] },
      { f: "2024-11-29", t: "declaración", h: "Lobato declara en el Supremo y entrega el acta notarial y su móvil", s: [
        "https://www.vozpopuli.com/tribunales/lobato-admite-ante-el-supremo-que-sospecho-de-que-el-origen-de-los-correos-fuera-legitimo.html",
        "https://www.eldiario.es/politica/mensajes-avalan-version-lobato-no-revelan-obtuvo-moncloa-correos-pareja-ayuso_1_11863613.html"
      ] }
    ]
  },
  {
    id: "torres",
    titulo: "Ángel Víctor Torres y las mascarillas de Canarias",
    clase: "suceso",
    ambito: "gobierno",
    estado: "No está imputado. Declaró por escrito como testigo en el Supremo y ha demandado a Aldama. La pieza de Canarias sigue abierta en la Audiencia Nacional.",
    resumen: "Aldama acusó al ministro de pedir 50.000 euros cuando presidía Canarias, cuyo Gobierno compró material a la empresa de la trama. Torres lo niega. La UCO recogió mensajes de Koldo sobre gestiones para Aldama.",
    personas: ["Ángel Víctor Torres"],
    eventos: [
      { f: "2024-12-05", t: "revelación", h: "Torres, en el foco por las mascarillas y los encuentros en el piso alquilado por Aldama", s: [
        "https://www.elespanol.com/espana/politica/20241205/angel-victor-torres-foco-mascarillas-encuentros-piso-atocha-alquilado-aldama/906159984_0.html"
      ] },
      { f: "2025-11-04", t: "informe", h: "Mensajes de Koldo recogidos por la UCO apuntan a gestiones de Torres para Aldama", s: [
        "https://www.elespanol.com/espana/tribunales/20251104/uco-acorrala-torres-mensajes-koldo-demuestran-gestiones-aldama-implican-mano-derecha/1003743998014_0.html"
      ] },
      { f: "2025-11", t: "decisión judicial", h: "El Supremo cierra la instrucción de las mascarillas sin incluir a Torres", s: [
        "https://www.eldiario.es/canariasahora/politica/rastro-angel-victor-torres-cierre-instruccion-caso-mascarillas-supremo_1_12736513.html"
      ] },
      { f: "2026-05-21", t: "declaración", h: "Aldama declara que Koldo le pidió dinero para Torres y que nadie en Baleares cobró", s: [
        "https://www.elespanol.com/espana/tribunales/20260521/aldama-declara-nadie-baleares-cobro-trama-mascarillas-ministro-angel-victor-torres/1003744254290_0.html",
        "https://www.eldiario.es/canariasahora/politica/demandas-angel-victor-torres-difamaciones-victor-de-aldama-caso-mascarillas-canarias_1_13188751.html"
      ] }
    ]
  },
  {
    id: "canarias-rr7",
    titulo: "Mascarillas de Canarias: el contrato de RR7",
    clase: "judicial",
    ambito: "territorial",
    estado: "Investigado por la Fiscalía Europea bajo supervisión de la Audiencia Nacional.",
    resumen: "El Servicio Canario de Salud del Gobierno de Torres compró un millón de mascarillas a RR7 y material por 12 millones a Soluciones de Gestión, la empresa de la trama Koldo. Su exdirector, Conrado Domínguez, está investigado.",
    personas: ["Conrado Domínguez"],
    eventos: [
      { f: "2024-03", t: "revelación", h: "El papel del exdirector del Servicio Canario de Salud en el caso mascarillas", s: [
        "https://www.eldiario.es/canariasahora/tribunales/papel-clave-exdirector-servicio-canario-salud-conrado-dominguez-caso-mascarillas_1_11232748.html",
        "https://www.eldiario.es/canariasahora/tribunales/anticorrupcion-exdirector-servicio-canario-salud-conrado-dominguez-mascarillas_1_11234892.html"
      ] },
      { f: "2024-05-17", t: "revelación", h: "Sanidad alertó a Canarias de compras irregulares fuera del acuerdo marco", s: [
        "https://www.elespanol.com/espana/tribunales/20240517/sanidad-alerto-canarias-compras-irregulares-mascarillas-empresas-externas-acuerdo-marco/854165060_0.html"
      ] },
      { f: "2026-06-23", t: "informe", h: "Guía del caso: de Conrado Domínguez a RR7 y Soluciones de Gestión", s: [
        "https://www.canarias7.es/canarias/mascarillas-abalos-conrado-dominguez-rr7-soluciones-gestion-20260623193442-nt.html"
      ] }
    ]
  },
  {
    id: "armengol",
    titulo: "Armengol y las mascarillas de Baleares",
    clase: "suceso",
    ambito: "gobierno",
    estado: "La presidenta del Congreso no está imputada. La pieza de Baleares sigue abierta en la Audiencia Nacional; el Govern actual devolvió los fondos europeos.",
    resumen: "El Govern de Francina Armengol pagó 3,7 millones por mascarillas no aptas a la empresa de la trama y no reclamó el dinero hasta el día en que perdió el poder. Un informe de la UCO sostiene que habló con Ábalos de la compra.",
    personas: ["Francina Armengol"],
    eventos: [
      { f: "2024-02-23", t: "revelación", h: "Armengol solo reclamó los 3 millones el día que perdió la presidencia balear", s: [
        "https://www.elespanol.com/espana/politica/20240223/armengol-solo-reclamo-estafados-trama-koldo-dia-perdio-presidencia-baleares/834666904_0.html",
        "https://www.eldiario.es/illes-balears/politica/govern-balear-armengol-reclamo-2-6-millones-euros-fraude-compra-mascarillas_1_10947101.html"
      ] },
      { f: "2024-06-07", t: "revelación", h: "Armengol sabía que las mascarillas no eran aptas pero siguió adelante tras las llamadas de Koldo", s: [
        "https://www.elespanol.com/espana/politica/20240607/armengol-sabia-mascarillas-no-aptas-siguio-adelante-llamadasdekoldo/861164101_0.html",
        "https://www.eldiario.es/illes-balears/politica/armengol-insiste-legitimidad-compra-mascarillas-balears-nadie-gobierno-investigado_1_11429965.html"
      ] },
      { f: "2026-04-16", t: "informe", h: "Un informe de la UCO apunta a que Armengol sí habló con Ábalos de mascarillas", s: [
        "https://theobjective.com/espana/tribunales/2026-04-16/informe-uco-armengol-mintio-abalos-mascarillas/",
        "https://www.elespanol.com/espana/tribunales/20260416/armengol-recurrio-koldo-hablar-abalos-fondos-europeos-baleares-ayudaras/1003744210332_0.html"
      ] }
    ]
  },
  {
    id: "carlos-moreno",
    titulo: "Carlos Moreno, jefe de gabinete de Montero",
    clase: "suceso",
    ambito: "gobierno",
    estado: "No imputado. Niega haber recibido dinero; admite que trasladó a un asesor la petición de Aldama.",
    resumen: "Aldama declaró haber entregado 25.000 euros al jefe de gabinete de la ministra de Hacienda a cambio de aplazar una deuda tributaria. Moreno lo niega y reconoce «dos o tres reuniones» con el empresario.",
    personas: ["Carlos Moreno", "María Jesús Montero"],
    eventos: [
      { f: "2024-12-04", t: "declaración", h: "Aldama dice que Carlos Moreno le pidió buscarle casas y confirma que le pagó por un favor tributario", s: [
        "https://www.elespanol.com/espana/tribunales/20241204/aldama-dice-carlos-moreno-pidio-buscara-casas-comprar-confirma-pago-favor-tributario/906159742_0.html",
        "https://www.elespanol.com/espana/politica/20241209/citas-aldama-jefe-gabinete-admite-montero-bloquean-reaccion-gobierno/907159364_0.html"
      ] },
      { f: "2025-03-04", t: "declaración", h: "Moreno niega ante el juez haber recibido 25.000 euros y admite que derivó la petición de Aldama", s: [
        "https://www.publico.es/politica/tribunales/jefe-gabinete-montero-niega-haber-recibido-25-000-euros-sobre-victor-aldama.html",
        "https://www.elespanol.com/espana/tribunales/20250304/jefe-gabinete-montero-admite-aldama-pidio-aplazar-deuda-derivo-asesor-gestionarlo/928657362_0.html"
      ] },
      { f: "2026-04-22", t: "juicio", h: "Moreno reconoce en el juicio del Supremo que Aldama le pidió aplazar una deuda de 550.000 euros", s: [
        "https://theobjective.com/espana/tribunales/2026-04-22/exjefe-gabinete-montero-reuniones-aldama/",
        "https://www.eldebate.com/espana/20260422/ex-jefe-gabinete-montero-reconoce-aldama-le-pidio-aplazar-deuda-550000-empresa_409724.html"
      ] }
    ]
  },
  {
    id: "san-roque",
    titulo: "San Roque: dos edificios municipales para Aldama",
    clase: "suceso",
    ambito: "territorial",
    estado: "Sin causa judicial conocida. El proyecto quedó paralizado.",
    resumen: "El Ayuntamiento de San Roque (Cádiz), gobernado por el diputado y líder del PSOE gaditano Juan Carlos Ruiz Boix, cedió gratis durante 40 años dos inmuebles a una empresa de Aldama, única licitadora.",
    personas: ["Juan Carlos Ruiz Boix", "Víctor de Aldama"],
    eventos: [
      { f: "2024-04-08", t: "revelación", h: "Un alcalde y diputado del PSOE adjudicó dos edificios a Aldama para explotarlos gratis 40 años", s: [
        "https://www.elespanol.com/espana/tribunales/20240408/alcalde-diputado-psoe-adjudico-hoteles-aldama-explote-gratis-anos/844665947_0.html",
        "https://www.elespanol.com/espana/20240409/ayuntamiento-san-roque-cadiz-admite-adjudico-gestion-edificios-aldama/846165835_0.html"
      ] },
      { f: "2024-04-10", t: "revelación", h: "Un concejal del PSOE pagó a Aldama el aval de la adjudicación", s: [
        "https://www.elespanol.com/espana/tribunales/20240410/concejal-psoe-pago-aldama-aval-adjudicaran-gratis-hoteles-anos/846415749_0.html"
      ] }
    ]
  },
  {
    id: "salazar",
    titulo: "Paco Salazar: denuncias de acoso y sueldo sin trabajar",
    clase: "judicial",
    ambito: "partido",
    estado: "Investigado en secreto por un juzgado de Dos Hermanas por malversación. El PSOE le retiró la militancia sin llevar las denuncias de acoso a la Fiscalía.",
    resumen: "Dos trabajadoras de Moncloa denunciaron en el canal interno del PSOE conductas de acoso sexual del colaborador de Sánchez, que iba a entrar en la Ejecutiva. Después, la UCO investigó si cobró del Ayuntamiento de Dos Hermanas mientras trabajaba en Ferraz.",
    personas: ["Francisco Salazar", "Antonio Hernández"],
    eventos: [
      { f: "2025-07-05", t: "dimisión", h: "Salazar renuncia a su nuevo cargo en Ferraz tras las acusaciones de acoso sexual", s: [
        "https://www.elespanol.com/espana/politica/20250705/preocupacion-psoe-acusaciones-acoso-sexual-paco-salazar-nuevo-hombre-fuerte-moncloa-ferraz/1003743835415_0.html"
      ] },
      { f: "2025-11-17", t: "imputación", h: "Declaran secreta la causa contra Salazar por cobrar sin trabajar en Dos Hermanas", s: [
        "https://theobjective.com/espana/tribunales/2025-11-17/juez-salazar-contrato-hermanas/"
      ] },
      { f: "2025-11-26", t: "registro", h: "La UCO registra el Ayuntamiento de Dos Hermanas por el contrato de Salazar", s: [
        "https://www.elespanol.com/espana/andalucia/20251126/uco-investiga-paco-salazar-hombre-fuerte-pedro-sanchez-cobraba-euros-mes-sin-trabajar/1003744030225_0.html",
        "https://theobjective.com/espana/tribunales/2025-11-26/uco-ayuntamiento-sevillano-exasesor-sanchez/",
        "https://www.cope.es/emisoras/andalucia/sevilla-provincia/sevilla/noticias/uco-investiga-asesor-sanchez-cobrar-ayuntamiento-dos-hermanas-trabajar-ferraz-20251127_3260535.html"
      ] },
      { f: "2025-12-02", t: "revelación", h: "Las denuncias por acoso desaparecen del canal interno; Salazar se había dado de baja tras la investigación de la UCO", s: [
        "https://www.eldiario.es/politica/denuncias-paco-salazar-subia-bragueta-cara-escenificaba-felaciones-pedia-vernos-escote_1_12807016.html",
        "https://www.elespanol.com/espana/politica/20251202/pedro_sanchez-psoe_-partido_socialista_obrero_espanol-acoso_sexual-corrupcion-politica/1003744038002_0.html"
      ] },
      { f: "2025-12-07", t: "dimisión", h: "Sánchez destituye a Antonio Hernández, número dos de Salazar en Moncloa", s: [
        "https://www.elespanol.com/espana/politica/20251207/pedro_sanchez-palacio_de_la_moncloa-acoso_sexual-politica/1003744046431_0.html"
      ] },
      { f: "2025-12-12", t: "decisión política", h: "El PSOE cierra el caso retirando la militancia a Salazar y sin acudir a la Fiscalía", s: [
        "https://www.elespanol.com/espana/politica/20251212/psoe_-partido_socialista_obrero_espanol-francisco_salazar-acoso_sexual-pedro_sanchez-politica/1003744052667_0.html",
        "https://www.eldiario.es/politica/psoe-cierra-caso-salazar-informe-repleto-excusas-da-credibilidad-victimas_1_12842165.html"
      ] }
    ]
  },
  {
    id: "acoso-2025",
    titulo: "Cascada de denuncias de acoso en el PSOE",
    clase: "suceso",
    ambito: "territorial",
    estado: "Dimisiones y suspensiones de militancia. En Torremolinos, la Fiscalía abrió diligencias.",
    resumen: "Tras el caso Salazar afloraron en dos semanas varias denuncias por acoso contra cargos socialistas: el secretario general del PSOE de Torremolinos, un miembro de la Ejecutiva Federal y un alcalde cordobés, entre otros.",
    personas: ["Antonio Navarro", "Javier Izquierdo"],
    eventos: [
      { f: "2025-12-04", t: "revelación", h: "El PSOE de Málaga pide suspender a su líder en Torremolinos tras una denuncia de acoso sexual", s: [
        "https://www.elespanol.com/malaga/torremolinos/20251204/psoe_malaga-torremolinos-acoso_sexual-torremolinos/1003744042591_0.html",
        "https://www.eldebate.com/espana/andalucia/malaga/20251205/psoe-suspende-militancia-secretario-general-torremolinos-denuncias-acoso-sexual_362537.html"
      ] },
      { f: "2025-12-11", t: "dimisión", h: "Dimite Javier Izquierdo, miembro de la Ejecutiva Federal, tras otra denuncia", s: [
        "https://www.elindependiente.com/espana/2025/12/11/dimite-javier-izquierdo-miembro-de-la-direccion-de-sanchez-en-pleno-escandalo-por-los-casos-de-acoso-sexual/",
        "https://www.publico.es/mujer/violencia-machista/dimite-miembro-ejecutiva-federal-psoe-denuncia-acoso-sexual.html"
      ] },
      { f: "2025-12-12", t: "dimisión", h: "Dimite un alcalde socialista de Córdoba acusado de enviar mensajes obscenos a una subordinada", s: [
        "https://www.elespanol.com/espana/andalucia/20251212/andalucia-cordoba_-municipio-psoe_-partido_socialista_obrero_espanol-acoso_sexual-andalucia/1003744053255_0.html",
        "https://theobjective.com/espana/2025-12-12/me-too-psoe-denuncias-acoso-sexual/",
        "https://www.infolibre.es/politica/caso-salazar-deriva-cascada-denuncias-acoso-dimisiones-psoe_1_2113822.html"
      ] }
    ]
  },
  {
    id: "tome",
    titulo: "José Tomé, expresidente de la Diputación de Lugo",
    clase: "judicial",
    ambito: "territorial",
    estado: "Querella de la Fiscalía por acoso sexual o abuso de cargo, en instrucción. Tomé niega los hechos y sigue como alcalde de Monforte como no adscrito.",
    resumen: "Denunciado a través del canal interno del PSOE por dos compañeras, renunció a la presidencia de la Diputación y dejó el PSdeG.",
    personas: ["José Tomé"],
    eventos: [
      { f: "2025-12-12", t: "dimisión", h: "Tomé anuncia que deja la presidencia de la Diputación de Lugo tras las denuncias", s: [
        "https://www.cope.es/emisoras/galicia/lugo-provincia/lugo/noticias/tome-renuncia-denuncias-acoso-diputacion-lugo-tendra-nuevo-presidente-14-enero-20251212_3270348.html",
        "https://www.eldiario.es/galicia/socialista-jose-tome-dimitira-presidente-diputacion-lugo-denuncias-acoso-sexual_1_12834744.html"
      ] },
      { f: "2025-12-30", t: "dimisión", h: "Renuncia efectiva: «No pararé hasta saber qué hay detrás»", s: [
        "https://www.elespanol.com/quincemil/actualidad/provincia-de-lugo/20251230/jose-tome-renuncia-presidencia-diputacion-lugo-no-parare-saber-detras/1003744073498_0.html",
        "https://www.eldiario.es/galicia/socialista-jose-tome-abandona-definitivamente-presidencia-deputacion-lugo-acusaciones-acoso-sexual_1_12876721.html"
      ] },
      { f: "2026-03-02", t: "imputación", h: "La Fiscalía se querella contra Tomé por presunto acoso sexual", s: [
        "https://www.eldebate.com/espana/galicia/20260302/fiscalia-querella-contra-jose-tome-psoe-presunto-acoso-sexual_391033.html",
        "https://www.cope.es/emisoras/galicia/lugo-provincia/lugo/noticias/futuro-jose-tome-manos-justicia-psdeg-suspende-investigacion-interna-querella-fiscalia-acoso-sexual-20260303_3318386.html"
      ] },
      { f: "2026-05", t: "declaración", h: "Declara la denunciante y la jueza cita a otras cinco mujeres vinculadas al PSdeG", s: [
        "https://www.cope.es/emisoras/galicia/lugo-provincia/lugo/noticias/declara-lugo-juez-mujer-acusa-jose-tome-acoso-sexual-20260520_3367938.html",
        "https://www.eldiario.es/galicia/jueza-instruye-causa-acoso-sexual-jose-tome-llama-declarar-cinco-mujeres-vinculadas-psdeg_1_13279777.html"
      ] }
    ]
  },
  {
    id: "francis-puig",
    titulo: "Las subvenciones al hermano de Ximo Puig",
    clase: "judicial",
    ambito: "entorno",
    estado: "Procesado por estafa y falsedad; juicio pendiente en la Audiencia de Valencia (previsto para finales de 2026 o 2027).",
    resumen: "Francis Puig, hermano del expresidente valenciano, habría presentado facturas cruzadas y duplicadas para obtener ayudas públicas de promoción del valenciano entre 2015 y 2018. Fiscalía y Generalitat piden cuatro años de cárcel.",
    personas: ["Francis Puig"],
    eventos: [
      { f: "2025-01-31", t: "procesamiento", h: "El juez procesa al hermano de Ximo Puig por estafa y falsedad en subvenciones", s: [
        "https://www.eldiario.es/comunitat-valenciana/juez-procesa-hermano-ximo-puig-estafa-falsedad-subvenciones-generalitat_1_12011618.html",
        "https://theobjective.com/espana/tribunales/2025-01-31/juzgado-hermano-ximo-puig/"
      ] },
      { f: "2025-10-14", t: "procesamiento", h: "Se abre juicio oral contra Francis Puig", s: [
        "https://www.eldiario.es/comunitat-valenciana/abierto-juicio-oral-hermano-expresidente-ximo-puig-presuntas-irregularidades-cobro-subvenciones_1_12683141.html",
        "https://www.elespanol.com/valencia/20251014/hermano-ximo-puig-juicio-estafa-falsear-facturas-obtener-ayudas-generalitat-valenciana/1003743968862_0.html"
      ] },
      { f: "2026-08-22", t: "procesamiento", h: "La Audiencia advierte de que, si es condenado, tendrá que indemnizar también al Gobierno catalán", s: [
        "https://www.eldebate.com/espana/comunidad-valenciana/20260822/hermano-ximo-puig-tendra-indemnizar-gobierno-catalan-acaba-condenado_451383.html"
      ] }
    ]
  },
  {
    id: "valencina",
    titulo: "Exalcalde de Valencina de la Concepción",
    clase: "sentencia",
    ambito: "territorial",
    estado: "Condenado a un año y seis meses de cárcel por prevaricación omisiva.",
    resumen: "La Audiencia de Sevilla condenó al exalcalde socialista por permitir construcciones sin licencia en suelo no urbanizable.",
    personas: ["Antonio Manuel Suárez"],
    eventos: [
      { f: "2025-01-13", t: "sentencia", h: "Un año y seis meses de cárcel para el exalcalde socialista de Valencina", s: [
        "https://www.elespanol.com/sevilla/20250113/condenan-ano-meses-carcel-ex-alcalde-valencina-prevaricacion-psoe-analizara-sentencia/916158654_0.html"
      ] }
    ]
  },
  {
    id: "mario-rivas",
    titulo: "Mario Rivas, alcalde de Villablino",
    clase: "judicial",
    ambito: "territorial",
    estado: "Investigado por tráfico de influencias, prevaricación y malversación. Aforado como procurador; en junio de 2026 el PSOE le dio una portavocía en las Cortes de Castilla y León.",
    resumen: "El alcalde socialista de Villablino (León) habría encargado a través del Ayuntamiento trabajos para su ganadería familiar.",
    personas: ["Mario Rivas"],
    eventos: [
      { f: "2025-05-07", t: "imputación", h: "Investigan por prevaricación y malversación al portavoz adjunto del PSOE en las Cortes de Castilla y León", s: [
        "https://www.eldebate.com/espana/castilla-y-leon/20250507/investigan-prevaricacion-malversacion-portavoz-adjunto-socialista-cortes-castilla-leon_294622.html"
      ] },
      { f: "2025-12-17", t: "decisión política", h: "El PSOE lo incluye en su lista autonómica pese a estar investigado", s: [
        "https://www.eldebate.com/espana/castilla-y-leon/20251217/psoe-incluye-lista-electoral-castilla-leon-alcalde-imputado-trafico-influencias_366411.html"
      ] },
      { f: "2026-06-24", t: "decisión política", h: "El PSOE le da una portavocía en las Cortes de Castilla y León", s: [
        "https://www.eldebate.com/espana/castilla-y-leon/20260624/psoe-premia-imputado-trafico-influencias-portavocia-cortes-castilla-leon_431693.html"
      ] }
    ]
  },
  {
    id: "linares",
    titulo: "Exalcalde de Linares",
    clase: "sentencia",
    ambito: "territorial",
    estado: "Condena firme: tres años de prisión y siete de inhabilitación por malversación.",
    resumen: "El exalcalde socialista de Linares (Jaén) Juan Fernández cobró 125.000 euros de más con cargo al Ayuntamiento.",
    personas: ["Juan Fernández"],
    eventos: [
      { f: "2025-07-03", t: "sentencia", h: "El Supremo confirma tres años de cárcel al exalcalde socialista de Linares", s: [
        "https://www.elespanol.com/espana/tribunales/20250703/ts-confirma-anos-alcalde-socialista-cobro-eur-extra-linares-ciudad-paro-espana/1003743833402_0.html"
      ] }
    ]
  },
  {
    id: "pineda",
    titulo: "Rafael Pineda y la parcela de Emvisesa (Sevilla)",
    clase: "judicial",
    ambito: "territorial",
    estado: "Imputado y en libertad con cargos por tráfico de influencias y corrupción en los negocios.",
    resumen: "Exconcejal socialista de Sevilla y exjefe de gabinete de la Delegación del Gobierno en Andalucía. Una empresa de su mujer compró una parcela a la empresa municipal de vivienda por 1,7 millones y la vendió meses después por 3,9.",
    personas: ["Rafael Pineda"],
    eventos: [
      { f: "2025-11-26", t: "registro", h: "La UCO se lleva los correos de Pineda en la Delegación del Gobierno en Andalucía", s: [
        "https://www.elespanol.com/espana/andalucia/20251126/uco-registra-emails-socialista-rafael-pineda-delegacion-gobierno-andalucia-caso-parcela/1003744030122_0.html"
      ] },
      { f: "2026-02-17", t: "detención", h: "La UCO detiene al exjefe de gabinete del delegado del Gobierno en Andalucía", s: [
        "https://www.elindependiente.com/espana/tribunales/2026/02/17/uco-detiene-exjefe-gabinete-delegado-gobierno-andalucia/",
        "https://www.publico.es/sociedad/uco-detiene-exjefe-gabinete-delegado-gobierno-andalucia-vinculacion-trama-urbanistica.html",
        "https://www.eleconomista.es/actualidad/noticias/13782375/02/26/la-uco-detiene-al-exjefe-de-gabinete-del-delegado-del-gobierno-en-andalucia-por-una-operacion-urbanistica.html"
      ] },
      { f: "2026-02-19", t: "libertad", h: "Libertad con cargos; Pineda había formateado su ordenador antes del registro", s: [
        "https://www.eldiario.es/sevilla/libertad-cargos-exasesor-delegado-gobierno-andalucia-imputado-operacion-urbanistica_1_13000028.html",
        "https://www.eldebate.com/espana/andalucia/sevilla/20260219/socialista-pineda-formateo-ordenador-antes-registro-uco-trama-parcela-sevilla_387062.html"
      ] }
    ]
  },
  {
    id: "soria",
    titulo: "Operación en el Ayuntamiento de Soria",
    clase: "judicial",
    ambito: "territorial",
    estado: "En instrucción en un juzgado de Soria, con diligencias por tráfico de influencias, prevaricación, falsedad, blanqueo y organización criminal.",
    resumen: "La UCO registró el Ayuntamiento de Soria, feudo socialista, y detuvo a seis personas, entre ellas la concejala de Comercio, por adjudicaciones a una empresa durante la alcaldía de Carlos Martínez, hoy líder del PSOE de Castilla y León.",
    personas: ["Yolanda Santos"],
    eventos: [
      { f: "2026-06-23", t: "detención", h: "La UCO registra el Ayuntamiento de Soria y detiene a seis personas", s: [
        "https://theobjective.com/espana/2026-06-23/seis-detenidos-operacion-corrupcion-ayuntamiento-soria/",
        "https://www.eleconomista.es/actualidad/noticias/13983697/06/26/sin-tregua-para-el-psoe-la-uco-registra-el-ayuntamiento-de-soria-y-detiene-a-seis-personas-en-una-operacion-contra-la-corrupcion.html"
      ] },
      { f: "2026-06-26", t: "informe", h: "El caso de Soria salpica a dos ministerios", s: [
        "https://www.eldebate.com/espana/castilla-y-leon/20260626/caso-corrupcion-psoe-ayuntamiento-soria-salpica-dos-ministerios-gobierno-sanchez_432636.html",
        "https://www.elespanol.com/reportajes/20260627/compra-votos-facturas-falsas-dedazos-ayuntamientos-diputaciones-psoe-copian-corrupcion-ferraz/1003744300410_0.html"
      ] }
    ]
  },
  {
    id: "covid-gestion",
    titulo: "Gestión de la pandemia de COVID-19",
    clase: "sentencia",
    ambito: "gobierno",
    estado: "El Constitucional declaró inconstitucionales el confinamiento del primer estado de alarma (julio de 2021) y la prórroga de seis meses del segundo (octubre de 2021); en 2024, con otra mayoría, cambió su doctrina. En lo penal, el Supremo inadmitió en 2020 las querellas contra el Gobierno y la causa del 8M contra el delegado en Madrid se archivó.",
    resumen: "Críticas a la respuesta del Gobierno ante la llegada del coronavirus: el mensaje inicial de Sanidad, la autorización de manifestaciones masivas como la del 8M días antes del estado de alarma, la compra de test rápidos defectuosos y la opacidad sobre el «comité de expertos» de la desescalada. Las compras de mascarillas investigadas judicialmente están en los expedientes del caso Koldo, Canarias y Baleares.",
    personas: ["Pedro Sánchez", "Salvador Illa", "Fernando Simón", "José Manuel Franco"],
    eventos: [
      { f: "2020-01-31", t: "declaración", h: "Fernando Simón: «España no va a tener más allá de algún caso diagnosticado»", s: [
        "https://www.libertaddigital.com/ciencia-tecnologia/salud/2020-06-04/fernando-simon-el-31-de-enero-espana-no-va-a-tener-mas-alla-de-algun-caso-diagnosticado-6074129/"
      ] },
      { f: "2020-03-25", t: "decisión judicial", h: "Una jueza abre diligencias contra el delegado del Gobierno en Madrid por permitir el 8M", s: [
        "https://www.elespanol.com/espana/tribunales/20200325/diligencias-delegado-gobierno-madrid-investigar-permitir-delito/477453063_0.html",
        "https://www.publico.es/politica/coronavirus-jueza-investiga-delegado-gobierno-madrid-permitir-8m.html",
        "https://cronicaglobal.elespanol.com/vida/jueza-investiga-prevaricacion-gobierno-en-8-m_331452_102.html"
      ] },
      { f: "2020-03-26", t: "revelación", h: "Sanidad devuelve los primeros test rápidos comprados en China: detectaban menos del 30 % de los positivos", s: [
        "https://www.eleconomista.es/nacional/noticias/10442502/03/20/Los-test-rapidos-comprados-en-China-para-detectar-coronavirus-no-valen-tienen-una-sensibilidad-inferior-al-30.html",
        "https://www.infolibre.es/noticias/politica/2020/03/26/la_embajada_china_dice_que_bioeasy_biotechnology_que_vendio_espana_tests_no_validos_no_tiene_licencia_105327_1012.html",
        "https://www.elindependiente.com/politica/2020/03/26/china-asegura-que-espana-compro-los-test-fallidos-a-una-empresa-sin-licencia/",
        "https://eldiario.es/sociedad/pasado-primer-rapidos-Sanidad-devolver_0_1009999747.html"
      ] },
      { f: "2020-05-25", t: "imputación", h: "La jueza cita como investigado al delegado del Gobierno en Madrid, José Manuel Franco, por el 8M", s: [
        "https://www.elespanol.com/espana/tribunales/20200525/juez-imputa-delegado-gobierno-madrid-permitir/492701274_0.html",
        "https://www.eldiario.es/politica/imputado-delegado-gobierno-madrid-manifestacion_1_5976621.html",
        "https://www.publico.es/politica/jueza-investiga-manifestaciones-8m-madrid-cita-imputado-delegado-gobierno.html"
      ] },
      { f: "2020-06-12", t: "archivo", h: "La jueza archiva la causa del 8M al no ver indicios suficientes de delito contra Franco", s: [
        "https://www.eldiario.es/politica/archiva-investigacion-delegado-gobierno-madrid_1_6020976.html",
        "https://www.elindependiente.com/politica/2020/06/12/la-juez-del-8-m-archiva-el-caso-al-no-apreciar-suficientes-indicios-de-delito/",
        "https://www.eleconomista.es/politica/noticias/10601530/06/20/La-juez-del-8M-archiva-la-causa-contra-el-delegado-del-Gobierno-en-Madrid.html",
        "https://www.infolibre.es/politica/jueza-8m-archiva-causa-delegado-gobierno_1_1184063.html"
      ] },
      { f: "2020-07-28", t: "revelación", h: "Sanidad responde a Transparencia que no existe un comité de expertos que decida la desescalada", s: [
        "https://www.elespanol.com/espana/politica/20200728/sanidad-niega-creara-comite-expertos-decidir-desescalada/508700084_0.html",
        "https://www.eleconomista.es/politica/noticias/10693998/07/20/El-Gobierno-niega-al-Consejo-de-Transparencia-la-existencia-del-Comite-de-Expertos-del-confinamiento.html",
        "https://www.vozpopuli.com/espana/sanidad-comite-expertos_0_1377463690.html",
        "https://www.libertaddigital.com/ciencia-tecnologia/salud/2020-07-28/nunca-existio-un-comite-de-expertos-que-decidiera-sobre-la-desescalada-la-respuesta-del-gobierno-a-transparencia-1276661738/"
      ] },
      { f: "2020-12-18", t: "archivo", h: "El Supremo inadmite 20 querellas y 30 denuncias contra el Gobierno por la pandemia y envía parte a los juzgados ordinarios", s: [
        "https://www.elespanol.com/espana/tribunales/20201218/ts-rechaza-querellas-gobierno-gestion-pandemia-fiscal/544445778_0.html",
        "https://www.infolibre.es/noticias/politica/2020/12/18/el_supremo_inadmite_las_querellas_contra_gobierno_por_gestion_pandemia_pero_las_remite_juzgados_ordinarios_114605_1012.html",
        "https://www.elindependiente.com/espana/2020/12/18/el-supremo-rechaza-por-ahora-las-querellas-por-la-gestion-de-la-pandemia-contra-el-gobierno/",
        "https://www.cope.es/actualidad/espana/noticias/supremo-inadmite-las-denuncias-querellas-contra-gestion-del-gobierno-pandemia-20201218_1052325"
      ] },
      { f: "2020-12-29", t: "revelación", h: "Sanidad entrega a Transparencia los nombres de los expertos que elaboraron los informes de la desescalada", s: [
        "https://www.libertaddigital.com/ciencia-tecnologia/salud/2020-12-29/sanidad-revela-meses-despues-los-miembros-del-comite-de-expertos-que-no-existia-6694012/",
        "https://www.publico.es/sociedad/sanidad-comunica-transparencia-nombres-expertos-elaboraron-informes-desescalada.html"
      ] },
      { f: "2021-07-14", t: "sentencia", h: "El Constitucional declara inconstitucional el confinamiento del primer estado de alarma por 6 votos a 5", s: [
        "https://www.elindependiente.com/espana/2021/07/14/el-constitucional-declara-ilegal-el-confinamiento-del-primer-estado-de-alarma/",
        "https://theobjective.com/espana/2021-07-14/el-tc-declara-inconstitucional-el-primer-estado-de-alarma-de-la-pandemia/",
        "https://www.eleconomista.es/politica/noticias/11324862/07/21/El-TC-declara-inconstitucional-el-confinamiento-general-decretado-en-el-primer-estado-de-alarma.html",
        "https://www.cope.es/actualidad/espana/noticias/tribunal-constitucional-declara-inconstitucional-primer-estado-alarma-20210714_1401034"
      ] },
      { f: "2021-10-27", t: "sentencia", h: "El Constitucional anula la prórroga de seis meses del segundo estado de alarma y la delegación en las comunidades", s: [
        "https://www.elespanol.com/espana/tribunales/20211027/tc-declara-inconstitucional-segundo-alarma-sanchez-votos/622688116_0.html",
        "https://www.eldiario.es/politica/constitucional-dividido-vuelve-dar-razon-vox-anula-medidas-segundo-alarma_1_8434642.html",
        "https://www.elindependiente.com/espana/2021/10/27/nuevo-reves-al-gobierno-el-tc-tambien-declara-inconstitucional-el-segundo-estado-de-alarma/",
        "https://www.publico.es/politica/constitucional-tumba-segundo-alarma.html"
      ] },
      { f: "2021-11-10", t: "sentencia", h: "La sentencia reprocha que el Congreso quedara seis meses sin poder controlar las medidas del Gobierno", s: [
        "https://www.eldebate.com/espana/20211110/sentencia-anula-segundo-alarma-afea-gobierno-incoherente-constitucion.html",
        "https://www.libertaddigital.com/espana/2021-11-10/sentencia-tribunal-constitucional-segundo-estado-alarma-prorroga-inconsistente-6836132/"
      ] },
      { f: "2024-11", t: "decisión judicial", h: "El Constitucional, con nueva mayoría, cambia su doctrina y avala ahora los confinamientos", s: [
        "https://www.eleconomista.es/legal/noticias/13069263/11/24/el-constitucional-cambia-su-doctrina-sobre-el-estado-de-alarma-y-avala-ahora-los-confinamientos.html"
      ] }
    ]
  },
  {
    id: "dana-valencia",
    titulo: "La dana de Valencia: el papel del Gobierno central",
    clase: "suceso",
    ambito: "gobierno",
    estado: "Sin causa penal contra cargos del Gobierno central. El Supremo archivó en julio de 2025 las querellas contra Sánchez y seis ministros. La jueza de Catarroja, que investiga la gestión de la Generalitat, y la Audiencia de Valencia han rechazado imputar al presidente de la Confederación Hidrográfica del Júcar y a la delegada del Gobierno.",
    resumen: "La riada del 29 de octubre de 2024 causó más de 220 muertos en la provincia de Valencia, unos 200 en la cuenca del barranco del Poyo. La instrucción penal se centra en la Generalitat Valenciana. Al Gobierno central se le reprochan los avisos de la Confederación Hidrográfica del Júcar (dependiente de Transición Ecológica) sobre el Poyo, las obras de encauzamiento que nunca se ejecutaron y la frase de Sánchez «si necesitan más recursos, que los pidan».",
    personas: ["Pedro Sánchez", "Teresa Ribera", "Miguel Polo", "Pilar Bernabé"],
    eventos: [
      { f: "2024-10-30", t: "catástrofe", h: "La dana deja al menos 95 muertos, 92 de ellos en Valencia; Paiporta es el epicentro", s: [
        "https://www.elespanol.com/espana/20241030/dana-lleva-caos-destruccion-media-espana-varios-muertos-valencia-desaparecidos-albacete/897160844_0.html",
        "https://www.eldiario.es/comunitat-valenciana/guardia-civil-confirma-13-muertos-comunitat-valenciana-temporal_1_11776247.html",
        "https://www.publico.es/sociedad/directo-aumentan-95-muertos-dana-92-pais-valencia.html"
      ] },
      { f: "2024-11-02", t: "declaración", h: "Sánchez a la Generalitat: «Si necesitan más recursos, que los pidan»", s: [
        "https://www.eldebate.com/espana/20241114/juristas-apuntan-necesitan-recursos-pidan-sanchez-puede-llevar-condena-gobierno_244748.html"
      ] },
      { f: "2025-05-08", t: "decisión judicial", h: "La jueza de la dana rechaza de nuevo imputar al presidente de la Confederación del Júcar", s: [
        "https://theobjective.com/espana/tribunales/2025-05-08/juez-rechaza-imputar-presidente-confederacion-jucar/",
        "https://www.eldiario.es/comunitat-valenciana/jueza-dana-rechaza-nuevo-imputar-presidente-confederacion-jucar-diana-preferida-pp-mazon_1_12324725.html"
      ] },
      { f: "2025-06-09", t: "revelación", h: "El Gobierno tenía registradas 68 inundaciones históricas en el Poyo cuando descartó las obras", s: [
        "https://www.elespanol.com/valencia/20250609/gobierno-registros-inundaciones-historicas-significativas-barranco-poyo-descarto-obras/1003743792669_0.html"
      ] },
      { f: "2025-07-25", t: "informe", h: "Un informe de la Guardia Civil señala dos horas sin avisos de la CHJ sobre la crecida del Poyo", s: [
        "https://www.libertaddigital.com/espana/2025-07-25/la-guardia-civil-destaca-que-hubo-dos-horas-sin-avisos-de-la-chj-sobre-el-barranco-del-poyo-el-dia-de-la-dana-7280236/",
        "https://www.elespanol.com/valencia/20250726/informe-guardia-civil-desmonta-relato-gobierno-dana-apunta-miguel-polo-presidente-chj/1003743863304_0.html",
        "https://www.eldiario.es/comunitat-valenciana/guardia-civil-cree-peor-momento-dana-confederacion-jucar-no-controlo-caudal-poyo_1_12492207.html",
        "https://www.publico.es/politica/tribunales/guardia-civil-da-oxigeno-mazon-acusar-aemet-confederacion-jucar-inexistencia-avisos-sobre-dana.html"
      ] },
      { f: "2025-07-30", t: "decisión judicial", h: "La jueza califica de «erróneo e incompleto» el informe de la Guardia Civil y descarta un apagón informativo de la CHJ", s: [
        "https://www.elespanol.com/valencia/20250730/jueza-dana-ve-erroneo-incompleto-informe-guardia-civil-senalo-falta-avisos-chj/1003743868142_0.html",
        "https://www.eldebate.com/espana/comunidad-valenciana/20250730/juez-dana-considera-ultimo-informe-presentado-guardia-civil-erroneo-incompleto-no-corresponde-acordado-juzgado_321825.html",
        "https://www.eldiario.es/comunitat-valenciana/jueza-dana-arremete-informe-erroneo-guardia-civil-barranco-poyo_1_12502055.html",
        "https://www.publico.es/politica/tribunales/jueza-dana-califica-erroneo-informe-guardia-civil-senalaba-gobierno-central.html"
      ] },
      { f: "2025-07-30", t: "archivo", h: "El Supremo archiva las querellas y denuncias contra Sánchez y seis ministros por la dana", s: [
        "https://theobjective.com/espana/tribunales/2025-07-30/supremo-archiva-denuncias-querellas-gobierno-dana/",
        "https://www.cope.es/actualidad/espana/noticias/supremo-archiva-querellas-denuncias-pedro-sanchez-6-ministros-gestion-dana-20250730_3193109.html",
        "https://www.infolibre.es/politica/supremo-archiva-querellas-denuncias-pedro-sanchez-6-ministros-dana_1_2039922.html",
        "https://www.eldiario.es/politica/supremo-rechaza-querellas-pedro-sanchez-gobierno-dana_1_12503550.html"
      ] },
      { f: "2025-09-09", t: "revelación", h: "El Gobierno admite que ningún policía de aguas de la CHJ trabajó la tarde de la dana", s: [
        "https://www.elespanol.com/valencia/20250909/gobierno-reconoce-ahora-ninguno-policias-agua-encargados-vigilar-barrancos-trabajo-tarde-dana/1003743918282_0.html",
        "https://www.eldebate.com/espana/comunidad-valenciana/20250909/confederacion-hidrografica-jucar-admite-no-centro-atencion-barranco-poyo-dia-dana_332950.html"
      ] },
      { f: "2025-10-21", t: "decisión judicial", h: "La Audiencia de Valencia respalda a la jueza y rechaza imputar a Bernabé y al presidente de la CHJ", s: [
        "https://www.eldebate.com/espana/comunidad-valenciana/20251021/audiencia-valencia-respalda-jueza-dana-rechaza-imputar-presidente-confederacion-jucar_346967.html",
        "https://www.elplural.com/sociedad/tribunales/audiencia-valencia-respalda-juez-dana-rechaza-imputar-bernabe-presidente-confederacion-jucar_361017102"
      ] },
      { f: "2025-10-29", t: "revelación", h: "El Gobierno cifra en 228 millones las obras de encauzamiento del Poyo que no llegaron a ejecutarse", s: [
        "https://www.elespanol.com/valencia/20251029/millones-evitado-catastrofe-valencia-gobierno-revela-obligacion-inversion-paralizo-ribera/1003743988947_0.html",
        "https://www.elespanol.com/valencia/20251028/dana-no-negligencia-muertes-poyo-cuenca-encauzo-gobierno/1003743986718_0.html"
      ] },
      { f: "2025-12-23", t: "decisión judicial", h: "La Audiencia de Valencia rechaza otra vez imputar al presidente de la CHJ tras su declaración como testigo", s: [
        "https://www.elespanol.com/valencia/20251223/audiencia-valencia-da-razon-jueza-rechaza-imputacion-presidente-chj-declarar-testigo/1003744067668_0.html",
        "https://www.eldiario.es/comunitat-valenciana/audiencia-valencia-rechaza-nuevo-imputacion-dana-presidente-confederacion-jucar_1_12867050.html"
      ] },
      { f: "2026-04-15", t: "informe", h: "La Confederación del Júcar deja sin ejecutar más de la mitad de las obras previstas para el año posterior a la dana", s: [
        "https://www.eldebate.com/espana/comunidad-valenciana/20260415/confederacion-jucar-deja-ejecutar-mitad-obras-previstas-ano-despues-dana_406619.html"
      ] }
    ]
  },
  {
    id: "adamuz",
    titulo: "El accidente ferroviario de Adamuz",
    clase: "judicial",
    ambito: "gobierno",
    estado: "El juzgado de Montoro (Córdoba) instruye la causa del accidente. La Audiencia Nacional rechazó en marzo de 2026 la denuncia por homicidio imprudente contra Óscar Puente por falta de competencia, ya que como ministro es aforado ante el Supremo. Puente sigue en el cargo pese a que las víctimas piden su dimisión.",
    resumen: "El 18 de enero de 2026 un Iryo Málaga-Madrid descarriló en Adamuz e invadió la vía contigua, donde chocó con un Alvia de Renfe: 46 muertos. El ministro habló de un accidente «extraño» en una vía «renovada»; documentos de Adif mostraron que en ese punto no se cambiaron los carriles. La Guardia Civil y los peritos judiciales sitúan la causa en la rotura de una soldadura, en un punto con un defecto de nivelación detectado meses antes. Adif sostiene que los valores estaban dentro de la norma.",
    personas: ["Óscar Puente", "Luis Pedro Marco de la Peña"],
    eventos: [
      { f: "2026-01-18", t: "accidente", h: "Un Iryo descarrila en Adamuz (Córdoba) y choca con un Alvia de Renfe: 46 muertos", s: [
        "https://www.elespanol.com/invertia/20260118/suspendida-circulacion-ave-madrid-andalucia-descarrilar-trenes-varias-personas-resultan-heridas/1003744094248_0.html",
        "https://www.eleconomista.es/transportes-turismo/noticias/13732914/01/26/descarrilan-dos-trenes-de-iryo-y-renfe-en-adamuz-cordoba.html",
        "https://www.canarias7.es/sociedad/trenes-alta-velocidad-descarrilan-adamuz-cordoba-siete-20260118222929-dirc.html"
      ] },
      { f: "2026-01-19", t: "declaración", h: "Puente: «Es un accidente muy extraño, con un tren nuevo, en una recta y en una vía que terminó de renovarse en mayo»", s: [
        "https://www.elespanol.com/invertia/20260119/oscar-puente-accidente-extrano-tren-nuevo-recta-via-termino-renovarse-mayo/1003744094361_0.html",
        "https://www.eleconomista.es/transportes-turismo/noticias/13733078/01/26/las-incognitas-de-la-tragedia-ferroviaria-de-adamuz-por-que-descarrilo-el-tren-de-iryo-que-desencadeno-la-tragedia.html"
      ] },
      { f: "2026-01-19", t: "revelación", h: "Adif había registrado incidencias técnicas en el tramo en los meses previos al choque", s: [
        "https://www.elespanol.com/reportajes/20260119/adif-notifico-incidencias-tecnicas-tramo-adamuz-meses-previos-choque-mortal-trenes/1003744094397_0.html",
        "https://theobjective.com/sociedad/suceso/2026-01-19/tren-iryo-adamuz-problemas/"
      ] },
      { f: "2026-01-25", t: "declaración", h: "El PP acusa al Gobierno de ocultar información sobre el accidente y pide la dimisión de Puente", s: [
        "https://www.eldebate.com/espana/20260125/pp-acusa-gobierno-ocultar-informacion-accidente-adamuz-exige-dimision-puente_378006.html"
      ] },
      { f: "2026-01-27", t: "decisión judicial", h: "La Audiencia Nacional pide informe a la Fiscalía sobre una denuncia por homicidio imprudente contra Puente", s: [
        "https://www.elespanol.com/espana/tribunales/20260127/audiencia-nacional-pide-fiscal-opinion-denuncia-homicidios-puente-accidente-adamuz/1003744105762_0.html",
        "https://theobjective.com/espana/tribunales/2026-01-27/audiencia-nacional-puente-homicidio-adamuz/",
        "https://www.vozpopuli.com/tribunales/la-audiencia-nacional-abre-diligencias-contra-oscar-puente-por-el-accidente-de-adamuz.html"
      ] },
      { f: "2026-01-28", t: "revelación", h: "Documentos de Adif muestran que en el punto del accidente no se renovaron los carriles", s: [
        "https://theobjective.com/espana/2026-01-28/documentos-adif-adamuz-tramo-accidente/",
        "https://www.eldiario.es/politica/pp-acusa-puente-mentir-renovacion-total-via-adamuz-exige-dimision_1_12933988.html"
      ] },
      { f: "2026-01-29", t: "declaración", h: "Puente admite en el Senado que faltaban por renovar elementos sensibles de la vía", s: [
        "https://theobjective.com/economia/transporte/2026-01-29/puente-falta-renovar-elementos-sensibles-via-adamuz/"
      ] },
      { f: "2026-03-06", t: "archivo", h: "La Audiencia Nacional rechaza la denuncia contra Puente y remite lo actuado al juzgado de Montoro", s: [
        "https://www.eldiario.es/politica/audiencia-nacional-rechaza-denuncia-oscar-puente-accidente-ferroviario-adamuz_1_13047317.html",
        "https://www.libertaddigital.com/espana/2026-03-06/la-audiencia-nacional-archiva-la-denuncia-contra-puente-por-adamuz-pero-remite-la-competencia-al-juzgado-de-montoro-7370485/",
        "https://theobjective.com/espana/tribunales/2026-03-06/audiencia-nacional-oscar-puente-adamuz/",
        "https://www.infolibre.es/politica/audiencia-nacional-rechaza-denuncia-puente-accidente-adamuz_1_2157362.html"
      ] },
      { f: "2026-05-25", t: "declaración", h: "Las víctimas piden en el Senado la dimisión de Puente y del presidente de Adif; el ministro les respondió: «Yo no he soldado el raíl»", s: [
        "https://www.publico.es/politica/victimas-descarrilamiento-adamuz-piden-dimision-oscar-puente-presidente-adif.html",
        "https://www.elindependiente.com/espana/2026/05/25/victimas-accidente-adamuz-exigen-dimision-puente-ruido-politico-provoca-dolor/",
        "https://www.cope.es/actualidad/espana/noticias/puente-victimas-adamuz-piden-dimision-no-he-soldado-rail-20260525_3371210.html",
        "https://www.eldebate.com/economia/20260525/victimas-adamuz-exigen-dimision-puente-presidente-adif-daria-algo-paz_421266.html"
      ] },
      { f: "2026-06-21", t: "informe", h: "La comisión del Senado sobre Adamuz denuncia presiones del Gobierno y falta de medios en la CIAF", s: [
        "https://www.elespanol.com/espana/politica/20260621/comision-senado-accidente-adamuz-denuncia-presiones-gobierno-falta-personal-ciaf/1003744293596_0.html"
      ] },
      { f: "2026-07-14", t: "decisión judicial", h: "La jueza reclama a Adif cinco expedientes clave tras el análisis de los peritos", s: [
        "https://www.elespanol.com/invertia/observatorios/movilidad/20260714/jueza-reclama-adif-expedientes-clave-accidente-adamuz-analisis-peritos/1003744320845_0.html"
      ] },
      { f: "2026-07-18", t: "declaración", h: "Seis meses después, las víctimas denuncian el «desamparo» del ministerio", s: [
        "https://www.libertaddigital.com/espana/politica/2026-07-18/las-victimas-de-adamuz-denuncian-el-desamparo-de-puente-seis-meses-despues-no-se-han-asumido-responsabilidades-7437622/"
      ] },
      { f: "2026-09-03", t: "informe", h: "La Guardia Civil concluye que la rotura de una soldadura causó el accidente; los peritos ven un defecto de nivelación de 6,4 mm", s: [
        "https://www.eldebate.com/espana/andalucia/20260903/informe-definitivo-guardia-civil-concluye-rotura-soldadura-provoco-tragedia-adamuz_454855.html",
        "https://www.elespanol.com/invertia/20260903/peritos-adamuz-creen-defecto-nivelacion-mm-via-contribuyo-rotura-provoco-tragedia/1003744371653_0.html",
        "https://cordopolis.eldiario.es/cordoba-hoy/tribunales/peritos-senalan-defecto-6-4-milimetros-carril-pudo-contribuir-accidente-adamuz_1_13486177.html",
        "https://www.cope.es/emisoras/andalucia/cordoba-provincia/cordoba/noticias/peritos-senalan-defecto-6-4-mm-carril-pudo-contribuir-rotura-20260904_3430345.html"
      ] },
      { f: "2026-09-04", t: "declaración", h: "Puente llama «bulo» al informe de la Guardia Civil y Adif defiende que los defectos estaban dentro de los límites", s: [
        "https://www.eldebate.com/economia/20260904/puente-rebaja-bulo-nuevo-informe-guardia-civil-apunta-rotura-via-adamuz_455256.html",
        "https://www.elespanol.com/invertia/observatorios/movilidad/20260904/adif-defiende-cumplio-normativa-problemas-via-adamuz-dentro-limites-seguridad/1003744373479_0.html",
        "https://www.libertaddigital.com/espana/2026-09-04/feijoo-califica-a-puente-como-ministro-indigno-y-moreno-exige-toda-la-verdad-sobre-el-accidente-de-adamuz-7455288/"
      ] },
      { f: "2026-09-21", t: "declaración", h: "El PP acusa a Puente de mostrar tras el accidente la inspección de otro carril y de restringir la documentación técnica", s: [
        "https://theobjective.com/economia/transporte/2026-09-21/puente-soldadura-adamuz-pp/"
      ] }
    ]
  },
  {
    id: "ley-nietos",
    titulo: "La «ley de nietos» y el censo electoral",
    clase: "judicial",
    ambito: "gobierno",
    estado: "Un juzgado de instrucción de Madrid tiene abiertas diligencias contra Sofía Puente por prevaricación. El Supremo suspendió cautelarmente en septiembre de 2026 la inscripción en el censo de residentes ausentes (CERA) de los nacionalizados que no acrediten el exilio de sus ascendientes; la Abogacía del Estado ha criticado la medida.",
    resumen: "La Ley de Memoria Democrática (octubre de 2022) permitió optar a la nacionalidad a hijos y nietos de exiliados por razones políticas. Una instrucción de la Dirección General de Seguridad Jurídica y Fe Pública, dirigida por Sofía Puente —hermana del ministro de Transportes—, presumió exiliado a todo español que salió del país entre 1936 y 1955. Las solicitudes superaron los 2,4 millones. La oposición acusa al Gobierno de querer alterar el censo electoral; el Gobierno lo niega y lo presenta como reparación histórica.",
    personas: ["Sofía Puente"],
    eventos: [
      { f: "2022-10-05", t: "decisión política", h: "El Senado aprueba definitivamente la Ley de Memoria Democrática, que abre la nacionalidad a descendientes de exiliados", s: [
        "https://www.eldiario.es/sociedad/aprobada-definitivamente-nueva-ley-memoria-democratica-declara-ilegal-dictadura-franquista_1_9597256.html",
        "https://www.elespanol.com/espana/20221005/senado-polemica-ley-memoria-democratica-psoe-bildu/708429454_0.html",
        "https://theobjective.com/espana/2022-10-05/senado-memoria-democratica/",
        "https://www.infolibre.es/politica/senado-aprueba-definitivamente-nueva-ley-memoria-democratica_1_1333631.html"
      ] },
      { f: "2026-06-23", t: "revelación", h: "El Gobierno aflora 200.000 solicitudes más de «nietos» ocho meses después de cerrarse el plazo", s: [
        "https://www.elespanol.com/espana/politica/20260623/gobierno-saca-cajon-consulados-nietos-meses-acabar-plazo-pedir-nacionalidad/1003744295940_0.html"
      ] },
      { f: "2026-06-29", t: "informe", h: "544.722 descendientes de exiliados tienen ya aprobada la nacionalidad española", s: [
        "https://www.elindependiente.com/espana/2026/06/29/un-total-de-544-722-descendientes-de-exiliados-ya-tienen-aprobada-la-nacionalidad-espanola/"
      ] },
      { f: "2026-07-01", t: "querella", h: "Hazte Oír se querella contra Sofía Puente por prevaricación por la instrucción que amplió la ley", s: [
        "https://theobjective.com/espana/tribunales/2026-07-01/hazte-oir-querella-puente-prevaricacion-nietos/",
        "https://www.libertaddigital.com/espana/2026-07-01/no-publicar-ln-7429046/"
      ] },
      { f: "2026-07-02", t: "revelación", h: "Un certificado emitido por el PSOE sirve para acreditar la condición de exiliado", s: [
        "https://theobjective.com/espana/2026-07-02/ley-nietos-certificado-psoe-exiliado/"
      ] },
      { f: "2026-07-05", t: "revelación", h: "The Objective publica que Sofía Puente retocó la aplicación de la ley a espaldas de la entonces ministra de Justicia", s: [
        "https://theobjective.com/espana/politica/2026-07-05/puente-ley-nietos/"
      ] },
      { f: "2026-07-11", t: "declaración", h: "Funcionarios de los registros denuncian la instrucción que modificó la ley", s: [
        "https://theobjective.com/espana/politica/2026-07-11/funcionarios-instruccion-puente-ley-de-nietos/"
      ] },
      { f: "2026-07-17", t: "decisión", h: "La mayoría de la Junta Electoral Central ve ilegal la ampliación, pero no se cree facultada para actuar", s: [
        "https://www.elespanol.com/espana/politica/20260717/mayoria-junta-electoral-ve-ilegal-ampliacion-ley-nietos-sofia-puente-no-cree-facultada-actuar/1003744324131_0.html"
      ] },
      { f: "2026-07-22", t: "decisión judicial", h: "Un juzgado de Madrid abre diligencias contra Sofía Puente por prevaricación", s: [
        "https://theobjective.com/espana/tribunales/2026-07-22/juez-diligencias-hermana-puente-prevaricacion-ley-nietos/",
        "https://www.vozpopuli.com/tribunales/la-juez-da-el-primer-paso-para-investigar-a-sofia-puente-por-prevaricacion-con-la-ley-de-nietos.html"
      ] },
      { f: "2026-09-02", t: "recurso", h: "El Supremo admite a trámite el recurso de Hazte Oír sobre el censo; las solicitudes ya superan los 2,4 millones", s: [
        "https://www.eldebate.com/espana/20260902/supremo-admite-recurso-hazte-oir-contra-ley-nietos-decidira-sobre-suspension-provisional-misma_454408.html",
        "https://www.eldebate.com/espana/20260902/salto-olimpico-ley-nietos-876321-24-millones_454358.html"
      ] },
      { f: "2026-09-08", t: "decisión judicial", h: "El Supremo suspende la inscripción en el censo electoral de los nacionalizados que no acrediten el exilio", s: [
        "https://www.eldiario.es/politica/supremo-prohibe-forma-cautelar-votar-nacionalizados-ley-nietos-salvo-demuestren-exiliados_1_13492943.html",
        "https://www.elespanol.com/espana/tribunales/20260908/ts-suspende-inscripcion-censo-electoral-nacionalizados-ley-nietos-salvo-acrediten-exilio/1003744376058_0.html",
        "https://www.eleconomista.es/legal/noticias/14013130/09/26/el-tribunal-supremo-ve-indicios-de-que-se-concedio-la-nacionalidad-a-descendientes-de-emigrantes-economicos-sin-prueba.html",
        "https://diariodeavisos.elespanol.com/2026/09/supremo-suspende-voto-ley-de-nietos-censo-cera/"
      ] },
      { f: "2026-09-11", t: "declaración", h: "Indignación en el Gobierno con los argumentos del Supremo: «Es atroz»", s: [
        "https://www.elindependiente.com/espana/2026/09/11/indignacion-gobierno-psoe-supremo-ley-nietos-atroz-imparcialidad/"
      ] },
      { f: "2026-09-11", t: "recurso", h: "Sofía Puente pide anular la querella alegando que el asunto ya fue juzgado", s: [
        "https://www.libertaddigital.com/espana/2026-09-11/sofia-puente-intenta-anular-la-querella-por-la-ley-de-nietos-admitiendo-que-su-instruccion-pudo-ser-desacertada-7458577/",
        "https://theobjective.com/espana/tribunales/2026-09-10/querella-sofia-puente-tsupremo-ley-nietos/"
      ] },
      { f: "2026-09-15", t: "declaración", h: "Sofía Puente reconoce que su instrucción amplió los supuestos de la ley y rechaza que la defienda la Abogacía del Estado", s: [
        "https://www.eldebate.com/espana/20260915/sofia-puente-reconoce-instruccion-sobre-ley-nietos-amplio-casos-previstos-norma_458939.html",
        "https://theobjective.com/espana/tribunales/2026-09-15/puente-abogacia-estado-ley-nietos/"
      ] },
      { f: "2026-09-21", t: "recurso", h: "La Abogacía del Estado critica los «excesos» del Supremo y avisa de que los consulados no podrán certificar a tiempo", s: [
        "https://theobjective.com/espana/tribunales/2026-09-21/abogacia-estado-paralizacion-efectos-electorales-ley-nietos/",
        "https://www.eldiario.es/politica/gobierno-carga-excesos-supremo-ley-nietos-dice-nadie-predecir-votarian_1_13526571.html",
        "https://www.elespanol.com/espana/tribunales/20260922/gobierno-avisa-supremo-consules-no-tiempo-certificar-nietos-probado-derecho-voto/1003744391724_0.html"
      ] }
    ]
  },
  {
    id: "casa-47",
    titulo: "Casa 47: la empresa pública de vivienda",
    clase: "suceso",
    ambito: "gobierno",
    estado: "En funcionamiento. El Gobierno promete 100.000 alquileres en diez años; el portal arrancó en septiembre de 2026 con 800 viviendas anunciadas, de las que unas 640 estaban disponibles y ninguna en Madrid, Barcelona, Valencia, Sevilla o Málaga.",
    resumen: "El Gobierno transformó en diciembre de 2025 la entidad pública de suelo Sepes en Casa 47, con 13.000 millones de inversión prevista en diez años y 40.000 viviendas procedentes de la Sareb. Su portal de alquiler nació con una oferta escasa y alejada de las grandes ciudades, que la propia empresa atribuyó a que la Sareb ya había vendido los pisos mejor situados. El Observatorio del Alquiler sostiene que ninguna vivienda cumple el criterio de asequibilidad de la Ley de Vivienda.",
    personas: ["Pedro Sánchez", "Isabel Rodríguez"],
    eventos: [
      { f: "2025-12", t: "decisión política", h: "El Consejo de Ministros convierte el Sepes en Casa 47, con 13.000 millones de inversión prevista", s: [
        "https://www.infolibre.es/politica/gobierno-aprueba-casa-47-nueva-empresa-estatal-quiere-aumentar-inversion-vivienda-publica_1_2111664.html",
        "https://www.eldiario.es/economia/gobierno-aprueba-cobertura-impagos-alquiler-ayudar-jovenes-vulnerables_1_12830466.html",
        "https://www.eleconomista.es/vivienda-inmobiliario/noticias/13689568/12/25/casa-47-la-nueva-empresa-publica-de-vivienda-y-suelo-ya-es-realidad.html",
        "https://www.publico.es/economia/vivienda/100-millones-oferta-vivienda-publica-alquileres-75-anos-sepes-pasa-casa-47.html"
      ] },
      { f: "2026-03-13", t: "decisión política", h: "Casa 47 convoca 100 millones para comprar viviendas privadas y destinarlas a alquiler", s: [
        "https://www.elespanol.com/invertia/observatorios/vivienda/20260313/casa-lanza-convocatoria-millones-comprar-viviendas-privadas-destinarlas-alquiler-asequible/1003744168127_0.html"
      ] },
      { f: "2026-09-07", t: "decisión política", h: "Sánchez presenta el portal de Casa 47: unas 640 viviendas disponibles y ninguna en las grandes capitales", s: [
        "https://www.eldebate.com/economia/20260907/sanchez-presenta-portal-casa-47-apenas-645-viviendas-disponibles_456164.html",
        "https://www.elindependiente.com/economia/2026/09/07/portal-inmobiliario-sanchez-casas-alquiler-ciudades/",
        "https://www.elespanol.com/invertia/observatorios/vivienda/20260907/pedro-sanchez-anuncia-nuevas-viviendas-casa-defiende-intervenir-mercado-roto-dislocado/1003744374751_0.html",
        "https://www.publico.es/economia/vivienda/gobierno-presenta-nuevo-portal-casa-47-nace-800-viviendas.html",
        "https://www.eleconomista.es/vivienda-inmobiliario/noticias/14012197/09/26/el-gobierno-lanza-un-idealista-publico-con-800-viviendas-disponbibles.html"
      ] },
      { f: "2026-09-08", t: "declaración", h: "Casa 47 justifica la escasa oferta: «Las viviendas de las mejores zonas fueron vendidas» por la Sareb", s: [
        "https://www.elindependiente.com/economia/2026/09/08/viviendas-gobierno-fiasco-plataforma-alquiler/",
        "https://www.eleconomista.es/vivienda-inmobiliario/noticias/14013584/09/26/el-gobierno-promete-100000-alquileres-publicos-en-10-anos-a-traves-de-casa-47.html"
      ] },
      { f: "2026-09-08", t: "declaración", h: "Podemos, socio del Gobierno, carga contra Casa 47 y exige expropiar viviendas a los fondos", s: [
        "https://theobjective.com/espana/politica/2026-09-08/podemos-casa-47-expropiar-vivienda-fondos-buitre/"
      ] },
      { f: "2026-09-09", t: "informe", h: "De 184.000 viviendas prometidas a las 800 del portal: cinco años de anuncios de vivienda pública sin cumplir", s: [
        "https://www.eldebate.com/economia/20260909/184000-viviendas-nunca-llegaron-solo-800-ofrece-casa-47-cinco-anos-promesas-fallidas-sanchismo_456659.html"
      ] },
      { f: "2026-09-10", t: "revelación", h: "Detectan irregularidades en los anuncios del portal, como gastos de comunidad no incluidos en el precio", s: [
        "https://theobjective.com/economia/2026-09-10/irregularidades-anuncios-portal-vivienda-casa-47/",
        "https://www.libertaddigital.com/libremercado/2026-09-10/por-que-no-vas-a-conseguir-una-vivienda-asequible-en-casa-47-7457253/"
      ] },
      { f: "2026-09-22", t: "informe", h: "El Observatorio del Alquiler denuncia que ninguna vivienda de Casa 47 cumple el criterio de asequibilidad", s: [
        "https://www.eldebate.com/economia/20260922/observatorio-alquiler-denuncia-ninguna-vivienda-casa-47-cumple-criterio-asequible_461279.html"
      ] },
      { f: "2026-09-23", t: "revelación", h: "Libre Mercado publica que Casa 47 incumple su propia norma sobre los precios", s: [
        "https://www.libertaddigital.com/libremercado/2026-09-23/la-farsa-la-empresa-de-vivienda-de-sanchez-casa-47-se-salta-su-propia-norma-sobre-los-precios-7464130/"
      ] }
    ]
  },
  {
    id: "apagon",
    titulo: "El apagón del 28 de abril de 2025",
    clase: "suceso",
    ambito: "gobierno",
    estado: "El comité del Gobierno (junio de 2025) repartió la responsabilidad entre Red Eléctrica y las eléctricas; el informe final europeo habló de múltiples causas encadenadas. La comisión de investigación del Senado, con mayoría del PP, declaró responsables al Gobierno, a Red Eléctrica y a la CNMC.",
    resumen: "A las 12.33 del 28 de abril de 2025 la península ibérica perdió de golpe unos 15 GW, el 60 % de la demanda, y quedó horas sin suministro. Se atribuyeron al menos siete muertes en España. El debate se centró en el control de tensión, la programación del sistema por Red Eléctrica —presidida por la exministra socialista Beatriz Corredor— y el peso de las renovables en el mix.",
    personas: ["Sara Aagesen", "Beatriz Corredor"],
    eventos: [
      { f: "2025-04-28", t: "apagón", h: "Un apagón deja sin luz a toda la península; Sánchez comparece por la noche", s: [
        "https://www.publico.es/sociedad/directo-apagon-inicio-desaparecer-subitamente-60-energia-demandada.html",
        "https://www.elespanol.com/sociedad/20250429/apagon-masivo-espana-causas-detras-corte-luz-historico-dejo-millones-personas-sin-electricidad/1003743734546_0.html",
        "https://www.cope.es/actualidad/espana/al-minuto/ultima-hora-gran-apagon-electrico-espana-20250429_3140762.html"
      ] },
      { f: "2025-06-17", t: "informe", h: "El informe del Gobierno culpa del apagón a Red Eléctrica y a las eléctricas", s: [
        "https://www.elespanol.com/invertia/empresas/energia/20250617/informe-apagon-detecta-poca-generacion-convencional-desconexiones-indebidas-llevaron-cero-energetico/1003743808369_0.html",
        "https://www.cope.es/actualidad/espana/noticias/gobierno-culpa-apagon-red-electrica-operadoras-privadas-partes-iguales-20250617_3171176.html",
        "https://www.elespanol.com/invertia/empresas/energia/20250617/sector-electrico-senala-red-electrica-conocer-informe-comision-investigacion-liderada-gobierno/1003743808614_0.html"
      ] },
      { f: "2026-03", t: "informe", h: "El informe final europeo apunta a una cadena de fallos sin un único culpable", s: [
        "https://www.eleconomista.es/energia/noticias/13833318/03/26/el-informe-europeo-del-apagon-no-logra-establecer-un-unico-culpable-y-apunta-a-multiples-causas.html"
      ] },
      { f: "2026-04-15", t: "informe", h: "La comisión del Senado declara responsables del apagón al Gobierno, a Red Eléctrica y a la CNMC", s: [
        "https://www.elespanol.com/invertia/empresas/energia/20260415/senado-declara-responsables-apagon-gobierno-red-electrica-cnmc/1003744207471_0.html",
        "https://www.eldiario.es/economia/comision-investigacion-apagon-pp-senado-culpa-gobierno-red-electrica-apunta-cnmc_1_13144358.amp.html"
      ] }
    ]
  },
  {
    id: "pulseras",
    titulo: "Los fallos de las pulseras antimaltrato",
    clase: "suceso",
    ambito: "gobierno",
    estado: "Ana Redondo sigue como ministra de Igualdad pese a su reprobación. El Tribunal de Cuentas aprecia en septiembre de 2026 «graves deficiencias» en contratos por valor de 102,6 millones.",
    resumen: "En el cambio de adjudicataria del servicio Cometa (de Telefónica a Vodafone y Securitas), en marzo de 2024, se perdieron durante meses los datos de localización anteriores, lo que según la Fiscalía provocó una «gran cantidad» de absoluciones y sobreseimientos de maltratadores. Igualdad negó que las pulseras fallaran y defendió que ninguna mujer protegida con ellas fue asesinada.",
    personas: ["Ana Redondo"],
    eventos: [
      { f: "2025-09-19", t: "declaración", h: "Redondo: «No hay fallo en las pulseras, han funcionado en todo momento»", s: [
        "https://www.elespanol.com/castilla-y-leon/region/20250919/ana-redondo-no-fallo-pulseras-funcionado-momento-siguen-funcionando-funcionaran/1003743932259_0.html",
        "https://www.eldiario.es/sociedad/paso-existiera-fallo-servicio-pulseras-control-maltratadores-debe-preocuparnos_129_12615581.html",
        "https://www.eldiario.es/sociedad/preguntas-respuestas-polemica-pulseras-control-maltratadores_1_12622711.html"
      ] },
      { f: "2025-09-22", t: "revelación", h: "El CGPJ había avisado dos veces a Igualdad; las trabajadoras alertaron de los fallos desde el inicio", s: [
        "https://www.libertaddigital.com/espana/politica/2025-09-22/el-consejo-general-del-poder-judicial-tambien-aviso-dos-veces-a-igualdad-de-los-fallos-en-las-pulseras-antimaltrato-7298760/",
        "https://www.eldiario.es/sociedad/trabajadoras-avisaron-inicio-fallos-pulseras-antimaltrato-no-son-errores-puntuales_1_12622893.html",
        "https://www.elindependiente.com/espana/2025/09/23/el-desastre-de-las-pulseras-antimaltrato-un-nuevo-golpe-para-las-mujeres-del-psoe/"
      ] },
      { f: "2025-10-01", t: "decisión política", h: "Tras su reprobación en el Congreso, el Senado exige la dimisión de Redondo", s: [
        "https://theobjective.com/espana/politica/2025-10-01/senado-dimision-ana-redondo-pulseras/",
        "https://theobjective.com/espana/politica/2025-09-28/redondo-pulseras-antimaltrato/"
      ] },
      { f: "2025-11-11", t: "revelación", h: "Una caída del sistema durante horas obliga a activar el protocolo de protección a las víctimas", s: [
        "https://www.elespanol.com/espana/20251111/ministerio-igualdad-avisa-pulseras-antimaltratadores-sufrido-fallo-sobrecarga-sistema/1003744009049_0.html",
        "https://www.eldiario.es/sociedad/sistema-pulseras-control-maltratadores-sufre-caida-durante-horas_1_12759295.html",
        "https://www.eldebate.com/sociedad/20251111/pulseras-antimaltrato-dejan-funcionar-durante-varias-horas-despues-igualdad-diga-estaban-arregladas_354042.html"
      ] },
      { f: "2026-03-10", t: "revelación", h: "Sentencias que absuelven a maltratadores por la falta de datos de las pulseras", s: [
        "https://www.eldebate.com/sociedad/20260310/sentencias-prueban-maltratadores-estan-siendo-absueltos-fallos-pulseras-gobierno_393762.html"
      ] },
      { f: "2026-09-11", t: "informe", h: "La Fiscalía vuelve a alertar de fallos y de desigualdad territorial en el uso de las pulseras", s: [
        "https://www.eldebate.com/sociedad/20260911/fiscalia-revela-pulseras-antimaltrato-fallan-han-absuelto-gran-cantidad-maltratadores_457667.html",
        "https://www.elespanol.com/espana/tribunales/20260912/fiscalia-vuelve-alertar-caos-pulseras-antimaltrato-desigualdad-territorial-carencias-uso/1003744378078_0.html"
      ] },
      { f: "2026-09-16", t: "decisión judicial", h: "La Audiencia de Málaga reprocha a Igualdad «errores de geolocalización» en las pulseras", s: [
        "https://www.eldebate.com/espana/andalucia/malaga/20260916/audiencia-malaga-saca-colores-igualdad-pulseras-antimaltrato-errores-geolocalizacion_459239.html"
      ] },
      { f: "2026-09-23", t: "informe", h: "El Tribunal de Cuentas detecta «graves deficiencias» en los contratos de las pulseras", s: [
        "https://www.elespanol.com/espana/tribunales/20260923/cuentas-pone-entredicho-gestion-ana-redondo-pulseras-antimaltrato-graves-deficiencias-riesgo/1003744394171_0.html",
        "https://www.eldiario.es/sociedad/tribunal-cuentas-detecta-graves-deficiencias-pulseras-antimaltrato-cuestiona-actuacion-igualdad_1_13531652.html",
        "https://www.libertaddigital.com/espana/2026-09-23/el-tribunal-de-cuentas-detecta-deficiencias-en-contratos-por-valor-de-100-millones-en-las-pulseras-antimaltrato-7464758/"
      ] }
    ]
  },
  {
    id: "solo-si-es-si",
    titulo: "Las rebajas de penas de la ley del «solo sí es sí»",
    clase: "suceso",
    ambito: "gobierno",
    estado: "La ley se reformó en abril de 2023 con los votos de PSOE y PP. Según el CGPJ, hasta julio de 2023 se habían acordado 1.155 rebajas de condena y 117 excarcelaciones.",
    resumen: "La Ley de Garantía Integral de la Libertad Sexual, impulsada por el Ministerio de Igualdad de Irene Montero y aprobada por el Gobierno de coalición, unificó abuso y agresión y rebajó las penas mínimas de varios tipos. Como el Código Penal obliga a aplicar retroactivamente la norma más favorable al reo, los tribunales revisaron miles de condenas. El PSOE reformó la ley con el apoyo del PP y el voto en contra de Unidas Podemos.",
    personas: ["Irene Montero", "Pedro Sánchez"],
    eventos: [
      { f: "2022-11-15", t: "decisión judicial", h: "La Audiencia de Madrid aplica las primeras rebajas de condena por la nueva ley", s: [
        "https://theobjective.com/espana/2022-11-15/rebaja-condena-agresion-sexual/",
        "https://www.vozpopuli.com/espana/ley-solo-si-es-si-tribunales-rebajas-delito-sexual.html",
        "https://www.libertaddigital.com/espana/politica/2022-11-15/la-justicia-deja-en-evidencia-a-montero-y-confirma-la-primera-rebaja-de-condena-por-la-ley-del-solo-si-es-si-6954521/"
      ] },
      { f: "2022-11-16", t: "declaración", h: "Sánchez pide «sensibilidad» a los tribunales ante las rebajas", s: [
        "https://theobjective.com/espana/2022-11-16/sanchez-rebajas-si-es-si/"
      ] },
      { f: "2022-11-29", t: "decisión judicial", h: "El Supremo avala rebajar penas por la ley, pero caso a caso", s: [
        "https://theobjective.com/espana/2022-11-29/supremo-rebaja-penas-solo-si/"
      ] },
      { f: "2023-03-02", t: "informe", h: "El CGPJ cifra en 721 las rebajas de penas y en 74 las excarcelaciones", s: [
        "https://theobjective.com/espana/tribunales/2023-03-02/cgpj-rebajas-penas-excarcelaciones-si-es-si/"
      ] },
      { f: "2023-03-07", t: "decisión política", h: "El PSOE inicia la reforma en el Congreso con el apoyo del PP y el rechazo de Podemos", s: [
        "https://www.elindependiente.com/espana/2023/03/07/el-psoe-inicia-la-reforma-del-si-es-si-en-el-congreso-con-el-apoyo-del-pp-y-el-veto-podemos/",
        "https://www.eldiario.es/politica/psoe-pide-unidas-soluciones-no-peroratas-si-si-e-irene-montero-le-acusa-mano-pp_1_10012296.html"
      ] },
      { f: "2023-04-20", t: "decisión política", h: "El Congreso aprueba la reforma de la ley con los votos de PSOE y PP", s: [
        "https://theobjective.com/espana/politica/2023-04-20/congreso-aprueba-reforma-solo-si/",
        "https://www.elindependiente.com/espana/2023/04/20/el-congreso-aprueba-la-reforma-del-si-es-si-del-psoe-tras-rebajas-de-penas/",
        "https://www.eldiario.es/politica/psoe-pp-aprueban-reforma-ley-si-si-voto-unidas-erc-eh-bildu_1_10135971.html"
      ] },
      { f: "2023-06-09", t: "informe", h: "El CGPJ eleva a 1.127 las rebajas de pena y a 115 las excarcelaciones", s: [
        "https://theobjective.com/espana/tribunales/2023-06-09/cgpj-rebajas-pena-ley-si/",
        "https://www.elespanol.com/espana/tribunales/20230609/rebaja-penas-alza-condenas-revisadas-agresores-libres/770173181_0.html"
      ] },
      { f: "2023-07-05", t: "informe", h: "Las rebajas llegan a 1.155 y las excarcelaciones a 117", s: [
        "https://www.elespanol.com/espana/tribunales/20230705/violadores-liberados-aplicacion-ley-rebajas-penas/776672589_0.html",
        "https://www.vozpopuli.com/espana/si-es-si-cgpj-rebajas-pena-excarcelaciones-ley-montero.html"
      ] }
    ]
  }
];
