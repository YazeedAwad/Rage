import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../Components/header";

export default function Main() {
  return (
    <>
      <Header />
      
      <div className="container mx-auto max-w-10xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <h2 className="text-center text-5xl">Collection</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
            delay: 0.6,
          }}
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 ">
              <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
                <Image
                  src="https://media.steelseriescdn.com/thumbs/filer_public/97/44/97442b60-2a4d-4dce-9e78-ce38a91491a5/purchase-gallery-image-apex-150-hero.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png"
                  alt="Design"
                  height={1100}
                  width={1100}
                />
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
                <Image
                  src="https://jacklatimer.design/images/placeholder.png"
                  alt="Design"
                  height={1100}
                  width={1100}
                />
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
                <Image
                  src="https://jacklatimer.design/images/placeholder.png"
                  alt="Design"
                  height={1100}
                  width={1100}
                />
              </div>

              <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
                <Image
                  src="https://jacklatimer.design/images/placeholder.png"
                  alt="Design"
                  height={1100}
                  width={1100}
                />
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
                <Image
                  src="https://jacklatimer.design/images/placeholder.png"
                  alt="Design"
                  height={1100}
                  width={1100}
                />
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4 mb-6">
                <Image
                  src="https://jacklatimer.design/images/placeholder.png"
                  alt="Design"
                  height={1100}
                  width={1100}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
