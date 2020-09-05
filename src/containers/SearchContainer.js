import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useLocation, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import queryString from 'query-string'

import { SearchBar } from '../components'

const SearchContainer = ({}) => {
  const location = useLocation()
  const history = useHistory()

  const parsedQuery = queryString.parse(location.search)
  const { register, handleSubmit } = useForm({
    defaultValues: { keyword: parsedQuery.keyword || '' },
  })

  const onSubmit = (data) => {
    history.push({
      pathname: '/search',
      search: `?keyword=${data.keyword}`,
    })
  }
  return (
    <SearchBar
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  )
}

SearchContainer.propTypes = {}

export default connect((state) => {
  return {}
}, {})(SearchContainer)
