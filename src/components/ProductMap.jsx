import ProductCard from "./ProductCard";

function ProductMap({
  products,
  handleEdit,
  handleDelete,
}) {
  return (
    <section className="py-10 bg-green-600">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-white text-2xl font-semibold">
              Mahsulot topilmadi 😔
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default ProductMap;