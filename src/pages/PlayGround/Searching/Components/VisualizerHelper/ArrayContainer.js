import React from "react";
import {
  comparisionColor,
  visistedColor,
  foundColor,
} from "../../Common/config";
import { ArrayHolder, ArrayItem } from "../../Common/Animations";

const ArrayContainer = ({ array, highlightIndex, checkedIndices, foundAt }) => {
  function getBackgroundColor(i) {
    if (foundAt === i) {
      return foundColor;
    }
    if (highlightIndex === i) {
      return comparisionColor;
    }
    if (checkedIndices.includes(i)) {
      return visistedColor;
    }
    return "";
  }
  return (
    <ArrayHolder>
      {array.map((value, i) => {
        if (foundAt !== -1 && i === foundAt) {
          return (
            <ArrayItem
              key={i + ":" + value}
              style={{ order: i, backgroundColor: getBackgroundColor(i) }}>
              {value}
            </ArrayItem>
          );
        }
        if (i === highlightIndex) {
          return (
            <ArrayItem
              key={i + ":" + value}
              style={{ order: i, backgroundColor: getBackgroundColor(i) }}>
              {value}
            </ArrayItem>
          );
        }
        return (
          <ArrayItem
            key={i + ":" + value}
            style={{ order: i, backgroundColor: getBackgroundColor(i) }}>
            {value}
          </ArrayItem>
        );
      })}
    </ArrayHolder>
  );
};

export default ArrayContainer;
