"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const LanguageContext:any=createContext(null);


export function LanguageProvider({
children
}:{
children:React.ReactNode
}){


const [language,setLanguage]=useState("he");


useEffect(()=>{

const saved=
localStorage.getItem("megaclick-language");

if(saved){
setLanguage(saved);
}

},[]);



function changeLanguage(lang:string){

setLanguage(lang);

localStorage.setItem(
"megaclick-language",
lang
);

}



return(

<LanguageContext.Provider

value={{
language,
changeLanguage
}}

>

{children}

</LanguageContext.Provider>

)

}



export function useLanguage(){

return useContext(LanguageContext);

}