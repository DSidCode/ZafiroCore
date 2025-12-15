# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

## [2025-12-10] - feat(finance): Refactorización de finanzas y cálculo de gastos totales

Esta actualización introduce un módulo dedicado para el seguimiento de las obligaciones financieras mensuales, mejorando la claridad y la capacidad de análisis.

### Added
- **Nueva Tarjeta Financiera:** Se ha creado una tarjeta dedicada "Obligaciones Financieras Mensuales" en el `Dashboard` para centralizar los gastos fijos.
- **Cálculos Automáticos:** La nueva tarjeta calcula y muestra los totales de gastos en EUR y COP por separado.
- **Gasto Total Estimado:** Se ha implementado un cálculo que convierte los gastos de COP a EUR y los suma al total de EUR para ofrecer una visión global del gasto mensual estimado.
- **Nuevos Estilos:** Se han añadido las clases `.financial-card` y `.grand-total` en `index.css` para dar un estilo distintivo al nuevo módulo.

### Changed
- **Refactorización de Datos:** Los gastos mensuales se han migrado de la categoría `maintenance` a una nueva estructura de datos `monthlyExpenses` en `App.jsx` para una gestión más robusta y escalable.
- **Lógica del Dashboard:** El componente `Dashboard.jsx` ahora contiene la lógica para procesar, calcular y renderizar los datos financieros de forma independiente.

### Fixed
- Se ha mejorado la organización visual del `Dashboard` al separar las finanzas de otras tareas de mantenimiento.

## [2025-11-24] - feat(ui): Rediseño del Diario, Menú Responsive y Restauración de Identidad

Esta actualización se centra en mejorar la experiencia emocional y de usuario en el "Diario para Adrián", así como en la usabilidad móvil general de la aplicación.

### Added
- **Menú Hamburguesa:** Implementación de un menú de navegación responsive en el `Header` para dispositivos móviles.
- **Estilos "Diario":** Nuevo diseño visual para `DiarioParaAdrian` con tipografía 'Cinzel', fondo oscuro y textura de papel antiguo para una experiencia de lectura más inmersiva.
- **Botón Volver Mejorado:** El enlace de retorno ahora es un botón estilizado ubicado ergonómicamente al final del contenido.

### Changed
- **Layout Responsive:** Ajustes en los contenedores principales y en el Diario para aprovechar mejor el espacio en pantallas pequeñas.
- **Restauración de Header:** Se recuperó el componente `Header` en `App.jsx` y el texto de la "Misión Principal" que se habían perdido.
- **Corrección de Layout:** Se corrigió la dirección del flexbox en el Diario para asegurar que el pie de página aparezca debajo del contenido.

### Fixed
- **Navegación Móvil:** Solucionado el problema de accesibilidad al menú en pantallas estrechas.

## [2024-07-27] - feat(identity): Renombramiento a Zafiro y consolidación de identidad

Esta versión marca la evolución del proyecto, renombrándolo de "BlueCore" a "Zafiro" para establecer una identidad más clara y enfocada, preservando al mismo tiempo el propósito original.

### Added
- **Nueva Documentación:** Creación de `README.md` para narrar la historia y propósito del proyecto, y de `CHANGELOG.md` para el registro de versiones.
- **Mejoras de Interfaz:** Implementación de una base de diseño responsivo (`responsive.css`) para mejorar la usabilidad en dispositivos móviles.
- **Refactorización:** La cabecera se ha extraído a su propio componente (`Header.jsx`) para una mejor organización.

### Changed
- **Renombramiento del Proyecto:** Todas las referencias internas, componentes, variables CSS y títulos han sido actualizados a "Zafiro".
- **Identidad Visual:** El icono de la aplicación (favicon) y la cabecera ahora usan un diamante (💎).

### Fixed
- **Icono de la Aplicación:** Se ha corregido el enlace roto del favicon para asegurar su correcta visualización en el navegador.
