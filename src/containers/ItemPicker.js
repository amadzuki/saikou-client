import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

const ItemPicker = ({ children, mangaArray, animeArray, type, id }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    const pickItem = (animeArray, mangaArray) => {
      if (type === 'manga') {
        return mangaArray.find((item) => +item.id === +id)
      } else {
        return animeArray.find((item) => +item.id === +id)
      }
    }
    const item = pickItem(animeArray, mangaArray)
    const props = { item: item, type: type }
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props)
    }
    return child
  })
  return <>{childrenWithProps}</>
}

const mapStateToProps = (state) => {
  return {
    animeArray: state.allAnime.data,
    mangaArray: state.allManga.data,
  }
}

ItemPicker.propTypes = {
  animeArray: PropTypes.array.isRequired,
  mangaArray: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, null)(ItemPicker)
