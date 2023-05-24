type Props = {
  title?: string;
};
const WeatherCardTitle = ({ title }: Props) => {
  return (
    <>
      <header className="sticky top-0  py-4 min-w-max  bg-gray-300/30 rounded-t-lg text-center text-white ">
        {title}
        <hr className="mx-2" />
      </header>
    </>
  );
};

export default WeatherCardTitle;
