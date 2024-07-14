import { ITask } from "@/models/models";
import { ICompletedTaskSlice, IGlobalStore } from "@/store/storeTypes";
import { StateCreator } from "zustand";

export const completedTaskSlice: StateCreator<
  IGlobalStore,
  [],
  [],
  ICompletedTaskSlice
> = (set) => ({
  completedTasks: [],
  addCompletedTask: (task: ITask) =>
    set((state) => ({ completedTasks: [...state.completedTasks, task] })),
  removeCompletedTask: (task: ITask) =>
    set((state) => ({
      completedTasks: state.completedTasks.filter(
        (data) => data.id !== task.id
      ),
    })),
});
