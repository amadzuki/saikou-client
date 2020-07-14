import React from 'react'
import { useForm } from 'react-hook-form'
import styled from '@xstyled/styled-components'

const Form = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: -80px;
  z-index: 1;
`

const Container = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
`

const SearchLabel = styled.span`
  font-family: title;
  font-size: 30;
`

const SearchInput = styled.input`
  flex-basis: 1000px;
  max-height: 80;
  border: 5px solid;
  border-radius: 10;
  font-family: annotation;
  font-size: 21;
  padding-left: 20;
`
const SearchButton = styled.button`
  height: 80;
  width: 80;
  background-color: primary;
  border: 5px solid;
  border-radius: 10;
  margin-left: 20;
`
const SearchIcon = styled.img`
  max-width: 40;
`

const InputBox = styled.div`
  display: flex;
`

const SearchBar = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <SearchLabel htmlFor="search">Search anime & manga</SearchLabel>
        <InputBox>
          <SearchInput name="search" ref={register} />
          <SearchButton type="submit">
            <SearchIcon src="/misc/SearchIcon.svg" alt="Search Icon" />
          </SearchButton>
        </InputBox>
      </Container>
    </Form>
  )
}

export default SearchBar
