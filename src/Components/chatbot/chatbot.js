import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

import style from "./Contenido.module.css";

const Chatbot = () => {
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#4e82ea",
    headerFontColor: "#fff",
    headerFontSize: "20px",
    botBubbleColor: "#f4f4f4",
    botFontColor: "#222",
    userBubbleColor: "#f4f4f4",
    userFontColor: "#222",
  };

  const steps = [
    {
      id: 1,
      message:
        "Bienvenido al chatbot de Linking Future, para comenzar, dime tu nombre.",
      trigger: 2,
    },
    {
      id: 2,
      user: true,
      validator: (value) => {
        if (
          /^[a-z]{3,16}$/.test(value) ||
          /^[A-Z]{1}[a-z]{2,15}$/.test(value) ||
          /^[A-Z]{3,16}$/.test(value)
        ) {
          return true;
        } else {
          return "Ingresa un nombre valido.";
        }
      },
      trigger: 3,
    },
    {
      id: 3,
      message: `Hola {previousValue}! Dime en que te puedo ayudar?`,
      trigger: 4,
    },
    {
      id: 4,
      options: [
        { value: 1, label: "¿Que es linking future?", trigger: "4a" },
        { value: 2, label: "¿Es seguro?", trigger: "4b" },
        { value: 3, label: "¿Como dono?", trigger: "4c" },
        {
          value: 4,
          label: "¿Cuales son los tipos de usuarios?",
          trigger: "4d",
        },
        { value: 5, label: "¿Como me suscribo?", trigger: "4e" },
        {
          value: 6,
          label: "Quiero hablar con un Staff de la ONG",
          trigger: "4f",
        },
      ],
    },
    {
      id: "4a",
      message:
        "linking future es una plataforma que busca ayudar a conectar ONG's con personas que quieran ayudar en diversas causas.",
      trigger: 5,
    },
    {
      id: "4b",
      message:
        "¡Claro que si! El equipo de linking future se encarga de verificar que las ONG's sean reales y que las donaciones sean seguras.",
      trigger: 5,
    },
    {
      id: "4c",
      message:
        "Puedes donar desde la pagina de la iniciativa a la que quieras ayudar mediante PayPal.",
      trigger: 5,
    },
    {
      id: "4d",
      message:
        "Puedes encontrar dos clases de usuarios en nuestra pagina, el PRIMERO que es dirigido a usuario que representa una comunidad, el cual va a contar con una seccion para poder proponer un proyecto para ayudar a una comunidad, y el SEGUNDO clase de usuario, el cual esta destinado a personas interesadas en ayudar en las causas pendientes mediante donaciones y estar informado de todos los avances del proyecto involucrado.",
      trigger: 5,
    },
    {
      id: "4e",
      message:
        "Puedes suscribirte mediante un pago mensual en PayPal, de esta manera podrás asegurarte de que apoyaras a una ONG todos los meses.",
      trigger: 5,
    },
    {
      id: "4f",
      message:
        "Lo siento si no he podido ayudarte, deja tu mensaje y un miembro de linking future se contactara contigo lo antes posible en tu email, te dejo el link acá abajo ⬇️ ",
      trigger: "5a",
    },
    {
      id: "5a",
      component: (
        <div className="flex flex-col items-start justify-center gap-4">
          <a href="mailto:futurelinking19@gmail.com">
            <button className={style.button}>Link</button>
          </a>
        </div>
      ),
      end: true,
    },
    {
      id: 5,
      message: "He podido ayudarte?",
      trigger: 6,
    },
    {
      id: 6,
      options: [
        { value: 1, label: "¡Si! Gracias.", trigger: "7" },
        { value: 2, label: "No, quiero hablar con un staff", trigger: "4f" },
      ],
    },
    {
      id: 7,
      message: "¿Puedo ayudarte en algo mas?",
      trigger: 8,
    },
    {
      id: 8,
      options: [
        { value: 1, label: "¡Si!", trigger: "9" },
        { value: 2, label: "No, gracias.", trigger: "9b" },
      ],
    },
    {
      id: 9,
      message: "Dime, ¿en que te puedo ayudar?",
      trigger: 4,
    },
    {
      id: "9b",
      message: "Espero haberte ayudado, ¡Hasta luego!",
      end: true,
    },
  ];

  return (
    <div className="fixed bottom-4 right-4">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating="true"
          headerTitle="Linking Future Bot"
          placeholder="Escribe tu pregunta"
        />
      </ThemeProvider>
    </div>
  );
};

export default Chatbot;
