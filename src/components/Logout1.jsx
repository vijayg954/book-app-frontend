import React from "react";
import { useAuth } from "../context/AuthProvider";

const Logout1 = () => {
  const [authuser, setauthuser] = useAuth();
  const handlelogout = () => {
    try {
      setauthuser({ ...authuser, user: null })
      localStorage.removeItem("user")
      alert("logout success")
      window.location.reload()
    } catch (error) {
      console.log("error"+error)

    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handlelogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout1;
