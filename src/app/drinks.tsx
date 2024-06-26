export interface IDrink {
  name: string;
  description: string;
  icon?: JSX.Element;
  id: string;
}

export const drinks: IDrink[] = [
  {
    name: "El Gigante",
    description: "Big boi! 💪",
    id: "EG",
    icon: (
      <svg
        version="1.0"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64 64"
        enable-background="new 0 0 64 64"
        xmlSpace="preserve"
        fill="#000000"
        width="50"
        height="50"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path
              fill="#231F20"
              d="M63.029,42.285l-15.054-9.032c0,0.004,0,0.009-0.001,0.013C47.984,32.844,48,32.427,48,32 c0-16.026-7.692-26.865-14.891-31.664C32.773,0.112,32.387,0,32,0s-0.773,0.112-1.109,0.336C23.692,5.135,16,15.974,16,32 c0,0.427,0.016,0.844,0.025,1.266c-0.001-0.004-0.001-0.009-0.001-0.013L0.971,42.285C0.368,42.646,0,43.297,0,44v6 c0,1.104,0.896,2,2,2h17.188c0.516,1.627,0.904,2.617,0.954,2.742C20.447,55.502,21.183,56,22,56h5c0,4.785,2.585,8,5,8 c2.396,0,4.961-3.166,5-7.891c0.002-0.036,0.003-0.072,0.003-0.109H42c0.817,0,1.553-0.498,1.857-1.258 c0.05-0.125,0.438-1.115,0.954-2.742H62c1.104,0,2-0.896,2-2v-6C64,43.297,63.632,42.646,63.029,42.285z M32,2c6,4,14,14,14,30 c0,4.401-0.539,8.531-1.221,12H19.221C18.539,40.531,18,36.401,18,32C18,16,26,6,32,2z M2,44l14.117-8.471 c0.234,3.901,0.814,7.484,1.472,10.471H2V44z M2,50v-2h16.059c0.182,0.728,0.362,1.396,0.54,2.022 c-0.003-0.008-0.005-0.015-0.007-0.022H2z M32,62c-1,0-3-2-3-6h6C35,60,33,62,32,62z M42,54H22c0,0-1.254-3.136-2.357-8h24.715 C43.254,50.864,42,54,42,54z M62,50H45.408c-0.002,0.008-0.004,0.015-0.007,0.022c0.178-0.626,0.358-1.295,0.54-2.022H62V50z M62,46H46.411c0.657-2.986,1.237-6.569,1.472-10.471L62,44V46z"
            ></path>
            <path
              fill="#231F20"
              d="M32,30c3.313,0,6-2.687,6-6s-2.687-6-6-6s-6,2.687-6,6S28.687,30,32,30z M32,20c2.209,0,4,1.791,4,4 s-1.791,4-4,4s-4-1.791-4-4S29.791,20,32,20z"
            ></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Espresso Martini",
    description: "Espresso, Kahlua, vodka & a dash of caramel.",
    id: "EM",
    icon: (
      <svg
        fill="#000000"
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path d="M235.69531,38.46924A4,4,0,0,0,232,36H24a3.99976,3.99976,0,0,0-2.82812,6.82812l31.999,31.99952.00146.00146L124,145.65674V212H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8H132V145.65674L202.82764,74.8291l.00146-.00146,31.999-31.99952A3.99842,3.99842,0,0,0,235.69531,38.46924ZM128,138.34326,65.65674,76H190.34326ZM198.34326,68H57.65674l-24-24H222.34326Z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "French  Martini",
    description: "Vodka, chambord, pineapple juice.",
    id: "FM",
    icon: (
      <svg
        height="50"
        width="50"
        fill="#000000"
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path d="M235.69531,38.46924A4,4,0,0,0,232,36H24a3.99976,3.99976,0,0,0-2.82812,6.82812l31.999,31.99952.00146.00146L124,145.65674V212H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8H132V145.65674L202.82764,74.8291l.00146-.00146,31.999-31.99952A3.99842,3.99842,0,0,0,235.69531,38.46924ZM128,138.34326,65.65674,76H190.34326ZM198.34326,68H57.65674l-24-24H222.34326Z"></path>
        </g>
      </svg>
    ),
  },

  {
    name: "Porn Star Martini",
    description:
      "Vanilla vodka, mango & passion fruit juice & a splash of bubbly!",
    id: "PM",
    icon: (
      <svg
        height="50"
        width="50"
        fill="#000000"
        viewBox="0 0 256 256"
        id="Flat"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path d="M235.69531,38.46924A4,4,0,0,0,232,36H24a3.99976,3.99976,0,0,0-2.82812,6.82812l31.999,31.99952.00146.00146L124,145.65674V212H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8H132V145.65674L202.82764,74.8291l.00146-.00146,31.999-31.99952A3.99842,3.99842,0,0,0,235.69531,38.46924ZM128,138.34326,65.65674,76H190.34326ZM198.34326,68H57.65674l-24-24H222.34326Z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "Jameson on ice",
    description: "It's Jameson, on ice. I mean, honestly...",
    id: "JOI",
    icon: (
      <svg
        height="50"
        width="50"
        fill="#000000"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 463.067 463.067"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path d="M461.134,26.534c-1.4-1.6-3.5-2.5-5.6-2.5h-448c-2.1,0-4.2,0.9-5.6,2.5c-1.4,1.6-2.1,3.7-1.9,5.8l44.8,400 c0.4,3.8,3.6,6.7,7.5,6.7h236.4h122c3.8,0,7-2.9,7.5-6.7l44.8-400C463.234,30.234,462.534,28.134,461.134,26.534z M233.334,364.034l55.5-55.7l56.5,55.7l-56.5,56.8L233.334,364.034z M404.034,424.034h-97.2l54.5-54.7c1.4-1.4,2.2-3.3,2.2-5.3 s-0.8-3.9-2.2-5.3l-67.2-66.3c-2.9-2.9-7.7-2.9-10.6,0l-66,66.3c-2.9,2.9-2.9,7.6,0,10.5l53.5,54.8h-211.9l-24.6-218.8h85.6 l63.8,64c1.5,1.5,3.4,2.2,5.3,2.2c1.9,0,3.8-0.7,5.3-2.2l65-64.1h169L404.034,424.034z M238.134,205.234l-48.9,48.2l-48-48.2 H238.134z M141.334,190.234l48-48.2l48.9,48.2H141.334z M430.234,190.234h-170.7l-65-64.1c-2.9-2.9-7.7-2.9-10.6,0l-63.8,64h-87.3 l-16.9-151.2h431.2L430.234,190.234z"></path>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Vodka with tropical juice & soda water",
    description: "Mainly here cause the soda water won't get drunk otherwise!",
    id: "VSW",
    icon: (
      <svg
        height="50"
        width="50"
        fill="#000000"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 383.2 383.2"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path d="M341.2,2.5c-1.5-1.6-3.5-2.5-5.6-2.5h-288c-2.2,0-4.2,0.9-5.6,2.5s-2.1,3.7-1.9,5.8l28,290.1c1.7,21.3,6.9,38.2,15.4,50.2 c0,0.1,0.1,0.1,0.1,0.2c11.2,14.8,28.5,34.4,49.3,34.4h116l0,0c17,0,38.2-17.8,49.6-34.8c8.5-12,13.6-28.9,15.3-50.1l29.3-290 C343.3,6.2,342.6,4.1,341.2,2.5z M298.9,297.1c0,0.1,0,0.1,0,0.2c-1.5,18.3-5.8,33.1-12.7,42.7l-0.1,0.1 c-10.3,15.2-27.3,28.1-37.1,28.1H133c-10.6,0-22.8-9.2-37.3-28.3h0c-6.8-9.7-11.2-24.4-12.5-42.7v-0.1L56,15.2h271.4L298.9,297.1z "></path>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Glass of cava",
    description:
      "A delicious glass of cava, poured right here, in this very room.",
    id: "GOC",
    icon: (
      <svg
        height="50"
        width="50"
        fill="#000000"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 447.1 447.1"
        // xml:space="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <g transform="translate(0 -540.36)">
            <g>
              <g>
                <path d="M301.6,546.96c-0.5-3.8-3.7-6.6-7.4-6.6H152.9c-3.8,0-7,2.8-7.4,6.6c-1.4,11.7-1.4,27.1-1.4,43.4v98.6 c0,78.6,31.1,141.1,72,148v135.5h-29.2c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h73.4c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5 h-29.2v-135.6c40.8-6.8,71.9-69.3,71.9-147.9v-98.6C303,574.06,303,558.66,301.6,546.96z M288,688.96 c0,72.4-29.5,133.6-64.5,133.6s-64.5-61.2-64.5-133.6v0v-98.6c0-12.8,0-25,0.7-35h127.6c0.7,9.9,0.7,22.1,0.7,35V688.96z"></path>
                <path d="M260.2,572.86c-4.1,0-7.5,3.4-7.5,7.5v49.9c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.4,7.5-7.5v-49.9 C267.7,576.26,264.3,572.86,260.2,572.86z"></path>
                <path d="M260.2,647.76c-4.1,0-7.5,3.4-7.5,7.5v8.7c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.3,7.5-7.5v-8.7 C267.7,651.16,264.3,647.76,260.2,647.76z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: "Glass of wine",
    description: "A glass of wine. Choose from red OR white.",
    id: "GOW",
    icon: (
      <svg
        height="50"
        width="50"
        fill="#000000"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 463 463"
        // xml:space="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <g transform="translate(0 -540.36)">
            <g>
              <g>
                <path d="M356.35,546.96L356.35,546.96c-0.4-3.8-3.6-6.6-7.5-6.6h-234.8c-3.8,0-7,2.9-7.5,6.6c-1.7,15.1-2.6,29.7-2.6,43.2v98.3 c0,39.7,13,76.9,36.6,104.6c22.2,26,51.6,41.2,83.4,43.3v152h-27.3c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h69.7 c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-27.3v-152c31.8-2.1,61.2-17.2,83.4-43.3c23.6-27.7,36.6-64.9,36.6-104.6v-98.3 C358.95,576.66,358.05,562.16,356.35,546.96z M343.95,688.46c0,74.6-49.4,133.1-112.5,133.1s-112.5-58.5-112.5-133.1v-98.3 c0-10.9,0.6-22.6,1.8-34.8h221.4c1.2,12.2,1.8,23.9,1.8,34.8V688.46z"></path>
                <path d="M154.05,572.66c-4.1,0-7.5,3.4-7.5,7.5v83.4c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.3,7.5-7.5v-83.4 C161.55,576.06,158.15,572.66,154.05,572.66z"></path>
                <path d="M154.05,689.66c-4.1,0-7.5,3.4-7.5,7.5v7.5c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.4,7.5-7.5v-7.5 C161.55,693.06,158.15,689.66,154.05,689.66z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
];
