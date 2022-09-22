import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import SignUpForm from "../components/SignUpForm";
import { useSelector } from "react-redux";
import Router from "next/router";

const signup = () => {
  const { me, signUpDone } = useSelector((state) => state.user);
  useEffect(() => {
    if (me && me.id) {
      Router.replace("/");
    }
  }, [me && me.id]);

  useEffect(() => {
    if (signUpDone) {
      Router.replace("/");
    }
  }, [signUpDone]);

  return (
    <>
      {/* <AppLayout> */}
      <Head>
        <title>signup | nodeBird</title>
      </Head>
      <SignUpForm />

      {/* </AppLayout> */}
    </>
  );
};

export default signup;
