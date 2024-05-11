import React from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="absolute top-2/4 left-2/4
         transform -translate-x-2/4 -translate-y-2/4">
            {children}
        </div>
    );
}
