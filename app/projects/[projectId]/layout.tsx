import React from "react";
import SideBar from "../../../components/project/SideBar";

export default function Layout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { projectId: string }
}>) {
    return (
        <section className="container mx-auto mt-8">
            <SideBar projectId={params.projectId} />
            <div className="mt-8">{children}</div>
        </section>
    );
}
