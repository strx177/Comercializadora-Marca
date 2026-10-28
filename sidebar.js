(function () {
  const sections = [
    {
      title: "Productos e inventario",
      links: [
        ["buscar_productos.html", "Buscar productos", "⌕"],
        ["registrar_producto.html", "Registrar producto", "+"],
        ["registrar_producto_peso.html", "Producto por peso", "⚖"],
        ["consultar_stock.html", "Consultar stock", "▦"],
        ["movimientos_inventario.html", "Movimientos de inventario", "↔"],
        ["asociar_codigo_barra.html", "Códigos de barras", "▤"],
        ["modificar_producto.html", "Modificar producto", "✎"],
        ["baja_productos.html", "Dar de baja producto", "−"],
        ["registro_baja_vencidos.html", "Bajas por vencimiento", "◷"],
        ["registro_fecha_vencimiento.html", "Fechas de vencimiento", "◷"]
      ]
    },
    {
      title: "Ventas",
      links: [
        ["registro_ventas.html", "Gestión de ventas", "$"],
        ["registrar_venta_peso.html", "Venta por peso", "⚖"],
        ["ventas_fiadas_lista.html", "Ventas fiadas", "▤"],
        ["ventas_fiadas_formulario.html", "Registrar venta fiada", "+"],
        ["devolucion.html", "Devoluciones", "↩"]
      ]
    },
    {
      title: "Administración y análisis",
      links: [
        ["proveedores_lista.html", "Proveedores", "♧"],
        ["proveedores_formulario.html", "Registrar proveedor", "+"],
        ["estadisticas_ventas.html", "Estadísticas de ventas", "▥"],
        ["productos_mayor_rotacion.html", "Mayor rotación", "↗"],
        ["generar_reportes.html", "Generar reportes", "▧"]
      ]
    }
  ];

  const currentPage = window.location.pathname.split("/").pop();
  const userName = sessionStorage.getItem("usuarioNombre") || "Administrador";
  const userRole = sessionStorage.getItem("usuarioRol") || "Gestión del sistema";
  const initials = userName.trim().charAt(0).toUpperCase() || "A";
  const menuMarkup = sections.map(function (section) {
    const linksMarkup = section.links.map(function (link) {
      const active = link[0] === currentPage;
      return '<a class="cm-nav-link' + (active ? " active" : "") + '" href="' + link[0] + '"' +
        (active ? ' aria-current="page"' : "") + '><span class="cm-nav-icon" aria-hidden="true">' +
        link[2] + '</span><span>' + link[1] + "</span></a>";
    }).join("");
    return '<section class="cm-nav-section"><h2 class="cm-nav-title">' + section.title +
      '</h2><nav aria-label="' + section.title + '">' + linksMarkup + "</nav></section>";
  }).join("");

  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "sidebar.css";
  document.head.appendChild(style);

  document.body.classList.add("cm-app-shell");

  const sidebar = document.createElement("aside");
  sidebar.className = "cm-sidebar";
  sidebar.setAttribute("aria-label", "Navegación principal");
  sidebar.innerHTML =
    '<a class="cm-brand" href="buscar_productos.html" aria-label="Comercializadora Marca, inicio">' +
      '<span class="cm-brand-mark" aria-hidden="true">M</span>' +
      '<span class="cm-brand-name"><span>COMERCIALIZADORA</span><strong>MARCA</strong></span>' +
    '</a><div class="cm-user-card"><span class="cm-user-avatar" aria-hidden="true"></span>' +
      '<span class="cm-user-info"><strong></strong><span></span></span></div>' +
    '<div class="cm-nav-scroll">' + menuMarkup + "</div>" +
    '<a class="cm-logout" href="login.html">Cerrar sesión</a>';

  sidebar.querySelector(".cm-user-avatar").textContent = initials;
  sidebar.querySelector(".cm-user-info strong").textContent = userName;
  sidebar.querySelector(".cm-user-info span").textContent = userRole;
  document.body.insertBefore(sidebar, document.body.firstChild);
})();
