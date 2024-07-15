"use client";
import useGlobalStore from "@/store/store";
import TaskLists from "./TaskLists";

export default function OnHoldTaskList({
  userStoryId,
}: {
  userStoryId: number;
}) {
  const list = useGlobalStore((state) => state.tasks);
  return <TaskLists tasks={list} status="on hold" userStoryId={userStoryId} />;
}
