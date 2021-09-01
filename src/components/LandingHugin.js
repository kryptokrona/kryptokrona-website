import * as React from 'react';
import huginArt from '../images/hugin-call.png'
import { FaWindows } from "@react-icons/all-files/fa/FaWindows";
import { FaLinux } from "@react-icons/all-files/fa/FaLinux";
import { FaApple } from "@react-icons/all-files/fa/FaApple";

const LandingHugin = () => {
    return (
        <div className="bg-light text-light justify-content-center align-items-center d-flex py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><span className="p-2">🔐</span>Privacy</h5>
                                <p className="card-text py-2"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio saepe iusto illo. Hic, porro nam?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><span className="p-2">🔗</span>Decentralized</h5>
                                <p className="card-text p-2"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio saepe iusto illo. Hic, porro nam?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> <span className="p-2">✊</span>Resistant</h5>
                                <p className="card-text p-2"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio saepe iusto illo. Hic, porro nam?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card" id="extra-margin-top">
                        <div className="card-body d-flex">
                            <div className="test">
                                <h5 className="card-title"><span className="p-2">🛰️</span>Communicate</h5>
                                <p className="cart-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde earum, vitae, dolores odit deleniti voluptatibus corrupti amet fuga, maiores non culpa expedita! Esse eius doloribus dignissimos minus aut asperiores!</p>
                            </div>
                            <div className="test">
                                <img className='art' src={huginArt} alt='huginart' id="hugin-art" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"> <span className="p-2"></span>Download</h5>
                            <div className='hugin-download-buttons'>
                                <a href='https://github.com/kryptokrona/hugin-messenger/releases/download/v0.3.3/HuginMessenger-Setup-0.3.3.exe' aria-label="github" target="_blank" rel="noreferrer">
                                    <h1><FaWindows></FaWindows></h1></a>
                                <a href='https://github.com/kryptokrona/hugin-messenger/releases/download/v0.3.3/HuginMessenger-0.3.3.dmg' aria-label="github" target="_blank" rel="noreferrer">
                                    <h1><FaApple></FaApple></h1></a>
                                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' aria-label="github" target="_blank" rel="noreferrer">
                                    <h1><FaLinux></FaLinux></h1></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingHugin

























