import React from "react";
import { motion } from "framer-motion";

const Home = () => {
   return (
      <div className="home">
         <motion.div
            className="name"
            initial={{
               x: -300,
               scale: 0.5,
            }}
            animate={{
               x: 0,
               scale: 1,
            }}
            transition={{ duration: 1 }}
         >
            Иван <font color="yellow">Басов</font>
         </motion.div>
         <motion.div
            className="desc"
            initial={{
               x: 300,
               scale: 0.5,
            }}
            animate={{
               x: 0,
               scale: 1,
            }}
            transition={{ duration: 1 }}
         >
            Начинающий <font>frontend-разработчик</font> и специалист по программированию <font>логических контроллеров</font>
         </motion.div>
      </div>
   );
};

export default Home;
