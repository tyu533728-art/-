// Portuguese specification text. Shape and keys mirror data/spec-i18n/en.mjs.
export default Object.freeze({
  locale: 'pt',
  ui: {
    productImage: 'Imagem do produto',
    productData: 'Dados do produto',
    fullModelRange: 'Linha completa de modelos',
    housingModel: 'Modelo do mancal',
    matchingBearing: 'Rolamento correspondente',
    boreRange: 'Faixa de diâmetro interno',
    housing: 'Mancal',
    bearing: 'Rolamento',
    feature: 'Característica',
    application: 'Aplicação',
    flangeTypes: 'Tipos de flange desta família',
    needSpecs: 'Precisa de especificações ou de um orçamento?',
    emailUs: 'Envie-nos um e-mail',
    seriesPattern: 'Série {code}'
  },
  modelGroups: {
    light200: 'Série 200 — serviço leve, linha mais utilizada',
    light200Stock: 'Série 200 — serviço leve, linha padrão',
    heavy300: 'Série 300 — serviço pesado, seção mais espessa para cargas maiores',
    specialVariants: 'Variantes especiais',
    imperialBore: 'Modelos com furo em polegadas',
    imperialNote: 'Versões com furo em polegadas para mercados de exportação.',
    imperialNoteShort: 'Versões com furo em polegadas.',
    suct: 'Série SUCT em aço inoxidável',
    suctNote: 'Resistente à corrosão — para ambientes úmidos e equipamentos de grau alimentício.'
  },
  materials: {
    housingCastIron: 'Ferro fundido cinzento HT200',
    bearingChromeSteel: 'Aço cromo GCr15'
  },
  unitStandardNote: 'Construção padrão: fixação por parafusos de pressão, vedação dupla de borracha, capacidade de autoalinhamento de ±2° e bico engraxador para relubrificação.',
  unitModels: {
    UCT218: {
      feature: 'Ajuste de tensão deslizante',
      application: 'Transportadores, elevadores de caçambas, máquinas de transmissão'
    },
    UCP206: {
      feature: 'Tipo universal, carregamento estável',
      application: 'Ventiladores, máquinas agrícolas, transportadores em geral'
    },
    UCF208: {
      feature: 'Fixação quadrada de quatro parafusos, resistente à torção',
      application: 'Máquinas de embalagem, equipamentos transportadores montados lateralmente'
    },
    UCFC208: {
      feature: 'Ressalto de centragem de precisão, força uniforme',
      application: 'Bombas, redutores, carcaças de máquinas de precisão'
    },
    UCFL205: {
      feature: 'Estrutura compacta, economia de espaço',
      application: 'Máquinas têxteis, transportadores leves, pequenos equipamentos agrícolas'
    },
    UCPA212: {
      feature: 'Furos roscados cegos, superfície plana',
      application: 'Estruturas de máquinas, equipamentos transportadores de precisão'
    },
    UCPA207: {
      feature: 'Furos roscados cegos, superfície de montagem plana',
      application: 'Equipamentos de automação, bases de máquinas-ferramenta'
    },
    UCPH206: {
      feature: 'Projeto de base alta, centro do eixo elevado',
      application: 'Máquinas agrícolas, estruturas de transportador com altura especial'
    },
    UCFA206: {
      feature: 'Furos oblongos ajustáveis, projeto compacto de duas abas',
      application: 'Máquinas têxteis, equipamentos de embalagem leves'
    },
    UCFB208: {
      feature: 'Flange redonda de dois parafusos, montagem estável',
      application: 'Máquinas alimentícias, equipamentos de embalagem, transmissão lateral'
    },
    UCHA206: {
      feature: 'Instalação suspensa no alto',
      application: 'Transportadores aéreos, linhas de produção suspensas'
    }
  },
  housingFeatures: {
    F: 'Montagem com flange quadrada de 4 parafusos, furo esférico autoalinhável',
    T: 'Projeto de corrediça de esticador, deslocável sobre trilhos-guia, furo esférico autoalinhável',
    P: 'Montagem com base de mancal de 2 parafusos, furo esférico autoalinhável',
    FC: 'Projeto de flange redonda, vários furos para parafusos, furo esférico autoalinhável',
    FL: 'Projeto de flange oval, 2 furos para parafusos, furo esférico autoalinhável',
    PA: 'Mancal baixo, montagem de base compacta, furo esférico autoalinhável',
    PH: 'Mancal de base alta, altura do eixo elevada, furo esférico autoalinhável',
    FU: 'Flange quadrada de 4 parafusos, base prolongada, furo esférico autoalinhável',
    FB: 'Mancal com base roscada, furos de montagem roscados, furo esférico autoalinhável',
    PAS: 'Mancal tipo suspenso, montagem pendurada, furo esférico autoalinhável'
  },
  housingApplications: {
    F: 'Transportadores, máquinas agrícolas, ventiladores, máquinas têxteis',
    T: 'Tensionamento de correias transportadoras, esticador de correntes, máquinas agrícolas, equipamentos de movimentação de materiais',
    P: 'Transportadores, ventiladores, máquinas agrícolas, equipamentos de transmissão em geral',
    FC: 'Transportadores, máquinas alimentícias, equipamentos de embalagem, ventiladores, transmissão em geral',
    FL: 'Transportadores, máquinas agrícolas, máquinas têxteis, transmissão em geral',
    PA: 'Transportadores, máquinas têxteis, pequenos equipamentos de transmissão',
    PH: 'Transportadores, máquinas agrícolas, equipamentos de processamento',
    FU: 'Transportadores de serviço pesado, equipamentos auxiliares de mineração, máquinas agrícolas',
    FB: 'Máquinas-ferramenta, equipamentos de automação, sistemas de transmissão compactos',
    PAS: 'Transportadores aéreos, elevadores de caçambas, linhas de transmissão suspensas'
  },
  housingStandardNotes: {
    F: 'Construção padrão em todos os modelos: mancal de ferro fundido cinzento HT200, cavidade interna esférica que oferece capacidade de autoalinhamento de ±2° para compensar o desalinhamento do eixo, acabamento com pintura anticorrosiva, projetado para receber rolamentos insertados da série UC.',
    T: 'Construção padrão em todos os modelos: mancal de ferro fundido cinzento HT200 com ranhuras deslizantes para ajuste axial, cavidade interna esférica que oferece capacidade de autoalinhamento de ±2° para compensar o desalinhamento do eixo, acabamento com pintura anticorrosiva, projetado para receber rolamentos insertados da série UC. Ideal para aplicações que exigem tensionamento de correias ou correntes e posicionamento flexível do eixo.',
    P: 'Construção padrão em todos os modelos: mancal de ferro fundido cinzento HT200 com dois furos para parafusos de montagem, cavidade interna esférica que oferece capacidade de autoalinhamento de ±2° para compensar o desalinhamento do eixo, acabamento com pintura anticorrosiva, projetado para receber rolamentos insertados da série UC. Montagem horizontal simples e estável para o suporte geral de eixos rotativos na indústria.',
    FC: 'Construção padrão em todos os modelos: mancal de flange redonda de ferro fundido cinzento HT200 com furos de montagem uniformemente espaçados, cavidade interna esférica que oferece capacidade de autoalinhamento de ±2° para compensar o desalinhamento do eixo, acabamento com pintura anticorrosiva, projetado para receber rolamentos insertados da série UC. Estrutura circular compacta de flange para montagem superficial com economia de espaço em estruturas de equipamentos e paredes de máquinas.',
    FL: 'Construção padrão em todos os modelos: mancal de flange oval de ferro fundido cinzento HT200 com dois furos de montagem, cavidade interna esférica que oferece capacidade de autoalinhamento de ±2° para compensar o desalinhamento do eixo, acabamento com pintura anticorrosiva, projetado para receber rolamentos insertados da série UC. Flange oval compacta para cenários de instalação com espaço limitado.',
    PA: 'Construção padrão em todos os modelos: mancal baixo de ferro fundido cinzento HT200, cavidade interna esférica que oferece capacidade de autoalinhamento de ±2° para compensar o desalinhamento do eixo, acabamento com pintura anticorrosiva, projetado para receber rolamentos insertados da série UC. O projeto de base baixa economiza espaço de instalação em layouts compactos de máquinas.',
    PH: 'Construção padrão em todos os modelos: mancal de base alta de ferro fundido cinzento HT200, cavidade interna esférica que oferece capacidade de autoalinhamento de ±2° para compensar o desalinhamento do eixo, acabamento com pintura anticorrosiva, projetado para receber rolamentos insertados da série UC. A base elevada cria folga abaixo do eixo para proteções e requisitos de espaço.',
    FU: 'Construção padrão em todos os modelos: mancal de flange quadrada de ferro fundido cinzento HT200 com base prolongada reforçada, cavidade interna esférica que oferece capacidade de autoalinhamento de ±2° para compensar o desalinhamento do eixo, acabamento com pintura anticorrosiva, projetado para receber rolamentos insertados da série UC. A estrutura reforçada proporciona maior capacidade de carga para condições de trabalho pesadas.',
    FB: 'Construção padrão em todos os modelos: mancal de ferro fundido cinzento HT200 com furos de montagem roscados, cavidade interna esférica que oferece capacidade de autoalinhamento de ±2° para compensar o desalinhamento do eixo, acabamento com pintura anticorrosiva, projetado para receber rolamentos insertados da série UC. Os furos roscados dispensam parafusos passantes, ideais para instalação em painéis finos de máquinas.',
    PAS: 'Construção padrão em todos os modelos: mancal suspenso de ferro fundido cinzento HT200 para instalação pendurada, cavidade interna esférica que oferece capacidade de autoalinhamento de ±2° para compensar o desalinhamento do eixo, acabamento com pintura anticorrosiva, projetado para receber rolamentos insertados da série UC. Estrutura suspensa para sistemas de transportadores aéreos e elevadores.'
  },
  flangeTypes: {
    UCF: 'Flange quadrada de quatro parafusos, sem ressalto de centragem',
    UCFC: 'Flange redonda com ressalto de centragem',
    UCFL: 'Flange oval de dois parafusos — esbelta e compacta',
    UCFA: 'Flange oval com furos oblongos — posição de montagem ajustável',
    UCFB: 'Flange redonda de dois parafusos — sem ressalto, leve'
  }
});
