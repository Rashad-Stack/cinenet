import { Loader } from "@/components";
import { magic } from "@/lib/magic_client";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      // isLoggedIn ? router.push("/") : router.push("/login");
    })();
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => setIsLoading(false));
    router.events.on("routeChangeError", () => setIsLoading(false));

    return () => {
      router.events.off("routeChangeComplete");
      router.events.off("routeChangeError");
    };
  }, [router]);

  return <>{isLoading ? <Loader /> : <Component {...pageProps} />}</>;
}
