import React from "react";
import { SWRConfig } from "swr";

const GlobalContextProvider: React.FC = ({ children }) => {
    return (
        <SWRConfig
            value={{ shouldRetryOnError: true, errorRetryInterval: 6000 }}
        >
            {children}
        </SWRConfig>
    );
};
