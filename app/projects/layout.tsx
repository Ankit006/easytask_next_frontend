import React from "react";
import ProjectSelector from "./components/ProjectSelector";
import Notifications from "./components/Notifications";

export default function DashboardLaylout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <div className=" px-6 mt-4 mb-20 flex justify-between items-center">
                <ProjectSelector />
                <Notifications />
            </div>

            <div className="container mx-auto">{children}</div>
        </section>
    );
}
