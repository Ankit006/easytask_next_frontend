import React from "react";
import { Separator } from "../ui/separator";
import { ITask, status } from "@/models/models";
import TaskCard from "./TaskCard";

interface Props {
    tasks: ITask[];
    status: status;
}

export default function TaskLists({ tasks, status }: Props) {
    return (
        <div className="w-[400px]">
            <h1 className="text-sm font-semibold capitalize bg-white text-secondary px-2 py-1 rounded-md">{status} tasks</h1>
            <Separator className="my-2" />
            <div className="flex flex-col space-y-4">
                {tasks
                    .filter((task) => task.status === status)
                    .map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
            </div>
        </div>
    );
}
