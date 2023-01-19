import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Rashad Stack"></meta>
        <meta
          name="description"
          content="Welcome to the ultimate movie streaming experience! Our platform offers a vast selection of the latest and greatest films, as well as a wide range of classic favorites. With a simple and user-friendly interface, you can easily browse and stream movies in high definition. No more waiting in long lines or dealing with sold-out shows. From the comfort of your own home, you can access the best movies anytime, anywhere. Whether you're in the mood for a blockbuster hit or an indie film, we have something for everyone. Sign up now and start streaming your favorite movies today!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-primary text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
