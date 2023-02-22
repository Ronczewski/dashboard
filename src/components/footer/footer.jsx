import React from "react";
import './footer.css'

export const Footer = () => {
   const year = new Date().getFullYear();
 
   return <footer className="footer">{`Copyright © Upbeat Code ${year}`}</footer>;
 };
 
 