import React from 'react'

export default function Dashboards() {

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/";
    }


  return (
    <button type="button" class="btn btn-danger" onClick={handleLogout}>Logout</button>
  )
}
