import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/homePage/HomePage";
import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { ArticlesPage } from "../../pages/ArticlesPage/ArticlesPage";
import { AdmPage } from "../../pages/admPage/AdmPage";
import { AdmRegister } from "../../pages/admPage/AdmRegister";
import { ErrorPage } from "../../pages/errorPage/ErrorPage";
import { AdmDashboard } from "../../pages/admPage/admDashboard";




export const Router = ()=>{
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/sobre" element={<AboutPage />} />
            <Route exact path="/artigos" element={<ArticlesPage />} />
            <Route exact path="/admin" element={<AdmPage />} />
            <Route exact path="/cadastroAdmin" element={<AdmRegister />} />
            <Route exact path="/AdminDashboard" element={<AdmDashboard />} />
            <Route path="*" element={<ErrorPage />} />  
        </Routes>    
    </BrowserRouter>
}