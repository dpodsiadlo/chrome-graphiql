/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import withTheme from '../../common/theme.styled'
import Styled from './options.styled'
import urls from '../../common/urls'

class Options extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            apiUrl: 'https://fakerql.com',
            apiGraphqlEndpoint: '/graphql',
            apiAuthCookieName: '',
            apiAuthCookieValue: '',
        }

        chrome.storage.sync.get(['settings'], options => {
            this.setState(options.settings)
        })


    }

    handleSettingChange = setting => event => this.setState({[setting]: event.target.value})

    handleSaveClick = () => {
        chrome.storage.sync.set({
            settings: this.state
        })

        this.goToEditor()
    }

    goToEditor = () => {

        chrome.tabs.query({url: urls.editor}, tabs => {
            tabs.forEach(tab => {
                // forcing reload on every editor
                chrome.tabs.update(tab.id, {active: true, url: tab.url})
            })
            window.close()
        })
    }

    render = () => (
        <Styled>
            <div className="row">
                <span>API url</span>
                <input type="text"
                       value={this.state.apiUrl}
                       onInput={this.handleSettingChange('apiUrl')}
                />
            </div>
            <div className="row">
                <span>Graphql endpoint</span>
                <input type="text"
                       value={this.state.apiGraphqlEndpoint}
                       onInput={this.handleSettingChange('apiGraphqlEndpoint')}
                />
            </div>
            <div className="splitter"></div>
            <div className="row">
                <span>Auth cookie name</span>
                <input type="text"
                       value={this.state.apiAuthCookieName}
                       onInput={this.handleSettingChange('apiAuthCookieName')}
                />
            </div>
            <div className="row">
                <span>Auth cookie value</span>
                <input type="text"
                       value={this.state.apiAuthCookieValue}
                       onInput={this.handleSettingChange('apiAuthCookieValue')}
                />
            </div>
            <div className="row right">
                <button onClick={this.handleSaveClick}>Save</button>
            </div>
        </Styled>
    )
}


ReactDOM.render(withTheme(Options), document.getElementById('root'))
