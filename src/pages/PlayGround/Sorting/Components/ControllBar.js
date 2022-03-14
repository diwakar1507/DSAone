import React, { useState } from "react";
import { VscDebugStart } from "react-icons/vsc";
import { VscDebugRestart } from "react-icons/vsc";
import { ImPause } from "react-icons/im";

import {
  Slider,
  TextField,
  Button,
  ThemeProvider,
  styled,
} from "@mui/material";
import { delay } from "../Common/helper";
import { theme } from "../../common/MUI_Theme";
import shallow from "zustand/shallow";
import { useData, useControls } from "../Common/store";
import {
  convertInputToArrayString,
  convertArrayStringToArray,
  getRandomArray,
} from "../Common/helper";

const ArrayTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "#FD7014",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderColor: "#FD7014",
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
  "& input:valid:hover + fieldset": {
    borderColor: "#FD7014",
  },
});

const Generate = styled(Button)(({ theme }) => ({
  color: "#EEEEEE",
  backgroundColor: "#FD7014",
  "&:hover": {
    backgroundColor: "#C95408",
  },
}));

const ControllBar = () => {
  const [isPausing, setIsPausing] = useState(false);
  const [progress, speed] = useControls(
    (state) => [state.progress, state.speed],
    shallow
  );
  const [sortingArray, setSortingArray] = useData(
    (state) => [state.sortingArray, state.setSortingArray],
    shallow
  );
  const [startSorting, pauseSorting, resetSorting, setSpeed] = useControls(
    (state) => [
      state.startSorting,
      state.pauseSorting,
      state.resetSorting,
      state.setSpeed,
    ],
    shallow
  );

  const [arrayInput, setArrayInput] = useState(sortingArray);

  const startElement = (
    <VscDebugStart onClick={startSorting} color={"#FD7014"} size={"30px"} />
  );
  const pauseElement = (
    <ImPause onClick={pauseAndDelaySorting} color={"#FD7014"} size={"30px"} />
  );
  const resetElement = (
    <VscDebugRestart onClick={resetSorting} color={"#FD7014"} size={"30px"} />
  );
  const disabledPauseElement = <ImPause style={{ color: "#d1d1d1" }} size={"30px"}/>;

  async function pauseAndDelaySorting() {
    pauseSorting();
    setIsPausing(true);
    await delay(useControls.getState().swapTime);
    setIsPausing(false);
  }
  function arrayDataChangeHandler(value) {
    const arrayString = convertInputToArrayString(value);
    setArrayInput(arrayString);

    const array = convertArrayStringToArray(arrayString);
    setSortingArray(array);
    resetSorting();
  }

  function generate() {
    const randomArray = getRandomArray();
    setArrayInput(randomArray);
    setSortingArray(randomArray);
    resetSorting();
  }

  function getProgressButton() {
    if (isPausing) return disabledPauseElement;

    switch (progress) {
      case "reset":
        return startElement;
      case "start":
        return pauseElement;
      case "pause":
        return startElement;
      case "done":
        return disabledPauseElement;
      default:
        return null;
    }
  }
  return (
    <div className="flex items-center flex-wrapp-4">
      <ThemeProvider theme={theme}>
        <div className="flex flex-1 items-center pl-10 pr-10">
          <div className="mr-10">
            <Generate variant="outlined" color="secondary" onClick={generate}>
              Generate
            </Generate>
          </div>
          <ArrayTextField
            id="outlined-basic"
            label="Input"
            variant="outlined"
            onChange={(event) => arrayDataChangeHandler(event.target.value)}
            value={arrayInput}
            size="small"
            width="100px"
            color="secondary"
            className="flex-1"
          />
        </div>
        <div className="flex flex-1 items-center pr-10">
          <div className="flex-none text-xl text-plain-white mr-10">Speed</div>
          <Slider
            key={`slider-${speed}`}
            defaultValue={speed}
            onChange={(event, value) => setSpeed(value)}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
            color="secondary"
            style={{ flexGrow: 1, flexBasis: "100%" }}
          />
          <div className="flex ml-10 mr-5 gap-x-8">
            {getProgressButton()}
            {resetElement}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default ControllBar;
