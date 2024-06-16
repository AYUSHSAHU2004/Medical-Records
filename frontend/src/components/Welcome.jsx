import React from 'react'
import { Link}  from 'react-router-dom';


function Welcome() {
  return (
    <>
        <nav style={{padding:"0 40vw",fontSize:"20px"}} class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <button style={{border:"none"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Login</a>
        </li>
        <li  class="nav-item">
          <a class="nav-link" href='Register'>Register</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Welcome