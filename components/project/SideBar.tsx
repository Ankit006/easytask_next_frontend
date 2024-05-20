import React from "react";
import NavLinks from "./NavLinks";

export default async function SideBar() {
    return (
        <nav className="px-2 py-4 h-[70vh] border border-gray-300 rounded-md w-48 bg-white shadow-sm">
            <NavLinks />
        </nav>
    );
}
