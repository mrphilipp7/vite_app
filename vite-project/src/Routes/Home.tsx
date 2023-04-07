import Button from "../Components/Button";
import IconButton from "../Components/IconButton";
import { TrashIcon } from "@heroicons/react/24/outline";
import Card from "../Components/Card/Card";
import SpeedDial from "../Components/SpeedDial";
import Loading from "../Components/Loading";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllPosts, createPost } from "../API/Posts";
import { Key, useState } from "react";
import Input from "../Components/Input";
import {
  UserIcon,
  BriefcaseIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import ServerError from "../Components/ServerError";
import SnackBar from "../Components/SnackBar";

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

  const [success, setSuccess] = useState(false);
  const handleSuccessChange = () => {
    setSuccess(false);
  };

  const [failure, setFailure] = useState(false);
  const handleFailureChange = () => {
    setFailure(false);
  };

  //form submission event
  const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    createPostMutation.mutate({
      title: title,
      author: value,
    });
    resetForm();
  };

  //set values back to default state
  const resetForm = () => {
    setValue("");
    setTitle("");
  };

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    },
    onError: () => {
      setFailure(true);
      setTimeout(() => {
        setFailure(false);
      }, 2000);
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ServerError />;
  }

  return (
    <div className="justify-center items-center flex h-screen space-x-4 flex-col md:flex-row">
      {success && (
        <SnackBar
          message={"Success"}
          success={true}
          onClick={handleSuccessChange}
        />
      )}
      {failure && (
        <SnackBar
          message={"Failure"}
          success={false}
          onClick={handleFailureChange}
        />
      )}

      {}
      {/* Author */}
      <div className="flex space-x-8 min-w-96 p-2  my-2 backdrop-blur-xl bg-white/30 mt-2 text-center rounded-md border-white/10 border-2 shadow-sm shadow-gray-300">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="tracking-wide text-lg font-medium text-left text-white">
                Author
                <div className="w-full h-1 bg-gray-300/30 rounded-md pb-1" />
              </th>
            </tr>
          </thead>

          <tbody className="text-left space-y-4">
            {data.map((data: { id: Key; author: string }) => (
              <tr key={data.id}>
                <td className="tracking-wide text-lg text-white">
                  {data.author}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Form */}
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
          <Button disabled={createPostMutation.isLoading}>
            <ArrowUpTrayIcon className="h-5 w-5 text-white mr-2" />
            {createPostMutation.isLoading ? "Submitting" : "Submit"}
          </Button>
        </form>
      </Card>

      {/* Title  */}
      <div className="flex space-x-8 min-w-96 p-2  my-2 backdrop-blur-xl bg-white/30 mt-2 text-center rounded-md border-white/10 border-2 shadow-sm shadow-gray-300">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="tracking-wide text-lg font-medium text-left text-white">
                Title
                <div className="w-full h-1 bg-gray-300/30 rounded-md pb-1" />
              </th>
            </tr>
          </thead>
          <tbody className="text-left space-y-4">
            {data.map((data: { id: Key; title: string }) => (
              <tr key={data.id}>
                <td className="tracking-wide text-lg text-white">
                  {data.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
