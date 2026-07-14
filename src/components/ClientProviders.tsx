"use client";import{useEffect}from"react";import{db,defaultSettings}from"@/lib/db";
export function ClientProviders({children}:{children:React.ReactNode}){useEffect(()=>{db.settings.get("main").then(x=>{if(!x)db.settings.put(defaultSettings)});const theme=localStorage.getItem("theme");if(theme==="dark")document.documentElement.classList.add("dark")},[]);return children}
