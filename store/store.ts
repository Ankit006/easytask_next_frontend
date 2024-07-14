import { create } from "zustand";

import taskSlice from "./slices/tasks/taskSlice";
import { IGlobalStore } from "./storeTypes";

const useGlobalStore = create<IGlobalStore>()((...a) => ({
  ...taskSlice(...a),
}));

export default useGlobalStore;
