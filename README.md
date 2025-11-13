# // BlueCore //

**BlueCore** es el corazón digital de un alquimista moderno. Es un Dashboard Estratégico y Emocional diseñado para ser más que una herramienta de productividad; es un compañero en el viaje de la vida, un crisol donde las metas profesionales, los proyectos creativos y el legado personal se funden.

Su misión es doble:
1.  **Navegador Estratégico:** Actuar como un centro de mando para "misiones" diarias, proyectos digitales y objetivos a corto y largo plazo, todo bajo una estética cyberpunk inmersiva.
2.  **El Corazón del Alquimista:** Servir como el recipiente para la "Antología del Alma", un diario donde los pensamientos y emociones se registran para, finalmente, dar vida al proyecto **"Diario de Papá"** — un legado en forma de IA.

## Características

- **Gestión de Tareas:** Añade, completa y elimina tareas de forma sencilla.
- **Dashboard Estratégico:** Visualiza tareas, proyectos y estadísticas en un solo lugar con tarjetas modulares.
- **Estados de Tarea Avanzados:** Las tareas pueden estar `En Curso`, `Retrasadas`, `Completadas` o `Pendientes`, con un feedback visual claro.
- **Asistente IA (BlueCore):** Interactúa con una IA para gestionar tus tareas usando lenguaje natural.
- **Gestión Financiera:** Una sección dedicada para visualizar y gestionar deudas y préstamos, manteniendo un control claro de los compromisos financieros.
- **Estética Cyberpunk:** Una interfaz inmersiva con una temática de neón y terminal.
- **Persistencia Local:** Tus tareas y tu clave de API de Gemini se guardan de forma segura en el almacenamiento local de tu navegador.

## Evolución del Proyecto: De Agenda a Legado

BlueCore no nació con su forma actual. Su viaje refleja una búsqueda de propósito cada vez más profunda:

- **V1 (Agenda Cyberpunk):** El proyecto comenzó como una simple lista de tareas con una estética cyberpunk. Su objetivo era la organización básica.
- **V2 (BlueCore - Núcleo Estratégico):** La herramienta evolucionó para convertirse en un dashboard estratégico. Las tareas se reorganizaron por prioridades (`Foco Ingresos`, `Proyectos Estratégicos`), alineando el trabajo diario con la "Misión Principal" del usuario.
- **V3 (BlueCore - El Corazón del Alquimista):** La versión actual trasciende la productividad. Con la introducción de la "Antología del Alma" y el proyecto "Diario de Papá", BlueCore se convierte en una herramienta para la introspección y la creación de un legado personal, fusionando la lógica de la máquina con la esencia del espíritu humano.

## Puesta en Marcha y Uso

Sigue estos pasos para ejecutar la aplicación en tu entorno local.

### 1. Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del directorio:

```bash
npm install
```

### 2. Ejecutar la Aplicación

Una vez instaladas las dependencias, inicia el servidor de desarrollo con:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

### 3. Configuración de la API de Gemini

Para que el asistente funcione, necesitas una clave de la API de Google AI.

1.  Obtén tu clave de forma gratuita en [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  En la aplicación, haz clic en el botón **CONFIG**.
3.  Pega tu clave de API en el campo de texto y haz clic en **Guardar**. Tu clave se guarda localmente y no se comparte.

## Tecnologías Utilizadas

- **React:** Para la construcción de la interfaz de usuario.
- **Vite:** Como herramienta de desarrollo y empaquetado.
- **Google Gemini API:** Para la inteligencia artificial del asistente J.A.R.V.I.S.
