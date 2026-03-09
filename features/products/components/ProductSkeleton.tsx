export default function ProductSectionSkeleton() {
  return (
    <section className="my-10">
      {/* Section title */}
      <div className="h-6 bg-gray-300 rounded w-40 ml-6 mb-6 animate-pulse"></div>

      <div className="lg:grid grid-cols-2 gap-6 px-4 space-y-6 lg:space-y-0">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
function ProductSkeleton() {
  return (
    <div className="animate-pulse bg-white shadow rounded-lg p-4 space-y-4">
      {/* Image */}
      <div className="bg-gray-300 h-48 w-full rounded"></div>

      {/* Title */}
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>

      {/* Subtitle */}
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>

      {/* Button */}
      <div className="h-8 bg-gray-300 rounded w-24"></div>
    </div>
  );
}
