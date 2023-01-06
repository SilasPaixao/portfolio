import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/homePage/HomePage";
import { ArticlesPage } from "../../pages/ArticlesPage/ArticlesPage";
import { AdmPage } from "../../pages/admPage/AdmPage";
import { LoginPage } from "../../pages/loginPage/LoginPage";
import { ErrorPage } from "../../pages/errorPage/ErrorPage";




export const Router = ()=>{
    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/artigos" element={<ArticlesPage />} />
            <Route exact path="/admin" element={<AdmPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="*" element={<ErrorPage />} />  
        </Routes>    
    </BrowserRouter>
}