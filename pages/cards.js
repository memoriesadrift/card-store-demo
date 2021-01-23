import Head from 'next/head'
import CardItem from '../components/card-item'
import CardList from '../components/card-list'
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
        <h1 class="uk-heading-line uk-text-center"><span> Pretend Card Store </span></h1>
        <form class="uk-text-center uk-form-stacked">
          <div class="uk-margin uk-text-center">
              <label class="uk-form-label" for="form-stacked-text">Search for cards in our inventory</label>
              <input class="uk-input uk-form-width-large" type="text" placeholder="Enter card name"></input>
          </div>
          <input type="submit" value="Submit" class="uk-button uk-button-default"></input>
        </form>
        <h1 class="uk-heading-line uk-text-center uk-margin-top"><span> Our Inventory </span></h1>
        <CardList></CardList>
      </body>
      </>
  )
}