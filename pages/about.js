import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div class="topnav">
        <a class="active a-link" href="/">
          Home
        </a>
        <a class="active a-link" href="/about">
          About
        </a>
      </div>
      <section class="content-section container">
        <h2>
          <p class="p1">About</p>
        </h2>

        <img class="image" src="Images/image.jpg" />
        <p class="p2">Hello Gamer!</p>
        <p class="p2">This website is a store for gamers and its purpose,</p>
        <p class="p2">
          to help gamers find any part of their set-up that they want.
        
        so we gathered them together in this Store.
        </p>
      </section>

     
    </>
  );
}
