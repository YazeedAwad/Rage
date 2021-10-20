import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div class="topnav">
        <a class="active a-link" href="/">
          Home
        </a>
        <a href="/basket">
          <svg
            class="svgbasket"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="#c71714"
            stroke="currentColor"
          >
            <path
              d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 5H19"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
      <h2>
        <p class="p1"> All Product</p>
      </h2>
      <div>
        <p class="p1">
          <div class="columns">
            <ul class="price">
              <li class="header">SteelSeries Apex 150 29.99$ </li>
              <li>
                <img class="keyboard" src="Images/keyboard1.jpg" />
              </li>
              <li class="grey">
                <a href="#cart" class="button">
                  Add to Cart
                </a>
              </li>
            </ul>
          </div>
        </p>
      </div>
     <div>
        <p class="p1">
          <div class="columns">
            <ul class="price">
              <li class="header">Logitech G102 19.99$</li>
              <li>
                <img class="mouse" src="Images/mouse.jfif" />
              </li>
              <li class="grey">
                <a href="#cart" class="button">
                  Add to cart{" "}
                </a>
              </li>
            </ul>
          </div>
        </p>
    </div>
      <div>
        <p class="p1">
          <div class="columns">
            <ul class="price">
              <li class="header">Asus Tuf H3 20.00$</li>
              <li>
                <img class="headphone" src="Images/asus.jfif" />
              </li>
              <li class="grey">
                <a href="#cart" class="button">
                  Add to cart{" "}
                </a>
              </li>
            </ul>
          </div>
        </p>
      </div>
    </>
  );
}
