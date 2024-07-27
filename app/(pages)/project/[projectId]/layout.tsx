import React, { Suspense } from "react";
import { NavBarSketon } from "@/components/skeletons/skeletons";
import NavBar from "@/components/project/NavBar";

export default function Layout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { projectId: string }
}>) {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center">
                <Suspense fallback={<NavBarSketon />}>
                    <NavBar projectId={params.projectId} />
                </Suspense>
            </div>
            <div className="mt-8">{children}</div>
        </section>
    );
}
