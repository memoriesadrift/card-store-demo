
import Head from 'next/head'
import P9List from '../components/p9-list'
import '../node_modules/uikit/dist/css/uikit.css'

export default function P9() {
  return (
      <>
      <Head>
        <title>Power Nine</title>
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
                        <a href="/cards">Cards</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="#">Power Nine</a></li>
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
        <p class="uk-margin-right uk-margin-left">The Power Nine are a set of nine extremely rare and powerful cards. They are only legal in the Vintage format, where they are restricted to a single copy in any deck.
            However, their illustrious status within the community remains; they are highly sought after and seen as trophies in every collection they are a part of. 
            Oftentimes they are included in "Cubes" - or custom draft formats - where they play an important role as powerful cards that make players reconsider their game plan to accomodate the cards.
            <br></br>Our stock of Power Nine cards changes over time. <br></br>
            The Power Nine are: <a class="uk-link-text" href="https://scryfall.com/search?q=Ancestral+Recall">Ancestral Recall</a>, <a class="uk-link-text" href="https://scryfall.com/search?q=Black+Lotus">Black Lotus</a>, <a class="uk-link-text" href="https://scryfall.com/search?q=Mox+Emerald">Mox Emerald</a>,  <a class="uk-link-text" href="https://scryfall.com/search?q=Mox+Jet">Mox Jet</a>, <a class="uk-link-text" href="https://scryfall.com/search?q=Mox+Pearl">Mox Pearl</a>, <a class="uk-link-text" href="https://scryfall.com/search?q=Mox+Ruby">Mox Ruby</a>, <a class="uk-link-text" href="https://scryfall.com/search?q=Mox+Sapphire">Mox Sapphire</a>, <a class="uk-link-text" href="https://scryfall.com/search?q=Timetwister">Timetwister</a> and <a class="uk-link-text" href="https://scryfall.com/search?q=Time+Walk">Time Walk</a>.
        </p>
        <h1 class="uk-heading-line uk-text-center uk-margin-top"><span> Our Inventory of Power Nine Items</span></h1>
        <P9List></P9List>
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