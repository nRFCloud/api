dist: dist/schemas dist/types

dist/schemas: docs/api.json
	@mkdir -p $@
	node scripts/extract-schemas-from-api-doc.js $< $@

dist/types: dist/schemas
	@mkdir -p $@
	node node_modules/@nrfcloud/models/scripts/generate-base-models-from-schema.js dist/schemas $@
