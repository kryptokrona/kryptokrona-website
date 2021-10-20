import { Button } from 'react-bootstrap'
import * as React from 'react'
import xkrsymbol from '../images/xkrsymbol.png'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";
import { FaReddit } from "@react-icons/all-files/fa/FaReddit";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

const Footer = () => {
    return (
        <footer>
            <img src={xkrsymbol} height='24' className='footersymbol' alt='' />
            <div>
                <a href='https://github.com/kryptokrona/kryptokrona-website'><Button variant='outline-light'><i></i>Edit Page</Button></a>
                <p className='copyright'>©Kryptokrona 2021</p>
                <a href='https://github.com/kryptokrona' aria-label="github" target="_blank" rel="noreferrer" id="footer-icon">
                    <FaGithub /></a>
                <a href='https://chat.kryptokrona.se' aria-label="Discord" target="_blank" rel="noreferrer" id="footer-icon">
                    <FaDiscord /></a>
                <a href='https://t.me/xkrofficial' aria-label="telegram" target="_blank" rel="noreferrer" id="footer-icon">
                    <FaTelegram /></a>
                <a href='https://twitter.com/kryptokrona' aria-label="twitter" target="_blank" rel="noreferrer" id="footer-icon">
                    <FaTwitter /></a>
            </div>
        </footer>
    )
}

export default Footer