import Head from "next/head";
import { Fetcher } from "../components/Fetcher";
import { ComponentsURL } from "../components/microComponents";

export default function Home() {
  return   <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Fetcher url={ComponentsURL()}>
      </Fetcher>
      </>
}
