import React from 'react'

import { Layout, TitleText, CenterContent, Chibi404 } from '../components'

const PageNotFound = () => {
  return (
    <Layout title='Not Found'>
      <CenterContent>
        <TitleText>Error 404</TitleText>
        <TitleText>Page Not Found!</TitleText>
      </CenterContent>
      <Chibi404></Chibi404>
    </Layout>
  )
}

export default PageNotFound
