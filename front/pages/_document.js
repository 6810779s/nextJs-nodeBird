import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html
        style={{
          width: "100%",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <Head />
        <body
          style={{
            width: "100%",
            height: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          <Main
            style={{ width: "100%", height: "100%", margin: "0", padding: "0" }}
          />
          <NextScript />
          <style>{`
            #__next,
            .main {
              width:100%;
              height: 100%;
              
            }
          `}</style>
        </body>
      </Html>
    );
  }
}
