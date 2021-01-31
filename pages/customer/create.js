import Head from 'next/head'
import Link from 'next/link'
import CreateCustomer from '../../components/create-customer'

const Create = () => {
  return (
      <>
        <Head>
            <title>Customer Record</title>
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
                    <li class="uk-active"><Link href="/customers"><a>Customers</a></Link></li>
                </ul>
            </div>
        </nav>

            <h1 class="uk-heading-line uk-text-center"><span> Pretend Card Store </span></h1>
            <div class="uk-text-center">
                <Link href="/customers"><a class="uk-button uk-button-large uk-width-auto uk-button-default uk-margin uk-text-center" href="/customers">Back to Customers</a></Link>
            </div>
            <CreateCustomer></CreateCustomer>
        </body>
      </>
  ) 
}

export default Create;
