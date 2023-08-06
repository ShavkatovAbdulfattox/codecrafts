/* eslint-disable react/prop-types */
import { useState } from "react";

import "./solutionHeader.scss";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tagList = [
  "Java",
  "Python",
  "Kotlin",
  "Postgres",
  "Linked List",
  "Two Pointers",
];

const SolutionHeader = ({ response, setResponse, handleClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setResponse({
      ...response,
      tags: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleTitle = (e) => {
    if (e.target.value.length > 0) {
      setIsActive(true);
      setResponse({ ...response, name: e.target.value });
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="post-header">
      <div className="post-header__title-post">
        <div className="post-header__title">
          <input
            type="text"
            placeholder="Post uchun nom kiriting"
            onChange={(e) => handleTitle(e)}
          />
        </div>
        <div className="post-header__buttons">
          <button>Cancel</button>
          <button
            className={`${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            Post
          </button>
        </div>
      </div>
      <div className="post-header__tags">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={response.tags}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {tagList.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={response.tags.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SolutionHeader;
