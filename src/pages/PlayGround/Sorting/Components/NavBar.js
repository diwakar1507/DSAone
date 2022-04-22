import React from "react";
import { AppBar, ThemeProvider } from "@mui/material";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { sortingAlgorithms } from "../Common/config";
import { useData } from "../Common/store";
import shallow from "zustand/shallow";
import { theme } from "../../Common/MUI_Theme";
import { GoBack } from "../../../../Components/GoBack";

const NavBar = () => {
  const [algorithm, setAlgorithm] = useData(
    (state) => [state.algorithm, state.setAlgorithm],
    shallow
  );

  return (
    <div className="w-full">
      <div className="flex items-center justify-center backdrop-filter shadow-bar backdrop-blur-md backdrop-brightness-125 shadow-2xl">
        <div className="basis-1/12">
          <GoBack url="/PlayGround" />
        </div>
        <div className="basis-10/12 text-center text-5xl bg-clip-text text-transparent bg-gradient-to-b from-primary-3 to-orange-400 p-8">
          Sorting Algos
        </div>
        <div className="basis-1/12"></div>
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
            {sortingAlgorithms.map((algorithm) => (
              <Tab label={algorithm.title} key={algorithm.title} />
            ))}
            <Tab label="All" />
          </Tabs>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default NavBar;
