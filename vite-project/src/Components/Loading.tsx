import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-12 -translate-y-1/2  ">
      <PulseLoader color="white" />
    </div>
  );
};

export default Loading;
