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
import { delay } from "../../Common/helper";
import { theme } from "../../Common/MUI_Theme";
import shallow from "zustand/shallow";
import { useData, useControls } from "../Common/store";
import {
  convertInputToArrayString,
  convertArrayStringToArray,
  getRandomArray,
} from "../../Common/helper";

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
  const [searchingArray, setSearchingArray] = useData(
    (state) => [state.searchingArray, state.setSearchingArray],
    shallow
  );

  const [searchElement, setSearchingElement] = useData(
    (state) => [state.searchElement, state.setSearchingElement],
    shallow
  );
  const [startSearching, pauseSearching, resetSearching, setSpeed] =
    useControls(
      (state) => [
        state.startSearching,
        state.pauseSearching,
        state.resetSearching,
        state.setSpeed,
      ],
      shallow
    );
  const [arrayInput, setArrayInput] = useState(searchingArray);
  const [searchInput, setSearchInput] = useState(searchElement);

  const startElement = (
    <VscDebugStart
      onClick={() => {
        if (searchInput !== null && arrayInput.length !== 0) startSearching();
      }}
      color={"#FD7014"}
      size={"30px"}
    />
  );
  const pauseElement = (
    <ImPause onClick={pauseAndDelaySearching} color={"#FD7014"} size={"30px"} />
  );
  const resetElement = (
    <VscDebugRestart onClick={resetSearching} color={"#FD7014"} size={"30px"} />
  );
  const disabledPauseElement = (
    <ImPause style={{ color: "#d1d1d1" }} size={"30px"} />
  );
  async function pauseAndDelaySearching() {
    pauseSearching();
    setIsPausing(true);
    await delay(useControls.getState().compareTime);
    setIsPausing(false);
  }
  function arrayDataChangeHandler(value) {
    const arrayString = convertInputToArrayString(value);
    setArrayInput(arrayString);

    const array = convertArrayStringToArray(arrayString);
    setSearchingArray(array);
    resetSearching();
  }
  function searchDataChangeHandler(value) {
    const re = /^[0-9\b]+$/;
    if (value === "") {
      setSearchInput(null);
      setSearchingElement(null);
      resetSearching();
    } else if (re.test(value)) {
      setSearchInput(value);

      const element = parseInt(value, 10);
      setSearchingElement(element);
      resetSearching();
    }
  }
  function generate() {
    const randomArray = getRandomArray();
    setArrayInput(randomArray);
    setSearchingArray(randomArray);
    resetSearching();
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
          <div className="pl-4 w-40">
            <ArrayTextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={(event) => searchDataChangeHandler(event.target.value)}
              value={searchInput}
              size="small"
              color="secondary"
            />
          </div>
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
