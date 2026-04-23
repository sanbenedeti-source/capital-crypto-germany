export default function PropertyDetail({ params }: { params: { id: string } }) {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Property #{params.id}
      </h1>

      <p className="mt-4">
        Detailed info about the property.
      </p>

      <a
        href="/invest/signup"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded"
      >
        Request Investment Info
      </a>
    </main>
  );
}