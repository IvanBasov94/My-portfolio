import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

import projectList from "../assets/projectList";

const Projects = () => {

   return (
      <motion.div
         animate={{
            scale: [2, 1],
            rotate: [90, 0],
         }}
         transition={{
            duration: 0.5,
            ease: "easeInOut",
         }}
         className="projects"
      >
         <h2>Проекты</h2>
         <div className="wrapper">
            {projectList.map((item) => {
               return (
                  <motion.div
                     whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                     }}
                     key={item.id}
                  >
                     <Card>
                        <a href={item.url} target="_blank" rel="noreferrer">
                           <Card.Img variant="top" src={item.imageUrl} />
                        </a>
                        <Card.Body>
                           <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                     </Card>
                  </motion.div>
               );
            })}
         </div>
      </motion.div>
   );
};

export default Projects;
