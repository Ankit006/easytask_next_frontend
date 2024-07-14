"use client";
import useGlobalStore from "@/store/store";
import TaskLists from "./TaskLists";

export default function CompletedTaskList() {
  const list = useGlobalStore((state) => state.tasks);
  return <TaskLists tasks={list} status="completed" />;
}
