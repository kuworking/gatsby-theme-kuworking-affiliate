import React from 'react'
import styled from '@emotion/styled'
import { Sunny as Day } from 'emotion-icons/ion-md'
import { Moon as Night } from 'emotion-icons/fa-regular'
import { useColorMode } from 'theme-ui'
import { modes } from '../gatsby-plugin-theme-ui/index'
import { Switch } from 'gatsby-theme-kuworking-methods'

export const Header = ({ basePath, ShapeButton, typeOfGridButton }) => (
  <Parent>
    <header>
      <Logo id="init" aria-label="inicio" href={basePath}>
        <div>kuworking</div>
        <div>kw</div>
      </Logo>

      <Space />

      {typeOfGridButton}
      {ShapeButton}

      <Switch
        Day={Day}
        Night={Night}
        modes={modes}
        useColorMode={useColorMode}
        aria-label="Toggle color modes"
        dayColor="#fffa6a"
        nightColor="#5c40719c"
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '8px',
        }}
      />
    </header>
  </Parent>
)

const q = px => `@media (min-width: ${px}px)`

const Parent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 700;
  z-index: 1;

  & > header {
    width: 100%;
    min-height: 40px;

    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
  }
`

const Space = styled.div`
  flex-grow: 1;
`

const Logo = styled.a`
  cursor: pointer;
  color: #4b4b4b;
  font-weight: 400;
  padding: 10px;
  padding-left: 0px;
  border-radius: 2px;
  display: flex;
  align-self: stretch;

  text-decoration: none;
  font-style: normal;

  & > div {
    display: flex;
    align-items: center;
    height: 20px;
    padding: 0px 2px;
  }

  & > div:first-of-type {
    margin-right: 5px;
    color: #ff8e00;
    font-weight: 700;
    background: #000000;
    border-radius: 2px;
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  & > div:last-of-type {
    border-radius: 2px;
    transition: background 0.2s ease-in 0.1s, color 0.2s ease-in 0.1s;
    display: none;
    ${q(700)} {
      display: unset;
    }
  }

  &:hover {
    & > div:first-of-type {
      color: #dadada;
      background: #585858;
    }
    & > div:last-of-type {
      color: #f9f9f9;
      background: #ff5900;
    }
  }
`
