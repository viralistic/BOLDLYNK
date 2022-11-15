import Hero from "../components/Hero/Hero";
import Subscribe from "../components/Subscribe/Subscribe";
import Review from "../components/Review/Review";

export default function Home() {
  return (
    <>
      <Hero
        heroTitle="Enter the backdoor of your own network."
        heroDescription="We update everything we can- saving HOURS of your time."
      />
      <Review
        reviewTitle="“This app enables me to monetize”"
        reviewText="We update everything we can- saving HOURS of your time.We update everything we can- saving HOURS of your time."
      />
      <Subscribe subscribeText="You can say you were the first one..." />
    </>
  );
}
