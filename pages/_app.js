import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Header from '../components/Header'; // Import the Header component
import Footer from '../components/Footer'; // Import the Footer component

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;

