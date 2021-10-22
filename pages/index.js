import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div class="topnav">
        <a class="active a-link" href="/">
          Home
        </a>
        <a class="active a-link" href="/about"  >
a          About
        </a>
      </div>
      <h2>
        <p class="p1"> All Product.</p>
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
