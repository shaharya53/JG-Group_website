import { createFileRoute, redirect } from "@tanstack/react-router";
import { getServiceBySlug } from "../data/servicesData";
import { ServiceTemplate } from "../components/ServiceTemplate";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw redirect({ to: "/services", statusCode: 302 });
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.title} — Jigisha Group` },
      { name: "description", content: loaderData?.service.tagline },
      { property: "og:title", content: `${loaderData?.service.title} — Jigisha Group` },
      { property: "og:description", content: loaderData?.service.tagline },
    ],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  return <ServiceTemplate service={service} />;
}
