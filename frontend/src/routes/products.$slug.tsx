import { createFileRoute, redirect } from "@tanstack/react-router";
import { getProductBySlug } from "../data/productsData";
import { ProductTemplate } from "../components/ProductTemplate";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw redirect({ to: "/products", statusCode: 302 });
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.title} — Jigisha Group` },
      { name: "description", content: loaderData?.product.tagline },
      { property: "og:title", content: `${loaderData?.product.title} — Jigisha Group` },
      { property: "og:description", content: loaderData?.product.tagline },
    ],
  }),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  return <ProductTemplate product={product} />;
}
