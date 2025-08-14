import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/component";
import { fuels, yearsOfProduction } from "@/constant";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({ 
    make: searchParams.manufacturer || '',
    year: searchParams.year || '', 
    fuel_type: searchParams.fuel_type || '',
    limit: searchParams.limit || 10, 
    model: searchParams.model || '',
   });

  console.log(allCars)

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 0 || !allCars

  return (
      <main className="overflow-hdden">
        <Hero />

        <div className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto" id="discover">
          <div className="flex flex-col items-start justify-start gap-y-2.5 text-black">
            <h1 className="text-4xl font-extrabold">Car Catalog</h1>
            <p>Explore the cars you might like</p>
          </div>

          <div className="mt-12 w-full flex justify-between items-center flex-wrap gap-5">
            <SearchBar />

            <div className="flex justify-start flex-wrap items-center gap-2">
              <CustomFilter title="fuel_type" options={fuels}/>
              <CustomFilter title="year" options={yearsOfProduction}/>
            </div>
          </div>
          {!isDataEmpty ? (
            <section>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
                {allCars?.map((car, index) => (
                  <CarCard 
                    key={index}
                    car={car}
                  />
                ))}
              </div>

              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) : (
            <div className="mt-16 flex justify-center items-center flex-col gap-2">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            </div>
          )}
        </div>
      </main>
  );
}
