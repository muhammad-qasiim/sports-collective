
import ExploreCollections from "../components/ExploreCollections";
import Filter from "../components/Filter";

function Index() {
  return (
    <>
      <section className="bg-gray-50">
        <main className="flex items-start gap-12">
            <Filter />
          <div className="w-full">
            <ExploreCollections />
          </div>
        </main>
      </section>
    </>
  );
}

export default Index;
