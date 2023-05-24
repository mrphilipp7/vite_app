import { ReactNode } from "react";
import WeatherCardTitle from "./WeatherCardTitle";
import WeatherCardBody from "./WeatherCardBody";
type Props = {
  children: ReactNode;
};

const WeatherCard = ({ children }: Props) => {
  return (
    <article className="w-80 rounded-md backdrop-blur-lg relative ">
      {children}
    </article>
  );
};

WeatherCard.Body = WeatherCardBody;
WeatherCard.Title = WeatherCardTitle;

export default WeatherCard;
