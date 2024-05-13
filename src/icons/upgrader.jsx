import "./icons.scss";

export const UpgIconSvg = ({ className }) => {
  return (
    <span className={className}>
      <svg
        width="24"
        height="27"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
        <defs>
            <linearGradient id="Gradient-37" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="100%" stop-color="#4D5B97" />
              <stop offset="100%" stop-color="#4D5B97" className="first" />
            </linearGradient>

            <linearGradient id="Gradient-38" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="0%" stop-color="#3B436B" />
              <stop offset="100%" stop-color="#3B436B" className="second" />
            </linearGradient>

            <linearGradient id="Gradient-39" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="0%" stop-color="#2D3660" />
              <stop offset="100%" stop-color="#2D3660" className="third" />
            </linearGradient>
          </defs>
          
          <g mask="url(#mask0_0_96)">
            <path
              d="M0.706055 7.8882V16.9235L12.0002 10.2411L23.2943 16.9235V7.8882L12.0002 1.20581L0.706055 7.8882Z"
              stroke="url(#Gradient-37)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.2943 21.2812L12.0002 14.5989L0.706055 21.2812"
              stroke="url(#Gradient-38)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M0.706055 25.1212L12.0002 18.4388L23.2943 25.1212"
              stroke="url(#Gradient-39)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};
