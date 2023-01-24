import { Content } from "../config/links";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, translateY: "30px" },
    show: { opacity: 1, translateY: "0px" },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="container-desktop display-flex flex-wrap justifiy-content-center align-items-center"
    >
      {Content.projects.map((project, i) => {
        return (
          <motion.div
            key={i}
            animation="visible"
            variants={item}
            transition={{
              duration: 100,
              stiffness: 300,
              damping: 20,
              default: { ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.96 }}
            className="position-relative overflow-hidden cursor-pointer flex-grow-1 width-full transition-fast margin-l border-radius-xl"
            style={{
              flexBasis: "350px",
            }}
          >
            <div
              className="display-flex background-neutral-1 background-size-cover background-position-center-center"
              style={{
                height: "350px",
                flexBasis: "350px",
                backgroundImage: `url(/images/projects/caption-${i + 1}.png)`,
              }}
            />
            <div className="position-absolute margin-m position-bottom-left background-opacity-white-4 border-radius-m text-align-center backdrop-filter-blur-xxs box-shadow-s font-weight-600 padding-s padding-top-xs padding-bottom-xs color-white text-transform-capitalize">
              {project.title}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
