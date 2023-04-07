import {
  HeartIcon,
  ChatBubbleLeftIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

type Props = {
  likeAmount: string;
};

const CardFooter = ({ likeAmount }: Props) => {
  return (
    <footer className="w-full flex flex-col items-center">
      <div className="w-72 h-1 bg-gray-300/30 rounded-md pb-1" />
      <div className="flex justify-start pl-2 items-end w-full space-x-4 py-2">
        <span className="flex space-x-1 cursor-pointer">
          <HeartIcon className="w-6 h-6  text-slate-400" />
          <a className="text-slate-400 font-sans" href="#">
            {likeAmount}
          </a>
        </span>
        <span className="flex space-x-1 cursor-pointer">
          <ChatBubbleLeftIcon className="w-6 h-6  text-slate-400" />
          <a href="#" className="text-slate-400 font-sans">
            Reply
          </a>
        </span>
        <span className="flex space-x-1 cursor-pointer">
          <LinkIcon className="w-6 h-6  text-slate-400" />
          <a href="#" className="text-slate-400 font-sans">
            Copy link
          </a>
        </span>
      </div>
      <button className=" w-72 flex items-center justify-center bg-dark-blue border-white/40 border-2 p-2 rounded-md text-lg font-sans  shadow-gray-300 hover:bg-pink-400/70 hover:border-white/20 active:bg-pink-400/70 active:border-white/50 transition ease-out space-x-1">
        <p className="text-white text-center font-sans">Read one reply</p>
      </button>
    </footer>
  );
};

export default CardFooter;
