/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Styled from './popup.styled'


const openTab = url => () => {
    const localUrl = chrome.extension.getURL(url)

    chrome.tabs.query({url: localUrl}, function (tabs) {
        if (tabs.length) {
            chrome.tabs.update(tabs[0].id, {active: true})
        } else {
            chrome.tabs.create({url: localUrl})
        }
    });
}


const Popup = () => (
    <Styled>
        <button onClick={openTab('editor.html')}>Open GraphiQL</button>
        <button onClick={openTab('options.html')}>Options</button>
    </Styled>
)


ReactDOM.render(<Popup/>, document.getElementById('root'))
