import React from "react";
import { Link } from "react-router-dom"

export const Navigation = () => {

  return (
    <nav>
      <ul>
        <li><Link to={"/home"}>Home</Link></li>
        <li><Link to={"/news"}>News</Link></li>
        <li><Link to={"/money"}>Money</Link></li>
        <li><Link to={"/weather"}>Weather</Link></li>
        <li><Link to={"/user"}>User</Link></li>
      </ul>
    </nav>
  )
}