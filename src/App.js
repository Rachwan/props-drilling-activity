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
      {/* Pass props into multiple components */}
      <Layout />
    </div>
  )
}