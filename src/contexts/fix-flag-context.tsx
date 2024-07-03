import { ReactNode, createContext, useContext, useMemo, useState } from "react";

export type FixFlag = "enabled" | "disabled";

const FixFlagContext = createContext<{
  flag: FixFlag;
  setFlag: (newFlag: FixFlag) => void;
} | null>(null);

export const FixFlagProvider = (props: { children: ReactNode }) => {
  const [flag, setFlag] = useState<FixFlag>("disabled");

  const handleSetFlag = (newFlag: FixFlag) => {
    setFlag(newFlag);
  };

  const value = useMemo(() => ({ flag, setFlag: handleSetFlag }), [flag]);

  return (
    <FixFlagContext.Provider value={value}>
      {props.children}
    </FixFlagContext.Provider>
  );
};

export const useFixFlag = () => {
  const context = useContext(FixFlagContext);

  if (context === null) {
    throw new Error("useFixFlag must be used within a FixFlagProvider");
  }

  return context;
};
