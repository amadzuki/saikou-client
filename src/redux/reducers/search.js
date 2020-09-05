import {
  SEARCH_ITEM_START,
  SEARCH_ITEM_SUCCESS,
  SEARCH_ITEM_FAILURE,
  SEARCH_ITEM_RESET,
  SET_ITEM_TYPE,
} from '../actions/types'

const initialState = {
  isLoading: false,
  error: null,
  query: {},
  data: [],
  itemType: '',
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ITEM_START:
      return {
        ...state,
        isLoading: true,
        query: action.payload,
      }

    case SEARCH_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      }

    case SEARCH_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    case SEARCH_ITEM_RESET:
      return {
        ...initialState,
      }

    case SET_ITEM_TYPE:
      return {
        ...state,
        itemType: action.payload,
      }

    default:
      return state
  }
}

export default search
