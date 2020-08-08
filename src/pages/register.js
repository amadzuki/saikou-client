import React, { useRef } from 'react'
import styled from '@xstyled/styled-components'
import { useForm } from 'react-hook-form'
import { top } from '@xstyled/system'
import { Link, useHistory } from 'react-router-dom'

import HeroWithContent from '../components/HeroWithContent'
import Footer from '../components/Footer'

import requests from '../utils/requests'

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450;
  border: 5px solid black;
  background-color: white;
  border-radius: 10;
  margin: 20;
  padding-bottom: 10;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15;
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
  margin: 15;
  width: 100%;
  font-family: annotation;
  font-size: 20;
  position: relative;
`

const SubmitButton = styled.button`
  font-family: title;
  font-size: 25;
  margin-top: 20;
  padding: 0 30;
  border: 3px solid black;
  border-radius: 10;
  background-color: darkRed;
  color: lightFont;
  cursor: pointer;
`
const TextBox = styled.p`
  font-family: annotation;
  font-size: 20;
  margin: 10 0;
`

const LoginLink = styled(Link)`
  font-family: title;
  font-size: 20;
  border: 3px solid black;
  border-radius: 10;
  padding: 0 20;
  text-decoration: none;
  color: primary;
`

const ErrorPopper = styled.p`
  position: absolute;
  color: red;
  ${top}
`
const Register = () => {
  const history = useHistory()
  const { register, handleSubmit, errors, watch } = useForm()
  const password = useRef({})
  password.current = watch('password', '')
  const onSubmit = async (data) => {
    const response = await requests.register(data.email, data.password)
    console.log(data)
    console.log(response)
    history.push('/')
  }
  return (
    <>
      <HeroWithContent title='Register | Saikou'>
        <FormBox>
          <FormTitle>Become our Nakama!</FormTitle>
          <SeparatorLine></SeparatorLine>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name='email'
              ref={register({
                required: 'You are supposed to fill your email here:)',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder='Email'
            />
            {errors.email && (
              <ErrorPopper top='283px'>{errors.email.message}</ErrorPopper>
            )}
            <Input
              name='password'
              type='password'
              ref={register({
                required: 'You are supposed to fill your password here :)',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              })}
              placeholder='Password'
            />
            {errors.password && (
              <ErrorPopper top='375px'>{errors.password.message}</ErrorPopper>
            )}
            <Input
              name='passwordConfirm'
              type='password'
              ref={register({
                required: 'Come on, it is for your own good...',
                validate: (value) =>
                  value === password.current || 'The passwords do not match',
              })}
              placeholder='Re-enter Password'
            />
            {errors.passwordConfirm && (
              <ErrorPopper top='465px'>
                {errors.passwordConfirm.message}
              </ErrorPopper>
            )}
            <SubmitButton type='submit'>Count me in!</SubmitButton>
          </Form>
          <TextBox>Already a Nakama?</TextBox>
          <LoginLink to='/login'>Log in</LoginLink>
        </FormBox>
      </HeroWithContent>
      <Footer></Footer>
    </>
  )
}

export default Register
