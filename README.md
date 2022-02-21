# skeleton_app_js

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

## Configuración del proyecto:

### - vue/cli actualiado a version 5.rc.1:

> El motivo es para obtener la compatibilidad con postcss 8, necesario para incluir tailwind en su ultima versión 3.x.x

### - tailwind 3.x.x:

> Se ha realizado la configuracion basica tal y como la documentación expone. https://tailwindcss.com/docs/guides/vite.

### - @jamescoyle/vue-icon && @mdi/js

> Estos paquetes facilitan la tarea de incluir iconos svg desde la libreria material design icons. https://materialdesignicons.com/.

### - @vue-cli-plugin-pug

> Pug es un compilador de html, lo utilizo por que asi la parte template de cada componente se reduce casi un 70%, es mucho mas agil para escribir html y te olvidas de cerrar cada etiqueta html utilizando estilo en cascada.

---

## Carpeta "./Plugins"

> En esta carpeta añado scripts de configuracion, como por ejemplo, el baseLoaders, o i18n.

### - BaseLoader:

es un sistema para cargar de forma global componentes basicos como, inputs de formularios, cabeceras...
