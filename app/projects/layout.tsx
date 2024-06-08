import React from "react";
import Notifications from "../../components/rootProject/Notifications";
import ProjectSelector from "../../components/rootProject/ProjectSelector";
import User from "../../components/rootProject/User";
import { Separator } from "@/components/ui/separator"
export default function DashboardLaylout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <div className="bg-white dark:bg-transparent flex justify-between items-center py-4  px-6">
                <ProjectSelector />
                <div className="flex items-center space-x-12">
                    <User />
                    <Notifications />
                </div>
            </div>
            <Separator className="mb-4" />
            <div className="px-6 mt-4">
                {children}
            </div>
        </section>
    );
}
