import Head from 'next/head'
import Link from 'next/link'
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
                    <li class="uk-active"><Link href="#"><a>Home</a></Link></li>
                    <li>
                        <Link href="/cards"><a>Cards</a></Link>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><Link href="/p9"><a>Power Nine</a></Link></li>
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
        <div uk-grid="" class="uk-margin-left">
          <div class="uk-card uk-card-hover uk-card-default uk-card-body uk-margin-top uk-margin-bottom uk-margin-left uk-margin-right uk-width-1-1">
              <h3 class="uk-card-title">Tournaments</h3>
              <p>View tournaments hosted at our store or host your own!</p>
              <Link href="/tournaments"><a class="uk-button uk-button-text">Click Here</a></Link>
          </div>

          <div class="uk-card uk-card-hover uk-card-default uk-card-body uk-margin-top uk-margin-bottom uk-margin-left uk-margin-right uk-width-1-1">
            <h3 class="uk-card-title">Cards</h3>
            <p>View our extensive stock of cards!</p>
            <Link href="/cards"><a class="uk-button uk-button-text">Click Here</a></Link>
          </div>

          <div class="uk-card uk-card-hover uk-card-default uk-card-body uk-margin-top uk-margin-bottom uk-margin-left uk-margin-right uk-width-1-1">
            <h3 class="uk-card-title">Customers</h3>
            <p>Our customer database.</p>
            <Link href="/customers"><a class="uk-button uk-button-text">Click Here</a></Link>
          </div>
          
          <div class="uk-card uk-card-hover uk-card-default uk-card-body uk-margin-top uk-margin-bottom uk-margin-left uk-margin-right uk-width-1-1">
            <h3 class="uk-card-title">Our Rarest Stock</h3>
            <p>We own a couple of the most fabled cards... Come check out our Power Nine stock!</p>
            <p>Power Nine consists of: Black Lotus, Ancestral Recall, Mox Ruby, Mox Sapphire, Mox Pearl, Mox Jet, Mox Emerald, Time Walk and Timetwister</p>
            <Link href="/p9"><a class="uk-button uk-button-text">Click Here</a></Link>
          </div>
        </div>
      </body>
    </>
  )
}