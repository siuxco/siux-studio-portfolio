import { Content } from "../utils/links";
import { motion } from "framer-motion";

const Experience = () => {
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
    <div className="container-mobile padding-xl">
      <motion.div initial="hidden" animate="show" variants={container}>
        {Content.experience.map((experience, i) => {
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
              className="margin-bottom-xxl display-flex"
            >
              <img
                src={experience.picture}
                className="width-xxl height-xxl border-radius-xs"
              />

              <div className="margin-left-l">
                <div className="font-weight-600 font-size-m color-black margin-bottom-xs">
                  {experience.title}
                </div>
                <div className="color-neutral-3 margin-bottom-xs">
                  {experience.date}
                </div>
                <div className="line-height-m font-size-s color-neutral-5">
                  {experience.description}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Experience;
