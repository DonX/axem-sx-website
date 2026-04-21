import { Html, Head, Main, NextScript } from "next/document";
import { DocumentContext, DocumentInitialProps } from "next/document";
import Document from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    const locale = this.props.__NEXT_DATA__.locale ?? "en";
    return (
      <Html lang={locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
