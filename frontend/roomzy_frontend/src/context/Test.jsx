import { createContext, useState } from "react";

export const TestContext = createContext();

let Test = ({ children }) => {
  let [currentTab, setTab] = useState("home");
  return (
    <TestContext.Provider value={{ currentTab, setTab }}>
      {children}
    </TestContext.Provider>
  );
};

export default Test;
