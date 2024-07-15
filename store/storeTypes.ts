import { ITask, status } from "@/models/models";

export interface ITaskSlice {
  tasks: ITask[];
  addTaskList: (taskList: ITask[]) => void;
  updateTaskStatus: (taskId: number, status: status) => void;
  addTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
}

export type IGlobalStore = ITaskSlice;
