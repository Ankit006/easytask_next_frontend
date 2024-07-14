import { ITask } from "@/models/models";

export interface IActiveTaskSlice {
  activeTasks: ITask[];
  addActiveTask: (task: ITask) => void;
  removeActiveTask: (task: ITask) => void;
}

export interface INewTaskSlice {
  newTasks: ITask[];
  addNewTask: (task: ITask) => void;
  removeNewTask: (task: ITask) => void;
}

export interface ICompletedTaskSlice {
  completedTasks: ITask[];
  addCompletedTask: (task: ITask) => void;
  removeCompletedTask: (task: ITask) => void;
}

export interface IOnHoldTaskSlice {
  onHoldTasks: ITask[];
  addOnHoldTask: (task: ITask) => void;
  removeOnHoldTask: (task: ITask) => void;
}

export interface IPendingTaskSlice {
  pendingTasks: ITask[];
  addPendingTask: (task: ITask) => void;
  removePendingTask: (task: ITask) => void;
}

export interface ICanceledTaskSlice {
  canceledTasks: ITask[];
  addCanceledTasks: (task: ITask) => void;
  removeCanceledTasks: (task: ITask) => void;
}

export interface IUnderInvestigationSlice {
  investigationTasks: ITask[];
  addInvestigationTasks: (task: ITask) => void;
  removeInvestigationTasks: (task: ITask) => void;
}

export type IGlobalStore = INewTaskSlice &
  IActiveTaskSlice &
  ICompletedTaskSlice &
  IOnHoldTaskSlice &
  IPendingTaskSlice &
  ICanceledTaskSlice &
  IUnderInvestigationSlice;
