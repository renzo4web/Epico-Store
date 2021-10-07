import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
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
