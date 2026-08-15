# Bearing Product Catalogue

This context defines the terms used by the V3.5 static product catalogue. It prevents source-series records from being presented as model-level technical data.

## Catalogue Language

**Product Category**:
The top-level product grouping: Bearings, Bearing Units, Bearing Housing, or Custom Products.
_Avoid_: Product type, product group

**Product Series**:
A named family within one Product Category, such as UCP, UCFL or UELP. A Series is not a purchasable or technical Model.
_Avoid_: Model, part number

**Product Model**:
An exact alphanumeric designation, such as UCP205, with its own source-backed technical values, images and SEO record.
_Avoid_: Series, family

**Technical Source Data**:
The immutable material, dimensions, weight and technical parameter values supplied by an approved original catalogue or drawing.
_Avoid_: Image-derived parameter, estimated value

**Source Reference**:
The document and locator that prove a Series or Product Model fact. A reference image alone cannot prove technical values.
_Avoid_: Assumption, inferred source

**Mounted Bearing Unit Assembly**:
A complete set composed of a bearing family and a P housing family. UCP is UC + P, UELP is UEL + P, and UKP is UK + P. These three series share the P housing interchange group.
_Avoid_: Image-derived compatibility, inferred interchangeability

**Unmapped Source Series**:
A genuine Excel series record retained in the data layer but not published under the locked V3.5 hierarchy until its canonical category or series mapping is confirmed.
_Avoid_: Published model, inferred series mapping
