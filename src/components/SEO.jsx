/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet-async";

export const SEO = ({ title, description, keywords, author, ogTitle, ogDescription, ogUrl, ogImage, twitterTitle, twitterDescription, twitterImage }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:image" content={ogImage} />
            <meta name="twitter:title" content={twitterTitle} />
            <meta name="twitter:description" content={twitterDescription} />
            <meta name="twitter:image" content={twitterImage} />
        </Helmet>
    );
};
