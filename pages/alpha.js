import Link from 'next/link'
import Head from 'next/head'
import AlphaList from '../components/alpha-list'

export default function Alpha() {
  return (
      <>
      <Head>
        <title>Cards from Alpha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <body>
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="">
            <div class="uk-navbar-center">
                <ul class="uk-navbar-nav">
                    <li><Link href="./"><a>Home</a></Link></li>
                    <li class="uk-active">
                        <Link href="./cards"><a>Cards</a></Link>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li ><Link href="./p9"><a>Power Nine</a></Link></li>
                                <li class="uk-active"><Link href="#"><a>Cards from Alpha</a></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link href="./tournaments"><a>Tournaments</a></Link></li>
                    <li><Link href="./customers"><a>Customers</a></Link></li>
                </ul>
            </div>
        </nav>

        <h1 class="uk-heading-line uk-text-center"><span> Pretend Card Store </span></h1>
        <p class="uk-margin-right uk-margin-left uk-text-center">
          Alpha was the very first set to ever be released, so cards from Alpha can be quite rare. So, we have decided to separate our Alpha cards out for your viewing pleasure!<br></br>
          Please allow time for the page to load as the images come from an external API that can slow load times.
        </p>
        <h1 class="uk-heading-line uk-text-center uk-margin-top"><span> Our Inventory of Alpha Cards</span></h1>
        <AlphaList></AlphaList>
      </body>

      </>
  )
}