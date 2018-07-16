/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Styled from './popup.styled'


const Popup = () => (
    <Styled>
        <a href={chrome.runtime.getURL('editor.html')} target="chrome-graphiql">Open GraphiQL</a>
        <a href="#" target="chrome-graphiql-options" onClick={evt => {
            chrome.tabs.create({'url': 'chrome://extensions/?options=' + chrome.runtime.id});
            evt.preventDefault()
        }}>Options</a>
    </Styled>
)


ReactDOM.render(<Popup/>, document.getElementById('root'))
