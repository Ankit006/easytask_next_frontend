import { ITask } from "@/models/models";
import { IGlobalStore, IPendingTaskSlice } from "@/store/storeTypes";
import { StateCreator } from "zustand";

const pendingTaskSlice: StateCreator<
  IGlobalStore,
  [],
  [],
  IPendingTaskSlice
> = (set) => ({
  pendingTasks: [],
  addPendingTask: (task: ITask) =>
    set((state) => ({ pendingTasks: [...state.pendingTasks, task] })),
  removePendingTask: (task: ITask) =>
    set((state) => ({
      pendingTasks: state.pendingTasks.filter((data) => data.id !== task.id),
    })),
});

export default pendingTaskSlice;
