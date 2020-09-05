import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useLocation, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import queryString from 'query-string'

import {
  SearchBar,
  Cards,
  StylishLoader,
  TitleText,
  CenterContent,
} from '../components'

import { CardContainer } from './'

import { resetSearch, searchItems } from '../redux/actions'

const SearchContainer = ({
  resetSearch,
  searchItems,
  items,
  isLoading,
  itemType,
}) => {
  const location = useLocation()
  const history = useHistory()

  const parsedQuery = queryString.parse(location.search)
  const { register, handleSubmit } = useForm({
    defaultValues: { keyword: parsedQuery.keyword || '' },
  })

  const isSearchPage = Boolean(
    location.pathname !== '/anime' && location.pathname !== '/manga'
  )

  useEffect(() => {
    const parsedQuery = queryString.parse(location.search)
    resetSearch(parsedQuery.itemType)
    if (isSearchPage) {
      parsedQuery.keyword && searchItems(location.search)
    } else if (location.pathname === '/anime') {
      resetSearch('anime')
    } else {
      resetSearch('manga')
    }
  }, [resetSearch, searchItems, location, isSearchPage])

  const onSubmit = (data) => {
    history.push({
      pathname: '/search',
      search: `?itemType=${itemType}&keyword=${data.keyword}`,
    })
  }

  return (
    <>
      <SearchBar
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        itemType={itemType}
      />
      {isLoading && <StylishLoader></StylishLoader>}
      {!isLoading && items && items.length > 0 && (
        <>
          <CenterContent>
            <TitleText>Found {`${items.length} ${itemType}`} </TitleText>
          </CenterContent>
          <Cards>
            {items.map((item, index) => (
              <CardContainer key={index} id={item.id} type={itemType} />
            ))}
          </Cards>
        </>
      )}
      {isSearchPage && !isLoading && items && items.length === 0 && (
        <CenterContent>
          <TitleText>Found {`${items.length} ${itemType}`} </TitleText>
        </CenterContent>
      )}
    </>
  )
}

SearchContainer.propTypes = {
  resetSearch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  itemType: PropTypes.string.isRequired,
}

export default connect(
  (state) => {
    return {
      items: state.search.data,
      isLoading: state.search.isLoading,
      itemType: state.search.itemType,
    }
  },
  { resetSearch, searchItems }
)(SearchContainer)
