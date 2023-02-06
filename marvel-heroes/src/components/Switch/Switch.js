// import * as React from "react";
import React, { useEffect } from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitches({setShowComics}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  // console.log(checked)
  // console.log(1)
  useEffect(() => {
    setShowComics(checked)
  }, [checked]);

  return (
    <>
      <span>Show Comics</span>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </>
  );
}
