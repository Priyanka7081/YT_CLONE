import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../Utills/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    const cachedData = localStorage.getItem(value);

    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      fetchAllData(value);
    }
  }, [value]);

  const fetchAllData = async (query) => {
    try {
      setLoading(true);

      const { contents } = await fetchData(`search/?q=${query}`);

      setData(contents);

      // 🔥 Save in localStorage (important)
      localStorage.setItem(query, JSON.stringify(contents));

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
