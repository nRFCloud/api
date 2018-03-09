# nRF Cloud API [![API v1.0.0-preview.1](https://img.shields.io/badge/API-v1.0.0--preview.1-blue.svg)](https://raw.githubusercontent.com/nRFCloud/api/master/docs/api.yaml) [![Swagger UI](https://img.shields.io/badge/Swagger-UI-orange.svg)](http://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2FnRFCloud%2Fapi%2Fmaster%2Fdocs%2Fapi.yaml%3Fv1.0.0-preview.1)

[![Build Status](https://travis-ci.org/nRFCloud/api.svg?branch=master)](https://travis-ci.org/nRFCloud/api)
[![npm preview version](https://img.shields.io/npm/v/@nrfcloud/api/preview.svg)](https://www.npmjs.com/package/@nrfcloud/api)  
[![Greenkeeper badge](https://badges.greenkeeper.io/nrfcloud/api.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Provides the API documentation for the [nRFCloud.com](https://nrfcloud.com/) REST API.

> :warning: **This is a preview release and might be changed without notice.**

## API Documentation

The documentation in OpenAPI 3.0.0 format can be found [here](https://raw.githubusercontent.com/nRFCloud/api/master/docs/api.yaml). You can open it in the [Swagger API viewer](http://petstore.swagger.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2FnRFCloud%2Fapi%2Fmaster%2Fdocs%2Fapi.yaml%3Fv1.0.0-preview.1) to execute requests agains the API right in your browser.

## JSON schema files

The response and request schemas from the API documentation are exported as JSON schema files in [`./schemas`](./schemas) can be included in JavaScript like this:

    npm i @nrfcloud/api@preview
   
```javascript
const {schemas} = require('@nrfcloud/api')
```
