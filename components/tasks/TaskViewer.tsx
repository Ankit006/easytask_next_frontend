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
  userStoryId: number;
}

export default function TaskViewer({ tasks, userStoryId }: Props) {
  const addTaskList = useGlobalStore((state) => state.addTaskList);

  useEffect(() => {
    if (tasks && tasks.length > 0) {
      addTaskList(tasks);
    }
  }, [tasks, addTaskList]);

  return (
    <div className="flex justify-between space-x-2">
      <NewTaskList userStoryId={userStoryId} />
      <ActiveTaskList userStoryId={userStoryId} />
      <CompletedTaskList userStoryId={userStoryId} />
      <OnHoldTaskList userStoryId={userStoryId} />
      <PendingTaskList userStoryId={userStoryId} />
      <CanceledTaskList userStoryId={userStoryId} />
      <InvestigationTaskList userStoryId={userStoryId} />
    </div>
  );
}
