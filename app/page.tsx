import { Hero, SearchBar, CustomFilter } from "@/component";

export default function Home() {
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
              <CustomFilter title="fuel"/>
              <CustomFilter title="year"/>
            </div>
          </div>
        </div>
      </main>
  );
}
