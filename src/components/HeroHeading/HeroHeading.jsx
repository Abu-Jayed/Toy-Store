import Button from "../Button/Button";

const HeroHeading = () => {
  return (
    <>
      <div className="mt-12 sm:max-w-7xl mx-auto text-black">
        <div>
          <h1 className="text-4xl tracking-wide font-bold text-center">
            The Finest Toy Shop in the World.
          </h1>
          <p className="text-center text-xl mt-2">
            Our expert toy-testers have been hard at work to select the ultimate
            gifts for teeny toddlers, tech-loving pre-teens, and everyone in
            between!
          </p>
        </div>
        <div className="sm:flex justify-around mt-6">
          <Button>Shop All Toys</Button>
          <Button>Shop Cristmas</Button>
          <Button>Shop Top 10 Toys</Button>
        </div>
        <div className="text-center mt-6 text-4xl font-bold">
          <h1>Half Term Offers</h1>
          <Button>Shop All Offers</Button>
        </div>
      </div>
    </>
  );
};

export default HeroHeading;
