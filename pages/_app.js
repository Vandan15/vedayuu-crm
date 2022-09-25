import '../styles/globals.css'
import '../styles/global.scss'
import store from '../utils/Store/index';
import Favicon from 'react-favicon'
import { Provider, useDispatch, useSelector } from 'react-redux';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Favicon url='' />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
