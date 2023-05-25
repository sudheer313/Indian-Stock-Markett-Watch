import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.heroImage} h-96 py-24 px-10`}>
      <h1 className="text-4xl font-bold text-white-900 mb-4 shadow-lg">
        Welcome to the Indian Stock Market Watch
      </h1>
      <p className="text-2xl font-bold text-white-900 mb-12 shadow-lg">
        Stay up-to-date with the latest news, blogs, and market insights
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded shadow-lg">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
