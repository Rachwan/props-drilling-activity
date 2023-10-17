import React from "react"
import { useState } from "react"
import "./App.css"
import Layout from "./components/Layout"

export default function App() {
  const [loading, setLoading] = useState(false)

  const onSubmit = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return(
    <div className="container">
      {
        /* 
          Pass "loading" & "onSubmit" data as props into multiple components
          App -> Layout -> Form -> Button
          till reaches the Button component use the props 
        */
        }
      <Layout />
    </div>
  )
}