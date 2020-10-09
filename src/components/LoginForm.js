import React from "react"

const LoginForm = (props) => {
  //action="http://localhost:7777/register"
  //method = "POST"
  //
  const { setLoggedIn, setUsername } = props
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const name = e.target.elements.username.value
    
    fetch("http://localhost:7777/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        if (data.valid) {
          setLoggedIn(true)
          setUsername(data.name)
        } else {
          alert("Your credentials are not correct, try again")
        }
      })
      .catch((error) => console.log(error))
  }
  return (
    <form onSubmit={handleFormSubmit} className="mt-4">
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="username">
          name
        </label>
        <input
          className="form-control"
          id="username"
          name="username"
          required
        />
      </div>
      
      <button
        name="button"
        value="buttonId"
        type="submit"
        className="btn btn-light"
      >
        submit
      </button>
    </form>
  )
}

export default LoginForm