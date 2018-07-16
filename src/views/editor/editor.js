import React from 'react'
import ReactDOM from 'react-dom'
import GraphiQL from 'graphiql'
import '../../../node_modules/graphiql/graphiql.css'

function graphQLFetcher(graphQLParams) {
    return fetch('https://fakerql.com/graphql', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
}


ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.getElementById('root'))
