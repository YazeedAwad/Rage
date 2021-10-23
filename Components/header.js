import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          delay: 0.2,
        }}
      >
        <header className="z-30 max-w-10xl mx-auto md:pt-12">
          <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row">
            <h1 className="flex title-font font-medium text-2xl mb-4 md:mb-0">
              <Link href="/" passHref>
                Yazeed Awad
              </Link>
            </h1>
            <nav className="md:ml-auto flex flex-wrap">
              <h2 className="mr-20 text-lg">
                <Link href="/about" passHref>
                  About
                </Link>
              </h2>
              <a
                href="https://jacklatimer.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-5 text-lg"
              >
               My friend's Development!
                <svg
                  className="inline-block ml-3 mb-1"
                  fill="#fff"
                  width="25px"
                  height="25px"
                  version="1.1"
                  viewBox="0 0 20 20"
                  x="0px"
                  y="0px"
                >
                  <g>
                    <path d="M6 8h5.293L5 14.293l1.414 1.414 6.293-6.293V15h2V6H6v2z"></path>
                  </g>
                </svg>
              </a>
            </nav>
          </div>
        </header>
      </motion.div>
    </>
  );
}
