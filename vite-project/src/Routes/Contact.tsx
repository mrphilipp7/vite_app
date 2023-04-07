import Input from "../Components/Input";
import { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import SpeedDial from "../Components/SpeedDial";
import axios from "axios";
import Loading from "../Components/Loading";

const Contact = () => {
  //Input
  const [value, setValue] = useState("");
  const handleValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="justify-center items-center flex h-screen space-x-4 ">
      <SpeedDial />
      <Input value={value} placeHolder={"yeah"} changeVal={handleValChange}>
        <UserIcon />
      </Input>
      {/* <Loading /> */}
      {/* <p>{data.title}</p> */}
    </div>
  );
};

export default Contact;
