import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import '@fontsource-variable/public-sans';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
