dist: dist/schemas dist/types

dist/schemas: docs/api.json
	@mkdir -p $@
	node scripts/extract-schemas-from-api-doc.js $< $@
