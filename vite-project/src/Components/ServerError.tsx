import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const ServerError = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-12 -translate-y-1/2 text-center text-white text-lg">
      <ExclamationTriangleIcon className="w-14 h-14 text-white " />
      Error
    </div>
  );
};

export default ServerError;
