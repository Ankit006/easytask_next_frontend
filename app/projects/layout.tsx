import React from "react";
import Notifications from "../../components/rootProject/Notifications";
import ProjectSelector from "../../components/rootProject/ProjectSelector";
import User from "../../components/rootProject/User";

export default function DashboardLaylout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <div className="bg-white flex justify-between items-center border-b border-gray-300 py-4  px-6 shadow-sm">
                <ProjectSelector />
                <div className="flex items-center space-x-12">
                    <User />
                    <Notifications />
                </div>
            </div>
            <div className="px-6 mt-4">
                {children}
            </div>
        </section>
    );
}
