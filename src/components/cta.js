/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'

export const CtaMain = () => (
  <Container>
    <Title sx={{ fontSize: ['3.5rem', '4.3rem', '5.1rem'] }}>KUWORKING</Title>
  </Container>
)

const q = px => `@media (min-width: ${px}px)`

const Title = styled.h1`
  text-transform: uppercase;
  display: inline-block;

  & > div {
    white-space: unset;
    overflow: hidden;
  }
`

const Container = styled.div`
  background: ${props => props.theme.colors.cta__div__background};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.cta__div__border};

  padding: 10px;
  ${q(700)} {
    padding: 20px 40px 15px 15px;
  }

  & em {
    font-style: normal;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 2px;
    background: ${props => props.theme.colors.cta__em__background};
    color: ${props => props.theme.colors.cta__em__color};
  }

  ${Title} {
    color: ${props => props.theme.colors.cta__title__color};
    transition: color 0.5s ease;
  }
`
