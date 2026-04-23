import { supabase } from "@/lib/supabase";

export default async function PropertiesPage() {
  const { data: properties } = await supabase
    .from("properties")
    .select("*");

  return (
    <main className="p-10">
      <h1 className="text-3xl mb-6">Properties</h1>

      <div className="grid grid-cols-3 gap-6">
        {properties?.map((p) => (
          <div key={p.id} className="border p-4 rounded">
            <img src={p.image} className="mb-3" />
            <h2>{p.title}</h2>
            <p>{p.price}</p>

            <a
              href={`/invest/properties/${p.id}`}
              className="text-blue-600"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}