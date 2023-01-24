import { Content } from "../config/links";
import { motion } from "framer-motion";
import Link from "next/link";

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

              <div className="padding-bottom-xxl margin-left-l border-width-1 border-neutral-1 border-style-solid border-top-none border-left-none border-right-none">
                <div className="font-weight-600 font-size-m color-black margin-bottom-xs">
                  {experience.title}
                </div>
                <div className="display-flex align-content-center">
                  <div className="color-neutral-3 margin-bottom-xs">
                    <Link href={experience.link} target="_blank">
                      <span className="color-primary-7">{experience.link.replace("https://", "")}</span>
                    </Link>
                  </div>
                  <div className="color-neutral-3 margin-right-xxs margin-left-xxs">
                    ·
                  </div>
                  <div className="color-neutral-3 margin-bottom-xs">
                    {experience.date}
                  </div>
                </div>
                <div className="line-height-m font-size-s color-neutral-5 margin-top-m">
                  {experience.description}
                </div>
                <div className="display-flex flex-wrap margin-top-s">
                  {experience.skills.map((skill, e) => {
                    return (
                      <div
                        key={e}
                        className="margin-right-xs color-neutral-6 margin-top-xs border-style-solid border-neutral-2 border-width-1 padding-s padding-top-xxs padding-bottom-xxs border-radius-xxl"
                      >
                        {skill}
                      </div>
                    );
                  })}
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
