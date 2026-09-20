// Spanish specification text. Shape and keys mirror data/spec-i18n/en.mjs.
export default Object.freeze({
  locale: 'es',
  ui: {
    productImage: 'Imagen del producto',
    productData: 'Datos del producto',
    fullModelRange: 'Gama completa de modelos',
    housingModel: 'Modelo de soporte',
    matchingBearing: 'Rodamiento compatible',
    boreRange: 'Rango de diámetro interior',
    housing: 'Soporte',
    bearing: 'Rodamiento',
    feature: 'Característica',
    application: 'Aplicación',
    flangeTypes: 'Tipos de brida de esta familia',
    needSpecs: '¿Necesita especificaciones o una cotización?',
    emailUs: 'Escríbanos',
    seriesPattern: 'Serie {code}'
  },
  modelGroups: {
    light200: 'Serie 200 — servicio ligero, gama más utilizada',
    light200Stock: 'Serie 200 — servicio ligero, gama estándar',
    heavy300: 'Serie 300 — servicio pesado, sección más gruesa para cargas mayores',
    specialVariants: 'Variantes especiales',
    imperialBore: 'Modelos con diámetro interior en pulgadas',
    imperialNote: 'Versiones con diámetro interior en pulgadas para mercados de exportación.',
    imperialNoteShort: 'Versiones con diámetro interior en pulgadas.',
    suct: 'Serie SUCT en acero inoxidable',
    suctNote: 'Resistente a la corrosión — para ambientes húmedos y equipos de grado alimentario.'
  },
  materials: {
    housingCastIron: 'Fundición gris HT200',
    bearingChromeSteel: 'Acero al cromo GCr15'
  },
  unitStandardNote: 'Construcción estándar: fijación por tornillos prisioneros, doble sello de goma, capacidad de autoalineación de ±2° y engrasador para la relubricación.',
  unitModels: {
    UCT218: {
      feature: 'Ajuste de tensión deslizante',
      application: 'Transportadores, elevadores de cangilones, maquinaria de transmisión'
    },
    UCP206: {
      feature: 'Tipo universal, carga estable',
      application: 'Ventiladores, maquinaria agrícola, transportadores de uso general'
    },
    UCF208: {
      feature: 'Fijación cuadrada de cuatro tornillos, resistente a la torsión',
      application: 'Máquinas de envasado, equipos de transporte montados lateralmente'
    },
    UCFC208: {
      feature: 'Resalte de centrado de precisión, fuerza uniforme',
      application: 'Bombas, reductores, carcasas de maquinaria de precisión'
    },
    UCFL205: {
      feature: 'Estructura compacta, ahorro de espacio',
      application: 'Maquinaria textil, transportadores ligeros, equipos agrícolas pequeños'
    },
    UCPA212: {
      feature: 'Agujeros roscados ciegos, superficie plana',
      application: 'Bancadas de máquinas, equipos de transporte de precisión'
    },
    UCPA207: {
      feature: 'Agujeros roscados ciegos, superficie de montaje plana',
      application: 'Equipos de automatización, bases de máquinas herramienta'
    },
    UCPH206: {
      feature: 'Diseño de base alta, centro del eje elevado',
      application: 'Maquinaria agrícola, bastidores de transportador con altura especial'
    },
    UCFA206: {
      feature: 'Agujeros ovalados ajustables, diseño compacto de dos alas',
      application: 'Máquinas textiles, equipos de envasado ligeros'
    },
    UCFB208: {
      feature: 'Brida redonda de dos tornillos, montaje estable',
      application: 'Maquinaria alimentaria, equipos de envasado, transmisión lateral'
    },
    UCHA206: {
      feature: 'Instalación colgada en altura',
      application: 'Transportadores aéreos, líneas de producción suspendidas'
    }
  },
  housingFeatures: {
    F: 'Montaje con brida cuadrada de 4 tornillos, agujero esférico autoalineable',
    T: 'Diseño de corredera de tensor, desplazable sobre guías, agujero esférico autoalineable',
    P: 'Montaje con base de soporte de 2 tornillos, agujero esférico autoalineable',
    FC: 'Diseño de brida redonda, varios agujeros para tornillos, agujero esférico autoalineable',
    FL: 'Diseño de brida ovalada, 2 agujeros para tornillos, agujero esférico autoalineable',
    PA: 'Soporte bajo, montaje de base compacto, agujero esférico autoalineable',
    PH: 'Soporte de base alta, altura del eje elevada, agujero esférico autoalineable',
    FU: 'Brida cuadrada de 4 tornillos, base prolongada, agujero esférico autoalineable',
    FB: 'Soporte con base roscada, agujeros de montaje roscados, agujero esférico autoalineable',
    PAS: 'Soporte de rodamiento tipo colgante, montaje suspendido, agujero esférico autoalineable'
  },
  housingApplications: {
    F: 'Transportadores, maquinaria agrícola, ventiladores, maquinaria textil',
    T: 'Tensorado de cintas transportadoras, tensor de cadenas, maquinaria agrícola, equipos de manipulación de materiales',
    P: 'Transportadores, ventiladores, maquinaria agrícola, equipos de transmisión de uso general',
    FC: 'Transportadores, maquinaria alimentaria, equipos de envasado, ventiladores, transmisión de uso general',
    FL: 'Transportadores, maquinaria agrícola, maquinaria textil, transmisión de uso general',
    PA: 'Transportadores, maquinaria textil, equipos de transmisión pequeños',
    PH: 'Transportadores, maquinaria agrícola, equipos de procesamiento',
    FU: 'Transportadores de servicio pesado, equipos auxiliares de minería, maquinaria agrícola',
    FB: 'Máquinas herramienta, equipos de automatización, sistemas de transmisión compactos',
    PAS: 'Transportadores aéreos, elevadores de cangilones, líneas de transmisión suspendidas'
  },
  housingStandardNotes: {
    F: 'Construcción estándar en todos los modelos: soporte de fundición gris HT200, cavidad interior esférica que ofrece una capacidad de autoalineación de ±2° para compensar la desalineación del eje, acabado con pintura antioxidante, diseñado para alojar rodamientos insertables de la serie UC.',
    T: 'Construcción estándar en todos los modelos: soporte de fundición gris HT200 con ranuras deslizantes para el ajuste axial, cavidad interior esférica que ofrece una capacidad de autoalineación de ±2° para compensar la desalineación del eje, acabado con pintura antioxidante, diseñado para alojar rodamientos insertables de la serie UC. Ideal para aplicaciones que requieren el tensorado de correas o cadenas y un posicionamiento flexible del eje.',
    P: 'Construcción estándar en todos los modelos: soporte de fundición gris HT200 con dos agujeros para tornillos de montaje, cavidad interior esférica que ofrece una capacidad de autoalineación de ±2° para compensar la desalineación del eje, acabado con pintura antioxidante, diseñado para alojar rodamientos insertables de la serie UC. Montaje horizontal sencillo y estable para el soporte general de ejes giratorios en la industria.',
    FC: 'Construcción estándar en todos los modelos: soporte de brida redonda de fundición gris HT200 con agujeros de montaje equidistantes, cavidad interior esférica que ofrece una capacidad de autoalineación de ±2° para compensar la desalineación del eje, acabado con pintura antioxidante, diseñado para alojar rodamientos insertables de la serie UC. Estructura de brida circular compacta para el montaje superficial con ahorro de espacio en bastidores de equipos y paredes de máquinas.',
    FL: 'Construcción estándar en todos los modelos: soporte de brida ovalada de fundición gris HT200 con dos agujeros de montaje, cavidad interior esférica que ofrece una capacidad de autoalineación de ±2° para compensar la desalineación del eje, acabado con pintura antioxidante, diseñado para alojar rodamientos insertables de la serie UC. Brida ovalada compacta para escenarios de instalación con espacio limitado.',
    PA: 'Construcción estándar en todos los modelos: soporte bajo de fundición gris HT200, cavidad interior esférica que ofrece una capacidad de autoalineación de ±2° para compensar la desalineación del eje, acabado con pintura antioxidante, diseñado para alojar rodamientos insertables de la serie UC. El diseño de base baja ahorra espacio de instalación en configuraciones de maquinaria compactas.',
    PH: 'Construcción estándar en todos los modelos: soporte de base alta de fundición gris HT200, cavidad interior esférica que ofrece una capacidad de autoalineación de ±2° para compensar la desalineación del eje, acabado con pintura antioxidante, diseñado para alojar rodamientos insertables de la serie UC. La base elevada crea un espacio libre bajo el eje para protecciones y requisitos de espacio.',
    FU: 'Construcción estándar en todos los modelos: soporte de brida cuadrada de fundición gris HT200 con base prolongada reforzada, cavidad interior esférica que ofrece una capacidad de autoalineación de ±2° para compensar la desalineación del eje, acabado con pintura antioxidante, diseñado para alojar rodamientos insertables de la serie UC. La estructura reforzada ofrece una mayor capacidad de carga para condiciones de trabajo pesadas.',
    FB: 'Construcción estándar en todos los modelos: soporte de fundición gris HT200 con agujeros de montaje roscados, cavidad interior esférica que ofrece una capacidad de autoalineación de ±2° para compensar la desalineación del eje, acabado con pintura antioxidante, diseñado para alojar rodamientos insertables de la serie UC. Los agujeros roscados eliminan los tornillos pasantes, ideales para la instalación en paneles de máquina delgados.',
    PAS: 'Construcción estándar en todos los modelos: soporte colgante de fundición gris HT200 para instalación suspendida, cavidad interior esférica que ofrece una capacidad de autoalineación de ±2° para compensar la desalineación del eje, acabado con pintura antioxidante, diseñado para alojar rodamientos insertables de la serie UC. Estructura suspendida para sistemas de transportadores aéreos y elevadores.'
  },
  flangeTypes: {
    UCF: 'Brida cuadrada de cuatro tornillos, sin resalte de centrado',
    UCFC: 'Brida redonda con resalte de centrado',
    UCFL: 'Brida ovalada de dos tornillos — esbelta y compacta',
    UCFA: 'Brida ovalada con agujeros ovalados — posición de montaje ajustable',
    UCFB: 'Brida redonda de dos tornillos — sin resalte, ligera'
  }
});
