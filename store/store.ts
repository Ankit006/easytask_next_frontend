import { create } from "zustand";
import newTaskSlice from "./slices/tasks/NewTaskSlice";
import activeTaskSlice from "./slices/tasks/activeTaskSlice";
import canceledTaskSlice from "./slices/tasks/canceledTaskSlice";
import { completedTaskSlice } from "./slices/tasks/completedTaskSlice";
import investigationTaskSlice from "./slices/tasks/investigationTaskSlice";
import onHoldTaskSlice from "./slices/tasks/onHoldTaskSlice";
import pendingTaskSlice from "./slices/tasks/pendingTaskSlice";
import { IGlobalStore } from "./storeTypes";

const useGlobalStore = create<IGlobalStore>()((...a) => ({
  ...newTaskSlice(...a),
  ...activeTaskSlice(...a),
  ...completedTaskSlice(...a),
  ...onHoldTaskSlice(...a),
  ...pendingTaskSlice(...a),
  ...canceledTaskSlice(...a),
  ...investigationTaskSlice(...a),
}));

export default useGlobalStore;
