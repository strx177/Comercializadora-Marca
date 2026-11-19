Aplicación de Inventario para Comercializadora Marca

Integrantes:

Giovanni Gómez Carrasco = StrX
Joaquín Guarachi Gaspar = jguarachi
Christian Mollo Quispe = ChrisFullHD

## Estructura preparada para Django

Las nuevas plantillas estan disponibles en `templates/` y siguen la separacion CRUD:

- `list.html`: listado de registros.
- `form.html`: creacion y edicion.
- `detail.html`: detalle de un registro.
- `confirm_delete.html`: confirmacion de eliminacion.

Las plantillas reutilizan `templates/base.html`, que contiene la barra lateral general del sistema.

Los archivos HTML originales se conservan como referencia visual. Para integrar el proyecto Django, se deben configurar `templates/` y los archivos CSS actuales como directorios estaticos en `settings.py`, y conectar los formularios, modelos y vistas con los bloques definidos en las plantillas.

