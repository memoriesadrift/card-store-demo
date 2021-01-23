import Head from 'next/head'
import CardImage from '../components/card-image'
import '../node_modules/uikit/dist/css/uikit.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pretend Card Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="../node_modules/uikit/dist/css/uikit.min.css" />
        <script src="../node_modules/uikit/dist/js/uikit.min.js"></script>
        <script src="../node_modules/uikit/dist/js/uikit-icons.min.js"></script>
      </Head>

      <body>

        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="">
            <div class="uk-navbar-center">
                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#">Home</a></li>
                    <li>
                        <a href="/cards">Cards</a>
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

        <div class="uk-text-center" uk-grid="">
          <div class="uk-width-1-3">
            <div><CardImage cardName={'_rand'}/></div>
          </div>
          <div class="uk-width-1-3">
            <div><CardImage cardName={'_rand'}/></div>
          </div>
          <div class="uk-width-1-3">
            <div><CardImage cardName={'_rand'}/></div>
          </div>
        </div>
        <div uk-grid="">
          <div class="uk-card uk-card-hover uk-card-default uk-card-body uk-margin-top uk-margin-bottom uk-margin-left uk-margin-right uk-width-1-1">
              <h3 class="uk-card-title">Tournaments</h3>
              <p>View tournaments hosted at our store or host your own!</p>
              <a class="uk-button uk-button-text" href="/tournaments">Click Here</a>
          </div>

          <div class="uk-card uk-card-hover uk-card-default uk-card-body uk-margin-top uk-margin-bottom uk-margin-left uk-margin-right uk-width-1-1">
            <h3 class="uk-card-title">Cards</h3>
            <p>View our extensive stock of cards!</p>
              <a class="uk-button uk-button-text" href="/cards">Click Here</a>
          </div>

          <div class="uk-card uk-card-hover uk-card-default uk-card-body uk-margin-top uk-margin-bottom uk-margin-left uk-margin-right uk-width-1-1">
            <h3 class="uk-card-title">Customers</h3>
            <p>Our customer database.</p>
              <a class="uk-button uk-button-text" href="/customers">Click Here</a>
          </div>
          
          <div class="uk-card uk-card-hover uk-card-default uk-card-body uk-margin-top uk-margin-bottom uk-margin-left uk-margin-right uk-width-1-1">
            <h3 class="uk-card-title">Our Rarest Stock</h3>
            <p>We own a couple of the most fabled cards... Come check out our Power Nine stock!</p>
            <p>Power Nine consists of: Black Lotus, Ancestral Recall, Mox Ruby, Mox Sapphire, Mox Pearl, Mox Jet, Mox Emerald, Time Walk and Timetwister</p>
              <a class="uk-button uk-button-text" href="/p9">Click Here</a>
          </div>
        </div>
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