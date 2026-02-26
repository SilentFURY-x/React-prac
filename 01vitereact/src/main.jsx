import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LMAO from './LMAO.jsx'
import React from 'react'

function MyApp() {
    return (
        <h1>Custom App</h1>
    )
}

const anotherElement = (
    <a href="https://google.com">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to Visit Google'
)

createRoot(document.getElementById('root')).render(
  //anotherElement,
  //<MyApp/>,
  //<LMAO/>,
  //reactElement,
  <App/>
)
