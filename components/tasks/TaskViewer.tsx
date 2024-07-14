"use client";
import { ITask } from "@/models/models";
import ActiveTaskList from "./ActiveTaskList";
import CanceledTaskList from "./CanceledTaskList";
import CompletedTaskList from "./CompletedTaskList";
import InvestigationTaskList from "./InvestigationTaskList";
import NewTaskList from "./NewTaskList";
import OnHoldTaskList from "./OnHoldTaskList";
import PendingTaskList from "./PendingTaskList";

interface Props {
    tasks: ITask[];
}

export default function TaskViewer({ tasks }: Props) {

    return (
        <div className="flex justify-between space-x-2">
            <NewTaskList />
            <ActiveTaskList />
            <CompletedTaskList />
            <OnHoldTaskList />
            <PendingTaskList />
            <CanceledTaskList />
            <InvestigationTaskList />
        </div>
    );
}
