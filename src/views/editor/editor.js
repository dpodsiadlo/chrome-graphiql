/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import GraphiQL from 'graphiql'
import '../../../node_modules/graphiql/graphiql.css'

function graphQLFetcher(graphQLParams) {
    return new Promise(resolve => {
        chrome.storage.sync.get(['settings'], options => {

            return fetch(options.settings.apiUrl, {
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

const query = `{
  allUsers{
    firstName
    lastName
    email
  }
}`


ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} query={query}/>, document.getElementById('root'))
