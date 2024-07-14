"use client";
import { ITask } from "@/models/models";
import ActiveTaskList from "./ActiveTaskList";
import CanceledTaskList from "./CanceledTaskList";
import CompletedTaskList from "./CompletedTaskList";
import InvestigationTaskList from "./InvestigationTaskList";
import NewTaskList from "./NewTaskList";
import OnHoldTaskList from "./OnHoldTaskList";
import PendingTaskList from "./PendingTaskList";
import useGlobalStore from "@/store/store";
import { useEffect } from "react";

interface Props {
  tasks: ITask[];
}

export default function TaskViewer({ tasks }: Props) {
  const addTaskList = useGlobalStore((state) => state.addTaskList);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      addTaskList(tasks);
    }
  }, [tasks, addTaskList]);

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
