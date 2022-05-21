
import ExploreCollections from "../components/ExploreCollections";
import Filter from "../components/Filter";

function Index() {
  return (
    <>
      <section className="bg-gray-50">
        <main className="flex items-start gap-12">
          <div className="hidden lg:block">
              <Filter />
          </div>
          <div className="w-full">
            <ExploreCollections />
          </div>
        </main>
      </section>
    </>
  );
}

export default Index;
