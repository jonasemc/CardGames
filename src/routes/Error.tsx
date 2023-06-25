import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleReload = () => {
      navigate("/");
    };

    window.addEventListener("beforeunload", handleReload);

    return () => {
      window.removeEventListener("beforeunload", handleReload);
      navigate("/");
    };
  }, [navigate]);

  return <h1>O servidor falhou em responder, tente recarregar a página :/</h1>;
};

export default Error;
