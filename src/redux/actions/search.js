import {
  SEARCH_ITEM_RESET,
  SEARCH_ITEM_START,
  SEARCH_ITEM_SUCCESS,
  SEARCH_ITEM_FAILURE,
  SET_ITEM_TYPE,
} from './types'

import requests from '../../utils/requests'

const resetSearch = (itemType) => (dispatch) => {
  dispatch({ type: SEARCH_ITEM_RESET })
  dispatch({ type: SET_ITEM_TYPE, payload: itemType })
}

const searchItems = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_ITEM_START })

  try {
    const searchResults = await requests.searchItems(query)
    dispatch({ type: SEARCH_ITEM_SUCCESS, payload: searchResults })
  } catch (error) {
    dispatch({ type: SEARCH_ITEM_FAILURE, payload: error })
  }
}

export { resetSearch, searchItems }
