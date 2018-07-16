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

    window.close()

}


const Popup = () => (
    <Styled>
        <div className="logo">GraphiQL</div>
        <button onClick={openTab('editor.html')}>Open editor</button>
        <button onClick={openTab('options.html')}>Options</button>
    </Styled>
)


ReactDOM.render(<Popup/>, document.getElementById('root'))
