import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UnknownError = () => {
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

  return (
    <h1>
      O servidor não conseguirá responder por agora, tente voltar novamente mais
      tarde
    </h1>
  );
};

export default UnknownError;
