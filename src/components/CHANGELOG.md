# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-11-17

### 🚀 Added (Nuevas Características)

- **Automatización del Changelog:** Se ha implementado un flujo de trabajo profesional para la generación automática del changelog y el versionado del proyecto.
    - **Conventional Commits:** Se ha adoptado el estándar de "Conventional Commits" para estructurar los mensajes de commit.
    - **`standard-version`:** Se ha configurado para automatizar el incremento de versión, la actualización del `CHANGELOG.md` y la creación de tags de Git.
    - **`commitlint` y `husky`:** Se han añadido para validar los mensajes de commit, asegurando que siempre sigan el formato correcto y manteniendo la consistencia del historial.

## [0.1.0] - 2025-11-17

### ✨ Added (Nuevas Características)

- **Página "Diario para Adrián":** Se ha creado una nueva sección dedicada al diario personal para Adrián.
    - Componente `DiarioParaAdrian.jsx` con la primera entrada fechada.
    - Estilos personalizados en `DiarioParaAdrian.css` para una apariencia de "papel antiguo".
    - Ruta `/diario-para-adrian` y enlace de navegación en la cabecera.
    - Archivo de respaldo `.diario_para_adrian.md` sincronizado con el contenido.
- **Personalización de la Terminal:** Se ha creado una configuración para `starship` (`~/.config/starship.toml`) con una estética cyberpunk, incluyendo el seudónimo "SidZCooL" y iconos personalizados para el estado de Git.
- **Actualización de Contenido:** Se ha expandido la descripción del proyecto "Diario de Papá (Legado IA)" para incluir la visión sobre el legado, el mercado y las patentes.

### 🐛 Fixed (Correcciones)

- **Error Crítico de Renderizado:** Se ha solucionado un error que impedía que la aplicación cargara debido a un componente `<Header>` duplicado en `App.jsx`.
- **Errores de Sintaxis:** Se han corregido múltiples errores de sintaxis en `DiarioParaAdrian.jsx` (código duplicado) y `DiarioParaAdrian.css` (llave sobrante).

### 🔄 Changed (Cambios y Refactorización)

- **Consistencia de Componentes:** Se ha refactorizado el `Dashboard` para usar el componente `ProjectItem` de manera consistente en todas las tarjetas, incluyendo "PLAN DE HOY" y "COMPRAS TECNOLÓGICAS".
- **Iconografía Cyberpunk:**
    - Se han actualizado los iconos de los checkboxes en toda la aplicación (`■` -> `⬢`).
    - Se ha actualizado el icono del logo de Zafiro (`💎` -> `💠`).
    - Se ha añadido un efecto "glitch" al pasar el ratón sobre las subtareas.
- **Organización de Archivos:**
    - Se ha movido `DiarioParaAdrian.css` a la carpeta `src/components` para una mejor co-ubicación.
    - Se ha eliminado el archivo `DiarioParaAdrian.css` duplicado de la raíz del proyecto.

### 📝 Notes (Notas)

- Esta versión inicial establece la base del dashboard Zafiro y las primeras secciones de contenido personal, sentando las bases para el proyecto "Legado IA".