import Header from "../Components/header";
import styles from "../styles/styles.module.css";
import { motion } from "framer-motion";

export default function about() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
      >
        <Header />
        <h2 className="text-5xl text-center">About</h2>
        <div className=" text-center">
          <img
            className="h-24 rounded-full h-24 w-24 mx-auto"
            src="Images/image.jpg"
          />
          <p className="p2">
            Hello Gamer! This website is a store for gamers and its purpose,
          </p>
          <p className="p2">
            {" "}
            to gamers find any part of their set-up that they want.{" "}
          </p>
          <p className="p2">so we gathered them together in this Store.</p>
        </div>
      </motion.div>
    </div>
  );
}
