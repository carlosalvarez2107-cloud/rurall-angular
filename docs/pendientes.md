# Pendientes post-MVP

## Para la entrega del frontend
- [ ] Route Guards
- [ ] Página Mi perfil
- [ ] Página Mi panel
- [ ] Arreglar links del dropdown

## Post-backend
- [ ] Panel real del usuario (fincas, cultivos, vehículos)
- [ ] Sub-roles de comprador
- [ ] Navbar diferenciado por rol (Mis fincas / Mis pedidos / Mi flota)
- [ ] Autenticación real con JWT
- [ ] Trazabilidad conectada a API

## Footer — Pendientes

### Fácil (1-2 horas cada uno)
- [ ] Página "Productor Rural" (informativa)
- [ ] Página "Centro de ayuda" (FAQ estáticas)
- [ ] Página "Conoce RURALL" (videos YouTube)

### Requiere más trabajo
- [ ] Página "Actualidad" con API de noticias
      ⚠️ Necesita backend proxy (CORS + ocultar API key)
- [ ] Canal oficial YouTube + integración real
- [ ] Crear cuentas de redes sociales y enlazar

### Ya resuelto
- [x] Únete a RURALL (condicional según sesión)
- [x] Trazabilidad → /trazabilidad
- [x] Términos y condiciones → /legal
- [x] Política de privacidad → /legal
- [x] Email con mailto:

## Fincas — Detalle y productos por finca

### Idea
En `/categories/*`, las tarjetas de fincas deben ser clicables.
Al entrar en una finca, mostrar:
- Header con datos de la finca (imagen, nombre, ubicación, puntuación, descripción)
- Botón "Contactar" (WhatsApp)
- Productos que ofrece esa finca
- Productos destacados / relacionados debajo

### Requisitos técnicos
- [ ] Crear modelo `Finca` en `core/models/finca.model.ts`
- [ ] Crear datos `core/data/fincas.ts` (tipados)
- [ ] Cambiar `Producto.finca: string` → `Producto.fincaId: number`
- [ ] Actualizar los 8 productos con `fincaId`
- [ ] Actualizar HTML donde se muestre `producto.finca`
- [ ] Crear ruta `/fincas/:id`
- [ ] Crear página de detalle de finca
- [ ] Hacer clicables las tarjetas en `/categories/*`
- [ ] Reutilizar `<app-carrito-widget />` en la página de finca

### Mejoras futuras (post-backend)
- [ ] Ruta amigable SEO: `/fincas/la-esperanza` en lugar de `/fincas/5`
- [ ] Refactor: extraer tarjeta de producto a `ProductoCardComponent`
- [ ] Filtros por categoría dentro de la finca
- [ ] Galería de fotos de la finca
- [ ] Reseñas

### Riesgo
- Cambia la forma de `Producto` → toca varios archivos
- Requiere testing exhaustivo del carrito después
- NO hacer antes de la entrega del MVP