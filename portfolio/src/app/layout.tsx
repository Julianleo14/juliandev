import type {Metadata} from "next";
import {nunito} from "@/app/fonts/font";
import "./globals.css";
import MyHeader from "@/app/header";
import React from "react";

export const metadata: Metadata = {
    title: "Julian's Portfolio",
    description: "Front end portfolio",
};



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${nunito.className} antialiasing`}>
        <header>
            <MyHeader/>
        </header>
        <main>
            {children}
        </main>
        <footer>

        </footer>
        </body>
        </html>
    );
}
