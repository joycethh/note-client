import React from "react";
import PencilIcon from "../image/pencil.svg";

function Header() {
  return (
    <header>
      <img src={PencilIcon} alt="logo" />
      <h1>Note Pad</h1>
    </header>
  );
}

export default Header;
