/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import withTheme from '../../common/theme.styled'
import Styled from './popup.styled'
import urls from '../../common/urls'

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
        <button onClick={openTab(urls.editor)}>Open editor</button>
        <button onClick={openTab(urls.options)}>Options</button>
    </Styled>
)


ReactDOM.render(withTheme(Popup), document.getElementById('root'))
