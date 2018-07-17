## Chrome Graphiql Extension

##### This repository is in development mode, no stable build should be expected at the moment. 

Please refer to the [build](./build) directory for the latest unpacked build which may be loaded at
[Chrome Extensions page](chrome://extensions/) in development mode.

#### About

A simple chrome extension which includes [GraphiQL](https://github.com/graphql/graphiql) tool and adds couple of
features to it which make using this amazing tool locally easier.

#### Features

##### Targeting different GraphQL servers

You're able to configure target url for the GraphQL server you want to test. Please refer to the extension options.
Also setting custom auth cookie is available in the options.

##### Integration with docs

You might want to have a set of example queries to your graphql server. This can be achieved by preparing a simple HTML
file with links starting with `graphiql://` protocol:

```html
<a href='graphiql://?query=query%20topUsers($count:%20Int)%20{%20allUsers(count:%20$count)%20{%20firstName%20lastName%20}%20}&variables={%20"count":%205%20}'>Get top users query</a>
``` 

The example above will open GraphiQL with the following query:
```
query topUsers($count: Int) {
  allUsers(count: $count) {
    firstName
    lastName
  }
}
```

Also `count` will be set in variables:
```json
{ "count": 5 }
```  

HTML document with such links will be automatically parsed by the extension on load which will activate and connect
links to the GraphiQL editor. 

#### References

Please refer to the [official GraphiQL](https://github.com/graphql/graphiql) repository for more details.