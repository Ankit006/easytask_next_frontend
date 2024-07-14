import { ITask } from "@/models/models";
import { IGlobalStore, IOnHoldTaskSlice } from "@/store/storeTypes";
import { StateCreator } from "zustand";

const onHoldTaskSlice: StateCreator<IGlobalStore, [], [], IOnHoldTaskSlice> = (
  set
) => ({
  onHoldTasks: [],
  addOnHoldTask: (task: ITask) =>
    set((state) => ({ onHoldTasks: [...state.onHoldTasks, task] })),
  removeOnHoldTask: (task: ITask) =>
    set((state) => ({
      onHoldTasks: state.onHoldTasks.filter((data) => data.id !== task.id),
    })),
});

export default onHoldTaskSlice;
