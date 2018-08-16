import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { elevation, transition, black } from './Utilities'

export const PageWrapper = styled.div`
  overflow: visible;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  clear: left;
  position: absolute;
`;

export const PageContainer = styled.div`
  ${'' /* margin: 0;
  right: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
  max-width: 90vw; */}
`;

export const HeaderWrapper = styled.div`
  background: #ed254e;
  height: 13vh;
  ${'' /* overflow: hidden;
  position: fixed;
  margin-bottom: 0
  height: 100%;
  min-width: 15vw;
  z-index: 3;
  float: left;
  clear: right; */}
`;

export const HeaderContainer = styled.div`
margin: 0 auto;
max-width: 960;
height: 100%;
`;



export const MainNav = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  ul {
    width: 40vw;
    height: 10vh;
    margin: 0
    padding-top: 4vh;
    text-align: center;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      margin-left: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          color: #f9dc5c;
        }
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  max-width: 320px;
  margin: 15px auto;
  color: ${black};
  ${elevation[4]};
  ${transition({
    property: 'box-shadow'
    })};
  &:hover {
    ${elevation[5]};
  }
`;
