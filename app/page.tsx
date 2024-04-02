import { Hero, SearchBar, CustomFilter, ItemCard } from "@/components";
import fetchItems from "@/utils";

export default async function Home() {
  const allItems = await fetchItems();

  // console.log(allItems);
  const isDataEmpty = allItems.length < 1 || !allItems;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">What's New</h1>
          <p>Explore the styles you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allItems?.data?.products.slice(0, 6).map((item) => (
                <ItemCard item={item} key={item.id} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
