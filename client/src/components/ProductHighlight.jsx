import ProductCard from "./ProductCard.jsx";

const productsInfo = [
  {
    src: "https://picsum.photos/id/231/200/200",
    name: "The Lorem Ipsum for photos.",
    price: "$99.99",
  },
  {
    src: "https://picsum.photos/id/232/200/200",
    name: "Wireless Bluetooth Earbuds",
    price: "$79.99",
  },
  {
    src: "https://picsum.photos/200/200",
    name: "Stylish Cool Sunglasses in The World",
    price: "$79.99",
  },
];

function ProductHighlight() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productsInfo.map(({ src, name, price }) => (
            <ProductCard src={src} name={name} price={price} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
