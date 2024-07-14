import { ITask } from "@/models/models";
import { ICanceledTaskSlice, IGlobalStore } from "@/store/storeTypes";
import { StateCreator } from "zustand";

const canceledTaskSlice: StateCreator<
  IGlobalStore,
  [],
  [],
  ICanceledTaskSlice
> = (set) => ({
  canceledTasks: [],
  addCanceledTasks: (task: ITask) =>
    set((state) => ({ canceledTasks: [...state.canceledTasks, task] })),
  removeCanceledTasks: (task: ITask) =>
    set((state) => ({
      canceledTasks: state.canceledTasks.filter((data) => data.id !== task.id),
    })),
});

export default canceledTaskSlice;
