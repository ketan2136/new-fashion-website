// //utils/AuthContext.jsx
// import { createContext, useState, useEffect, useContext, useRef } from "react";
// import client, { account } from "../appwriteConfig";
// import { ID } from "appwrite";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     setLoading(false);
//     // hanfdleb();
//   }, []);

//   const loginUser = async (userInfo) => {
//     console.log("ttttttttttttt", userInfo);
//     setLoading(true);
//     try {
//       let response = await account.createEmailPasswordSession(
//         userInfo.email,
//         userInfo.password
//       );
//       let accountDetails = await account.get();

//       console.log("accountDetails", accountDetails);

//       setUser(accountDetails);
//     } catch (error) {
//       console.log(error);
//     }
//     setLoading(false);
//   };

//   const logoutUser = async () => {
//     account.deleteSession("current");
//     setUser(null);
//   };

//   const registerUser = async (userInfo) => {
//     setLoading(true);
//     try {
//       let response = await account.create(
//         ID.unique(),
//         userInfo.name,
//         userInfo.email,
//         userInfo.password
//       );

//       console.log("create", response);

//       await account.createEmailPasswordSession(
//         userInfo.email,
//         userInfo.password
//       );
//       let accountDetails = await account.get();
//       console.log(accountDetails);
//     } catch (error) {
//       console.log(error);
//     }

//     setLoading(false);
//   };

//   const checkUserStatus = async () => {};

//   const contextData = {
//     user,
//     loginUser,
//     logoutUser,
//     registerUser,
//   };

//   return (
//     <AuthContext.Provider value={contextData}>
//       {loading ? <p>Loading...</p> : children}
//     </AuthContext.Provider>
//   );
// };

// //Custom Hook
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default AuthContext;

import { createContext, useState, useEffect, useContext } from "react";
import client, { account } from "../appwriteConfig";
import { ID } from "appwrite";
import Spinner from "../componets/Loader/Spinner";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null);

  console.log(alert);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const accountDetails = await account.get();
        setUser(accountDetails);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      // Log out any existing session first
      try {
        await account.deleteSession("current");
      } catch (error) {
        console.log("No existing session to delete:", error);
      }

      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );

      const accountDetails = await account.get();
      setUser(accountDetails);
      setAlert({ type: "success", message: "Login successful!" });
    } catch (error) {
      console.log("Login error:", error);
      setUser(null);
      setAlert({
        type: "error",
        message: "Login failed. Please check email and pass.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 5000);
    }
  };

  const logoutUser = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
        setAlert({ type: "success", message: "Logout successful!" });
    } catch (error) {
      console.log("Logout error:", error);
       setAlert({ type: "error", message: "Logout failed. Please try again." });
    }
     setTimeout(() => setAlert(null), 5000);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );

      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );

      const accountDetails = await account.get();
      setUser(accountDetails);
       setAlert({ type: "success", message: "Registration successful!" });
    } catch (error) {
      console.log("Registration error:", error);
      setUser(null);
       setAlert({
         type: "error",
         message: error.message,
       });
    } finally {
      setLoading(false);
       setTimeout(() => setAlert(null), 5000);
    }
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <Spinner /> : children}
      {alert && <div className={`alert ${alert.type}`}>{alert.message}</div>}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
