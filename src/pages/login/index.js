import { magic } from "@/lib/magic_client";
import { Roboto_Slab } from "@next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Nav from "./nav";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "auto",
  preload: true,
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleRouteChange = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeError", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("routeChangeError", handleRouteChange);
    };
  }, [router]);

  const formHandler = async (e) => {
    e.preventDefault();

    if (email && email.includes("@")) {
      setIsLoading(true);
      try {
        const token = await magic.auth.loginWithMagicLink({ email });
        router.push("/");
        console.log("🚀 ~ file: index.js:26 ~ formHandler ~ token", token);
      } catch (err) {
        console.log(err);
        setError(err.message);
        setIsLoading(false);
      }
    } else {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [email]);

  return (
    <>
      <Head>
        <title>Cinenet SignIn</title>
      </Head>

      <main
        className={[
          `bg-[url(/static/images/login_bg.jpg)] bg-cover h-screen max-h-screen`,
          roboto_slab.className,
        ]}
      >
        <section className="w-full h-full bg-black/60">
          <Nav />
          <div className="w-auto h-auto">
            <div className="w-1/2 md:w-1/4 h-auto bg-black/60 p-10 absolute-center rounded-lg">
              <h1 className="text-5xl font-bold tracking-wide mb-8">Login</h1>
              <form onSubmit={formHandler}>
                <div className="my-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-700 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    value={email}
                    onChange={(input) => setEmail(input.target.value)}
                  />
                </div>
                <div className="h-8">
                  {error && (
                    <p className="text-red-500 text-lg font-semibold my-3">
                      Invalid email address
                    </p>
                  )}
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="w-full inline-block px-7 py-3 bg-red-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-600 hover:shadow active:shadow-lg transition duration-150 ease-in-out"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
