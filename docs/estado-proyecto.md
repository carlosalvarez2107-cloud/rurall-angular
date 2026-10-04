# Estado del proyecto RURALL
Fecha: [hoy]

## Stack
- Angular 22 (standalone components, signals)
- TypeScript
- Sin backend todavía

## Arquitectura
- components/ → piezas reutilizables
- core/ → models, data, services, guards
- pages/ → rutas

## Páginas funcionales
- Home, Nosotros, Trazabilidad, Productos, Carrito
- Auth: login, registro (wizard 3 pasos), recuperar
- Placeholders: /perfil, /panel

## Servicios clave
- AuthService → sesión
- CarritoService → carrito por usuario
- UsuariosRegistradosService → simula backend
- RegistroWizardService → wizard de registro

## Features destacadas
- Registro con 3 roles
- Carrito universal con widget flotante
- Buscador con normalización de tildes
- Locale es-CO
- Route Guards

## Pendientes (ver docs/pendientes.md)
- Detalle de finca + productos
- Multi-rol
- Panel real
- Backend