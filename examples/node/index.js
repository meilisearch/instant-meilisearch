const UMDinstantMeiliSearch = require('../../dist/instant-meilisearch.umd')
const CJSinstantMeiliSearch = require('../../dist/instant-meilisearch.cjs')

const UMDtest = UMDinstantMeiliSearch('http://localhost:7700', 'masterKey')
const CJStest = CJSinstantMeiliSearch('http://localhost:7700', 'masterKey')
console.log({ UMDtest, CJStest })
