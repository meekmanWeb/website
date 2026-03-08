const ProductSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-[300px] bg-gray-200" />
      <div className="p-6 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
};
export default ProductSkeleton;
