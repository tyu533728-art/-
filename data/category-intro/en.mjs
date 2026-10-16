// Category page introductions (source language).
//
// The two product category pages carried only a heading and a card grid, which left them thinner
// than every series page they link to. These introductions add the category-level explanation that
// a buyer looks for before choosing a series, and the series-comparison block that follows them is
// generated from the confirmed catalogue data.
//
// This module is the translation contract: every other locale in this directory has the same shape.

export default Object.freeze({
  locale: 'en',
  categories: {
    'pillow-block-bearing-units': {
      heading: 'Mounted bearing units',
      paragraphs: [
        'A mounted bearing unit combines a UC insert bearing with a cast housing that bolts straight onto the machine frame. The spherical seat between housing and bearing lets the shaft self-align by about ±2°, so small mounting errors do not shorten bearing life.',
        'The range covers pillow block units (UCP, UCPA with a tapped base, UCPH with a raised shaft centre), flanged units (UCF four-bolt square, UCFC round with a locating spigot, UCFL two-bolt oval, UCFA with slotted holes, UCFB round two-bolt), take-up units (UCT) that slide in a frame to keep belts and chains tensioned, and hanger units (UCHA) for overhead conveyors. Housings are HT200 grey cast iron and inserts are GCr15 chrome steel with double rubber seals.',
        'Bores run from 12 mm to 100 mm depending on the series, and imperial bore variants cover export markets. Send us the model, the quantity and the destination and we will quote.'
      ],
      tableHeading: 'Series at a glance',
      columns: { series: 'Series', type: 'Type', bore: 'Bore range', bearing: 'Matching bearing' }
    },
    'bearing-housing-series': {
      heading: 'Bearing housings',
      paragraphs: [
        'These pages cover housing bodies: each one takes a UC series insert bearing, which we can supply separately or already fitted. Every housing has a spherical inner cavity that gives the bearing about ±2° of self-alignment, so the shaft can tilt slightly without loading the bearing edges.',
        'The range covers pillow block housings (P, the short PA, the high-base PH and the tapped-base FB), flanged housings (F four-bolt square, FC round with a locating spigot, FL two-bolt oval, FU with a reinforced extended base), take-up housings (T) with slide grooves for belt and chain tensioning, and hanger housings (HA) for suspended installation.',
        'All castings are HT200 grey cast iron with an anti-rust painted finish, and every series is available for bore diameters from 12 mm to 100 mm. Send us the housing model, the bore size and the quantity and we will quote.'
      ],
      tableHeading: 'Housings at a glance',
      columns: { series: 'Housing', type: 'Type', bore: 'Bore range', bearing: 'Matching bearing' }
    },
    custom: {
      heading: 'Made-to-order parts',
      paragraphs: [
        'Not every machine can be put back into service with a catalogue part. When a housing, a shaft sleeve, a bearing seat or a mounting bracket has to fit a frame that already exists, we produce it to your drawing or from a sample you send, in the same HT200 grey cast iron, ductile iron, steel or stainless steel as the standard range.',
        'Work starts from a 2D drawing or a 3D model and we quote the pattern or tooling separately from the parts, so a repeat order never pays for it twice. Typical jobs run from one replacement casting to a few thousand pieces a year, in batches that suit your assembly schedule rather than ours. Tolerances follow the drawing, and surfaces are painted, zinc plated, blackened or left bare as you specify.',
        'To quote accurately we need three things: a drawing or a sample showing the critical dimensions, the material with any surface treatment, and the annual quantity with the first delivery date. If all you have is a broken part, send photographs next to a ruler and we will confirm which dimensions can be worked from it before you commit to a drawing.'
      ],
      tableHeading: 'What we need to quote',
      columns: { series: 'Item', type: 'Detail', bore: 'Value', bearing: 'Note' }
    },
    'fasteners-hardware': {
      heading: 'Fasteners and hardware',
      paragraphs: [
        'Alongside the bearing range we supply the fasteners that hold a machine together: hex bolts, nuts, washers, threaded rods, anchors, high-tensile sets, pins, rivets and retaining rings. Stock covers the common metric sizes in property class 4.8, 8.8 and 10.9, in zinc-plated, hot-dip galvanised and stainless steel.',
        'Six series cover the range. Bolts, nuts, screws and washers handle general assembly work; threaded rods and studs are cut to length for clamping, anchoring and formwork; construction fixings cover anchors, formwork ties and scaffold clamps; high-tensile fasteners serve structural and heavy machinery joints; pins, rivets and retaining rings close the small-parts gap; and the special series covers the non-standard item that only a drawing describes.',
        'Every item is published with its specification range, material, property class, surface treatment and the standard it follows, so a substitute can be checked against the original before it is fitted. Send the item, the size, the grade and the quantity and we will quote; mixed containers are normal for us rather than an exception.'
      ],
      tableHeading: 'Fastener series at a glance',
      columns: { series: 'Series', type: 'Type', bore: 'Range', bearing: 'Standard' }
    }
  }
});
