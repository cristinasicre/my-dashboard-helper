export const RESOLUTION = [
  {
    title: 'No se envía correo',
    cause: 'Baja actividad en el buzón',
    problem: 'Se detecta que dejan de entrar correos',
    solution:
      'Al momento de resolución ya se han detectado nuevos correos, observándose el monitor en verde',
    resolution: 'Cannot Reproduce',
    error_type: 'Functional',
    impact: 'NO',
    textToClipboard: ` 
    *Causa:* Baja actividad en el buzón

    *Problema:* Se detecta que dejan de entrar correos

    *Solución:* Al momento de resolución ya se han detectado nuevos correos, observándose el monitor en verde

    `,
  },
  {
    title: 'Se envia correo',
    cause: 'Baja actividad en el buzón',
    problem: 'Se detecta que dejan de entrar correos',
    solution:
      'Se envía un correo de prueba verificando correcto funcionamiento del sistema',
    resolution: 'Not an issue',
    error_type: 'Functional',
    impact: 'LOW',
    textToClipboard: `
    *Causa:* Baja actividad en el buzón

    *Problema:* Se detecta que dejan de entrar correos

    *Solución:* Se envía un correo de prueba verificando correcto funcionamiento del sistema

    `,
  },
  {
    title: 'Manahattan',
    cause:
      'El proceso procli de momento se encuentra intencionalmente desactivado',
    problem: 'Se detecta que no se ejecuta el ETL Manhattan',
    solution:
      'Al momento de resolución ya se han detectado nuevos correos, observándose el monitor en verde',
    resolution: 'Cannot Reproduce',
    error_type: 'Functional',
    impact: 'LOW',
    textToClipboard: `
    *Causa:* El proceso procli de momento se encuentra intencionalmente desactivado

    *Problema:* Se detecta que no se ejecuta el ETL Manhattan

    *Solución:* No aplica

    `,
  },

];
