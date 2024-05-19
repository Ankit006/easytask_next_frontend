import React from "react";
import SideBar from "../../../components/project/SideBar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="flex items-start space-x-8 relative">
            <SideBar />
            <div className="container mx-auto">{children}</div>
        </section>
    );
}
