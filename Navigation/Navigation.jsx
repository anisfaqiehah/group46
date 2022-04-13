import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div>
  <nav class="navbar_home">
    <NavLink class="active" href="">Home</NavLink>
    <NavLink href="">Calendar</NavLink>
    <NavLink href="">Profile</NavLink>
    <NavLink href="">Sign in</NavLink>
  </nav>
  </div>
);

export default Navigation;
