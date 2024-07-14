import { ITask } from "@/models/models";
import { IActiveTaskSlice, IGlobalStore } from "@/store/storeTypes";
import { StateCreator } from "zustand";

const activeTaskSlice: StateCreator<IGlobalStore, [], [], IActiveTaskSlice> = (
  set
) => ({
  activeTasks: [],
  addActiveTask: (task: ITask) =>
    set((state) => ({ activeTasks: [...state.activeTasks, task] })),
  removeActiveTask: (task: ITask) =>
    set((state) => ({
      activeTasks: state.activeTasks.filter((data) => data.id !== task.id),
    })),
});

export default activeTaskSlice;
