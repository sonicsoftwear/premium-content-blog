import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

window.React = React

const cosmic = {
  bucket: "cosmicuserblogtest",
  write_key: "v2N87o8VpE8onC9eqPFAg13uGSRBrRUrOQ50itoqiz7iwQ9EFf",
  read_key: "eYK8D3LA3oKohk0tXu3WXSdiUaMEwGPKBsPKX5uUibZtdkItb1"
}

const stripeKey = "pk_test_2hciYwKwxCYy6nTEnKvfxdVa"
ReactDom.render(
  <App cosmic={cosmic} stripeKey={stripeKey}/>,
  document.getElementById('root')
)