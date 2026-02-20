import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase"; // seu firebase.js com getAuth
import { onAuthStateChanged } from "firebase/auth";

function PrivateRoute({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setCarregando(false);
    });

    return () => unsubscribe();
  }, []);

  if (carregando) return <p>Carregando...</p>;

  if (!usuario) return <Navigate to="/admin-login" />;

  return children;
}

export default PrivateRoute;
