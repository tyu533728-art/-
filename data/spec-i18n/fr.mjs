// French specification text. Shape and keys mirror data/spec-i18n/en.mjs.

export default Object.freeze({
  locale: 'fr',
  ui: {
    productImage: 'Image du produit',
    productData: 'Données produit',
    fullModelRange: 'Gamme complète de modèles',
    housingModel: 'Modèle de boîtier',
    matchingBearing: 'Roulement correspondant',
    boreRange: 'Plage d’alésage',
    housing: 'Boîtier',
    bearing: 'Roulement',
    feature: 'Caractéristique',
    application: 'Application',
    flangeTypes: 'Types de bride de cette famille',
    needSpecs: 'Besoin de spécifications ou d’un devis ?',
    emailUs: 'Écrivez-nous',
    // {code} est remplacé par le code de série, p. ex. « Série F ».
    seriesPattern: 'Série {code}'
  },
  modelGroups: {
    light200: 'Série 200 — service léger, gamme la plus utilisée',
    light200Stock: 'Série 200 — service léger, gamme standard',
    heavy300: 'Série 300 — service lourd, section plus épaisse pour des charges plus élevées',
    specialVariants: 'Variantes spéciales',
    imperialBore: 'Modèles à alésage en pouces',
    imperialNote: 'Versions à alésage en pouces pour les marchés d’exportation.',
    imperialNoteShort: 'Versions à alésage en pouces.',
    suct: 'Série inox SUCT',
    suctNote: 'Résistant à la corrosion — pour milieux humides et équipements de qualité alimentaire.'
  },
  materials: {
    housingCastIron: 'Fonte grise HT200',
    bearingChromeSteel: 'Acier à roulements GCr15'
  },
  unitStandardNote:
    'Construction standard : blocage par vis pointeau, double joint en caoutchouc, capacité d’autalignement de ±2° et graisseur pour la relubrification.',
  unitModels: {
    UCT218: {
      feature: 'Réglage de tension par coulissement',
      application: 'Convoyeurs, élévateurs à godets, machines de transmission'
    },
    UCP206: {
      feature: 'Type universel, charge stable',
      application: 'Ventilateurs, machines agricoles, convoyeurs généraux'
    },
    UCF208: {
      feature: 'Fixation carrée à quatre boulons, résistante à la torsion',
      application: 'Machines d’emballage, équipements de convoyage à montage latéral'
    },
    UCFC208: {
      feature: 'Bossage de centrage de précision, effort uniforme',
      application: 'Pompes, réducteurs, carters de machines de précision'
    },
    UCFL205: {
      feature: 'Structure compacte, gain de place',
      application: 'Machines textiles, convoyeurs légers, petit matériel agricole'
    },
    UCPA212: {
      feature: 'Trous taraudés borgnes, surface plane',
      application: 'Bâtis de machines, équipements de convoyage de précision'
    },
    UCPA207: {
      feature: 'Trous taraudés borgnes, surface de montage plane',
      application: 'Équipements d’automatisation, bâtis de machines-outils'
    },
    UCPH206: {
      feature: 'Socle surélevé, axe d’arbre rehaussé',
      application: 'Machines agricoles, bâtis de convoyeurs à hauteur spéciale'
    },
    UCFA206: {
      feature: 'Trous oblongs réglables, conception compacte à deux oreilles',
      application: 'Machines textiles, équipements d’emballage légers'
    },
    UCFB208: {
      feature: 'Bride ronde à deux boulons, montage stable',
      application: 'Machines alimentaires, équipements d’emballage, transmission latérale'
    },
    UCHA206: {
      feature: 'Installation suspendue en hauteur',
      application: 'Convoyeurs aériens, lignes de production suspendues'
    }
  },
  housingFeatures: {
    F: 'Montage à bride carrée 4 boulons, alésage sphérique autaligneur',
    T: 'Conception à coulisseau tendeur, mobile sur rails de guidage, alésage sphérique autaligneur',
    P: 'Montage sur socle à 2 boulons, alésage sphérique autaligneur',
    FC: 'Conception à bride ronde, plusieurs trous de boulons, alésage sphérique autaligneur',
    FL: 'Conception à bride ovale, 2 trous de boulons, alésage sphérique autaligneur',
    PA: 'Palier à semelle court, montage sur socle compact, alésage sphérique autaligneur',
    PH: 'Palier à semelle à socle surélevé, hauteur d’arbre augmentée, alésage sphérique autaligneur',
    FU: 'Bride carrée 4 boulons, socle prolongé, alésage sphérique autaligneur',
    FB: 'Palier à semelle à socle taraudé, trous de montage filetés, alésage sphérique autaligneur',
    PAS: 'Boîtier de roulement de type suspendu, montage en suspension, alésage sphérique autaligneur'
  },
  housingApplications: {
    F: 'Convoyeurs, machines agricoles, ventilateurs, machines textiles',
    T: 'Tension de courroie de convoyeur, tendeurs de chaîne, machines agricoles, équipements de manutention de matériaux',
    P: 'Convoyeurs, ventilateurs, machines agricoles, équipements de transmission généraux',
    FC: 'Convoyeurs, machines alimentaires, équipements d’emballage, ventilateurs, transmission générale',
    FL: 'Convoyeurs, machines agricoles, machines textiles, transmission générale',
    PA: 'Convoyeurs, machines textiles, petits équipements de transmission',
    PH: 'Convoyeurs, machines agricoles, équipements de transformation',
    FU: 'Convoyeurs à service lourd, équipements auxiliaires d’exploitation minière, machines agricoles',
    FB: 'Machines-outils, équipements d’automatisation, systèmes de transmission compacts',
    PAS: 'Convoyeurs aériens, élévateurs à godets, lignes de transmission suspendues'
  },
  housingStandardNotes: {
    F: 'Construction standard sur tous les modèles : boîtier en fonte grise HT200, cavité intérieure sphérique offrant une capacité d’autalignement de ±2° pour compenser le désalignement de l’arbre, finition peinte antirouille, conçu pour recevoir les roulements insérés de la série UC.',
    T: 'Construction standard sur tous les modèles : boîtier en fonte grise HT200 avec glissières pour le réglage axial, cavité intérieure sphérique offrant une capacité d’autalignement de ±2° pour compenser le désalignement de l’arbre, finition peinte antirouille, conçu pour recevoir les roulements insérés de la série UC. Idéal pour les applications nécessitant la tension d’une courroie ou d’une chaîne et un positionnement souple de l’arbre.',
    P: 'Construction standard sur tous les modèles : boîtier en fonte grise HT200 avec deux trous de boulons de fixation, cavité intérieure sphérique offrant une capacité d’autalignement de ±2° pour compenser le désalignement de l’arbre, finition peinte antirouille, conçu pour recevoir les roulements insérés de la série UC. Montage horizontal simple et stable pour le support d’arbres tournants industriels généraux.',
    FC: 'Construction standard sur tous les modèles : boîtier à bride ronde en fonte grise HT200 avec trous de montage régulièrement espacés, cavité intérieure sphérique offrant une capacité d’autalignement de ±2° pour compenser le désalignement de l’arbre, finition peinte antirouille, conçu pour recevoir les roulements insérés de la série UC. Structure à bride circulaire compacte pour un montage en surface peu encombrant sur les bâtis d’équipements et les parois de machines.',
    FL: 'Construction standard sur tous les modèles : boîtier à bride ovale en fonte grise HT200 avec deux trous de montage, cavité intérieure sphérique offrant une capacité d’autalignement de ±2° pour compenser le désalignement de l’arbre, finition peinte antirouille, conçu pour recevoir les roulements insérés de la série UC. Bride ovale compacte pour les installations à espace réduit.',
    PA: 'Construction standard sur tous les modèles : boîtier palier à semelle court en fonte grise HT200, cavité intérieure sphérique offrant une capacité d’autalignement de ±2° pour compenser le désalignement de l’arbre, finition peinte antirouille, conçu pour recevoir les roulements insérés de la série UC. La conception à socle court économise l’espace d’installation pour les implantations de machines compactes.',
    PH: 'Construction standard sur tous les modèles : boîtier palier à semelle à socle surélevé en fonte grise HT200, cavité intérieure sphérique offrant une capacité d’autalignement de ±2° pour compenser le désalignement de l’arbre, finition peinte antirouille, conçu pour recevoir les roulements insérés de la série UC. Le socle surélevé crée un dégagement sous l’arbre pour les protecteurs et les exigences d’encombrement.',
    FU: 'Construction standard sur tous les modèles : boîtier à bride carrée en fonte grise HT200 avec socle prolongé renforcé, cavité intérieure sphérique offrant une capacité d’autalignement de ±2° pour compenser le désalignement de l’arbre, finition peinte antirouille, conçu pour recevoir les roulements insérés de la série UC. La structure renforcée offre une capacité de charge supérieure pour les conditions de travail lourdes.',
    FB: 'Construction standard sur tous les modèles : boîtier palier à semelle en fonte grise HT200 avec trous de montage taraudés, cavité intérieure sphérique offrant une capacité d’autalignement de ±2° pour compenser le désalignement de l’arbre, finition peinte antirouille, conçu pour recevoir les roulements insérés de la série UC. Les trous taraudés suppriment les boulons traversants, ce qui est idéal pour le montage sur des panneaux de machines minces.',
    PAS: 'Construction standard sur tous les modèles : boîtier suspendu en fonte grise HT200 pour installation en suspension, cavité intérieure sphérique offrant une capacité d’autalignement de ±2° pour compenser le désalignement de l’arbre, finition peinte antirouille, conçu pour recevoir les roulements insérés de la série UC. Structure suspendue pour les systèmes de convoyeurs aériens et d’élévateurs.'
  },
  flangeTypes: {
    UCF: 'Bride carrée à quatre boulons, sans bossage de centrage',
    UCFC: 'Bride ronde avec bossage de centrage',
    UCFL: 'Bride ovale à deux boulons — fine et compacte',
    UCFA: 'Bride ovale à trous oblongs — position de montage réglable',
    UCFB: 'Bride ronde à deux boulons — sans bossage, légère'
  }
});
