"use client";
import { ITask, status } from "@/models/models";
import React, { useEffect } from "react";
import { Separator } from "../ui/separator";
import TaskCard from "./TaskCard";
import { v4 as uuid } from "uuid";
import useGlobalStore from "@/store/store";
import { useFormState } from "react-dom";
import { changeTaskStatusAction } from "@/actions/taskAction";
import { useToast } from "../ui/use-toast";

interface Props {
  tasks: ITask[];
  status: status;
  userStoryId: number;
}

export default function TaskLists({ tasks, status, userStoryId }: Props) {
  const updateTaskStatus = useGlobalStore((state) => state.updateTaskStatus);
  const { toast } = useToast();
  const [state, dispatch] = useFormState(
    changeTaskStatusAction.bind(null, userStoryId),
    {},
  );

  useEffect(() => {
    if (state.error) {
      toast({
        title: state.error,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  function dragHandler(ev: React.DragEvent<HTMLDivElement>) {
    const target = ev.target;
    if (target instanceof HTMLDivElement) {
      ev.dataTransfer.setData("text/plain", target.id);
      ev.dataTransfer.effectAllowed = "move";
    }
  }

  function dragOverHandler(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }

  function dropHandler(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    const taskId = ev.dataTransfer.getData("text/plain");
    const target = ev.target;
    if (target instanceof HTMLDivElement && taskId) {
      const status = target.getAttribute("data-status") as status;
      updateTaskStatus(parseInt(taskId), status);
      const form = new FormData();
      form.append("taskId", taskId);
      form.append("status", status);
      dispatch(form);
    }
  }

  return (
    <div
      className="w-[400px] pb-20"
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
      data-status={status}
    >
      <h1 className="text-sm font-semibold capitalize bg-white text-secondary px-2 py-1 rounded-md">
        {status} tasks
      </h1>
      <Separator className="my-2" />
      <div className="flex flex-col space-y-4">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <TaskCard key={uuid()} task={task} onDragStart={dragHandler} />
          ))}
      </div>
    </div>
  );
}
