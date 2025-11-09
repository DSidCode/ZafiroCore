# // BlueCore //

**BlueCore** es un Dashboard Estratégico Personalizado, el núcleo operativo de un alquimista digital. Su misión es transformar la gestión diaria en una experiencia inmersiva y gamificada, fusionando productividad con metas personales bajo una estética cyberpunk.

Más que una simple lista de tareas, BlueCore actúa como un centro de mando para tus "misiones" diarias, proyectos digitales y objetivos a largo plazo, como planes de ahorro para gaming o la organización de eventos.

## Características

- **Gestión de Tareas:** Añade, completa y elimina tareas de forma sencilla.
- **Dashboard Estratégico:** Visualiza tareas, proyectos y estadísticas en un solo lugar con tarjetas modulares.
- **Estados de Tarea Avanzados:** Las tareas pueden estar `En Curso`, `Retrasadas`, `Completadas` o `Pendientes`, con un feedback visual claro.
- **Asistente BlueCore:** Interactúa con una IA para gestionar tus tareas usando lenguaje natural.
- **Comandos de Lenguaje Natural:** Dale órdenes como "añade una tarea para comprar pan" y observa cómo se ejecuta en tiempo real.
- **Estética Cyberpunk:** Una interfaz inmersiva con una temática de neón y terminal.
- **Persistencia Local:** Tus tareas y tu clave de API de Gemini se guardan de forma segura en el almacenamiento local de tu navegador.

## Visión del Proyecto (Plan Gaming + Ahorro)
La versión actual está evolucionando para incorporar un sistema de "Plan Gaming + Ahorro". Esto permitirá al usuario no solo gestionar sus tareas diarias, sino también establecer objetivos de ahorro para metas específicas (ej. comprar un videojuego) y planificar sus sesiones de juego, todo dentro del mismo ecosistema motivacional.

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
3.  Pega tu clave de API en el campo de texto y haz clic en **Guardar**.

## Tecnologías Utilizadas

- **React:** Para la construcción de la interfaz de usuario.
- **Vite:** Como herramienta de desarrollo y empaquetado.
- **Google Gemini API:** Para la inteligencia artificial del asistente J.A.R.V.I.S.
