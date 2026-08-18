# Project Context

## Goal

Publish a fast, pure-display, multilingual catalogue for Pillow Block Bearing Units, Bearing Housing Series and Custom products.

## Architecture

`scripts/build-pages.mjs` generates static pages under the 13 locale directories. `server.mjs` is a read-only local preview server. There is no backend, form handler, database or customer-data collection.

## Content Status

- The public navigation is Home, Products and Contact Us.
- Product categories are `pillow-block-bearing-units`, `bearing-housing-series` and `custom`.
- UC, P, PA, F, FL, FC, FS and T are active Series pages; UEL and UK remain pending without routes or images.
- Series pages contain only a Series name and confirmed reference image. Product model detail pages are prohibited.
