import { createContext, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email , password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  
  }

  const UserInfo = { user, setUser, loading, createUser, signInUser };
  return (
    <AuthContext.Provider value={UserInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
