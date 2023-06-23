export const types = [
  {
    type: 'feat',
    label: 'Caracterisitcas',
    description: 'Una nueva caracteristica o funcionalidad'
  },
  {
    type: 'fix',
    label: 'Correccion de errores',
    description: 'Correccion de algun error o bug'
  },
  {
    type: 'docs',
    label: 'Documentacion',
    description: 'Cambios en la documentacion'
  },
  {
    type: 'styles',
    label: 'Estilos de Codigo',
    description: 'Cambios que no afectan al significado del código (espacios en blanco, formato, faltas, puntos y comas, etc)'
  },
  {
    type: 'refactor',
    label: 'Refactorizacion de Codigo',
    description: 'Un cambio de código que no corrige un error ni añade una función.'
  },
  {
    type: 'perf',
    label: 'Mejoras de Rendimiento',
    description: 'Un cambio de código que mejora el rendimiento de la aplicacion'
  },
  {
    type: 'test',
    label: 'Pruebas',
    description: 'Añadir pruebas que faltan o corregir las existentes'
  },
  {
    type: 'build',
    label: 'Construir',
    description: 'Cambios que afectan al sistema de compilación o a dependencias externas (ejemplos de ámbitos: gulp, broccoli...)'
  },
  {
    type: 'ci',
    label: 'Integraciones Continuas',
    description: 'Cambios en nuestros archivos y scripts de configuración de CI (ámbitos de ejemplo: Travis, Circle, BrowserStack...)'
  },
  {
    type: 'chore',
    label: 'Tareas',
    description: 'Otros cambios que no modifican el codigo fuente o los tests'
  },
  {
    type: 'revert',
    label: 'Revertir',
    description: 'Anulacion de un commit anterior.'
  }
]
