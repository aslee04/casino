import "./icons.scss";

export const JackIconSvg = ({ className }) => {
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
            <linearGradient id="Gradient-1" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="100%" stop-color="#3B436B" />
              <stop offset="100%" stop-color="#3B436B" className="first" />
            </linearGradient>

            <linearGradient id="Gradient-2" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="0%" stop-color="#4D5B970" />
              <stop offset="100%" stop-color="#4D5B97" className="second" />
            </linearGradient>

            <linearGradient id="Gradient-3" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="0%" stop-color="#2D3660" />
              <stop offset="100%" stop-color="#2D3660" className="third" />
            </linearGradient>

            <linearGradient id="Gradient-4" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="0%" stop-color="#3B436B" />
              <stop offset="100%" stop-color="#3B436B" className="fourth" />
            </linearGradient>
          </defs>

          <path
            d="M22.262 21.1245C21.1385 22.4942 19.7248 23.5973 18.1231 24.354C16.5213 25.1107 14.7715 25.5021 13 25.5C9.81737 25.5 6.7651 24.2357 4.51467 21.9853C2.26423 19.7349 1 16.6826 1 13.5"
            stroke="url(#Gradient-1)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 13.5C1 10.3174 2.26423 7.26518 4.51467 5.01475C6.7651 2.76431 9.81737 1.5 13 1.5"
            stroke="url(#Gradient-2)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 1.5C16.1826 1.5 19.2349 2.76431 21.4853 5.01475C23.7357 7.26518 25 10.3174 25 13.5C25.0053 16.2831 24.0367 18.9805 22.262 21.1244"
            stroke="url(#Gradient-3)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 19.5C16.3137 19.5 19 16.8137 19 13.5C19 10.1863 16.3137 7.5 13 7.5C9.68629 7.5 7 10.1863 7 13.5C7 16.8137 9.68629 19.5 13 19.5Z"
            stroke="url(#Gradient-4)"
            stroke-width="1.5"
          />
        </g>
      </svg>
    </span>
  );
};
