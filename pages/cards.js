import Head from 'next/head'
import Link from 'next/link'
import CardSearch from '../components/card-search'
import CardList from '../components/card-list'

export default function Cards() {
  return (
      <>
      <Head>
        <title>Card Stock</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <body>
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="">
            <div class="uk-navbar-center">
                <ul class="uk-navbar-nav">
                    <li><Link href="./"><a>Home</a></Link></li>
                    <li class="uk-active">
                        <Link href="#"><a>Cards</a></Link>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><Link href="./p9"><a>Power Nine</a></Link></li>
                                <li><Link href="./alpha"><a>Cards from Alpha</a></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link href="./tournaments"><a>Tournaments</a></Link></li>
                    <li><Link href="./customers"><a>Customers</a></Link></li>
                </ul>
            </div>
        </nav>

        <h1 class="uk-heading-line uk-text-center"><span> Pretend Card Store </span></h1>
        <p class="uk-text-center">Please allow time for the page to load as the images come from an external API that can slow load times.</p>
        <CardSearch></CardSearch>

        <h1 class="uk-heading-line uk-text-center uk-margin-top"><span> Our Inventory </span></h1>
        <CardList></CardList>
      </body>

      </>
  )
}