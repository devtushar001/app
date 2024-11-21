import { createContext } from "react";
import { hostelData } from "../../src/assets/Database/hostelData.js"

export const HostelContext = createContext(null);

const HostelContextProvider = (props) => {
  const contextValue = {
    hostelData
  }
  return (
    <HostelContext.Provider value={contextValue}>
      {props.children}
    </HostelContext.Provider >
  )
}

export default HostelContextProvider;