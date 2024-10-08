import { createContext, ReactNode, useContext } from "react";
import { RootStore } from "../store/root";

let store: RootStore;

const StoreContext = createContext<RootStore | undefined>(undefined);

// create the provider component
export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  //only create the store once ( store is a singleton)
  const root = store ?? new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};

// create the hook
export const useRootStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
};
