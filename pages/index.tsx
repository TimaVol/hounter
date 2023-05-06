import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import OurRec from "@/components/OurRec";
import ReadyToSell from "@/components/ReadyToSell";
import SeeOurReview from "@/components/SeeOurReview";
import Subscribe from "@/components/Subscribe";
import TipsAndTrick from "@/components/TipsAndTrick";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <OurRec />
      <ReadyToSell />
      <SeeOurReview />
      <TipsAndTrick />
      <Subscribe />
      <Footer />
    </>
  );
}
