import classnames from "classnames";
type Props = {
  maxHeight?: string;
};

const WeatherCardBody = ({ maxHeight = "" }: Props) => {
  const classStr = classnames(
    "bg-gray-300/30 overflow-y-hidden min-h-16  rounded-b-lg text-white  text-center ",
    maxHeight
  );

  return (
    <div className={classStr}>
      <p>Line 1</p>
      <p>Line</p>
      <p>Line</p>
      <p>Line</p>
      <p>Line</p>
      <p>Line</p>
      <p>Line</p>
    </div>
  );
};

export default WeatherCardBody;
