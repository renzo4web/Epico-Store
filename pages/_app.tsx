import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Layout from "../components/Layout";
import { useStore } from "../store/store";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

/* Copyright Renzo Barrios 2021. All Rights Reserved */