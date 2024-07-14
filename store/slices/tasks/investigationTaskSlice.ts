import { ITask } from "@/models/models";
import { IGlobalStore, IUnderInvestigationSlice } from "@/store/storeTypes";
import { StateCreator } from "zustand";

const investigationTaskSlice: StateCreator<
  IGlobalStore,
  [],
  [],
  IUnderInvestigationSlice
> = (set) => ({
  investigationTasks: [],
  addInvestigationTasks: (task: ITask) =>
    set((state) => ({
      investigationTasks: [...state.investigationTasks, task],
    })),
  removeInvestigationTasks: (task: ITask) =>
    set((state) => ({
      investigationTasks: state.investigationTasks.filter(
        (data) => data.id !== task.id
      ),
    })),
});

export default investigationTaskSlice;
