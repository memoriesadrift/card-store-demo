import UIKit from '../components/uikit'
import '../styles/global.css'


export default function App({ Component, pageProps }) {
    return (
    <>
        <UIKit>
            <Component {...pageProps} />
        <footer>
            <hr></hr>
            <div class="uk-width-1-1 uk-text-center" uk-grid="">
                <div class="uk-card-body uk-width-1-2">
                <p class="uk-text-break">Website created by Samuel Šulovský for the DBS course in WS2020. Images provided by the wonderful <a href="https://www.scryfall.com" >Scryfall</a>. Card images are copyright Wizards of the Coast (and/or their artist, for very old sets).</p>
                </div>
                <div class="uk-card-body uk-width-1-2">
                <span class="text-tiny uk-text-break">Portions of this website are unofficial Fan Content permitted under the Wizards of the Coast Fan Content Policy. The literal and graphical information presented on this site about Magic: The Gathering, including card names, sets and images is copyright Wizards of the Coast, LLC, a subsidiary of Hasbro, Inc. This website is not produced by, endorsed by, supported by, or affiliated with Wizards of the Coast. </span>
                </div>
            </div>
        </footer>
        </UIKit>
    </>)
}