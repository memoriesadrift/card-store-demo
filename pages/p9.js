import Link from 'next/link'
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
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li class="uk-active">
                        <Link href="/cards"><a>Cards</a></Link>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><Link href="#"><a>Power Nine</a></Link></li>
                                <li><Link href="/alpha"><a>Cards from Alpha</a></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link href="/tournaments"><a>Tournaments</a></Link></li>
                    <li><Link href="/customers"><a>Customers</a></Link></li>
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


      </>
  )
}