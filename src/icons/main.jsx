import "./icons.scss";

export const MainIconSvg = ({ className }) => {
  return (
    <span className={className}>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <defs>
            <linearGradient id="Gradient-5" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="100%" stop-color="#2D3660" />
              <stop offset="100%" stop-color="#2D3660" className="first" />
            </linearGradient>

            <linearGradient id="Gradient-6" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="0%" stop-color="#2D3660" />
              <stop offset="100%" stop-color="#2D3660" className="second" />
            </linearGradient>

            <linearGradient id="Gradient-7" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="0%" stop-color="#2D3660" />
              <stop offset="100%" stop-color="#2D3660" className="third" />
            </linearGradient>

            <linearGradient id="Gradient-8" x1="30%" y1="30%" x2="30%" y2="30%">
              <stop offset="0%" stop-color="#2D3660" />
              <stop offset="100%" stop-color="#2D3660" className="fourth" />
            </linearGradient>
          </defs>
          <path
            d="M7.02898 1.125H1.66667C1.09137 1.125 0.625 1.59137 0.625 2.16667V7.52898C0.625 8.10428 1.09137 8.57065 1.66667 8.57065H7.02898C7.60428 8.57065 8.07065 8.10428 8.07065 7.52898V2.16667C8.07065 1.59137 7.60428 1.125 7.02898 1.125Z"
            stroke="url(#Gradient-5)"
            stroke-width="1.25"
            className="first"
          />
          <path
            d="M7.02898 12.4293H1.66667C1.09137 12.4293 0.625 12.8957 0.625 13.471V18.8333C0.625 19.4086 1.09137 19.875 1.66667 19.875H7.02898C7.60428 19.875 8.07065 19.4086 8.07065 18.8333V13.471C8.07065 12.8957 7.60428 12.4293 7.02898 12.4293Z"
            stroke="url(#Gradient-6)"
            stroke-width="1.25"
          />
          <path
            d="M18.3334 1.125H12.9711C12.3958 1.125 11.9294 1.59137 11.9294 2.16667V7.52898C11.9294 8.10428 12.3958 8.57065 12.9711 8.57065H18.3334C18.9087 8.57065 19.3751 8.10428 19.3751 7.52898V2.16667C19.3751 1.59137 18.9087 1.125 18.3334 1.125Z"
            stroke="url(#Gradient-7)"
            stroke-width="1.25"
          />
          <path
            d="M18.3334 12.4293H12.9711C12.3958 12.4293 11.9294 12.8957 11.9294 13.471V18.8333C11.9294 19.4086 12.3958 19.875 12.9711 19.875H18.3334C18.9087 19.875 19.3751 19.4086 19.3751 18.8333V13.471C19.3751 12.8957 18.9087 12.4293 18.3334 12.4293Z"
            stroke="url(#Gradient-8)"
            stroke-width="1.25"
          />
        </g>
      </svg>
    </span>
  );
};
