import React from 'react'
import styled, {injectGlobal} from 'styled-components'

injectGlobal`

`


export default styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  white-space: nowrap;
  margin: 0;
  
  .row {
    box-sizing: border-box;
    padding: 0.5em;
    display: flex;
    
    span {
      display: inline-block;
      width: 40%;    
    }
    
    input {
      width: 60%;
      outline: none;
    }
  }
  
  .splitter {
    box-sizing: border-box;
    margin: 0.5em;
    padding: 0;
    display: flex;
    height: 1px;
    border-bottom: 1px inset;

  }
  
  .right {
    flex-direction: row-reverse;
  }
  
  
  button {
    display: inline-block;
    box-sizing: border-box;
    border: none;
    background: ${props => props.theme.default.bg};
    padding: 0.7em 2em;
    margin: 0;
    cursor: pointer;
    text-align: left;
    outline: none;
    
    &:hover{
       background: ${props => props.theme.primary.bg};
       color: ${props => props.theme.primary.fg};
    }
  }
 
  
`