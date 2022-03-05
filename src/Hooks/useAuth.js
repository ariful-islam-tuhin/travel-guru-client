import { useContext } from "react";
import { authContext } from "../Component/Context/AuthProvider";

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
