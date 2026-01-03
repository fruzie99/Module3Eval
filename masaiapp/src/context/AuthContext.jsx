import { createContext,useState } from "react";
export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [auth,setAuth] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = (role) => {
        localStorage.setItem("user",JSON.stringify(role));
        setAuth({role});
    }

    const logout = () => {
        localStorage.removeItem("auth");
        setAuth(null);
    };

    return(<AuthContext.Provider value={{auth,login,logout}}>{children}</AuthContext.Provider>);
}