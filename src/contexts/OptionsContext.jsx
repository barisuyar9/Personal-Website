import React, {createContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import axios from "axios";
import data from "../data.js";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

export const OptionsContext = createContext();

export const OptionsContextProvider = ({children}) => {
    const [language, setLanguage] = useLocalStorage("language", "en");
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    const [apiData, setApiData] = useState({});

    const fetchData = () => {
        axios.post("https://reqres.in/api/workintech", data, {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        })
        .then((response) => {
            setApiData(response.data);
            toast.success("Data fetched successfully!");
        })
        .catch((error) => {
            console.error(error);
            toast.error("An error has occured!");
        });
    }

    useEffect(() => {
        fetchData();
    }, [])

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));
        toast.success("Language changed successfully!");
    }

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    }

    if (!apiData || !apiData[language]) {
        return <div>Yükleniyor...</div>;
      }
    
    return (
        <OptionsContext.Provider value={{language,darkMode,toggleLanguage,toggleDarkMode, apiData}}>
            {children}
        </OptionsContext.Provider>
    );
}