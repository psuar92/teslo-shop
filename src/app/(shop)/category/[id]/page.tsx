import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
// import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  }
}

const products = initialData.products;

export default function CategoryPage({ params }: Props) {

  const { id } = params;

  // if (id === 'kids') {
  //   notFound();
  // }

  const productsByCategory = products.filter(product => product.gender === id);

  return (
    <>

      <Title
        title={`Items for ${id}`}
        subTitle="All products"
        className="mb-2"
      />

      <ProductGrid products={productsByCategory} />

    </>
  );
}