import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../Nav'
import header from './header.module.css'

type Props = {}

function Header({}: Props) {
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)

    return (
        <header className={header.main}>
            <div className="container">
                <div className={header.flexContainer}>
                    <div className={header.flexItem}>
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="União - Retífica, Mecânica e Auto Center"
                                width={100}
                                height={70}
                                className={header.logo}
                                layout="intrinsic"
                            />
                        </Link>
                    </div>

                    <div className={`${header.flexItem} ${header.infosContainer}`}>
                        <ul className={`${header.flexContainer} ${header.infoList}`}>
                            <li className={`${header.flexItem} ${header.infosListItem}`}>
                                <div className={header.flexContainer}>
                                    <div className={`${header.flexItem} ${header.infosListIcon}`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            width="24px"
                                            fill="#F2BE54"
                                        >
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                                            <circle cx="12" cy="9" r="2.5" />
                                        </svg>
                                    </div>
                                    <div className={header.flexItem}>
                                        Av. XV de Novembro, 1233, Centro <br />
                                        Guarapuava-PR - 80100-000
                                    </div>
                                </div>
                            </li>

                            <li className={`${header.flexItem} ${header.infosListItem}`}>
                                <div className={header.flexContainer}>
                                    <div className={`${header.flexItem} ${header.infosListIcon}`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            width="24px"
                                            fill="#F2BE54"
                                        >
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                        </svg>
                                    </div>
                                    <div className={header.flexItem}>
                                        Seg - Sexta | 08h às 18h <br />
                                        Sábado | 08h às 12h
                                    </div>
                                </div>
                            </li>

                            <li className={`${header.flexItem} ${header.infosListItem}`}>
                                <div className={header.flexContainer}>
                                    <div className={`${header.flexItem} ${header.infosListIcon}`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            width="24px"
                                            fill="#F2BE54"
                                        >
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                                        </svg>
                                    </div>
                                    <div className={header.flexItem}>
                                        +55 42 3333 9999 <br />
                                        +55 42 999 999 999
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div
                            className={`${header.mobileNav} ${openMobileMenu ? header.open : ''}`}
                            onClick={() => setOpenMobileMenu(!openMobileMenu)}
                        >
                            <Image src="/images/mobile-menu.png" width={55} height={55} />
                            <span>MENU</span>
                        </div>
                    </div>
                </div>
            </div>

            <Nav open={openMobileMenu} />
        </header>
    )
}

export default Header
