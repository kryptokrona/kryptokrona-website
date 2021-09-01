import * as React from 'react';
import { FaWindows } from "@react-icons/all-files/fa/FaWindows";
import { FaLinux } from "@react-icons/all-files/fa/FaLinux";
import { FaApple } from "@react-icons/all-files/fa/FaApple"; 
import { FaAndroid } from "@react-icons/all-files/fa/FaAndroid"; 
import { FaWallet } from "@react-icons/all-files/fa/FaWallet"; 


const DownloadInfo = () => {
    return (     

            <div className="bg-light justify-content-center align-items-center d-flex py-5">
                <div className="container">


                    <div className="col-md">
                        <div className="card">
                            <div className="card-body d-flex">
                                <div>
                                    <h5 className="card-title"><span className="p-2">🖥️</span> Desktop Wallet</h5>
                                    <p className="cart-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde earum, vitae, dolores odit deleniti voluptatibus corrupti amet fuga, maiores non culpa expedita! Esse eius doloribus dignissimos minus aut asperiores!</p>
                                    <div className='download-buttons'>
                                        <a href='https://github.com/kryptokrona/hugin-messenger/releases/download/v0.3.3/HuginMessenger-Setup-0.3.3.exe' aria-label="github" target="_blank" rel="noreferrer">
                                            <h1><FaWindows /></h1></a>
                                        <a href='https://github.com/kryptokrona/hugin-messenger/releases/download/v0.3.3/HuginMessenger-0.3.3.dmg' aria-label="github" target="_blank" rel="noreferrer">
                                            <h1><FaApple /></h1></a>
                                        <a href='' aria-label="github" target="_blank" rel="noreferrer">
                                            <h1><FaLinux /></h1></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md">
                            <div className="card">
                                <div className="card-body d-flex">
                                    <div>
                                        <h5 className="card-title"><span className="p-2">📲</span>  Android Wallet</h5>
                                        <p className="cart-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde earum, vitae, dolores odit deleniti voluptatibus corrupti amet fuga, maiores non culpa expedita! Esse eius doloribus dignissimos minus aut asperiores!</p>
                                        <div className='download-buttons'>
                                            <a href='https://github.com/kryptokrona/hugin-messenger/releases/download/v0.3.3/HuginMessenger-Setup-0.3.3.exe' aria-label="github" target="_blank" rel="noreferrer">
                                                <h1><FaAndroid /></h1></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="card">
                                <div className="card-body d-flex">
                                    <div>
                                        <h5 className="card-title"><span className="p-2">📲</span>  IOS Wallet</h5>
                                        <p className="cart-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde earum, vitae, dolores odit deleniti voluptatibus corrupti amet fuga, maiores non culpa expedita! Esse eius doloribus dignissimos minus aut asperiores!</p>
                                        <div className='download-buttons'>
                                            <a href='' aria-label="github" target="_blank" rel="noreferrer">
                                                <h1><FaApple /></h1></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md">
                            <div className="card">
                                <div className="card-body d-flex">
                                    <div>
                                        <h5 className="card-title"><span className="p-2">📲</span>  Paper Wallet</h5>
                                        <p className="cart-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde earum, vitae, dolores odit deleniti voluptatibus corrupti amet fuga, maiores non culpa expedita! Esse eius doloribus dignissimos minus aut asperiores!</p>
                                        <div className='download-buttons'>
                                            <a href='' aria-label="github" target="_blank" rel="noreferrer">
                                                <h1><FaWallet /></h1></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    )
}

export default DownloadInfo

























