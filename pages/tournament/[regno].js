import { useClientRouter } from 'use-client-router'
import Head from 'next/head'
import Link from 'next/link'
import TournamentCrud from '../../components/tournament-crud'

const Tournament = () => {
  const router = useClientRouter()
  const { regno } = router.query

  return (
      <>
        <Head>
            <title>Tournament Record</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        <body>
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="">
            <div class="uk-navbar-center">
                <ul class="uk-navbar-nav">
                    <li><Link href="../"><a>Home</a></Link></li>
                    <li>
                        <Link href="../cards"><a>Cards</a></Link>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><Link href="../p9"><a>Power Nine</a></Link></li>
                                <li><Link href="../alpha"><a>Cards from Alpha</a></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li class="uk-active"><Link href="../tournaments"><a>Tournaments</a></Link></li>
                    <li><Link href="../customers"><a>Customers</a></Link></li>
                </ul>
            </div>
        </nav>

            <h1 class="uk-heading-line uk-text-center"><span> Pretend Card Store </span></h1>
            <div class="uk-text-center">
                <Link href="../tournaments"><a class="uk-button uk-button-large uk-width-auto uk-button-default uk-margin uk-text-center">Back to Tournaments</a></Link>
            </div>
            <TournamentCrud regno={regno}></TournamentCrud>
        </body>
      </>
  ) 
}

export default Tournament;
