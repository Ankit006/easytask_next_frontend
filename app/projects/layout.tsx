import React from "react";
import ProjectSelector from "./components/ProjectSelector";

export default function DashboardLaylout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="grid grid-cols-6 gap-6">
            <div className=" px-6 my-12">
                <ProjectSelector />
            </div>
            <div className="col-span-5">
                <div className="container mx-auto mt-12">{children}</div>
            </div>
        </section>
    );
}
