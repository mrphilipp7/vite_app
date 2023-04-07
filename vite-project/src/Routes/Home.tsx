import Button from "../Components/Button";
import IconButton from "../Components/IconButton";
import { TrashIcon } from "@heroicons/react/24/outline";
import Card from "../Components/Card/Card";
import SpeedDial from "../Components/SpeedDial";
import Loading from "../Components/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getAllPosts } from "../API/Posts";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import Input from "../Components/Input";
import {
  UserIcon,
  BriefcaseIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  //pull data query
  const { isLoading, isError, data } = useQuery({
    queryKey: ["getAllPosts"],
    queryFn: getAllPosts,
  });

  //state for author input
  const [value, setValue] = useState("");
  const handleValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  //state for title input
  const [title, setTitle] = useState("");
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  //form submission event
  const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { value: value, title: title };
    console.log(data);
    resetForm();
  };

  //set values back to default state
  const resetForm = () => {
    setValue("");
    setTitle("");
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <div className="justify-center items-center flex h-screen space-x-4">
      <div className="flex space-x-8 min-w-96 p-2  my-2 backdrop-blur-xl bg-white/30 mt-2 text-center rounded-md border-white/10 border-2 shadow-sm shadow-gray-300">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="tracking-wide text-lg font-medium text-left">
                Author
                <div className="w-full h-1 bg-gray-300/30 rounded-md pb-1" />
              </th>
            </tr>
          </thead>
          {/* <hr /> */}

          <tbody className="text-left space-y-4">
            {data.map((data: { id: Key; author: string }) => (
              <tr key={data.id}>
                <td className="tracking-wide text-lg ">{data.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="tracking-wide text-lg font-medium text-left">
                Title
                <div className="w-full h-1 bg-gray-300/30 rounded-md pb-1" />
              </th>
            </tr>
          </thead>
          {/* <hr /> */}
          <tbody className="text-left space-y-4">
            {data.map((data: { id: Key; title: string }) => (
              <tr key={data.id}>
                <td className="tracking-wide text-lg ">{data.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card>
        <div className="h-14 w-14 flex justify-center absolute top-2 right-0">
          <IconButton
            toolTip="reset"
            onClick={() => {
              resetForm();
            }}
          >
            <TrashIcon />
          </IconButton>
        </div>
        <Card.Title title="Add User" />
        <form onSubmit={onSubmit}>
          <div className="mt-4">
            <Input
              value={value}
              placeHolder={"Author"}
              changeVal={handleValChange}
              required={true}
            >
              <UserIcon />
            </Input>
          </div>
          <div className="my-8 ">
            <Input
              value={title}
              placeHolder={"Title"}
              changeVal={handleTitleChange}
              required={true}
            >
              <BriefcaseIcon />
            </Input>
          </div>
          <Button>
            <ArrowUpTrayIcon className="h-5 w-5 text-white mr-2" />
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Home;
