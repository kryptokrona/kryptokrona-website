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
                                    <a href='https://github.com/kryptokrona/kryptokrona-desktop-wallet/releases/download/v0.1.1/Kryptokrona-wallet-Setup-0.1.1.exe' aria-label="github" target="_blank" rel="noreferrer">
                                        <h4><FaWindows /></h4></a>
                                    <a href='https://github.com/kryptokrona/kryptokrona-desktop-wallet/releases/download/v0.1.1/Kryptokrona-wallet-0.1.1.dmg' aria-label="github" target="_blank" rel="noreferrer">
                                        <h4><FaApple /></h4></a>
                                    <a href='https://github.com/kryptokrona/kryptokrona-desktop-wallet/releases/download/v0.1.1/Kryptokrona-wallet-0.1.1.AppImage' aria-label="github" target="_blank" rel="noreferrer">
                                        <h4><FaLinux /></h4></a>
                                </div>
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
                                    <a href='https://play.google.com/store/apps/details?id=com.xkr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' aria-label="github" target="_blank" rel="noreferrer">
                                        <h4><FaAndroid /></h4></a>
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
                                    {/* <a href='' aria-label="ios-wallet" target="_blank" rel="noreferrer"></a> */}
                                    <h4>Coming soon!</h4>
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
                                    <a href='https://kryptokrona.se/paperwallet/' aria-label="paper-wallet" target="_blank" rel="noreferrer">
                                        <h4><FaWallet /></h4></a>
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

























