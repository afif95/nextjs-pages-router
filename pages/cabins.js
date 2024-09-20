import CabinList from "@/components/CabinList";
import { getCabins } from "@/lib/data-service";

// only this function will be server-side rendered to fetch data, everything else is client-side rendered
// statically generated (SSG: Static Site Generation)
// only called once during buildtime
// Incremental Site Regeneration (ISR) is implemented by revalidate [hybrid: static + dynamic]
export async function getStaticProps() {
  const cabins = await getCabins();
  return { props: { cabins }, revalidate: 3600 };
}

function Cabins({ cabins }) {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <CabinList cabins={cabins} />
    </div>
  );
}

export default Cabins;
