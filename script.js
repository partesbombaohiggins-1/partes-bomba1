// Nómina oficial de la Primera Compañía "Bomba O'Higgins" - Rancagua
const voluntariosCompania = [
  { num: 1, nombre: "Vargas Gómez Mario", tipo: "MH" },
  { num: 2, nombre: "Torrealba Escárate Omar", tipo: "MH" },
  { num: 3, nombre: "Valenzuela Gallardo Alfredo", tipo: "MH" },
  { num: 4, nombre: "Méndez Bustamante Juan", tipo: "DH" },
  { num: 5, nombre: "Torres Almonacid Roberto", tipo: "MH" },
  { num: 6, nombre: "Pérez Rubio Juan", tipo: "MH" },
  { num: 7, nombre: "Espinoza Espinosa Jaime", tipo: "DH" },
  { num: 8, nombre: "Catejo Tapia Juan", tipo: "DH" },
  { num: 9, nombre: "Corvalán Jiménez Jaime", tipo: "MH" },
  { num: 10, nombre: "Monje Navarro Roberto", tipo: "MH" },
  { num: 11, nombre: "Venegas Vidal Luís", tipo: "DH" },
  { num: 12, nombre: "Bahamondes Brisso Carlos", tipo: "MH" },
  { num: 13, nombre: "Morán Montoya Carlos", tipo: "MH" },
  { num: 14, nombre: "Meza Vargas Juan", tipo: "VH" },
  { num: 15, nombre: "Correa Jara Leónidas", tipo: "MH" },
  { num: 16, nombre: "Toledo Rebolledo Juan", tipo: "MH" },
  { num: 17, nombre: "Farías Pozo Manuel", tipo: "MH" },
  { num: 18, nombre: "Henríquez Muñoz Hernán", tipo: "MH" },
  { num: 19, nombre: "Martínez Higueras Hugo", tipo: "MH" },
  { num: 20, nombre: "Correa Jara Francisco", tipo: "MH" },
  { num: 21, nombre: "Field Bravo Juan", tipo: "DH" },
  { num: 22, nombre: "Rojas Espina Humberto", tipo: "VH" },
  { num: 23, nombre: "Bahamondes Sergio Omar", tipo: "VH" },
  { num: 24, nombre: "Gaete Peña José", tipo: "VH" },
  { num: 25, nombre: "Bahamondes Guevara Carlos", tipo: "VH" },
  { num: 26, nombre: "Bahamondes Brisso Freddy", tipo: "DH" },
  { num: 27, nombre: "Peña Ahumada Víctor", tipo: "DH" },
  { num: 28, nombre: "Miranda Arriola Carlos", tipo: "VH" },
  { num: 29, nombre: "Barrientos Ossa Mario", tipo: "VE" },
  { num: 30, nombre: "Ulloa Carmona Francisco", tipo: "VH" },
  { num: 31, nombre: "Romero Reyes Alfredo", tipo: "VH" },
  { num: 32, nombre: "Moran Zamorano Gonzalo", tipo: "VH" },
  { num: 33, nombre: "Gaete Pérez Patricio", tipo: "VH" },
  { num: 34, nombre: "Chávez Meza Rodrigo", tipo: "VH" },
  { num: 35, nombre: "Araya Cabrera Cristian", tipo: "VH" },
  { num: 36, nombre: "Guiñez Robertson Gonzalo", tipo: "VA" },
  { num: 37, nombre: "Rojas Martínez Manuel", tipo: "VH" },
  { num: 38, nombre: "Gaete Pérez Juan", tipo: "VH" },
  { num: 39, nombre: "Sánchez Morán Pablo", tipo: "VH" },
  { num: 40, nombre: "Vargas Tobar Miguel", tipo: "VH" },
  { num: 41, nombre: "Martínez Vera Ricardo", tipo: "VH" },
  { num: 42, nombre: "Aravena Araya Cristian", tipo: "VH" },
  { num: 43, nombre: "Nieto Toro Javiera", tipo: "VH" },
  { num: 44, nombre: "Arévalo Arévalo José Luis", tipo: "VH" },
  { num: 45, nombre: "Guzmán Orellana René", tipo: "VH" },
  { num: 46, nombre: "Chinchón Ayala Héctor", tipo: "VH" },
  { num: 47, nombre: "Torres Riveros Felipe", tipo: "VA" },
  { num: 48, nombre: "Balcarce Salvo Roberto", tipo: "VA" },
  { num: 49, nombre: "Yaksich Furche Antonio", tipo: "VE" },
  { num: 50, nombre: "Brisso Mondaca Héctor", tipo: "VA" },
  { num: 51, nombre: "Pérez Peñaloza Miguel", tipo: "VA" },
  { num: 52, nombre: "Garate Cerda Franco", tipo: "VA" },
  { num: 53, nombre: "Pávez Pardo Luis", tipo: "VE" },
  { num: 54, nombre: "Retamal Rubio Sergio", tipo: "VE" },
  { num: 55, nombre: "Olguín Vargas Sergio", tipo: "VA" },
  { num: 56, nombre: "Rebolledo Droguett Andrés", tipo: "VA" },
  { num: 57, nombre: "Bahamondes Conteras Carlos", tipo: "VA" },
  { num: 58, nombre: "Escalona Valenzuela Francesca", tipo: "VA" },
  { num: 59, nombre: "Giadach Castillo Cristian", tipo: "VE" },
  { num: 60, nombre: "Serrano Vega Matías", tipo: "VA" },
  { num: 61, nombre: "Guzmán Céspedes Fabián Eliú", tipo: "VA" },
  { num: 62, nombre: "Matamala Pérez Ignacio Antonio", tipo: "VA" },
  { num: 63, nombre: "Riquelme Lira Felipe Ignacio", tipo: "VA" },
  { num: 64, nombre: "Aravena Quijada Felipe Ignacio", tipo: "VA" },
  { num: 65, nombre: "Aravena Correa Martina", tipo: "VA" },
  { num: 66, nombre: "Méndez Vidal Cristian Felipe", tipo: "VA" },
  { num: 67, nombre: "Guzmán Céspedes Christian", tipo: "VA" },
  { num: 68, nombre: "Plaza Vejar Patricio", tipo: "VE" },
  { num: 69, nombre: "Farias Aristegui Benjamín", tipo: "VA" },
  { num: 70, nombre: "Pizzoleo Vergara Catalina", tipo: "VA" },
  { num: 71, nombre: "Ríos Gálvez Benjamín Andrés", tipo: "VA" },
  { num: 72, nombre: "Zamora Pérez Israel Alejandro", tipo: "VA" },
  { num: 73, nombre: "Gaete Pávez Kimberly", tipo: "VA" },
  { num: 74, nombre: "Villar de la Barra Maximiliano", tipo: "VA" },
  { num: 75, nombre: "Schenke Zúñiga Jorge", tipo: "VE" },
  { num: 76, nombre: "Arriagada Contreras Joaquin", tipo: "VA" }
];

const API_URL = "https://partes-bomba-backend.onrender.com/api";

async function guardarParteEnBackend(datosParte) {
  try {
    const respuesta = await fetch(`${API_URL}/partes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosParte)
    });
    const resultado = await respuesta.json();
    if (respuesta.ok) {
      console.log("✅ Registro exitoso en Supabase:", resultado);
    } else {
      console.error("❌ Error retornado por el servidor:", resultado.error);
    }
  } catch (error) {
    console.error("⚠️ Error de conexión con el backend:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {

  function normalizarTexto(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  // 1. OCUPANTES DINÁMICOS
  const selectCantOcupantes = document.getElementById("cant-ocupantes");
  if (selectCantOcupantes) {
    selectCantOcupantes.addEventListener("change", (e) => {
      const cantidad = parseInt(e.target.value);
      for (let i = 1; i <= 4; i++) {
        const bloque = document.getElementById(`bloque-ocupante-${i}`);
        if (bloque) {
          if (i <= cantidad) bloque.classList.remove("d-none");
          else bloque.classList.add("d-none");
        }
      }
    });
  }

  // 2. PARTE GENERAL: ASISTENTES AL ACTO
  const inputBuscar = document.getElementById("buscar-bombero");
  const contenedorResultados = document.getElementById("resultados-busqueda");
  const tablaCuerpo = document.getElementById("tabla-asistentes-cuerpo");
  let asistentesAgregados = [];

  if (inputBuscar && contenedorResultados) {
    inputBuscar.addEventListener("input", () => {
      const busqueda = normalizarTexto(inputBuscar.value);
      contenedorResultados.innerHTML = "";

      if (busqueda.length < 1) {
        contenedorResultados.style.setProperty("display", "none", "important");
        return;
      }

      const filtrados = voluntariosCompania.filter(vol => {
        if (!vol || !vol.nombre) return false;
        const numStr = vol.num ? vol.num.toString() : "";
        return normalizarTexto(vol.nombre).includes(busqueda) || numStr === busqueda;
      });

      if (filtrados.length === 0) {
        contenedorResultados.innerHTML = `<div class="list-group-item text-muted p-2 bg-white">No hay coincidencias</div>`;
      } else {
        filtrados.forEach(vol => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "list-group-item list-group-item-action py-2 text-start fw-bold bg-white";
          item.innerHTML = `<span class="badge bg-danger me-2">${vol.num}</span> ${vol.nombre} <small class="text-muted">(${vol.tipo})</small>`;
          
          item.addEventListener("click", () => {
            agregarAAsistencia(vol);
            inputBuscar.value = "";
            contenedorResultados.style.setProperty("display", "none", "important");
          });
          contenedorResultados.appendChild(item);
        });
      }
      contenedorResultados.style.setProperty("display", "block", "important");
    });

    document.addEventListener("click", (e) => {
      if (!inputBuscar.contains(e.target) && !contenedorResultados.contains(e.target)) {
        contenedorResultados.style.setProperty("display", "none", "important");
      }
    });
  }

  function agregarAAsistencia(voluntario) {
    if (asistentesAgregados.some(item => item.num === voluntario.num)) {
      alert("El voluntario ya está registrado en la lista del acto.");
      return;
    }
    asistentesAgregados.push(voluntario);
    renderizarTablaAsistencia();
  }

  function renderizarTablaAsistencia() {
    if (!tablaCuerpo) return;
    if (asistentesAgregados.length === 0) {
      tablaCuerpo.innerHTML = `<tr id="sin-asistentes"><td colspan="4" class="text-center text-muted">No hay voluntarios registrados en el acto.</td></tr>`;
      return;
    }
    tablaCuerpo.innerHTML = "";
    asistentesAgregados.forEach(vol => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="fw-bold">${vol.num}</td>
        <td>${vol.nombre}</td>
        <td class="text-center"><span class="badge bg-secondary">${vol.tipo}</span></td>
        <td class="text-center">
          <button type="button" class="btn btn-sm btn-outline-danger btn-quitar-acto" data-num="${vol.num}">✕</button>
        </td>
      `;
      tablaCuerpo.appendChild(tr);
    });

    document.querySelectorAll(".btn-quitar-acto").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const numEliminar = parseInt(e.target.getAttribute("data-num"));
        asistentesAgregados = asistentesAgregados.filter(item => item.num !== numEliminar);
        renderizarTablaAsistencia();
      });
    });
  }

  // 3. PARTE GENERAL: PERSONAL EN CUARTEL
  const switchCuartel = document.getElementById("switch-en-cuartel");
  const contenedorCuartel = document.getElementById("contenedor-en-cuartel");
  const inputCuartel = document.getElementById("buscar-bombero-cuartel");
  const resultadosCuartel = document.getElementById("resultados-busqueda-cuartel");
  const tablaCuartelCuerpo = document.getElementById("tabla-cuartel-cuerpo");
  let personalCuartelAgregado = [];

  if (switchCuartel && contenedorCuartel) {
    switchCuartel.addEventListener("change", (e) => {
      if (e.target.checked) contenedorCuartel.classList.remove("d-none");
      else contenedorCuartel.classList.add("d-none");
    });
  }

  if (inputCuartel && resultadosCuartel) {
    inputCuartel.addEventListener("input", () => {
      const busqueda = normalizarTexto(inputCuartel.value);
      resultadosCuartel.innerHTML = "";

      if (busqueda.length < 1) {
        resultadosCuartel.style.setProperty("display", "none", "important");
        return;
      }

      const filtrados = voluntariosCompania.filter(vol => {
        if (!vol || !vol.nombre) return false;
        const numStr = vol.num ? vol.num.toString() : "";
        return normalizarTexto(vol.nombre).includes(busqueda) || numStr === busqueda;
      });

      if (filtrados.length === 0) {
        resultadosCuartel.innerHTML = `<div class="list-group-item text-muted p-2 bg-white">No hay coincidencias</div>`;
      } else {
        filtrados.forEach(vol => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "list-group-item list-group-item-action py-2 text-start fw-bold bg-white";
          item.innerHTML = `<span class="badge bg-secondary me-2">${vol.num}</span> ${vol.nombre} <small class="text-muted">(${vol.tipo})</small>`;
          
          item.addEventListener("click", () => {
            agregarACuartel(vol);
            inputCuartel.value = "";
            resultadosCuartel.style.setProperty("display", "none", "important");
          });
          resultadosCuartel.appendChild(item);
        });
      }
      resultadosCuartel.style.setProperty("display", "block", "important");
    });

    document.addEventListener("click", (e) => {
      if (!inputCuartel.contains(e.target) && !resultadosCuartel.contains(e.target)) {
        resultadosCuartel.style.setProperty("display", "none", "important");
      }
    });
  }

  function agregarACuartel(voluntario) {
    if (personalCuartelAgregado.some(item => item.num === voluntario.num)) {
      alert("El voluntario ya está registrado en la lista de cuartel.");
      return;
    }
    personalCuartelAgregado.push(voluntario);
    renderizarTablaCuartel();
  }

  function renderizarTablaCuartel() {
    if (!tablaCuartelCuerpo) return;
    if (personalCuartelAgregado.length === 0) {
      tablaCuartelCuerpo.innerHTML = `<tr id="sin-cuartel"><td colspan="4" class="text-center text-muted">No hay voluntarios registrados en cuartel.</td></tr>`;
      return;
    }
    tablaCuartelCuerpo.innerHTML = "";
    personalCuartelAgregado.forEach(vol => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="fw-bold">${vol.num}</td>
        <td>${vol.nombre}</td>
        <td class="text-center"><span class="badge bg-secondary">${vol.tipo}</span></td>
        <td class="text-center">
          <button type="button" class="btn btn-sm btn-outline-danger btn-quitar-cuartel" data-num="${vol.num}">✕</button>
        </td>
      `;
      tablaCuartelCuerpo.appendChild(tr);
    });

    document.querySelectorAll(".btn-quitar-cuartel").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const numEliminar = parseInt(e.target.getAttribute("data-num"));
        personalCuartelAgregado = personalCuartelAgregado.filter(item => item.num !== numEliminar);
        renderizarTablaCuartel();
      });
    });
  }

  // 4. RESCATE VEHICULAR
  const inputBuscarRescate = document.getElementById("buscar-bombero-rescate");
  const resultadosRescate = document.getElementById("resultados-busqueda-rescate");
  const tablaRescateCuerpo = document.getElementById("tabla-asistentes-rescate-cuerpo");
  let asistentesRescateAgregados = [];

  if (inputBuscarRescate && resultadosRescate) {
    inputBuscarRescate.addEventListener("input", () => {
      const busqueda = normalizarTexto(inputBuscarRescate.value);
      resultadosRescate.innerHTML = "";

      if (busqueda.length < 1) {
        resultadosRescate.style.setProperty("display", "none", "important");
        return;
      }

      const filtrados = voluntariosCompania.filter(vol => {
        if (!vol || !vol.nombre) return false;
        const numStr = vol.num ? vol.num.toString() : "";
        return normalizarTexto(vol.nombre).includes(busqueda) || numStr === busqueda;
      });

      if (filtrados.length === 0) {
        resultadosRescate.innerHTML = `<div class="list-group-item text-muted p-2 bg-white">No hay coincidencias</div>`;
      } else {
        filtrados.forEach(vol => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "list-group-item list-group-item-action py-2 text-start fw-bold bg-white";
          item.innerHTML = `<span class="badge bg-danger me-2">${vol.num}</span> ${vol.nombre} <small class="text-muted">(${vol.tipo})</small>`;
          
          item.addEventListener("click", () => {
            agregarARescate(vol);
            inputBuscarRescate.value = "";
            resultadosRescate.style.setProperty("display", "none", "important");
          });
          resultadosRescate.appendChild(item);
        });
      }
      resultadosRescate.style.setProperty("display", "block", "important");
    });

    document.addEventListener("click", (e) => {
      if (!inputBuscarRescate.contains(e.target) && !resultadosRescate.contains(e.target)) {
        resultadosRescate.style.setProperty("display", "none", "important");
      }
    });
  }

  function agregarARescate(voluntario) {
    if (asistentesRescateAgregados.some(item => item.num === voluntario.num)) {
      alert("El voluntario ya está en la lista del rescate.");
      return;
    }
    asistentesRescateAgregados.push(voluntario);
    renderizarTablaRescate();
  }

  function renderizarTablaRescate() {
    if (!tablaRescateCuerpo) return;
    if (asistentesRescateAgregados.length === 0) {
      tablaRescateCuerpo.innerHTML = `<tr id="sin-asistentes-rescate"><td colspan="4" class="text-center text-muted">No hay voluntarios registrados en el rescate.</td></tr>`;
      return;
    }
    tablaRescateCuerpo.innerHTML = "";
    asistentesRescateAgregados.forEach(vol => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="fw-bold">${vol.num}</td>
        <td>${vol.nombre}</td>
        <td class="text-center"><span class="badge bg-secondary">${vol.tipo}</span></td>
        <td class="text-center">
          <button type="button" class="btn btn-sm btn-outline-danger btn-quitar-rescate" data-num="${vol.num}">✕</button>
        </td>
      `;
      tablaRescateCuerpo.appendChild(tr);
    });

    document.querySelectorAll(".btn-quitar-rescate").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const numEliminar = parseInt(e.target.getAttribute("data-num"));
        asistentesRescateAgregados = asistentesRescateAgregados.filter(item => item.num !== numEliminar);
        renderizarTablaRescate();
      });
    });
  }

  // 5. CONTROL ASISTENCIA COMPLETO
  const tablaAsistencia = document.getElementById("tabla-asistencia-completa-cuerpo");
  const filtroAsistencia = document.getElementById("filtro-voluntario-asistencia");
  const contadorAsistencia = document.getElementById("contador-asistencia");
  const btnResetAsistencia = document.getElementById("btn-reset-asistencia");

  let registroAsistencia = {};
  voluntariosCompania.forEach(vol => {
    registroAsistencia[vol.num] = false;
  });

  function renderizarListaAsistencia() {
    if (!tablaAsistencia) return;

    const textoFiltro = filtroAsistencia ? normalizarTexto(filtroAsistencia.value) : "";
    tablaAsistencia.innerHTML = "";

    const filtrados = voluntariosCompania.filter(vol => {
      if (!vol || !vol.nombre) return false;
      const numStr = vol.num ? vol.num.toString() : "";
      return normalizarTexto(vol.nombre).includes(textoFiltro) || numStr === textoFiltro;
    });

    if (filtrados.length === 0) {
      tablaAsistencia.innerHTML = `<tr><td colspan="4" class="text-center text-muted py-4">No se encontró ningún voluntario con ese criterio.</td></tr>`;
      return;
    }

    filtrados.forEach(vol => {
      const estaPresente = registroAsistencia[vol.num];
      const tr = document.createElement("tr");
      if (estaPresente) tr.className = "table-success";

      tr.innerHTML = `
        <td class="fw-bold text-center">${vol.num}</td>
        <td><span class="fw-bold text-dark">${vol.nombre}</span></td>
        <td class="text-center"><span class="badge bg-secondary">${vol.tipo}</span></td>
        <td class="text-center">
          <div class="form-check d-flex justify-content-center m-0">
            <input class="form-check-input chk-asistencia" type="checkbox" id="chk-ast-${vol.num}" 
              data-num="${vol.num}" ${estaPresente ? 'checked' : ''} style="transform: scale(1.4); cursor: pointer;">
          </div>
        </td>
      `;

      tablaAsistencia.appendChild(tr);

      tr.querySelector(`#chk-ast-${vol.num}`).addEventListener("change", (e) => {
        const numVol = parseInt(e.target.getAttribute("data-num"));
        registroAsistencia[numVol] = e.target.checked;
        if (e.target.checked) tr.classList.add("table-success");
        else tr.classList.remove("table-success");
        actualizarContadorAsistencia();
      });
    });

    actualizarContadorAsistencia();
  }

  function actualizarContadorAsistencia() {
    if (!contadorAsistencia) return;
    const totalPresentes = Object.values(registroAsistencia).filter(val => val === true).length;
    contadorAsistencia.textContent = `${totalPresentes} / ${voluntariosCompania.length} Presentes`;
  }

  if (filtroAsistencia) filtroAsistencia.addEventListener("input", renderizarListaAsistencia);

  if (btnResetAsistencia) {
    btnResetAsistencia.addEventListener("click", () => {
      voluntariosCompania.forEach(vol => { registroAsistencia[vol.num] = false; });
      renderizarListaAsistencia();
    });
  }

  renderizarListaAsistencia();

  // ==========================================
  // 6. GENERADOR DE PDF / IMPRESIÓN NATIVA
  // ==========================================
  document.querySelectorAll(".btn-descargar-pdf").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const botonPresionado = e.currentTarget;
      const targetId = botonPresionado.getAttribute("data-form");
      const elementoAImprimir = document.getElementById(targetId);

      if (!elementoAImprimir) {
        alert("No se encontró el formulario para generar el reporte.");
        return;
      }

      window.print();
    });
  });

  // 7. ENVÍO DE DATOS A EMAILJS Y SUPABASE
  document.querySelectorAll(".btn-enviar-correo").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const botonPresionado = e.currentTarget;
      const formId = botonPresionado.getAttribute("data-form");

      let reporteEstructurado = "";
      let correlativoVal = "S-N";
      let fechaVal = document.getElementById("fecha-acto")?.value || new Date().toISOString().slice(0, 10);

      let datosParaBackend = {
        correlativo_cia: 0,
        correlativo_gen: 0,
        fecha: fechaVal,
        hora: "00:00",
        clave: "",
        direccion: "",
        poblacion: "",
        lugar_tipo: "",
        construccion_tipo: "",
        observaciones: "",
        usuario_id: 1,
        asistencia: []
      };

      if (formId === "pills-general") {
        correlativoVal = document.getElementById("correlativo-cia")?.value || "S-N";
        fechaVal = document.getElementById("fecha-acto")?.value || fechaVal;
        const hora = document.getElementById("hora-acto")?.value || "N/E";
        const clave = document.getElementById("clave-acto")?.value || "N/E";
        const direccion = document.getElementById("direccion-acto")?.value || "N/E";
        const poblacion = document.getElementById("poblacion-villa")?.value || "N/E";
        const lugarTipo = document.getElementById("lugar-tipo")?.value || "N/E";
        const construccion = document.getElementById("construccion-tipo")?.value || "N/E";
        const observaciones = document.getElementById("observaciones-parte")?.value || "Sin observaciones.";

        let listaAsistentesText = "";
        let asistenciaBackend = [];

        asistentesAgregados.forEach(vol => {
          listaAsistentesText += `- N° ${vol.num}: ${vol.nombre} (${vol.tipo})\n`;
          asistenciaBackend.push({ num_voluntario: vol.num, nombre_voluntario: vol.nombre, tipo_asistencia: "Asistió" });
        });

        let listaCuartelText = "";
        personalCuartelAgregado.forEach(vol => {
          listaCuartelText += `- N° ${vol.num}: ${vol.nombre} (${vol.tipo})\n`;
          asistenciaBackend.push({ num_voluntario: vol.num, nombre_voluntario: vol.nombre, tipo_asistencia: "Cuartel" });
        });

        reporteEstructurado = `PARTE OFICIAL DE SERVICIO GENERAL - BOMBA O'HIGGINS
--------------------------------------------------
DATOS DEL ACTO:
• Correlativo Cía: ${correlativoVal} | General: ${document.getElementById("correlativo-gen")?.value || "S-N"}
• Fecha: ${fechaVal} | Hora: ${hora}
• Clave del Acto: ${clave}
• Dirección: ${direccion} (${poblacion})

PERSONAL ASISTENTE AL ACTO:
${listaAsistentesText || "Sin asistentes registrados."}

PERSONAL EN CUARTEL:
${listaCuartelText || "Sin personal registrado en cuartel."}

OBSERVACIONES:
${observaciones}
--------------------------------------------------`;

        datosParaBackend = {
          correlativo_cia: parseInt(correlativoVal) || 0,
          correlativo_gen: parseInt(document.getElementById("correlativo-gen")?.value) || 0,
          fecha: fechaVal,
          hora: hora !== "N/E" ? hora : "00:00",
          clave: clave,
          direccion: direccion,
          poblacion: poblacion,
          lugar_tipo: lugarTipo,
          construccion_tipo: construccion,
          observaciones: observaciones,
          usuario_id: 1,
          asistencia: asistenciaBackend
        };
      } else if (formId === "pills-vehicular") {
        fechaVal = document.getElementById("fecha-veh")?.value || fechaVal;
        const claveVeh = document.getElementById("clave-vehicular")?.value || "10-4";
        const dirVeh = document.getElementById("direccion-veh")?.value || "N/E";
        const obsVeh = document.getElementById("obs-rescate-vehicular")?.value || "Sin observaciones.";

        let listaRescateText = "";
        let asistenciaBackend = [];

        asistentesRescateAgregados.forEach(vol => {
          listaRescateText += `- N° ${vol.num}: ${vol.nombre} (${vol.tipo})\n`;
          asistenciaBackend.push({ num_voluntario: vol.num, nombre_voluntario: vol.nombre, tipo_asistencia: "Rescate" });
        });

        reporteEstructurado = `PARTE OFICIAL DE RESCATE VEHICULAR - BOMBA O'HIGGINS
--------------------------------------------------
• Fecha: ${fechaVal} | Clave: ${claveVeh}
• Dirección: ${dirVeh}

PERSONAL ASISTENTE AL RESCATE:
${listaRescateText || "Sin asistentes registrados en rescate."}

OBSERVACIONES:
${obsVeh}
--------------------------------------------------`;

        datosParaBackend = {
          correlativo_cia: parseInt(document.getElementById("correlativo-veh")?.value) || 0,
          correlativo_gen: 0,
          fecha: fechaVal,
          hora: document.getElementById("hora-veh")?.value || "00:00",
          clave: claveVeh,
          direccion: dirVeh,
          poblacion: "",
          lugar_tipo: "Rescate Vehicular",
          construccion_tipo: "",
          observaciones: obsVeh,
          usuario_id: 1,
          asistencia: asistenciaBackend
        };
      } else if (formId === "pills-asistencia") {
        fechaVal = document.getElementById("fecha-citacion-asistencia")?.value || fechaVal;
        const tipoCitacion = document.getElementById("tipo-citacion-asistencia")?.value || "Citación";
        let listaAsistenciaText = "";
        let totalPresentes = 0;
        let asistenciaBackend = [];

        voluntariosCompania.forEach(vol => {
          const presente = registroAsistencia[vol.num];
          if (presente) {
            totalPresentes++;
            listaAsistenciaText += `- N° ${vol.num}: ${vol.nombre} (${vol.tipo}) [PRESENTE]\n`;
            asistenciaBackend.push({ num_voluntario: vol.num, nombre_voluntario: vol.nombre, tipo_asistencia: "Lista Asistencia" });
          }
        });

        reporteEstructurado = `NÓMINA GENERAL DE ASISTENCIA - BOMBA O'HIGGINS
--------------------------------------------------
• Actividad: ${tipoCitacion}
• Fecha del Registro: ${fechaVal}
• Total Presentes: ${totalPresentes} / ${voluntariosCompania.length}

VOLUNTARIOS PRESENTES:
${listaAsistenciaText || "Sin voluntarios marcados como presentes."}
--------------------------------------------------`;

        datosParaBackend = {
          correlativo_cia: 0,
          correlativo_gen: 0,
          fecha: fechaVal,
          hora: document.getElementById("hora-inicio-asistencia")?.value || "00:00",
          clave: tipoCitacion,
          direccion: "Cuartel Cía",
          poblacion: "",
          lugar_tipo: "Lista Asistencia",
          construccion_tipo: "",
          observaciones: document.getElementById("obs-asistencia-general")?.value || "Registro de Asistencia General",
          usuario_id: 1,
          asistencia: asistenciaBackend
        };
      }

      const textoOriginal = botonPresionado.innerHTML;
      botonPresionado.innerHTML = "⏳ Enviando parte...";
      botonPresionado.disabled = true;

      try {
        await guardarParteEnBackend(datosParaBackend);

        const parametrosPlantilla = {
          mensaje: reporteEstructurado,
          notes: reporteEstructurado
        };

        await emailjs.send("service_0j6b43d", "template_e631aiq", parametrosPlantilla);
        alert("✅ Parte registrado exitosamente en la Base de Datos y enviado por correo a partesbombaohiggins@gmail.com");
      } catch (error) {
        console.error("Error en el proceso:", error);
        alert("⚠️ Hubo un inconveniente al enviar el correo, pero la información se procesó.");
      } finally {
        botonPresionado.innerHTML = textoOriginal;
        botonPresionado.disabled = false;
      }
    });
  });

});