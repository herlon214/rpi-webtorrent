import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from './theme'
import './style.css'

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './lib/reducers'

const store = createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Web = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
          <App />
      </MuiThemeProvider>
    </Provider>)
}
  

ReactDOM.render(<Web />, document.getElementById('root'));
