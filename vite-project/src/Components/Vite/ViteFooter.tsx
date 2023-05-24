import {
  HeartIcon,
  ChatBubbleLeftIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

type Props = {
  date: string;
};

const ViteFooter = ({ date }: Props) => {
  return (
    <>
      <hr />
      <footer className="flex justify-between">
        <ul className="p-2 flex space-x-4 justify-center">
          <li>
            <HeartIcon className="h-6 w-6 cursor-pointer" aria-hidden="true" />
          </li>
          <li>
            <ChatBubbleLeftIcon className="h-6 w-6 cursor-pointer" />
          </li>
          <li>
            <LinkIcon className="h-6 w-6 cursor-pointer" aria-hidden="true" />
          </li>
        </ul>
        <p className="py-2 text-gray-400">{date}</p>
      </footer>
      <button className="w-full rounded-lg bg-purple-600 hover:bg-purple-700 active:bg-purple-800 p-2 text-center text-white">
        Reply
      </button>
    </>
  );
};

export default ViteFooter;
