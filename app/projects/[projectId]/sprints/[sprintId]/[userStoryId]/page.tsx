import CreateTask from "@/components/tasks/CreateTask";
import TaskViewer from "@/components/tasks/TaskViewer";
import { getTasks } from "@/queries/queries";
import React from "react";

export default async function Tasks({
  params,
}: {
  params: { userStoryId: string; projectId: string };
}) {
  const tasks = await getTasks(parseInt(params.userStoryId));
  return (
    <div>
      <CreateTask
        userStoryId={parseInt(params.userStoryId)}
        projectId={parseInt(params.projectId)}
      />
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-primar  scrollbar-track-transparent">
        <div className="mt-12 w-[2000px] pb-12">
          <TaskViewer
            tasks={tasks}
            userStoryId={parseInt(params.userStoryId)}
          />
        </div>
      </div>
    </div>
  );
}
