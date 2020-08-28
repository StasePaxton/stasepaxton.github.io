import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;600;800&display=swap" rel="stylesheet" />
        </Head>

        <body className="flex flex-col min-h-screen">
          <Main />
          <script src="https://kit.fontawesome.com/0fc4a55089.js" crossOrigin="anonymous"></script>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
