import "./icons.scss";

export const PlinkoIconSvg = ({ className }) => {
  return (
    <span className={className}>
      <svg
        width="26"
        height="27"
        viewBox="0 0 26 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <defs>
            <linearGradient id="Gradient-23" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="100%" stop-color="#2D3660" />
              <stop offset="100%" stop-color="#2D3660" className="first" />
            </linearGradient>

            <linearGradient id="Gradient-24" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="0%" stop-color="#4D5B97" />
              <stop offset="100%" stop-color="#4D5B97" className="second" />
            </linearGradient>

            <linearGradient id="Gradient-25" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="0%" stop-color="#3B436B" />
              <stop offset="100%" stop-color="#3B436B" className="third" />
            </linearGradient>
          </defs>
          <path
            d="M12.9997 10.3934C15.5073 10.3934 17.5401 8.36056 17.5401 5.85295C17.5401 3.34533 15.5073 1.3125 12.9997 1.3125C10.4921 1.3125 8.45923 3.34533 8.45923 5.85295C8.45923 8.36056 10.4921 10.3934 12.9997 10.3934Z"
            stroke="url(#Gradient-23)"
            stroke-width="1.625"
          />
          <path
            d="M5.35295 25.6876C7.86056 25.6876 9.89339 23.6548 9.89339 21.1471C9.89339 18.6395 7.86056 16.6067 5.35295 16.6067C2.84533 16.6067 0.8125 18.6395 0.8125 21.1471C0.8125 23.6548 2.84533 25.6876 5.35295 25.6876Z"
            stroke="url(#Gradient-24)"
            stroke-width="1.625"
          />
          <path
            d="M20.6466 25.6876C23.1543 25.6876 25.1871 23.6548 25.1871 21.1471C25.1871 18.6395 23.1543 16.6067 20.6466 16.6067C18.139 16.6067 16.1062 18.6395 16.1062 21.1471C16.1062 23.6548 18.139 25.6876 20.6466 25.6876Z"
            stroke="url(#Gradient-25)"
            stroke-width="1.625"
          />
        </g>
      </svg>
    </span>
  );
};
