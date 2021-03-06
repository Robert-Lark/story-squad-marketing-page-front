import Header from "./components/Header/Header";
import "./components/Home/styles/Global.css";
import Main from "./components/Home/Main";
import Footer from "./components/Footer/Footer";
import React, { HTMLAttributes } from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../src/seoConfig';

const SEO = ({
  title,
  description = seoConfig.description,
  path = '',
  meta = [],
}: SEOProps): React.ReactElement => {
  return (
    <Helmet>
      <title>{title ? `${title} - Story Squad` : seoConfig.title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />

      <meta name="twitter:creator" content={seoConfig.twitterHandle} />

      <meta
        property="og:image"
        content={seoConfig.deployedUrl + '/logo512.png'}
      />
      <meta
        name="twitter:image"
        content={seoConfig.deployedUrl + '/logo512.png'}
      />

      {meta.map((props, i) => (
        <meta key={i} {...props} />
      ))}

      <link rel="canonical" href={seoConfig.deployedUrl + path} />
    </Helmet>
  );
};

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  meta?: HTMLAttributes<HTMLMetaElement>[];
}

function App() {
  <SEO title="Story Squad" />
  return (
    <div className='appContainer'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
