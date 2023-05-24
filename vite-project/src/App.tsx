import { Outlet, Link } from "react-router-dom";

function App() {
  //entry for application. Will Always show header
  return (
    <>
      {/* <header className="flex justify-center">
        <nav className="min-w-96 p-2  my-2 backdrop-blur-xl bg-white/30 mt-2 text-center rounded-md border-white/10 border-2 shadow-sm shadow-gray-300">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link to="/">
                <button className="py-1 rounded-md w-24 bg-transparent hover:bg-white/20 active:bg-white/30">
                  <p className="text-lg font-medium tracking-wide font-sans text-white">
                    Home
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="text-white py-1 rounded-md w-24 bg-transparent hover:bg-white/20 active:bg-white/30">
                  <p className="text-lg font-medium tracking-wide font-sans">
                    Contact
                  </p>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <Outlet />
      {/* <footer className="">
        <div className="flex justify-center">
          <p className="text-white text-sm font-medium tracking-wide font-sans">
            Copyright &copy; 2021
          </p>
        </div>
      </footer> */}
    </>
  );
}

export default App;
