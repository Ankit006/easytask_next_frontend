import RequestUser from "@/components/member/RequestUser";
import React from "react";

export default function Layouy({ children, createGroup }: { children: React.ReactNode, createGroup: React.ReactNode }) {
    return <div>
        <div className="flex items-center justify-end space-x-4">
            {createGroup}
            <RequestUser />
        </div>
        {children}
    </div>
}
