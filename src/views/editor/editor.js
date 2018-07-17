/* eslint-disable no-undef, no-restricted-globals*/
import React from 'react'
import ReactDOM from 'react-dom'
import GraphiQL from 'graphiql'
import '../../../node_modules/graphiql/graphiql.css'


class Editor extends React.Component {
    constructor(prop) {
        super(prop)

        this.state = this.getParams()
        window.addEventListener("hashchange", this.updateParams, false)
    }

    graphQLFetcher = (graphQLParams) => {
        return new Promise(resolve => {
            chrome.storage.sync.get(['settings'], options => {

                fetch(options.settings.apiUrl, {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(graphQLParams),
                    credentials: 'same-origin',
                })
                    .then(response => response.json())
                    .then(json => resolve(json))
            })
        })

    }

    getParams = () => {
        return decodeURI(location.hash.replace(/^#/, ''))
            .split('&')
            .reduce((params, current) => {
                const p = current.split('=')
                if (p.length == 2) {
                    params[p[0]] = p[1]
                }

                return params
            }, {})
    }

    updateParams = () => {
        const {query, variables} = this.getParams()
        this.setState({query, variables})
    }

    render = () => <GraphiQL
        fetcher={this.graphQLFetcher}
        query={this.state.query}
        variables={this.state.variables}
    />
}


ReactDOM.render(<Editor/>, document.getElementById('root'))
