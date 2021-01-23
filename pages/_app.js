import Head from "next/head";
import UIKit from '../components/uikit'
import '../styles/global.css'


export default function App({ Component, pageProps }) {
    return (
    <>
        <UIKit>
            <Component {...pageProps} />
        </UIKit>
    </>)
}