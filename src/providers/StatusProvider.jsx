import React, { useState } from "react";
import { StatusContext } from "../context/StatusContext";

export const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState("disconnected"); // 'connecting', 'connected', 'disconnected', 'error'

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};
