import SpeedDial from "../Components/SpeedDial";
import Loading from "../Components/Loading";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../API/Posts";
import ServerError from "../Components/ServerError";
import Card from "../Components/Card/Card";
import { Link } from "react-router-dom";

const Contact = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["getAllPosts"],
    queryFn: getAllPosts,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ServerError />;
  }

  return (
    <div className="justify-center items-center flex h-screen space-x-4 ">
      <SpeedDial />
      <Card>
        <Card.Title title={"List of names"}></Card.Title>
        <Card.Body>
          <div className="flex items-center justify-start space-x-12">
            <ul className="space-y-2 pt-4">
              {data.map((data: { id: string; author: string }) => (
                <li key={data.id}>
                  <Link to={`/contact/${data.id}`}>
                    <button className="hover:bg-white/60 active:bg-white/70 active:border-white/90 text-white py-2 w-20 bg-white/50 flex justify-center items-center rounded-md border-box border-white/50 border-2">
                      <p className="font-medium text-white font-sans tracking-wide">
                        {data.author}
                      </p>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
