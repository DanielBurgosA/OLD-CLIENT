import { color } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../Redux/Slicers/projectSlicer";
import style from "./SeachBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handlerInputChange = (e) => {
    setName(e.target.value);
    dispatch(searchName(e.target.value));
  };

  return (
    <div>
      <input
        className={style.input}
        type="text"
        placeholder="Search project by name..."
        onChange={(e) => handlerInputChange(e)}
        value={name}
      />
    </div>
  );
}
