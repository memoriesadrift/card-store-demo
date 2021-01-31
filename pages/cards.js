import Head from 'next/head'
import CardSearch from '../components/card-search'
import CardList from '../components/card-list'
import '../node_modules/uikit/dist/css/uikit.css'

export default function Cards() {
  return (
      <>
      <Head>
        <title>Card Stock</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="../node_modules/uikit/dist/css/uikit.min.css" />
        <script src="../node_modules/uikit/dist/js/uikit.min.js"></script>
        <script src="../node_modules/uikit/dist/js/uikit-icons.min.js"></script>
      </Head>

      <body>
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="">
            <div class="uk-navbar-center">
                <ul class="uk-navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li class="uk-active">
                        <a href="#">Cards</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="/p9">Power Nine</a></li>
                                <li><a href="/alpha">Cards from Alpha</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="/tournaments">Tournaments</a></li>
                    <li><a href="/customers">Customers</a></li>
                </ul>
            </div>
        </nav>

        <h1 class="uk-heading-line uk-text-center"><span> Pretend Card Store </span></h1>
        <CardSearch></CardSearch>

        <h1 class="uk-heading-line uk-text-center uk-margin-top"><span> Our Inventory </span></h1>
        <CardList></CardList>
      </body>

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
      </>
  )
}