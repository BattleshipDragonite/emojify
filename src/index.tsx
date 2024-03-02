import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./client/App.tsx"
import "./index.css"

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);