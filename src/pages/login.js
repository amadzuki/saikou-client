import React from 'react'
import { PropTypes } from 'prop-types'
import styled from '@xstyled/styled-components'
import { useForm } from 'react-hook-form'
import { top } from '@xstyled/system'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

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
  margin-top: 35;
  padding-bottom: 20;
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
  cursor: pointer;
`
const RegisterLink = styled(Link)`
  font-family: title;
  font-size: 20;
  border: 3px solid black;
  border-radius: 10;
  padding: 0 20;
  text-decoration: none;
  color: primary;
`

const TextBox = styled.p`
  font-family: annotation;
  font-size: 20;
  margin: 20 0 10 0;
`

const ErrorPopper = styled.p`
  position: absolute;
  color: red;
  ${top}
`
const Login = ({ authenticate }) => {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()
  const onSubmit = async (data) => {
    try {
      const response = await requests.getToken(data.email, data.password)
      authenticate(response.accessToken)
      localStorage.setItem('accessToken', response.accessToken)
      history.push('/')
    } catch (error) {
      console.error('Error requesting token to server')
    }

    console.log(data)
  }
  return (
    <>
      <HeroWithContent title='Login | Saikou'>
        <FormBox>
          <FormTitle>Nakama Login</FormTitle>
          <SeparatorLine></SeparatorLine>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name='email'
              ref={register({
                required: 'You are supposed to fill your email nakama :)',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder='Email'
            />
            {errors.email && (
              <ErrorPopper top='320px'>{errors.email.message}</ErrorPopper>
            )}
            <Input
              name='password'
              type='password'
              ref={register({
                required: 'You are supposed to fill your password nakama :)',
              })}
              placeholder='Password'
            />
            {errors.password && (
              <ErrorPopper top='420px'>{errors.password.message}</ErrorPopper>
            )}
            <SubmitButton type='submit'>Log in</SubmitButton>
          </Form>
          <TextBox>Not a Nakama yet?</TextBox>
          <RegisterLink to='/register'>Register</RegisterLink>
        </FormBox>
      </HeroWithContent>
      <Footer></Footer>
    </>
  )
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (accessToken) =>
      dispatch({ type: 'AUTHENTICATE', accessToken: accessToken }),
  }
}

Login.propTypes = {
  authenticate: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
