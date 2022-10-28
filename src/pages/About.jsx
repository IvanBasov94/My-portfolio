import React from "react";
import { motion, useScroll } from "framer-motion";

const About = () => {

   const { scrollYProgress } = useScroll();

   return (
      <>
         <motion.div
            style={{ scaleX: scrollYProgress }}
            className="progress-bar-animate"
         />
         <div className="about">
            <h2>О себе</h2>
            <>
               <article>
                  <p>
                     Я инженер-разработчик с 5-летним опытом программирования логических контроллеров и графических сенсорных дисплеев. В настоящее время изучаю и практикую разработку программного обеспечения для фронтенда. Основное направление — библиотека React JS.
                  </p>
                  <br />
                  <h2>Профессиональные навыки</h2>
                  <div>
                     <ol>
                        <li>
                           Знание языков программирования и технологий:
                           <ul>
                              <li>HTML5, CSS3</li>
                              <li>JavaScript, TypeScript</li>
                              <li>React JS, Redux Toolkit</li>
                              <li>SCSS, LESS, Bootstrap</li>
                              <li>Git, GitHub, Webpack</li>
                              <li>языки программирования ПЛК: ST, FBD, IL, LD, SFC</li>
                           </ul>
                        </li>
                        <br />
                        <li>
                           Уверенное владение программным обеспечением:
                           <ul>
                              <li>Microsoft Office (Word, Excel, PowerPoint, Outlook)</li>
                              <li>Visual Studio Code</li>
                              <li>Adobe (Acrobat, Photoshop, InDesign, Illustrator)</li>
                              <li>CoDeSys</li>
                              <li>AutoCAD, Autodesk Revit</li>
                           </ul>
                        </li>
                        <br />
                        <li>
                           Уверенная работа с технической документацией
                        </li>
                     </ol>
                  </div>
                  <br />
                  <h2>Ключевые навыки</h2>
                  <p>
                  В своей профессиональной деятельности всегда детально изучаю используемые технологии и оборудование, чтобы наилучшим образом выполнить поставленные задачи. Стараюсь изучать современные и перспективные методы и технологии. Отлично работаю в команде, легко нахожу общий язык с коллегами и заказчиками. Стараюсь делиться накопленными знаниями и опытом с коллегами.
                  </p>
               </article>
            </>
         </div>
      </>
   );
};

export default About;
