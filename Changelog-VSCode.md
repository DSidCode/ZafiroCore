# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog.

## [1.8.0] - 2025-12-14

### Added
- **Módulo de Estrategia Financiera Dinámica**: La sección de finanzas en `tareas.md` ha evolucionado de una simple lista a un módulo estratégico. Ahora incluye cálculo de presupuesto total, identificación de déficit y un plan de acción priorizado para cubrir los gastos.

### Changed
- **Priorización de Tareas Basada en Análisis**: Se ha implementado un sistema de toma de decisiones que analiza múltiples fuentes de ingresos (hostelería, artesanía, desarrollo web) y las prioriza en función de su alineación con los objetivos a largo plazo (libertad financiera, carrera tecnológica), en lugar de solo la urgencia. La tarea de "fabricar pulseras" se ha elevado a "ACCIÓN URGENTE" como resultado de este análisis para cubrir un déficit financiero.

## [1.7.0] - 2025-11-14

### Added
- **Concepto de Actualización de Estado de Proyecto**: Se ha introducido la idea de añadir un campo de "última actualización" a cada proyecto. El objetivo es poder registrar el progreso más reciente de cada "nodo" del ecosistema, facilitando la toma de decisiones y la visión estratégica general. Esta tarea se ha añadido a `tareas.md` y el concepto se ha documentado en el `README.md`.

## [1.6.0] - 2025-11-15

### Changed
- **Evolución Filosófica (El Ecosistema Quimérico)**: Se ha formalizado un nuevo paradigma conceptual para el proyecto. BlueCore ya no es una aplicación monolítica, sino el núcleo de un ecosistema donde cada proyecto individual (`CyberMadrid`, `Danisid.com`, etc.) es concebido como un "nodo" o "departamento" especializado. Esta visión "Quimérica" permite una estrategia de refactorización constante y una evolución simbiótica y mutante de todas las partes del sistema. Esta idea se ha documentado en el `README.md`.

## [1.5.0] - 2025-11-14

### Added
- **Sistema de Navegación Multi-página**: Integrado `react-router-dom` para permitir la navegación entre distintas vistas de la aplicación.
- **Página "Carta para Mamá"**: Creado un nuevo componente y ruta (`/carta-a-mama`) para una carta personal, con un diseño cuidado y emotivo.
- **Nuevo Componente `Header.jsx`**: Desarrollada una cabecera completamente nueva y sofisticada que actúa como el centro de mando visual.
- **Nueva Fuente 'Russo One'**: Añadida para dar al logo de BlueCore una identidad visual más fuerte y con más cuerpo.

### Changed
- **Rediseño Completo de la Interfaz (UI Overhaul)**: La aplicación ha sido rediseñada para tener un aspecto más elegante y elaborado, similar a un "Heads-Up Display" (HUD).
- **Cabecera Animada**: El logo de "BlueCore" ahora tiene una animación de parpadeo neón y los botones de navegación tienen efectos "galácticos" interactivos.
- **Rediseño de Tarjetas de Proyecto**: Las tarjetas de los proyectos ahora son más detalladas, incluyendo descripciones, iconos para subtareas y una estética más pulida.

### Removed
- Se ha eliminado el componente `ProjectItem.jsx`, integrando su lógica directamente en `App.jsx` para un mayor control del nuevo diseño.

## [1.4.0] - 2025-11-12

### Added
- **Proyecto "Diario de Papá"**: Se ha incorporado un nuevo y profundo proyecto estratégico. Su objetivo es crear un legado en forma de IA, una réplica de la personalidad del padre para su hijo, asegurando que su guía y esencia perduren.
- **Archivo `Antologia-del-Alma.md`**: Creado un diario digital para documentar pensamientos y emociones, sirviendo como la fuente de datos principal para el proyecto "Diario de Papá".

### Changed
- **Evolución Filosófica**: El propósito de BlueCore se ha expandido. Ya no es solo una herramienta de productividad, sino también un crisol para forjar un legado digital y personal.
- **Actualización de `README.md`**: El README ahora incluye una sección de "Evolución del Proyecto" para documentar su viaje conceptual y filosófico.

## [1.3.0] - 2025-11-11

### Added
- **Gestión de Deudas:** Se ha creado una nueva sección dedicada para visualizar todas las deudas y préstamos, con un totalizador automático.
- **Foco Inmediato:** Añadida una tarjeta de "Foco Inmediato" con un estilo visual de alerta (rojo y con animación de pulso) para destacar las tareas más urgentes.
- **Nuevos Proyectos:** Incorporados los proyectos "Antología" y "Pulseras (Tienda Online)" a la estructura de datos.

### Changed
- **Reestructuración Estratégica:** La arquitectura de la información ha sido completamente rediseñada. Las tareas ahora se agrupan por prioridad estratégica (`Foco Ingresos`, `Proyectos Estratégicos`, `Mantenimiento`) en lugar de por tipo, para alinear cada acción con la misión principal.
- **Misión Principal en UI:** El objetivo principal ("Viajar a Colombia...") ahora se muestra permanentemente en la cabecera de la aplicación como un recordatorio constante.
- **Estilos Neón Mejorados:** Se ha intensificado el efecto de brillo "radiactivo" en los títulos para potenciar la estética cyberpunk.

### Fixed
- **Cálculo Total Deudas:** Corregido el cálculo manual del total de deudas en el componente `App.jsx` para que se calcule dinámicamente a partir de los datos, asegurando que siempre esté actualizado.

## [1.3.0] - 2025-11-11

### Added
- **Gestión de Deudas:** Se ha creado una nueva sección dedicada para visualizar todas las deudas y préstamos, con un totalizador automático.
- **Foco Inmediato:** Añadida una tarjeta de "Foco Inmediato" con un estilo visual de alerta (rojo y con animación de pulso) para destacar las tareas más urgentes.
- **Nuevos Proyectos:** Incorporados los proyectos "Antología" y "Pulseras (Tienda Online)" a la estructura de datos.

### Changed
- **Reestructuración Estratégica:** La arquitectura de la información ha sido completamente rediseñada. Las tareas ahora se agrupan por prioridad estratégica (`Foco Ingresos`, `Proyectos Estratégicos`, `Mantenimiento`) en lugar de por tipo, para alinear cada acción con la misión principal.
- **Misión Principal en UI:** El objetivo principal ("Viajar a Colombia...") ahora se muestra permanentemente en la cabecera de la aplicación como un recordatorio constante.
- **Estilos Neón Mejorados:** Se ha intensificado el efecto de brillo "radiactivo" en los títulos para potenciar la estética cyberpunk.

## [1.2.0] - 2025-11-09

### Added
- **Plan de Hoy en UI:** Añadida una nueva tarjeta en la interfaz para visualizar las tareas diarias urgentes.
- **Nuevas Tareas:** Incorporada la gestión de tareas diarias (compras, finanzas, citas) en la UI y en `tareas.md`.

### Changed
- **Rediseño Completo de UI:** Se ha implementado un nuevo diseño modular basado en una maqueta HTML. La estructura ahora usa `grid` y `triple-grid` con tarjetas especializadas (`cyber-card`, `event-card`, `shopping-card`).
- **Renombrado de Changelog:** El archivo `CHANGELOG.md` ha sido renombrado a `Changelog-VSCode.md` para unificar la documentación.

### Fixed
- **Errores de Renderizado y Sintaxis:** Solucionados múltiples errores de sintaxis JSX y estilos CSS que rompían la aplicación tras el rediseño, restaurando la funcionalidad completa del dashboard.

## [1.1.0] - 2025-11-05

### Changed
- **Identidad del Proyecto:** El proyecto ha sido renombrado de "Agenda Cyberpunk" a **"BlueCore"** para reflejar mejor su propósito como un asistente estratégico y su conexión personal con los objetivos del usuario.
- **Actualización de Componentes:** Actualizado el título principal en `App.jsx` y la documentación (`README.md`) para alinearse con la nueva identidad "BlueCore".
- **Personalidad de la IA:** Refinado el `systemPrompt` del asistente para adoptar la nueva personalidad y nombre "BlueCore".

## [1.0.0] - 2025-10-28

### Added
- **Inicialización del Proyecto:** Configuración inicial del proyecto con React y Vite.
- **Gestión de Tareas Básica:** Funcionalidad para añadir y mostrar tareas en la lista.
- **Estilo Cyberpunk:** Implementación de una hoja de estilos base (`index.css`) con una estética cyberpunk.
- **Funcionalidad de Tareas Completa:** Añadida la lógica para marcar tareas como completadas y para eliminarlas de la lista.
- **Persistencia de Tareas:** Integración con `localStorage` para guardar las tareas y evitar que se pierdan al recargar la página.
- **Consola de Asistente IA:** Creación de una interfaz de consola para interactuar con el asistente.
- **Integración con Gemini:** Conexión con la API de Google Gemini para procesar comandos de lenguaje natural.
- **Acciones de IA:** Implementada la capacidad para que el asistente pueda añadir, completar y eliminar tareas.
- **Panel de Configuración:** Añadida una sección para que el usuario pueda introducir y guardar su clave de la API de Gemini.

### Changed
- **Experiencia de Usuario (UX):** Mejorado el panel de configuración de la API añadiendo un botón "Guardar" explícito y feedback visual para el usuario.

### Fixed
- **Error de Modelo de API:** Solucionado un error crítico que impedía la comunicación con la API de Gemini al seleccionar un modelo compatible (`gemini-pro-latest`) basado en los modelos disponibles para la clave del usuario.
- **Dependencias del Proyecto:** Resuelto el error `vite: command not found` al guiar la instalación de las dependencias con `npm install`.