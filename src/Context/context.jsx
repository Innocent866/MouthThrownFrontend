import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [profile, setProfile] = useState(false)
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Fashion");

  const cate =(name)=>{
    setCategory(name)
    console.log(category);
  }


// setIsDark(dark)
  const setLightMode = () => {
    setIsDark(!isDark);
    console.log("clicked light mode");
  };

  localStorage.setItem("isDark", isDark);

  const handleShowProfile = ()=>{
    if (profile == false) {
      setProfile(true)
    }else{
      setProfile(false)
    }
    
  }

  
  const handleSearch = () => {
    if (open == false) {
      setOpen(true);
      setProfile(false);
    } else {
      setOpen(false);
      setProfile(false);
    }
  };

  
  return (
    <AppContext.Provider
      value={{
        isDark,
        setIsDark,
        setLightMode,
        setProfile,
        profile,
        handleShowProfile,
        setOpen,
        open,
        handleSearch,
        category,
        setCategory,
        cate
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
