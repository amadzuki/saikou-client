import React from 'react'
import styled from '@xstyled/styled-components'
import { useForm } from 'react-hook-form'
import { top } from '@xstyled/system'

import HeroWithContent from '../components/HeroWithContent'
import Footer from '../components/Footer'

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450;
  border: 5px solid black;
  background-color: white;
  border-radius: 10;
  margin: 20;
  padding-bottom: 35;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30;
`

const FormTitle = styled.h1`
  font-family: title;
  font-size: 25;
  font-weight: 400;
  margin: 20 0 10 0;
`

const SeparatorLine = styled.div`
  height: 1px;
  width: 70%;
  background-color: black;
`

const Input = styled.input`
  border: 3px solid black;
  border-radius: 10;
  padding: 15;
  margin: 20;
  width: 100%;
  font-family: annotation;
  font-size: 20;
  position: relative;
`

const SubmitButton = styled.button`
  font-family: title;
  font-size: 25;
  margin-top: 30;
  padding: 0 20;
  width: 150;
  border: 3px solid black;
  border-radius: 10;
  background-color: darkRed;
  color: lightFont;
`
const ErrorPopper = styled.p`
  position: absolute;
  color: red;
  ${top}
`
const Register = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <HeroWithContent title="Register | Saikou">
        <FormBox>
          <FormTitle>Become our Nakama!</FormTitle>
          <SeparatorLine></SeparatorLine>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              ref={register({ required: true })}
              placeholder="Email"
            />
            {errors.email && (
              <ErrorPopper top="305px">
                You're supposed to fill your email here:)
              </ErrorPopper>
            )}
            <Input
              name="password"
              type="password"
              ref={register({ required: true })}
              placeholder="Password"
            />
            {errors.email && (
              <ErrorPopper top="405px">
                You're supposed to fill your password here :)
              </ErrorPopper>
            )}{' '}
            <Input
              name="passwordConfirm"
              type="password"
              ref={register({ required: true })}
              placeholder="Re-enter Password"
            />
            {errors.email && (
              <ErrorPopper top="505px">
                Come on, it's for your own good...
              </ErrorPopper>
            )}
            <SubmitButton type="submit">Log in</SubmitButton>
          </Form>
        </FormBox>
      </HeroWithContent>
      <Footer></Footer>
    </>
  )
}

export default Register
