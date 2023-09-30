import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { myProfileApi } from "../api/user-api";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const auth = useAuthUser();
  const token = auth()?.token

  const [userProfile, setUserProfile] = useState({})

  useEffect(() => {
    myProfileApi(token)
      .then(res => {
        setUserProfile(res)
      })
      .catch(error => {
        console.error(error);
      });
  }, [token])

  return (
    <>
      <Navbar userProfile={userProfile} />
      <div className="min-h-screen pt-[70px]">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;