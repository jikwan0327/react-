import AppLayout from "../components/AppLayout";
import PropTypes from "prop-types";
import "../styles/globals.css";
import Head from "next/head";

function NodeBird({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
