import { format, getTime } from "date-fns";
import Input from "../Components/Input";
import { useState } from "react";
import {
  HeartIcon,
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
  ShoppingCartIcon,
  HomeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  BookmarkIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import Shirt from "../Public/shirt.webp";
import { Menu, MenuButton, MenuItem, MenuItems } from "../Components/Menu";
import {
  ListBox,
  ListBoxButton,
  ListBoxOptions,
  ListBoxOption,
} from "../Components/Selector";
import {
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "../Components/Tabs";
import CustomTabBtn from "../Components/CustomTabBtn";
import SwitchInput from "../Components/SwitchInput";
import CheckBox from "../Components/CheckBox";
import IconButton from "../Components/IconButton";
import RefInput from "../Components/RefInput";

const titleVal = "Select something";

const people = [
  { name: titleVal, unavailable: true },
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

const Contact = () => {
  const [selected, setSelected] = useState(people[0]);
  const [size, setSize] = useState("");
  const [liked, setLiked] = useState(false);
  const [tab, setTab] = useState("like");
  const [triggerAnimate, setTriggerAnimate] = useState(false);
  const [status, setStatus] = useState<{
    state: "sending" | "error" | "sent";
  }>({ state: "sending" });

  const changeStatus = (val: "sending" | "error" | "sent") => {
    setStatus({ state: val });
  };

  const [checked, setChecked] = useState(false);
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  type stateValues = "sending" | "error" | "success";
  const [uiState, setUiState] = useState<stateValues>("success");

  const activateAnimation = () => {
    setTriggerAnimate(true);
    setTimeout(() => {
      setTriggerAnimate(false);
    }, 1500);
  };

  const [showLikedTab, setShowLikedTab] = useState(false);
  const handleIsLikedTab = () => {
    if (liked === false) {
      setShowLikedTab(true);
      setTimeout(() => {
        setShowLikedTab(false);
      }, 1000);
    }
  };

  const [addToCart, setAddToCart] = useState(false);
  const handleAddToCart = () => {
    setAddToCart(true);
    setTimeout(() => {
      setAddToCart(false);
    }, 1000);
  };

  const [quantity, setQuantity] = useState(1);
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const subtractQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const [enabled, setEnabled] = useState(false);

  const [value, setValue] = useState("");
  const handleValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  let price = 49.99 * quantity;
  let formattedNumber = Number(price.toString().match(/^\d+(?:\.\d{0,2})?/));

  return (
    <div className="relative  h-screen flex flex-col space-y-4 justify-center items-center ">
      {/* //THIS IS THE TABS COMMPONENT */}
      {/* <div>
        <nav className="flex  space-x-6">
          <button onClick={() => setTab("like")}>
            <HeartIcon
              className={`h-10 w-10 border-b-4  ${
                tab === "like"
                  ? "text-dark-blue duration-300 border-transparent"
                  : "text-white border-white"
              }`}
            />
          </button>
          <button
            onClick={() => {
              setTab("shopping");
            }}
          >
            <ShoppingCartIcon
              className={`h-10 w-10 border-b-4  ${
                tab === "shopping"
                  ? "text-dark-blue duration-300 border-transparent"
                  : "text-white border-white"
              }`}
            />
          </button>
          <button
            onClick={() => {
              setTab("home");
            }}
          >
            <HomeIcon
              className={`h-10 w-10 border-b-4  ${
                tab === "home"
                  ? "text-dark-blue duration-300 border-transparent"
                  : "text-white border-white"
              }`}
            />
          </button>
        </nav>
        <div
          className={`h-1 w-10 bg-dark-blue -translate-y-1 ${
            tab === "like" ? "translate-x-0 duration-300" : ""
          }
          ${tab === "shopping" ? "translate-x-16 duration-300" : ""}
          ${tab === "home" ? "translate-x-32 duration-300" : ""}
          `}
        />
        <article
          className={`absolute py-4 w-24 text-center  transform -translate-x-1/2 left-1/2 translate-y-4 rounded-lg ${
            tab === "like"
              ? "z-30 duration-300 bg-dark-blue delay-100 text-white shadow-sm shadow-black/20"
              : "z-10 invisible text-transparent "
          }`}
        >
          Take me
        </article>
        <article
          className={`absolute py-4 w-24 text-center  transform -translate-x-1/2 left-1/2 translate-y-4 rounded-lg ${
            tab === "shopping"
              ? "z-30 duration-300 bg-dark-blue delay-100 text-white shadow-black/20"
              : "invisible text-transparent "
          }`}
        >
          To the
        </article>
        <article
          className={`absolute py-4 w-24 text-center  transform -translate-x-1/2 left-1/2 translate-y-4 rounded-lg ${
            tab === "home"
              ? "z-30 duration-300 bg-dark-blue delay-100 text-white shadow-black/20"
              : "z-10  inivisible text-transparent "
          }`}
        >
          Top
        </article>
      </div> */}
      {/* //THIS IS THE ANIMATE ON PRESS BUTTON */}
      {/* <button
        onClick={activateAnimation}
        className={`p-2  ${
          triggerAnimate
            ? "bg-light-green duration-300 ease-in-out"
            : "bg-dark-blue hover:bg-dark-blue/80 duration-300 ease-out-in"
        } rounded-lg border-1 border-light-green/20 shadow-md shadow-light-green/20 text-white w-44 flex justify-between group font-semibold overflow-hidden  `}
      >
        <p className={`${triggerAnimate ? "hidden " : ""}`}>ADD TO CART</p>

        <p className={`${triggerAnimate ? "block duration-300" : "hidden"}`}>
          ADDED TO CART!
        </p>
        <CheckCircleIcon
          className={`h-6 w-6 text-white ${
            triggerAnimate
              ? "scale-100  duration-300 rotate-0"
              : "scale-0 invisible rotate-90"
          }`}
        />
        <ShoppingCartIcon
          className={`h-6 w-6 text-white ${triggerAnimate ? "hidden" : ""}`}
        />
      </button> */}
      {/* <TabGroup>
        <TabList>
          <TabList>
            <Tab TabBtn={<CustomTabBtn title="asdf" />} />
            <Tab TabBtn={<CustomTabBtn title="fdasdf" />} />
          </TabList>
          <TabPanels>
            <TabPanel panel={<div className="h-14 w-14 bg-white"></div>} />
            <TabPanel panel={<div className="h-14 w-14 bg-red-500"></div>} />
          </TabPanels>
        </TabList>
      </TabGroup> */}
      {/* <ListBox
        value={selected}
        onChange={setSelected}
        isDefault={selected != people[0]}
        title={people[0].name}
      >
        <ListBoxButton
          isDefault={selected != people[0]}
          value={selected.name}
        />
        <ListBoxOptions>
          {people.map((person, personID) => (
            <ListBoxOption
              value={person}
              text={person.name}
              key={personID}
              disabled={person.unavailable}
            />
          ))}
        </ListBoxOptions>
      </ListBox> */}
      {/* <Input
        value={value}
        changeVal={handleValChange}
        placeHolder={"Type here"}
        children={<BookmarkIcon />}
      /> */}

      {/* <button className="p-2 bg-dark-blue text-lg tracking-wide font-semibold text-white rounded-lg border-2 border-dark-blue shadow-sm hover:bg-dark-blue/90 hover:border-dark-blue/90 hover:shadow-black/50 shadow-black/20 active:shadow-black/30 active:bg-dark-blue active:border-dark-blue">
        click me
      </button>

      <button className="p-2 bg-transparent text-lg tracking-wide font-semibold text-dark-blue rounded-lg border-2 border-dark-blue hover:shadow-black/50 shadow-sm shadow-black/20 active:shadow-black/30 active:bg-dark-blue/10">
        click me
      </button>

      <button className="p-2 bg-transparent text-lg tracking-wide font-semibold text-dark-blue rounded-lg border-2 border-transparent hover:shadow-black/10 hover:shadow-sm active:shadow-sm active:shadow-black/30 active:bg-dark-blue/10">
        click me
      </button> */}
      {/* <div className="p-4 m-4 bg-white rounded-lg shadow-sm shadow-black/50">
        <p className="text-dark-blue">Here is my card</p>
      </div> */}
      {/* <SwitchInput enabled={enabled} setEnabled={setEnabled} />
      <CheckBox checked={checked} setChecked={handleCheckChange} />
      <IconButton toolTip="home" children={<HomeIcon />} /> */}

      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col">
          <label className="text-dark-blue font-semibold pl-1">Username</label>
          <input
            type="email"
            required
            className="p-2 rounded-lg outline-none focus:ring-2 focus:ring-dark-blue shadow-sm  shadow-black/80 "
          />
        </div>
        <div className="flex flex-col">
          <label className="text-dark-blue font-semibold pl-1">Password</label>
          <input
            type="password"
            required
            className="p-2 rounded-lg outline-none focus:ring-2 focus:ring-dark-blue shadow-sm  shadow-black/80  "
          />
        </div>

        <div className="flex justify-center items-center space-x-2">
          <input type="checkbox" className="" />
          <span>
            Agree to{" "}
            <a href="#" className="text-blue-800">
              terms of service
            </a>
          </span>
        </div>

        <input
          type="submit"
          value="Submit"
          className="bg-dark-blue rounded-lg p-2 text-white cursor-pointer shadow-sm shadow-black hover:bg-dark-blue/90 active:bg-dark-blue mt-5"
        />
      </form>
    </div>
  );
};

export default Contact;
