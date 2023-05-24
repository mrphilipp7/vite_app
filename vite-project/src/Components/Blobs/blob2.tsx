const Blob2 = () => {
  return (
    <div className="h-10 w-10">
      {" "}
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(239, 68, 68, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(251, 168, 31, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M23.7,-29.1C31.1,-22.1,37.7,-15,40.4,-6.2C43,2.6,41.9,13.1,36.9,21.1C32,29.1,23.4,34.8,14.4,37C5.4,39.1,-3.9,37.8,-12.2,34.4C-20.5,31,-27.6,25.6,-33.3,18.1C-39,10.6,-43.2,1.1,-41.4,-7.1C-39.7,-15.3,-32.1,-22.2,-24.2,-29.1C-16.3,-36,-8.1,-43,0,-43C8.2,-43.1,16.4,-36.2,23.7,-29.1Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          className="transition: all 0.3s ease 0s;"
          stroke-width="0"
        ></path>
      </svg>
    </div>
  );
};

export default Blob2;
