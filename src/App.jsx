import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { Dashboard, Auth } from "@/layouts";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"
function App() {
  const [admin, setAdmin] = useState({});
  const {currentUser} = useContext(AuthContext);

  const docRef = doc(db, "users", (!currentUser ? " " : currentUser.uid))
  getDoc(docRef)
  .then((doc) => {
    console.log(doc.data(), doc.id)
  })

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/auth/sign-in" />;
  };
  return (
    <Routes>
      
      <Route path="/dashboard/*" element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
