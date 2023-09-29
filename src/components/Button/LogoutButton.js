import React from "react";
import { SignOut } from "../../auth/service";

function LogoutButton() {
  const logOut = async () => {
    const res = await SignOut();
    if (res === 1) {
      window.location.href = "/Login";
    }
  };
  return (
    <button onClick={logOut} className="btn btn-sm btn-danger">
      Log Out
    </button>
  );
}

export default LogoutButton;
