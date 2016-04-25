import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactOnRails from 'react-on-rails'

ReactOnRails.registerStore({
  ReduxStore: (props, railsContext) => {
    console.debug("Setting up Redux store")
    return createStore({}, {},
      window.devToolsExtension ? window.devToolsExtension() : undefined
    )
  }
})

ReactOnRails.register({
  App: () => {
    console.debug("Setting up React app")
    return (
      <Provider store={ReactOnRails.getStore("ReduxStore")}>
        {/* <-- INSERT APP HERE -!> */}
      </Provider>
    )
  },
  HelloWorld: (props) => <h1>HELLO {props.name.toUpperCase()}</h1>
})