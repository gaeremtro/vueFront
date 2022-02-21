import { upperFirst, camelCase } from 'lodash';

const requireComponent = require.context(
  // La ruta relativa de la carpeta de componentes
  '../baseComponents',
  // Si mirar o no en las subcarpetas
  true,
  // La expresión regular utilizada para hacer coincidir los nombres de los componentes básicos de los ficheros
  /[A-Za-z]\w+\.(vue)$/
);

export const registerComponents = app =>
  requireComponent.keys().forEach(fileName => {
    // Obtener la configuración de los componentes
    const componentConfig = requireComponent(fileName);
    // Obtener el nombre PascalCase del componente
    const componentName = upperFirst(
      camelCase(
        // Quitar el `./`en el comienzo y la extensión del nombre del archivo
        'Base' + upperFirst(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
      )
    );
    console.log(componentName);
    // Registrar el componente a nivel global
    app.component(
      componentName,
      // Busca las opciones de componentes en `.default`, que
      // existen si el componente fue exportado con `export default`,
      // de lo contrario volver a la raíz del módulo.
      componentConfig.default || componentConfig
    );
  });
