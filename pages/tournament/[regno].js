import { useClientRouter } from 'use-client-router'
import Head from 'next/head'
import TournamentCrud from '../../components/tournament-crud'

const Tournament = () => {
  const router = useClientRouter()
  const { regno } = router.query

  return (
      <>
        <Head>
            <title>Tournament Record</title>
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
                        <li>
                            <a href="/cards">Cards</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="/p9">Power Nine</a></li>
                                    <li><a href="/alpha">Cards from Alpha</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a class="uk-active" href="/tournaments">Tournaments</a></li>
                        <li><a href="/customers">Customers</a></li>
                    </ul>
                </div>
            </nav>

            <h1 class="uk-heading-line uk-text-center"><span> Pretend Card Store </span></h1>
            <div class="uk-text-center">
                <a class="uk-button uk-button-large uk-width-auto uk-button-default uk-margin uk-text-center" href="/tournaments">Back to Tournaments</a>
            </div>
            <TournamentCrud regno={regno}></TournamentCrud>
        </body>
      </>
  ) 
}

export default Tournament;
