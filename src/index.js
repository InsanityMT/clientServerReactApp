import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './globalStyle'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
