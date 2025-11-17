import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// El contenido de tareas.md se incrusta aquí para su visualización.
const tareasMarkdownContent = `
# Plan de Acción y Estructura de Proyectos - BlueCore

Este documento sirve como guía maestra y registro de ideas para el proyecto BlueCore. No debe ser eliminado. Es un espacio para la planificación estructural antes de la implementación visual.

---

## 📅 PLAN DE HOY (Tareas Inmediatas)
*Acciones que requieren atención inmediata para desbloquear el trabajo o resolver problemas críticos.*

- **[x] Configuración de pantalla HDMI en Nobara Linux:** Problema resuelto.
- **[ ] Refactorización y migración de danisid.com a React.**
- **[ ] Conceptualizar tarjeta de visita digital (Marca Personal).**
- **[ ] Diseñar paquete de servicio "Modernización con React".**
- **[ ] Contactar 1er cliente potencial (ej. Mamarrachos).**
- **[ ] Comprar: Pilas AA para el mouse.**
- **[ ] Comprar: Cable HDMI más largo.**
- **[ ] Comprar: Mando para TV Samsung (UE32J5570).**

---

## ⚡ PROYECTOS EN CURSO (VISTA RÁPIDA)
*Un resumen de los proyectos que están actualmente en desarrollo activo o planificación prioritaria.*

- **BlueCore AI**: Desarrollo del asistente y la interfaz.
- **Diario de Papá (Legado IA)**: Estructuración y recopilación de datos para la IA.
- **CyberMadrid ADS**: Planificación y búsqueda de los primeros clientes.

---

## 🎯 FOCO PRINCIPAL: GENERACIÓN DE INGRESOS
*Proyectos que generan ingresos directos o son la base para ello.*

### 📢 CyberMadrid ADS
- **Estado:** Planificación
- **Descripción:** Plataforma de marketing para la vida nocturna.
- **Subtareas:**
  - [ ] Definir servicios (cartelería, ads).
  - [ ] Crear portfolio visual.
  - [ ] Buscar primeros clientes.
  - **Proyectos Relacionados:**
    - **Campaña Mamarrachos:**
      - **Estado:** Pendiente
      - **Descripción:** Marketing con QR: "Etiqueta y gana chupito".
      - **Subtareas:**
        - [x] Concepto definido.
        - [ ] Diseño de carteles.
        - [ ] Generar códigos QR.

### 💎 Proyecto Pulseras (Tienda Online)
- **Estado:** Ideación
- **Descripción:** E-commerce de pulseras artesanales.
- **Subtareas:**
  - [ ] Definir concepto y diseño de las pulseras.
  - [ ] Investigar plataforma e-commerce (Shopify, etc.).
  - [ ] Crear plan de negocio y marketing.

### 🌐 Proyecto Danisid.com
- **Estado:** En Revisión
- **Descripción:** Optimización de la web personal/profesional para generación de leads y clientes.
- **Ruta Local:** \`/home/sidzcool/DaniSidCode/danisid.com\`
- **Subtareas:**
  - [ ] Clarificar propuesta de valor y especialización.
  - [ ] Potenciar portafolio con estudios de caso.
  - [ ] Reforzar marca personal "Cyberpunk Geek Glitch".
  - [ ] Refactorización y migración a React.

### 📄 Proyecto cv.danisid.com
- **Estado:** En Planificación
- **Descripción:** Creación y optimización de un CV online interactivo y un portafolio de proyectos para búsqueda de empleo y clientes.
- **Ruta Local:** \`/home/sidzcool/DaniSidCode/cv\`
- **Subtareas:**
  - [ ] Seleccionar plataforma o tecnología (Webflow, React, etc.).
  - [ ] Diseñar estructura y contenido del CV.
  - [ ] **Conceptualizar tarjeta de visita digital:** Diseñar una tarjeta que sirva como herramienta de marca personal (Frontend Dev -> QuimeraCorp).
  - [ ] Integrar ejemplos de proyectos clave.
  - [ ] Optimizar para SEO y visibilidad.

### 🎓 CyberClases
- **Estado:** Ideación
- **Descripción:** Plataforma o servicio para impartir clases de tecnología/ciberseguridad.
- **Ruta Local:** \`/home/sidzcool/DaniSidCode/Cyberclases/\`
- **Subtareas:**
  - [ ] Definir temario y estructura de los cursos.
  - [ ] Investigar plataformas para impartir clases (online/presencial).
  - [ ] Crear material didáctico.

### 🎨 Proyecto El Manicomio Tattoo
- **Estado:** Importante
- **Descripción:** Web para el estudio de tatuajes (WordPress).
- **Ruta Local:** \`/home/sidzcool/desarrollos2-0/elmanicomiotattoo.es\`
- **Subtareas:**
  - [ ] Finalizar y desplegar la web.
  - [ ] Refactorizar el diseño según feedback.
  - [ ] Definir un servicio de 'Modernización con React' como posible futura mejora.

---

## 🚀 PROYECTOS ESTRATÉGICOS Y CREATIVOS
*Proyectos que construyen marca, habilidades o son activos a largo plazo.*

### 🔵 BlueCore AI
- **Estado:** Parcial
- **Descripción:** Asistente estratégico personal con IA.
- **Subtareas:**
  - [x] Interfaz base completada.
  - [ ] Integración Gemini API.
  - [ ] Sistema de comandos (Parcial).

### 🌌 Quimera Alchemist
- **Estado:** En Desarrollo
- **Descripción:** Proyecto de desarrollo personal y profesional en Cloud, IA y Ciberseguridad.
- **Subtareas:**
  - [ ] Continuar desarrollo de módulos clave.
  - [ ] Especialización en tecnologías Cloud.
  - [ ] Investigación en IA y Ciberseguridad.

### 💔 Antología del Amor y otras Nostalgias
- **Estado:** Ideación
- **Descripción:** Proyecto de escritura creativa sobre amor y nostalgia.
- **Ruta Local:** \`/home/sidzcool/DaniSidCode/Aventuras\`
- **Subtareas:**
  - [ ] Definir alcance y objetivos.

### 📚 Antología del Alma (Diario de Papá)
- **Estado:** Ideación
- **Descripción:** Recopilación de escritos y reflexiones personales que sirven como base para el proyecto "Diario de Papá".
- **Ruta Local:** Archivos Markdown dentro de \`/home/sidzcool/BlueCore\`
- **Subtareas:**
  - [x] Definir temática y estructura (en progreso).
  - [ ] Establecer rutina de escritura.

### ❤️ Diario de Papá (Legado IA)
- **Estado:** Planificación
- **Descripción:** Crear una IA con mi personalidad para Adrián.
- **Subtareas:**
  - [ ] Investigar arquitecturas de BBDD para datos emocionales.
  - [ ] Definir la estructura de datos de la "personalidad".
  - [x] Comenzar a poblar la "Antología del Alma".

### 🎸 guitarApp
- **Estado:** Ideación
- **Descripción:** (Añadir descripción específica de guitarApp)
- **Subtareas:**
  - [ ] Definir funcionalidades principales.
  - [ ] Investigar tecnologías para desarrollo.

### 🌃 CyberPunk Project
- **Estado:** Ideación
- **Descripción:** (Añadir descripción específica del proyecto CyberPunk)
- **Ruta Local:** \`/home/sidzcool/DaniSidCode/CyberPunkProject/\`
- **Subtareas:**
  - [ ] Definir el concepto y los objetivos del proyecto.

### 🤖 GeminiSolutions
- **Estado:** Ideación
- **Descripción:** Proyecto enfocado en desarrollar soluciones utilizando la API de Gemini.
- **Ruta Local:** \`/home/sidzcool/GeminiSolutions\`
- **Subtareas:**
  - [ ] Definir el objetivo principal y los casos de uso.
  - [ ] Estructurar el repositorio del proyecto.

---

## ⚙️ OBLIGACIONES Y MANTENIMIENTO
*Tareas recurrentes y responsabilidades.*

### 🍻 Bar Nocturno
- **Estado:** Activo
- **Descripción:** Nuevo horario confirmado.
- **Subtareas:**
  - [x] Días: Martes a Sábado.
  - [x] Horario: 21:00 - 04:00 (7h).
  - [ ] Descanso: Domingo y Lunes.

### 🛒 Compras Tecnológicas
- **Estado:** Pendiente
- **Descripción:** Lista de compras de hardware y periféricos necesarios.
- **Subtareas:**
  - [ ] Pilas AA para el mouse.
  - [ ] Cable HDMI más largo.
  - [ ] Mando para TV Samsung (UE32J5570).

### 🛒 Compra Supermercado
- **Estado:** Completado

### 🧺 Lavadora
- **Estado:** Completado

---

## 🌱 DESARROLLO Y OCIO
*Crecimiento personal, hobbies e inspiración.*

### 🎉 Neo-Birthday SidZCooL
- **Estado:** Ideación
- **Descripción:** Fiesta cyberpunk multidimensional.
- **Subtareas:**
  - [ ] Definir concepto visual.
  - [ ] Lista de invitados.
  - [ ] Presupuesto estimado.

### 🎮 Gaming & Ahorro
- **Estado:** Planificado
- **Descripción:** Ahorro para juegos pendientes.
- **Subtareas:**
  - [ ] Ahorrar €40 para Cyberpunk 2077.

### 🎭 Agenda Cultural
- **Estado:** Agendado
- **Descripción:** Asistir a eventos para networking e inspiración.
- **Subtareas:**
  - [ ] Candlelight: Joe Hisaishi (25 Ene).

---

... (Resto del contenido)
`;

const PlanDeAccion = () => {
  return (
    <div className="carta-container"> {/* Reutilizamos estilos para mantener la consistencia */}
      <header className="carta-header">
        <h1>Plan de Acción y Tareas</h1>
        <p>Visualización en tiempo real del archivo <code>tareas.md</code></p>
      </header>
      <div className="carta-body">
        <div className="markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{tareasMarkdownContent}</ReactMarkdown>
        </div>
      </div>
      <footer className="carta-footer">
        <Link to="/" className="back-link">
          &larr; Volver al Dashboard
        </Link>
      </footer>
    </div>
  );
};

export default PlanDeAccion;