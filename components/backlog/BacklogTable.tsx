import { getBacklogs } from "@/queries/queries";
import PriorityViewer from "../custom/PriorityViewer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import AssingSprintsDialog from "./AssingSprintsDialog";

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
                    <TableHead>Assign</TableHead>
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
                        <AssingSprintsDialog projectId={projectId} backlogId={backlog.id} />
                    </TableCell>
                </TableRow>)}
            </TableBody>
        </Table>
    )
}
