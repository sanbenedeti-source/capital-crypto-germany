export default function InvestPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">
        Invest in German Real Estate
      </h1>
      <p className="mt-4">
        Own a share of premium properties starting from €10,000
      </p>

      <a
        href="/invest/properties"
        className="mt-6 inline-block bg-black text-white px-6 py-3 rounded"
      >
        View Properties
      </a>
    </main>
  );
}