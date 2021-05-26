import React, { useState } from 'react'
import NewsLetter from '../NewsLetter/NewsLetter'
import { FooterList, FooterMenu, FooterSecurity, FooterStyles, Legal, Social, SocialIcons, Team, } from './Footer.styles'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [element, setElement] = useState("");

  const small = useMediaQuery('(max-width:600px)')

  const handleClick = (e) => {
    const name = e.currentTarget.getAttribute("value")
    console.log(e.target)

    name !== element ? setIsOpen(true) : setIsOpen(!isOpen);

    setElement(name);
  }

  return (
    <>
      <NewsLetter />
      <FooterStyles>
        <FooterMenu>
          <Social>
            <SocialIcons>
              <p>Síguenos</p>
              <div>
                <img src="https://icongr.am/entypo/youtube-with-circle.svg?size=128&color=75ba93" alt="youtube" />
                <img src="https://icongr.am/entypo/instagram-with-circle.svg?size=128&color=75ba93" alt="instagram" />
                <img src="https://icongr.am/entypo/facebook-with-circle.svg?size=128&color=75ba93" alt="facebook" />
              </div>
            </SocialIcons>
            <img src="https://media.discordapp.net/attachments/818654228062404630/818931462774456330/TeQuiero.png" alt="Logo" />
          </Social>
          <FooterList isOpen={isOpen} element={element}>
            <div>
              <div value="primero" onClick={small ? (e) => handleClick(e) : null}>
                <span>Servicios</span>
                <span> {small && <NavigateNextIcon />} </span>
              </div>
              <ul className="primero">
                <li>Autocenter</li>
                <li>Legales</li>
                <li>Condición</li>
              </ul>
            </div>
            <div>
              <div value="segundo" onClick={small ? (e) => handleClick(e) : null}>
                <span>Mis compras</span>
                <span> {small && <NavigateNextIcon />} </span>
              </div>
              <ul className="segundo">
                <li>Seguimiento de pedidos</li>
                <li>Lista decompras</li>
                <li>Cancelar pedido</li>
              </ul>
            </div>
            <div>
              <div value="tercero" onClick={small ? (e) => handleClick(e) : null}>
                <span>Ayuda</span>
                <span> {small && <NavigateNextIcon />} </span>
              </div>
              <ul className="tercero">
                <li>¿Còmo comprar?</li>
                <li>Recuperar contraseña</li>
                <li>Contàctanos</li>
              </ul>
            </div>
          </FooterList>

          <FooterSecurity>
            <h3>Compra Segura</h3>
            <p>Tu pago en nuestro sitio es 100% seguro</p>
            <p>Tu información será enviada directamente a nuestra base de datos mediante una conexión segura encriptada con SSL de 256-bits</p>
            <img src="https://d15l979h6tv26r.cloudfront.net/imagenes/cyber-logo-2020.png" alt="security" />
          </FooterSecurity>
        </FooterMenu>
        <Legal>
          <p>© Té quiero 2021.</p>
        </Legal>
      </FooterStyles>
    </>
  )
}

export default Footer
