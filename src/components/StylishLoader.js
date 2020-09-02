import React from 'react'
import styled, { keyframes } from '@xstyled/styled-components'

const Wrapper = styled.div`
  width: 650px;
  padding-top: 70px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -30%);
`

const Eye = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 25% 85% 15% 85%;
  float: left;
  background-color: #cecece;
  overflow: hidden;

  &.left {
    transform: rotate(45deg) rotate(-75deg);
    margin-right: 145px;
  }

  &.right {
    transform: rotate(45deg) rotate(75deg);
  }
`

const Rinnegan = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  background: linear-gradient(to bottom, #98a1a8, #8c7496);
  transform: rotate(50deg) scale(1.4);

  &:after {
    content: '';
    position: absolute;
    left: 115px;
    top: 120px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: black;
  }
`

const Lines = styled.div`
  position: absolute;
  width: 55%;
  left: 50px;
  top: 55px;
  height: 55%;
  border-radius: 50%;
  border: 3px solid black;

  &:nth-of-type(1) {
    transform: scale(1.5);
  }

  &:nth-of-type(2) {
    transform: scale(1.2);
  }

  &:nth-of-type(3) {
    transform: scale(0.9);
  }

  &:nth-of-type(4) {
    transform: scale(0.7);
  }

  &:nth-of-type(5) {
    transform: scale(0.4);
    border: 4px solid black;
  }
`

/* SHARINGAN */
const sharingan = keyframes`
  35% {
    transform: rotate(15deg);
  }

  40% {
    transform: rotate(30deg);
  }

  85% {
    transform: rotate(730deg);
  }

  100% {
    transform: rotate(750deg);
  }
`

const Sharingan = styled.div`
  position: relative;
  margin-left: 20px;
  margin-top: 22px;
  width: 200px;
  height: 200px;
  background: #a93e3a;
  border: 15px solid black;
  border-radius: 50%;
  transform: rotate(30deg);
  overflow: hidden;
  animation: ${sharingan} 7s cubic-bezier(0.26, -0.54, 0.68, 1.53) infinite;
`
const Circle = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  background-color: #000;

  &:after {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: '';
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: #a93e3a;
  }
`

const Dumb = styled.div`
  position: absolute;
  width: 60px;
  height: 85px;
  background-color: black;

  &:nth-of-type(2) {
    top: 115px;
    left: 70px;
    transform: rotate(0deg);
  }

  &:nth-of-type(3) {
    top: 25px;
    left: -5px;
    transform: rotate(114deg);
  }

  &:nth-of-type(4) {
    top: 25px;
    left: 135px;
    transform: rotate(63deg);
  }
`

const StylishLoader = () => {
  return (
    <Wrapper>
      <Eye className='left'>
        <Sharingan>
          <Circle></Circle>
          <Dumb></Dumb>
          <Dumb></Dumb>
          <Dumb></Dumb>
        </Sharingan>
      </Eye>
      <Eye className='right'>
        <Rinnegan>
          <Lines></Lines>
          <Lines></Lines>
          <Lines></Lines>
          <Lines></Lines>
          <Lines></Lines>
        </Rinnegan>
      </Eye>
    </Wrapper>
  )
}

export default StylishLoader
