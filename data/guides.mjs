/**
 * Guides 技术文章（英文，公开 SEO 内容）
 * 铁律：只写通用工程常识，不编造具体型号对照、价格、库存、资质数据。
 */
export const guides = [
  {
    slug: 'ucp-vs-ucf-vs-ucfl-which-housing',
    title: 'UCP vs UCF vs UCFL: Which Housing Fits Your Shaft?',
    description: 'A plain-language guide to the three most common pillow block bearing housing types, what the letters mean, and how to choose the right one for your equipment.',
    date: '2026-09-02',
    intro: 'Pillow block housings look similar, but the base shape decides how they mount — and choosing the wrong type means rework on your machine frame. This guide explains the three most common series and where each one belongs.',
    sections: [
      {
        h: 'What the letters mean',
        p: [
          'Bearing housing codes are not random. The first letters describe the housing shape and mounting style:',
        ],
        list: [
          '[UCP](/en/products/pillow-block-bearing-units/ucp/) — U-series bearing in a P (pillow / pedestal) housing: a solid base with two bolt holes, the classic "plummer block" style.',
          '[UCF](/en/products/pillow-block-bearing-units/ucf/) — U-series bearing in an F (flanged) housing: a square four-bolt flange that mounts against a vertical face.',
          '[UCFL](/en/products/pillow-block-bearing-units/ucfl/) — U-series bearing in an FL (flanged, two-bolt oval) housing: a compact two-hole flange with a rounded outline.',
        ],
      },
      {
        h: 'Where each type fits best',
        p: [
          'UCP is the workhorse for horizontal shafts supported from below — conveyors, line shafts, fans, mixers. The wide two-bolt base spreads the load and makes alignment forgiving.',
          'UCF bolts onto the end face of a machine or a bracket, which is why it appears on equipment where the bearing must hang or attach to a wall, such as the tension end of a small conveyor or an idler mount.',
          'UCFL saves space when only two bolts can be placed, or when the mounting surface is narrow. It is common on light-duty machinery where a full square flange would not fit.',
        ],
      },
      {
        h: 'How to decide',
        p: [
          'Ask three questions before ordering:',
        ],
        list: [
          'Which direction is the load? Supported from below usually means UCP; hanging or end-mounted usually means a flanged type.',
          'What surface are you mounting to? A flat horizontal rail takes UCP; a vertical plate or machine face takes UCF or UCFL.',
          'How much room is there? When the bolt pattern is tight, UCFL is often the only flange that fits.',
        ],
      },
      {
        h: 'After choosing the housing, check the shaft',
        p: [
          'The housing is only half the decision. The bearing inside must match your shaft diameter and the expected radial load, and the housing bore must be machined to a tolerance the bearing can live with — a topic covered in our guide on housing bore tolerance.',
        ],
      },
    ],
    cta: 'Not sure which series fits your machine? Send us your shaft size and mounting photos — we will tell you which housing matches.',
  },
  {
    slug: 'why-housing-bore-tolerance-matters',
    title: 'Why Housing Bore Tolerance Matters More Than You Think',
    description: 'The fit between the housing bore and the bearing outer ring decides how long the bearing lasts. Here is what to check, in plain language.',
    date: '2026-09-02',
    intro: 'A bearing rarely fails on its own. More often, the housing bore is too tight or too loose, and the bearing pays the price. This guide explains why the bore fit matters and what a good housing should offer.',
    sections: [
      {
        h: 'Too loose: the outer ring creeps',
        p: [
          'When the bore is oversized, the bearing outer ring is not held firmly. Under load the ring can slowly rotate inside the housing — called creep or fretting. The result is wear on the housing seat, heat, and a bearing that fails long before its rated life.',
        ],
      },
      {
        h: 'Too tight: the internal clearance disappears',
        p: [
          'When the bore is undersized, pressing the bearing in squeezes the outer ring. That squeeze reduces the bearing internal clearance. With too little clearance, the bearing runs hot and can seize, especially at speed.',
        ],
      },
      {
        h: 'The H7 standard',
        p: [
          'For most [pillow block](/en/products/pillow-block-bearing-units/ucp/) and [flanged](/en/products/pillow-block-bearing-units/ucf/) housings, the bearing seat is machined to an H7 tolerance. H7 defines a small, controlled clearance band so the outer ring fits firmly without being crushed. It is an ISO standard, so the same letter means the same band whether the housing was made in China, Europe or anywhere else.',
        ],
      },
      {
        h: 'What to ask your supplier',
        p: [
          'Do not settle for "good fit". Ask for the actual tolerance class of the bearing seat, and how it is measured. A supplier who states the class and shows the measurement record is one you can work with. A supplier who cannot answer either has not controlled the most important dimension in the product.',
        ],
      },
    ],
    cta: 'We machine bearing seats to a stated tolerance class and measure every part before it ships. Send us your sizes and we will show you the numbers.',
  },
  {
    slug: 'how-to-read-a-bearing-housing-model-number',
    title: 'How to Read a Bearing Housing Model Number',
    description: 'Those letters and numbers on a housing nameplate are a short technical sentence. Learn to decode them in two minutes.',
    date: '2026-09-02',
    intro: 'Names like UCP208 or F207 look cryptic until you know the pattern. Once you can read them, comparing quotes across suppliers becomes much easier.',
    sections: [
      {
        h: 'Part 1 — the housing series',
        p: [
          'The leading letters describe the housing type and shape: UCP (pillow block), UCF (square flange), UCFL (oval flange), and the P / F / FL / FC / T family for split and other housing styles. Different manufacturers share this letter system for interchangeability, which is why a UCP housing from one factory can often replace another.',
        ],
      },
      {
        h: 'Part 2 — the shaft size digits',
        p: [
          'The number group normally encodes the bore size. In the common metric system, the last two digits of a two-digit code (for example, the 08 in 208) refer to a standard shaft diameter in millimetres following the ISO size series. Larger two-digit groups follow the same logic: the digits describe a standard diameter step, not the millimetres written directly.',
        ],
      },
      {
        h: 'Part 3 — the bearing type inside',
        p: [
          'The first digit or letter block before the size digits tells you the bearing type inside the housing — for example, UC for the wide-inner-ring ball bearing used in most pillow blocks. When you ask for a matched set, the housing and bearing must share this code system, otherwise the set will not assemble correctly.',
        ],
      },
      {
        h: 'Why matched sets save time',
        p: [
          'Buying housings and bearings from different sources is where mistakes happen: a housing meant for one series assembled with a bearing from another. When the supplier ships housing and bearing as one matched set, that failure mode disappears before it starts.',
        ],
      },
    ],
    cta: 'Tell us the model number on your current housing — we will confirm the series and offer the matched set.',
  },  {
    slug: 'how-to-choose-bearing-housing-material',
    title: 'How to Choose a Bearing Housing Material',
    description: 'Cast iron, ductile iron, steel or thermoplastic — how to pick the right bearing housing material for load, temperature and corrosion.',
    date: '2026-09-10',
    intro: 'Bearing housings are usually cast, and the material decides how much load the housing takes, how it handles heat and moisture, and how long it lasts in service.',
    sections: [
      {
        h: 'Grey cast iron: the standard choice',
        p: [
          'Most pillow block and flange housings are grey cast iron. It is rigid, machines well, damps vibration and costs less than steel. Standard cast iron suits indoor machinery, conveyors and general industrial use.',
        ],
      },
      {
        h: 'Ductile (nodular) cast iron for shock loads',
        p: [
          'Where housings face impact, vibration or repeated reversing loads, ductile iron is stronger and less brittle than grey iron. It is often specified for crushers, vibrating screens and heavy conveying equipment.',
        ],
      },
      {
        h: 'Cast steel and stainless steel',
        p: [
          'Cast steel housings carry very high loads and suit welded structures. Stainless steel resists corrosion and is chosen for food, chemical and washdown environments.',
        ],
      },
      {
        h: 'Thermoplastic housings',
        p: [
          'Plastic housings are light, non-corroding and quiet. They suit light loads and clean, low-temperature applications, not heavy loads or high heat.',
        ],
      },
      {
        h: 'How to decide',
        p: [
          'Check three things before choosing:',
        ],
        list: [
          'Match the material to the maximum load and shock the housing will see.',
          'Above 100 °C, check the material and grease grade together.',
          'For washdown, outdoor or coastal duty, choose corrosion-resistant materials or protective coatings.',
        ],
      },
    ],
    cta: 'Tell us your load, temperature and environment, and we will recommend the right housing and material.',
  },
  {
    slug: 'bearing-lubrication-basics',
    title: 'Bearing Lubrication Basics',
    description: 'Grease versus oil, how much to use and how often to re-grease — lubrication basics every bearing housing user should know.',
    date: '2026-09-10',
    intro: 'Most mounted bearing housings are grease lubricated. The right grease, the right amount and a regular re-greasing habit are what keep a bearing running quietly for years.',
    sections: [
      {
        h: 'Grease is the default',
        p: [
          'Grease stays in place, keeps dirt out and suits most speeds. Housings are usually delivered pre-filled with grease and fitted with a grease nipple.',
        ],
      },
      {
        h: 'Use the right amount',
        p: [
          'Over-greasing is as damaging as under-greasing: it heats the bearing and pushes out the seals. A common guide is to fill 30–50% of the free space inside the housing.',
        ],
      },
      {
        h: 'Re-grease on a schedule',
        p: [
          'Re-greasing intervals depend on speed, temperature and contamination. Clean, slow machines can run thousands of hours; dirty, hot or fast machines need greasing much more often.',
        ],
        list: [
          'Wipe the grease nipple before pumping.',
          'Pump slowly and stop when fresh grease appears at the seals.',
          'Keep the grease grade consistent and never mix incompatible greases.',
        ],
      },
      {
        h: 'When oil is the better choice',
        p: [
          'Oil lubrication suits very high speeds or high temperatures, because oil carries heat away better than grease and can be circulated and filtered.',
        ],
      },
    ],
    cta: 'Send us your speed and operating temperature, and we will suggest a suitable grease grade and re-greasing interval.',
  },
  {
    slug: 'bearing-housing-mounting-types',
    title: 'Bearing Housing Mounting Types Explained',
    description: 'Pillow block, flange and take-up housings compared — how each mounting style suits shafts, frames and belt tensioning.',
    date: '2026-09-10',
    intro: 'The housing shape decides how a bearing is fixed to the machine. The three main families are pillow block, flange and take-up units.',
    sections: [
      {
        h: 'Pillow block housings (P)',
        p: [
          'Pillow blocks sit on a flat surface parallel to the shaft. They are the workhorse of conveyors, fans and processing machinery, and the easiest to mount.',
        ],
      },
      {
        h: 'Flange housings (F)',
        p: [
          'Flange housings bolt to a vertical wall or plate, in square or round form. They suit machines where the shaft passes through a panel, or where the bearing must mount at 90 degrees to the base.',
        ],
      },
      {
        h: 'Take-up housings (T)',
        p: [
          'Take-up units slide inside a frame so the shaft centre distance can be adjusted. They keep conveyor belts and chain drives tensioned.',
        ],
      },
      {
        h: 'Choosing between them',
        p: [
          'Use the mounting surface to decide:',
        ],
        list: [
          'Mount the bearing on a flat base: choose a pillow block.',
          'Mount against a wall or plate: choose a flange unit.',
          'Need adjustable shaft distance for belts or chains: choose a take-up unit.',
        ],
      },
    ],
    cta: 'Describe your mounting surface and shaft layout, and we will recommend the matching series.',
  },
  {
    slug: 'ucp-vs-ucpa-vs-ucph-pillow-block-heights',
    title: 'UCP vs UCPA vs UCPH: Choosing the Right Pillow Block Height',
    description: 'The three standard pillow block base heights compared — what the letters mean, how base height changes the shaft centre line, and how to measure what your machine needs.',
    date: '2026-10-19',
    intro: 'UCP, UCPA and UCPH all take the same UC insert bearing, but their cast bases sit at different heights. Picking the wrong one moves the shaft centre line and forces you to shim the frame or re-machine it.',
    sections: [
      {
        h: 'The three base heights',
        p: ['The letters after UC describe the housing shape, and the third letter is the height variant:'],
        list: [
          'UCP — the standard pillow block. The base is a solid two-bolt foot at the normal shaft centre height.',
          'UCPA — the low-base variant. The foot is shallower, so the shaft sits closer to the mounting surface.',
          'UCPH — the high-base variant. The foot is taller, lifting the shaft centre further above the surface.',
        ],
      },
      {
        h: 'When the height actually matters',
        p: [
          'Base height only matters where the shaft position is already fixed by something else — a coupling to an existing motor, a gearbox output, or a second bearing on the same shaft. When two bearings support one shaft, both must share the same centre height, so the two units have to be the same height variant even if one sits on a raised pad.',
          'Where the shaft is free to sit anywhere, the standard UCP is almost always the right answer. Designers reach for UCPA when headroom is tight, and for UCPH when the shaft has to clear a rail, a belt or a low obstacle.',
        ],
      },
      {
        h: 'What stays the same across the three',
        p: [
          'The bore range, the insert bearing, the housing material and the sealing arrangement do not change with base height. A UC205 insert fits a UCP205, a UCPA205 and a UCPH205 alike. The load rating is set by the insert, not by the foot.',
          'That means a height change is a mounting decision, not a capacity decision. If you need more radial capacity you move to a larger bore or a heavier insert series, not to a taller base.',
        ],
      },
      {
        h: 'How to specify the right one',
        p: ['Three measurements settle it:'],
        list: [
          'Measure the height from the mounting surface to the shaft centre line on the machine being repaired or copied.',
          'Check the bolt-hole spacing and thread size on the frame — a taller base usually moves the bolts further apart.',
          'Confirm the bore you need. Base height does not change the shaft diameter the unit accepts.',
        ],
      },
    ],
    cta: 'Send us the shaft centre height and bolt spacing from your frame, and we will confirm which height variant matches.',
  },
  {
    slug: 'ucf-vs-ucfc-vs-ucfl-vs-ucfa-flange-types',
    title: 'UCF vs UCFC vs UCFL vs UCFA: The Four Flange Types Compared',
    description: 'Square, round with a locating spigot, two-bolt oval and slotted-hole flanges explained — how bolt pattern and spigot decide which unit fits your machine.',
    date: '2026-10-19',
    intro: 'Flange units all bolt to a vertical face, but the flange outline decides the bolt pattern, the space needed, and whether the unit can locate itself. Choosing between UCF, UCFC, UCFL and UCFA comes down to the plate you are mounting to.',
    sections: [
      {
        h: 'The four flange shapes',
        p: ['Each code describes a different flange outline:'],
        list: [
          'UCF — square four-bolt flange. The most rigid of the four, with bolts at the corners of a square.',
          'UCFC — round four-bolt flange with a locating spigot on the back face, so the unit centres itself in a bored hole.',
          'UCFL — two-bolt oval flange. Compact, with two bolts on the long axis and a rounded outline.',
          'UCFA — two-bolt flange with slotted holes, letting the unit slide for position adjustment before the bolts are tightened.',
        ],
      },
      {
        h: 'The bolt pattern decides first',
        p: [
          'Count the holes on the plate you are mounting to. Four holes at the corners of a square take UCF; four holes on a bolt circle take UCFC; two holes take UCFL or UCFA.',
          'Drilling a new pattern is possible but rarely worth it on a repair. Matching the existing holes is faster and keeps the original load path.',
        ],
      },
      {
        h: 'What the spigot does',
        p: [
          'Only UCFC carries a spigot — a raised ring on the back of the flange that fits a matching bore in the plate. The spigot takes the radial load in shear instead of relying on bolt friction, and it centres the shaft automatically.',
          'That makes UCFC the choice where the shaft must be accurately positioned, such as the end of a conveyor roller or a machine where two flanges share one shaft. The plate needs a bored recess, so UCFC is a design decision rather than a field swap.',
        ],
      },
      {
        h: 'When slots earn their place',
        p: [
          'UCFA slots let the unit move a few millimetres before the bolts are tightened. That helps where belt tension or shaft alignment has to be set on site, and where the frame was not drilled to a precise pattern.',
          'Slots are not a substitute for a take-up unit: they allow a one-time adjustment during assembly, not continuous travel under load.',
        ],
      },
      {
        h: 'How to choose',
        p: ['Work in this order:'],
        list: [
          'Match the bolt pattern on the existing plate.',
          'If the shaft must be precisely centred and the plate can be bored, prefer UCFC.',
          'If space is tight and only two bolts fit, choose UCFL.',
          'If you need adjustment during assembly, choose UCFA.',
          'Otherwise the square UCF is the most rigid and the easiest to source.',
        ],
      },
    ],
    cta: 'Send a photo of the mounting plate with the bolt spacing, and we will tell you which flange type it accepts.',
  },
  {
    slug: 'uct-vs-ucp-take-up-vs-pillow-block',
    title: 'UCT vs UCP: Take-Up Units vs Pillow Blocks',
    description: 'The two most common mounted unit families compared — how a take-up unit slides in its frame, when belt or chain tension needs one, and when a fixed pillow block is the better choice.',
    date: '2026-10-20',
    intro: 'UCP and UCT both take a UC insert bearing, but only one of them can move. That single difference decides which one goes on a conveyor tail shaft and which one goes on a drive shaft.',
    sections: [
      {
        h: 'The mechanical difference',
        p: [
          'A UCP pillow block is bolted to the frame in one place. Its base is a solid foot with two bolt holes, and once tightened the shaft centre cannot move.',
          'A UCT take-up unit sits inside a guide frame — usually a cast or fabricated slot — and is pulled along it by a threaded rod. The housing slides, so the shaft centre distance can be adjusted after installation. That is the whole reason the series exists.',
        ],
      },
      {
        h: 'Where each one belongs',
        p: [
          'Take-up units appear where something has to stay tight: the tail pulley of a belt conveyor, the driven end of a chain drive, a screen or a feeder where the belt stretches with use. The take-up frame lets an operator restore tension without moving the whole machine.',
          'Pillow blocks appear everywhere the shaft centre is fixed: fan shafts, line shafts, mixer shafts, drive ends. There is nothing to adjust, so the simpler and stiffer fixed mount wins.',
        ],
      },
      {
        h: 'A take-up unit is not a slide bearing',
        p: [
          'The slot allows adjustment during setup and occasional re-tensioning — not continuous motion under load. Running a UCT unit permanently at the end of its travel, or letting the threaded rod carry the belt load, wears the frame and misaligns the shaft.',
          'Set the unit so that roughly a third of the travel remains in each direction. That leaves room for later re-tensioning and keeps the housing supported on both sides of the slot.',
        ],
      },
      {
        h: 'What you need to order one',
        p: ['A take-up unit is ordered as a pair of parts, and they have different sizes:'],
        list: [
          'The unit itself: bore size and series code, such as UCT205.',
          'The frame: its model number, which sets the slot width and the mounting hole pattern.',
          'The thread direction of the adjusting rod, since left- and right-hand versions exist for opposite sides of a conveyor.',
        ],
      },
    ],
    cta: 'Send the frame model and the shaft diameter, and we will confirm the matching take-up unit and rod hand.',
  },
  {
    slug: 'uc-vs-uel-vs-uk-insert-bearing-locking',
    title: 'UC vs UEL vs UK: Insert Bearing Locking Types Compared',
    description: 'Set screws, eccentric locking collar and tapered adapter sleeve explained — how each locks an insert bearing to the shaft, and which suits reversing, high-speed or heavily loaded shafts.',
    date: '2026-10-20',
    intro: 'The three insert series fit the same housings and the same shaft diameters, but they grip the shaft in three different ways. The locking method decides whether the bearing stays put under vibration, reversing load or repeated removal.',
    sections: [
      {
        h: 'The three locking methods',
        p: ['Each series is named for how it fixes the inner ring to the shaft:'],
        list: [
          'UC — two set screws in the inner ring, tightened onto the shaft. The simplest and the cheapest.',
          'UEL — an eccentric locking collar that rotates a few degrees and wedges against the shaft, then is held by a single set screw.',
          'UK — a tapered bore that is pulled onto a tapered adapter sleeve by a lock nut, so the grip comes from an interference fit rather than a screw point.',
        ],
      },
      {
        h: 'What set screws do well — and what they do not',
        p: [
          'UC set screws are fast to fit and need no special tools, which is why they are the default on light and medium duty machinery. They grip by point contact, so on a hardened shaft, or under vibration, they can loosen and let the inner ring creep.',
          'They also mar the shaft. Where a bearing will be replaced on the same shaft repeatedly, the burr raised by a set screw makes the next fit worse.',
        ],
      },
      {
        h: 'Where the collar and the sleeve win',
        p: [
          'The UEL collar spreads its grip around a larger arc than a set screw, so it holds better on reversing shafts and on equipment that vibrates — conveyors, screens, crushers. It still marks the shaft, but less severely.',
          'The UK adapter sleeve is the choice for heavy radial load, high speed, or where the shaft must stay unmarked. The interference fit carries load around the full circumference and there is no screw point to loosen. The cost is more parts and a torque setting that has to be respected.',
        ],
      },
      {
        h: 'How to choose',
        p: ['Match the locking method to the duty, not to the price:'],
        list: [
          'Light duty, occasional use, easy access: UC with set screws is adequate.',
          'Vibration, reversing load, or a shaft that has already been marked: move to UEL.',
          'Heavy load, high speed, or a shaft that must not be damaged: UK with an adapter sleeve.',
          'Where the same unit must be removed and refitted often, the sleeve type is the only one that leaves the shaft reusable.',
        ],
      },
    ],
    cta: 'Tell us the shaft hardness, the duty and how often the unit is removed, and we will suggest the locking type.',
  },
  {
    slug: 'mounted-bearing-unit-installation-mistakes',
    title: 'Mounted Bearing Installation: Five Common Mistakes',
    description: 'The five installation errors behind most premature mounted bearing failures — over-tightening, misalignment, dirty seating, wrong grease, and forcing a unit onto a damaged shaft.',
    date: '2026-10-20',
    intro: 'Most mounted bearing units that fail early were installed correctly enough to run, and wrongly enough to fail months later. These five mistakes account for the majority of premature failures.',
    sections: [
      {
        h: '1. Over-tightening the housing bolts',
        p: [
          'The housing bolts hold the unit down; they do not align it. Pulling a distorted frame flat with the bolts bows the housing and pinches the bearing, which shows up as heat and noise within days.',
          'If the frame is not flat, shim it. The bolts should be snug, not used as a clamp.',
        ],
      },
      {
        h: '2. Ignoring shaft alignment between two bearings',
        p: [
          'Two bearings on one shaft share the load only if their centre lines agree. A shaft that is out of line by more than the self-aligning range loads one bearing edge-on and doubles its stress.',
          'The spherical seat absorbs about ±2° — enough for casting tolerance and slight frame deflection, not enough to correct a badly placed second unit.',
        ],
      },
      {
        h: '3. Fitting onto a damaged or undersized shaft',
        p: [
          'A shaft with a burr, a worn band or a score line will not give the inner ring a true seat. The ring rocks, the seal lip wears a groove, and grease escapes.',
          'Clean the shaft, check the diameter at the bearing position, and if it is worn, either repair it or fit a sleeve-type unit rather than forcing a set-screw unit over the damage.',
        ],
      },
      {
        h: '4. Over-greasing, or never greasing',
        p: [
          'Too much grease in a sealed unit pushes the seals outward and can blow them. Too little lets the rolling elements run dry. Neither failure is visible until the bearing is noisy.',
          'Follow the housing or catalogue recommendation for the initial fill, and re-grease on a schedule based on running hours and temperature rather than on guesswork.',
        ],
      },
      {
        h: '5. Hammering the unit into place',
        p: [
          'Striking a mounted unit to seat it transfers impact through the rolling elements to the raceways, leaving brinelling marks that become spalling later. The damage is done before the machine ever runs.',
          'Press on the ring being fitted — never on the housing or the seal — and use a soft drift if a press is not available.',
        ],
      },
      {
        h: 'What good installation looks like',
        p: ['In order:'],
        list: [
          'Check the frame is flat and the bolt holes line up before the unit goes on.',
          'Clean and measure the shaft at the bearing seat.',
          'Slide the unit on by hand; if it needs force, stop and find out why.',
          'Tighten the locking method to its stated torque, not by feel.',
          'Align both bearings on the shaft before final tightening.',
          'Grease to the recommended quantity, then run and listen.',
        ],
      },
    ],
    cta: 'If a unit has already failed early, send us photos of the shaft seat and the housing bore — the wear pattern usually shows which of these five happened.',
  }]
