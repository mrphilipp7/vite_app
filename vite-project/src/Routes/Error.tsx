import { useRouteError } from "react-router-dom";

const Error = () => {
  const error: any = useRouteError();
  return (
    <div className="backdrop-blur-xl bg-white/30 p-4 m-auto mt-2 text-center rounded-md border-white/10 border-2 shadow-sm shadow-gray-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-lg tracking-wide underline p-2 font-sans font-medium">
        Error
      </h1>
      <h1 className="font-sans font-medium">
        {error.statusText || error.message}
      </h1>
    </div>
  );
};

export default Error;
