import axios from "axios";
import React, { useState } from "react";
import { AboutContainer, Card, CardsContainer, Content } from "./About.styles";
import Italo from "../../img/Italo.jpg";
import JoseH from "../../img/JoseH.jpg";
import JuanSosa from "../../img/JuanSosa.jpg";
import Leo from "../../img/Leo.jpg";
import Magui from "../../img/Magui.jpg";
import Mari from "../../img/Mari.jpg";
import Rafa from "../../img/Rafa.jpg";
import JoseR from "../../img/JoseR.jpg";
import Mau from "../../img/Mau.jpg";

export default function About() {
  return (
    <AboutContainer>
      <h1>Nuestro equipo</h1>
      <p>
        Nosotros somos el equipo que desarrollo este ecommerce "Té Quiero", el
        cual es un proyecto del bootcamp intensivo "Henry". Conocenos más a
        fondo en nuestras redes sociales.
      </p>
      <CardsContainer>
        <Card>
          <Content className="content">
            <img src={JoseH} alt="profilePicture" />
            <h3>José Hidalgo</h3>
          </Content>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/imjosehidalgo/"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/ImJoseHidalgo">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
        <Card>
          <Content className="content">
            <img src={Leo} alt="profilePicture" />
            <h3>Leonardo Monay</h3>
          </Content>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/leonardo-monay-242b005b/"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Leomonay">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
        <Card>
          <Content className="content">
            <img src={Mari} alt="profilePicture" />
            <h3>Mariela Vargas</h3>
          </Content>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mariela-vargas-28280072/"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/mar156">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
        <Card>
          <Content className="content">
            <img src={Italo} alt="profilePicture" />
            <h3>Sebastian Villanueva</h3>
          </Content>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/isebastianvp/"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/isvillanuevap/">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
        <Card>
          <Content className="content">
            <img src={Rafa} alt="profilePicture" />
            <h3>Rafael Soteldo</h3>
          </Content>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rafael-jos%C3%A9-soteldo-silva/"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/rafaelsoteldosilva">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
        <Card>
          <Content className="content">
            <img src={JoseR} alt="profilePicture" />
            <h3>Jose Ruz</h3>
          </Content>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jose-ruz-gonzalez-902793206/"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/JoseSGW">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
        <Card>
          <Content className="content">
            <img src={Mau} alt="profilePicture" />
            <h3>Mauricio Ocando</h3>
          </Content>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mauricio-ocando-732238184/"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/SoyWachu">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
        <Card>
          <Content className="content">
            <img src={Magui} alt="profilePicture" />
            <h3>Magali Corbalan</h3>
          </Content>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/magalicorbalan"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/corbalanmagui">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
        <Card>
          <Content className="content">
            <img src={JuanSosa} alt="profilePicture" />
            <h3>Juan Segundo Sosa</h3>
          </Content>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/juan-segundo-sosa-081a4a180/"
              >
                <img
                  src="https://icongr.am/entypo/linkedin.svg?size=128&color=000000"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Juanse1998">
                <img
                  src="https://imjosehidalgo.netlify.app/static/media/github.e0df113a.svg"
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </Card>
      </CardsContainer>
    </AboutContainer>
  );
}
