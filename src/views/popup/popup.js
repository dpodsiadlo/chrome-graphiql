/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import withTheme from '../../common/theme.styled'
import Styled from './popup.styled'


const openTab = localUrl => () => {
    chrome.tabs.query({url: localUrl}, function (tabs) {
        if (tabs.length) {
            chrome.tabs.update(tabs[0].id, {active: true})
        } else {
            chrome.tabs.create({url: localUrl})
        }
    })

    window.close()
}


const Popup = () => (
    <Styled>
        <div className="logo">GraphiQL</div>
        <button onClick={openTab(chrome.extension.getURL('editor.html'))}>Open editor</button>
        <button onClick={openTab('chrome://extensions/?options=' + chrome.runtime.id)}>Options</button>
    </Styled>
)


ReactDOM.render(withTheme(Popup), document.getElementById('root'))
