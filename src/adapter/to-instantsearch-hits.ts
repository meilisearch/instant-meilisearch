import { AdaptToISHitsm } from '../types'
import { paginateHits } from './pagination'
import {
  createHighlighResult,
  createSnippetResult,
} from './to-instantsearch-highlight'

export const adaptToISHits: AdaptToISHitsm = function (
  meiliSearchHits,
  instantSearchParams,
  instantMeiliSearchContext
) {
  const { primaryKey } = instantMeiliSearchContext
  const paginatedHits = paginateHits(meiliSearchHits, instantMeiliSearchContext)

  return paginatedHits.map((hit: any) => {
    // Creates Hit object compliant with InstantSearch
    if (Object.keys(hit).length > 0) {
      const { _formatted: formattedHit, _matchesInfo, ...restOfHit } = hit
      return {
        ...restOfHit,
        _highlightResult: createHighlighResult({
          formattedHit,
          ...instantSearchParams,
        }),
        _snippetResult: createSnippetResult({
          formattedHit,
          ...instantSearchParams,
        }),
        ...(primaryKey && { objectID: hit[primaryKey] }),
      }
    }
    return hit
  })
}
