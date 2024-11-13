import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import React from "react";
import { AboutPage } from "../components/aboutPage/aboutPage";
import { MapPhoneAllCards } from "../components/phoneCard/phoneCardContainer";
import { PhonePage } from "../components/PhonePage/phonePage";
import { LoginForm } from "../components/forms/loginForm";
import { RegistrationForm } from "../components/forms/registrationForm";


export const routing = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                element: <MapPhoneAllCards/>,
                index: true
            },
            {
                element: <AboutPage/>,
                path: "/about"
            },
            {
                element: <PhonePage/>,
                path: "/:id"
            },
            {
                element: <LoginForm/>,
                path: "/login"
            },
            {
                element: <RegistrationForm/>,
                path: "/registration"
            }
        ]
    }
])