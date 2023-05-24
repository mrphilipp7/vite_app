import { ArchiveBoxIcon } from "@heroicons/react/24/outline";

const Website = () => {
  return (
    <>
      <header className="flex p-4 justify-between">
        <div className="flex ml-10">
          <ArchiveBoxIcon className="w-12 h-12 text-white" />
          <p className="text-white text-2xl flex items-center">
            Warehouse stuff
          </p>
        </div>
        <div className="flex mr-10">
          <nav>
            <ul className="flex space-x-4 items-center h-full mx-4 text-dark-blue font-semibold ">
              <li className="border-b-2 border-b-transparent hover:border-dark-blue cursor-pointer select-none">
                Pricing
              </li>
              <li className="border-b-2 border-b-transparent hover:border-dark-blue cursor-pointer select-none">
                Features
              </li>
              <li className="border-b-2 border-b-transparent hover:border-dark-blue cursor-pointer select-none">
                Learn More
              </li>
            </ul>
          </nav>
          <button
            className={`border-2 px-2 border-dark-blue text-dark-blue font-semibold font-sans bg-transparent rounded-md hover:bg-dark-blue/20 active:bg-dark-blue active:text-white`}
          >
            Try Free For 30 Days
          </button>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
};

export default Website;
