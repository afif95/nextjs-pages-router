import CabinView from "@/components/CabinView";
import Head from "next/head";
import { getCabin } from "@/lib/data-service";
// import { getStaticPaths } from "next/dist/build/templates/pages";
// import { useRouter } from "next/router";

// only this function will be server-side rendered to fetch data, everything else is client-side rendered
// dynamic route: impossible to use getStaticProps()
// dynamically generated (SSR: Server Side Rendered)
// called during each request time
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}

// way to do SSG to statically generate a route that has dynamic segments
// getStaticPaths + getStaticProps

function Cabin({ cabin }) {
  // const router = useRouter();
  return (
    <>
      <Head>
        {/* <title>Cabin {router.query.cabinId} // The Wild Oasis</title> */}
        <title>Cabin {cabin?.name} // The Wild Oasis</title>
      </Head>
      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
