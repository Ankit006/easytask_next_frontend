import { getBacklogs } from "@/queries/queries";
import React from "react";
import BacklogCards from "./BacklogCards";

interface Props {
    projectId: string;
}

export default async function BacklogList({ projectId }: Props) {
    const backlogs = await getBacklogs(parseInt(projectId));
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {backlogs.map((backlog) => (
                <BacklogCards backlog={backlog} projectId={projectId} key={backlog.id} />
            ))}
        </div>
    );
}
