import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";

const Contact = () => {

   const [validated, setValidated] = useState(false);

   const handleSubmit = (event) => {

      const form = event.currentTarget;

      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
      };

      setValidated(true);
   };

   return (
      <motion.div
         className="contact"
         initial={{ scaleY: 0 }}
         animate={{ scaleY: 1 }}
         exit={{ scaleY: 0 }}
      >
         <h2>Контакты</h2>
         <Row>
            <Col>
               <div className="contact-form">
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                     <Form.Group className="mb-3" controlId="validationCustom01">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control required type="text" placeholder="Имя" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="validationCustom02">
                        <Form.Label>Электронная почта</Form.Label>
                        <Form.Control required type="email" placeholder="Email" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="validationCustom03">
                        <Form.Label>Сообщение</Form.Label>
                        <Form.Control as="textarea" required placeholder="Сообщение" />
                     </Form.Group>
                     <Button type="submit">Отправить форму</Button>
                  </Form>
               </div>
            </Col>
            <Col>
               <div className="contact-data">
                  <p>
                     В случае необходимости связаться со мной, пишите мне на электронную почту vanya.b94@mail.ru.
                  </p>
                  <p>
                     Ниже прикреплены ссылки на социальные сети, с помощью которых Вы также сможете связаться со мной.
                  </p>
                  <div>
                     <ListGroup horizontal>
                        <ListGroup.Item>
                           <a
                              href="https://vk.com/id223165251"
                              target="_blank"
                              rel="noreferrer"
                           >
                              VK
                           </a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <a
                              href="https://t.me/IvanBasov94"
                              target="_blank"
                              rel="noreferrer"
                           >
                              Telegram
                           </a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <a
                              href="https://github.com/IvanBasov94"
                              target="_blank"
                              rel="noreferrer"
                           >
                              GitHub
                           </a>
                        </ListGroup.Item>
                     </ListGroup>
                  </div>
               </div>
            </Col>
         </Row>
      </motion.div>
   );
};

export default Contact;
