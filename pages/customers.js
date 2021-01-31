import Head from 'next/head'
import Link from 'next/link'
import CustomerList from '../components/customer-list'
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
                    <li><Link href="/"><a>Home</a></Link></li>
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
                    <li class="uk-active"><Link href="#"><a>Customers</a></Link></li>
                </ul>
            </div>
        </nav>

        <h1 class="uk-heading-line uk-text-center"><span> Pretend Card Store </span></h1>
        <div class="uk-text-center">
          <Link href="/customer/create"><a class="uk-button uk-button-large uk-width-auto uk-button-default uk-margin uk-text-center">Create a Customer Profile</a></Link>
        </div>
        <h1 class="uk-heading-line uk-text-center uk-margin-top"><span> Our Customers </span></h1>
        <CustomerList></CustomerList>
      </body>

      </>
  )
}