const Blob = () => {
  return (
    <div className="h-14 w-14">
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
          d="M27.3,-21.9C34.4,-12.9,38.4,-1.6,35.9,7.6C33.3,16.9,24.2,24,14.3,28.1C4.5,32.2,-6,33.2,-15,29.5C-24.1,25.8,-31.8,17.4,-35.3,6.7C-38.8,-4,-38.2,-17,-31.6,-25.9C-25.1,-34.7,-12.5,-39.5,-1.2,-38.5C10.1,-37.5,20.2,-30.9,27.3,-21.9Z"
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

export default Blob;
