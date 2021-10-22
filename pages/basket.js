import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header class="main-header">
        <nav class="nav main-nav">
          <ul>
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a href="store.html">STORE</a>
            </li>
            <li>
              <a href="about.html">ABOUT</a>
            </li>
          </ul>
        </nav>
        <h1 class="band-name band-name-large">The Gamers!</h1>
      </header>

      <section class="content-section container">
        <h2 class="section-header">ABOUT</h2>
        <img class="about-band-image" src="Images/Band Members.png" />
        <p>
          Hello Gamer! In this website you will be seeing Gaming products, and
          other stuff that will increase your experience in gaming. We have a
          variety of products that you can use and upgrade such as : Graphic
          Cards, CPU's, Motherboards, Ram's and many other things. We are
          working hard to deliever them to our costumers properly and FAST!
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          qui consequuntur aut. Nobis debitis ipsum soluta sit itaque officiis
          impedit maiores suscipit magni id harum consequuntur quas delectus
          culpa, saepe nostrum, autem ullam! Assumenda molestiae reprehenderit
          sunt ducimus id saepe porro vitae asperiores eum accusantium? Illum
          aliquid excepturi magni quos.
        </p>
      </section>

      <footer class="main-footer">
        <div class="container main-footer-container">
          <h3 class="band-name">The Gamers!</h3>
          <ul class="nav footer-nav">
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <img src="Images/YouTubeLogo.png" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
