import React, { useState } from "react"
import LoginForm from "./components/LoginForm.js"
import Dashboard from "./components/Dashboard.js"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState("")
  const handleButtonClick = () => {
    setLoggedIn(false)
    setName("")
  }
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Enregistrez-vous</h1>
      {!loggedIn && (
        <LoginForm setLoggedIn={setLoggedIn} setName={setName} />
      )}
      {loggedIn && (
        <>
          <Dashboard name={name} />
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleButtonClick}
          >
            Log out
          </button>
        </>
      )}
    </div>
  )
}

export default App