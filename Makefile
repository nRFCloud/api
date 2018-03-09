schemas: docs/api.yaml
	@mkdir -p $@
	node scripts/extract-schemas-from-api-doc.js $< $@

dist/api.json: docs/api.yaml
	@mkdir -p $(dir $@)
	npx js-yaml $< > $@
