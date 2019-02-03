import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import Sheltr from '@taito/react-sheltr'

import './index.css'
import './styles/card.css'
import './styles/list.css'

ReactDOM.render(
  <Sheltr duration={700}>
    <Router>
      <App />
    </Router>
  </Sheltr>,
  document.getElementById('root')
)

serviceWorker.unregister()
