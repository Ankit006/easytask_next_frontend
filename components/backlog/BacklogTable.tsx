import { getBacklogs } from "@/queries/queries";
import PriorityViewer from "../custom/PriorityViewer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import AssingSprintsDialog from "./AssingSprintsDialog";
import UserStoryOptions from "../userStory/UserStoryOptions";

interface Props {
    projectId: number
}

export default async function BacklogTable({ projectId }: Props) {
    const backlogs = await getBacklogs(projectId);
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Estimate date</TableHead>
                    <TableHead>Options</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {backlogs.map((backlog) => <TableRow key={backlog.id}>
                    <TableCell>{backlog.title}</TableCell>
                    <TableCell>
                        <PriorityViewer priority={backlog.priority} />
                    </TableCell>
                    <TableCell>
                        {backlog.estimateDate}
                    </TableCell>
                    <TableCell>
                        <UserStoryOptions projectId={projectId} userStoryId={backlog.id} />
                    </TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    )
}
