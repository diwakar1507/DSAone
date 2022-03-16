import React from "react";
import { AppBar, ThemeProvider } from "@mui/material";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { searchingAlgorithms } from "../Common/config";
import { useData } from "../Common/store";
import shallow from "zustand/shallow";
import { theme } from "../../Common/MUI_Theme";

const NavBar = () => {
  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );
  return (
    <div className="w-full">
      <div className="flex items-center justify-center backdrop-filter shadow-bar backdrop-blur-md backdrop-brightness-125 shadow-2xl">
        <div className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-primary-3 to-orange-400 p-8">
          Searching Algos
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          color="primary"
          className="pt-4 pb-3 mb-6 pl-10 pr-10">
          <Tabs
            value={algorithm}
            onChange={(event, id) => setAlgorithm(id)}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto">
            {searchingAlgorithms.map((algorithm) => (
              <Tab label={algorithm.title} key={algorithm.title} />
            ))}
            <Tab label="All"/>
          </Tabs>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default NavBar;
