(function () {
  const sections = [
    {
      title: "Inventario",
      links: [
        ["../inventario/buscar_productos.html", "Buscar productos", "⌕"],
        ["../inventario/registrar_producto.html", "Registrar producto", "+"],
        ["../inventario/registrar_producto_peso.html", "Producto por peso", "⚖"],
        ["../inventario/consultar_stock.html", "Consultar stock", "▦"],
        ["../inventario/movimientos_inventario.html", "Movimientos", "↔"],
        ["../inventario/asociar_codigo_barra.html", "Códigos de barras", "▤"],
        ["../inventario/modificar_producto.html", "Modificar producto", "✎"]
      ]
    },
    {
      title: "Ventas",
      links: [
        ["../ventas/registro_ventas.html", "Gestión de ventas", "$"],
        ["../ventas/registrar_venta_peso.html", "Venta por peso", "⚖"],
        ["../ventas/ventas_fiadas_lista.html", "Ventas fiadas", "▤"]
      ]
    },
    {
      title: "Devoluciones y bajas",
      links: [
        ["../devoluciones_bajas/devolucion.html", "Devoluciones", "↩"],
        ["../devoluciones_bajas/baja_productos.html", "Dar de baja", "−"],
        ["../devoluciones_bajas/registro_baja_vencidos.html", "Bajas por vencimiento", "◷"],
        ["../devoluciones_bajas/registro_fecha_vencimiento.html", "Fechas de vencimiento", "◷"]
      ]
    },
    {
      title: "Administración",
      links: [
        ["../proveedores/proveedores_lista.html", "Proveedores", "♧"],
        ["../estadisticas_reportes/estadisticas_ventas.html", "Estadísticas", "▥"],
        ["../estadisticas_reportes/productos_mayor_rotacion.html", "Mayor rotación", "↗"],
        ["../estadisticas_reportes/generar_reportes.html", "Reportes", "▧"],
        ["../facturas/facturas.html", "Facturas", "▧"],
        ["../respaldos/respaldos.html", "Respaldos", "◉"]
      ]
    }
  ];

  const currentPage = window.location.pathname.split("/").pop();
  const userName = sessionStorage.getItem("usuarioNombre") || "Administrador";
  const userRole = sessionStorage.getItem("usuarioRol") || "Gestión del sistema";
  const initials = userName.trim().charAt(0).toUpperCase() || "A";
  const menuMarkup = sections.map(function (section) {
    const linksMarkup = section.links.map(function (link) {
      const active = link[0].split("/").pop() === currentPage;
      return '<a class="cm-nav-link' + (active ? " active" : "") + '" href="' + link[0] + '"' +
        (active ? ' aria-current="page"' : "") + '><span class="cm-nav-icon" aria-hidden="true">' +
        link[2] + '</span><span>' + link[1] + "</span></a>";
    }).join("");
    return '<section class="cm-nav-section"><h2 class="cm-nav-title">' + section.title +
      '</h2><nav aria-label="' + section.title + '">' + linksMarkup + "</nav></section>";
  }).join("");

  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "../sidebar.css";
  document.head.appendChild(style);

  document.body.classList.add("cm-app-shell");

  const sidebar = document.createElement("aside");
  sidebar.className = "cm-sidebar";
  sidebar.setAttribute("aria-label", "Navegación principal");
  sidebar.innerHTML =
    '<button class="cm-notification-button" type="button" aria-label="Abrir notificaciones" aria-expanded="false">' +
      '<span aria-hidden="true">🔔</span><span class="cm-notification-count">3</span>' +
    '</button>' +
    '<a class="cm-brand" href="../inventario/buscar_productos.html" aria-label="Comercializadora Marca, inicio">' +
      '<span class="cm-brand-mark" aria-hidden="true">M</span>' +
      '<span class="cm-brand-name"><span>COMERCIALIZADORA</span><strong>MARCA</strong></span>' +
    '</a><div class="cm-user-card"><span class="cm-user-avatar" aria-hidden="true"></span>' +
      '<span class="cm-user-info"><strong></strong><span></span></span></div>' +
    '<div class="cm-nav-scroll">' + menuMarkup + "</div>" +
    '<a class="cm-logout" href="../login.html">Cerrar sesión</a>' +
    '<div class="cm-notification-panel" hidden>' +
      '<div class="cm-notification-heading"><strong>Notificaciones</strong><a href="../notificaciones/notificaciones.html">Ver todas</a></div>' +
      '<button type="button"><span>Stock bajo</span><small>Arroz Premium tiene 4 unidades.</small></button>' +
      '<button type="button"><span>Producto próximo a vencer</span><small>Revisa los lotes registrados.</small></button>' +
      '<button type="button"><span>Nuevo reporte disponible</span><small>Ventas semanales listas.</small></button>' +
    '</div>';

  sidebar.querySelector(".cm-user-avatar").textContent = initials;
  sidebar.querySelector(".cm-user-info strong").textContent = userName;
  sidebar.querySelector(".cm-user-info span").textContent = userRole;
  document.body.insertBefore(sidebar, document.body.firstChild);

  const notificationButton = sidebar.querySelector(".cm-notification-button");
  const notificationPanel = sidebar.querySelector(".cm-notification-panel");
  notificationButton.addEventListener("click", function () {
    const isOpen = notificationPanel.hidden === false;
    notificationPanel.hidden = isOpen;
    notificationButton.setAttribute("aria-expanded", String(!isOpen));
  });
})();
