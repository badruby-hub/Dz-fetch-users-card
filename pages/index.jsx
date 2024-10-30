import Head from "next/head";

import { DemoFetcher } from '../components/demo/Demo-Fetcher';

export default function Home() {
  return <>
    <Head>
      <title>Create Next App</title>
    </Head>
    <DemoFetcher />
    {/* <DemoJSPHTable /> */}
  </>;
}