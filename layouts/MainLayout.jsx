import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import { ModalContext } from "../components/modules/ModalsManagerContext";

import Modal from "../components/Modal";

// import '../styles/header.css';

const navigation = [
    { id: 1, title: "Главная", path: "/" },
    { id: 2, title: "Окна и двери", path: "/opens" },
    { id: 3, title: "Стеклопакеты", path: "/windows" },
    { id: 4, title: "Цены", path: "/prices" },
];

export default function MainLayout({ children, title, page }) {
    const { pathname } = useRouter();

    return (
        <ModalContext.Provider value={{}}>
            <Head>
                <title>
                    {title != null
                        ? title + " | ЦПИ-СПб"
                        : "Дешёвые окна | ЦПИ-СПб"}
                </title>
            </Head>
            <div className="layout">
                <Modal />
                <header
                    className={page == "main" ? "content overpic" : "content"}
                >
                    <Link href="/">
                        <img
                            src="/static/logo.png"
                            alt=""
                            className="img-logo"
                        />
                    </Link>
                    <nav>
                        {navigation.map(({ id, title, path }) => (
                            <Link key={id} href={path}>
                                <a
                                    className={
                                        pathname === path
                                            ? "nav-item active"
                                            : "nav-item"
                                    }
                                >
                                    {title}
                                </a>
                            </Link>
                        ))}
                    </nav>
                    <div className="contacts">
                        <div className="contact phone">+7 (777) 777-77-77</div>
                        <div className="contact mail">mail@mail.ru</div>
                    </div>
                    <div className="btn btn-header">Заказать расчёт</div>
                </header>
                <main>{children}</main>
            </div>
        </ModalContext.Provider>
    );
}
