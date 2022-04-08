import React from "react";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript, IoLogoGithub, IoLogoNodejs } from "react-icons/io";
import {
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiMaterialui,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";
import { motion } from "framer-motion";

const Quiensoy = () => {
  return (
    <>
      <div className="pt-10 ">
        <div
          id="quiensoy"
          className="divider md:text-4xl xl:text-4xl sm:text-xs"
        >
          SOBRE MI
        </div>

        <article className="grid h-auto card rounded-sm place-items-center pt-10 text-left">
          Actualmente me encuentro trabajando en el sector energético. Mi
          objetivo es dedicarme FullTime al desarrollo web. Para ello me
          encuentro trabajando en diferentes proyectos utilizando el stack MERN
          (Mongo + Express + React + Node). Estoy en constante aprendizaje
          realizando cursos e interiorizándome en nuevas tecnologías.
        </article>

        <div className="grid grid-cols-3 gap-4 place-items-center pt-10">
          <div className="grid place-items-center">
            <div className="py-2 border-y-4 badge badge-primary">Frontend</div>
            <div className="content-around grid grid-cols-4 gap-4 place-items-center pt-10">
              <button className="md:md:text-4xl xl:text-4xl sm:text-xs xl:md:text-4xl">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <GrReactjs />
                </motion.div>
              </button>
              <button className="md:md:text-4xl xl:text-4xl sm:text-xs xl:md:text-4xl ">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <IoLogoJavascript />
                </motion.div>
              </button>

              <button className="md:md:text-4xl xl:text-4xl sm:text-xs xl:md:text-4xl ">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiHtml5 />
                </motion.div>
              </button>

              <button className="md:md:text-4xl xl:text-4xl sm:text-xs xl:md:text-4xl ">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiCss3 />
                </motion.div>
              </button>
              <button className="md:md:text-4xl xl:text-4xl sm:text-xs xl:md:text-4xl ">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiRedux />
                </motion.div>
              </button>

              <button className="md:md:text-4xl xl:text-4xl sm:text-xs xl:md:text-4xl ">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiMaterialui />
                </motion.div>
              </button>
              <button className="md:md:text-4xl xl:text-4xl sm:text-xs xl:md:md:text-4xl  xl:md:text-4xl ">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiTailwindcss />
                </motion.div>
              </button>

              <button className="md:md:text-4xl xl:text-4xl sm:text-xs xl:md:text-4xl ">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiNextdotjs />
                </motion.div>
              </button>

              <button className="md:md:text-4xl xl:text-4xl sm:text-xs xl:md:text-4xl ">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiBootstrap />
                </motion.div>
              </button>
            </div>
          </div>
          <div className="grid place-items-center self-start">
            <div className="py-2 border-y-4 badge badge-secondary">BackEnd</div>
            <div className="content-around grid grid-cols-2 gap-4 place-items-center  pt-10">
              <button className="md:text-4xl xl:text-4xl sm:text-xs">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiExpress />
                </motion.div>
              </button>

              <button className="md:text-4xl xl:text-4xl sm:text-xs">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <IoLogoNodejs />
                </motion.div>
              </button>
            </div>
          </div>
          <div className="grid place-items-center self-start">
            <div className="py-2 border-y-4 badge badge-accent">Database</div>
            <div className="content-around grid grid-cols-4 gap-4   place-items-center  pt-10  ">
              <button className="md:text-4xl xl:text-4xl sm:text-xs">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiMongodb />
                </motion.div>
              </button>
              <button className="md:text-4xl xl:text-4xl sm:text-xs">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiPostgresql />
                </motion.div>
              </button>
              <button className="md:text-4xl xl:text-4xl sm:text-xs">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiMysql />
                </motion.div>
              </button>
              <button className="md:text-4xl xl:text-4xl sm:text-xs">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 4.0 }}
                  animate={{ rotate: 360 }}
                >
                  <SiOracle />
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="content-around grid grid-cols-7 gap-4  h-auto  bg-base-100 rounded-box place-items-center  pt-10 mt-1 ">
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <GrReactjs />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <IoLogoJavascript />
            </motion.div>
          </button>

          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <IoLogoGithub />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <SiRedux />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <SiMongodb />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <SiPostgresql />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <SiMysql />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <SiOracle />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <SiMaterialui />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <SiTailwindcss />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <SiExpress />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <SiNextdotjs />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <IoLogoNodejs />
            </motion.div>
          </button>
          <button className="md:text-4xl xl:text-4xl sm:text-xs">
            <motion.div
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 4.0 }}
              animate={{ rotate: 360 }}
            >
              <SiHtml5 />
            </motion.div>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Quiensoy;
