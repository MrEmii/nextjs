import { FC, ReactNode } from "react";

const DarkLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
};

export default DarkLayout;
