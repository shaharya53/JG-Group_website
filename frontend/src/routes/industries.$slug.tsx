  import { createFileRoute, redirect } from "@tanstack/react-router";
  import { IndustryTemplate } from "../components/IndustryTemplate";
  import { getIndustryBySlug } from "../data/industriesData";

  export const Route = createFileRoute("/industries/$slug")({
    loader: ({ params }) => {
      const industry = getIndustryBySlug(params.slug);
      if (!industry) throw redirect({ to: "/industries", statusCode: 302 });
      return { industry };
    },
    head: ({ loaderData }) => ({
      meta: [
        { title: `${loaderData?.industry.title} — Jigisha Group` },
        { name: "description", content: loaderData?.industry.tagline },
        { property: "og:title", content: `${loaderData?.industry.title} — Jigisha Group` },
        { property: "og:description", content: loaderData?.industry.tagline },
      ],
    }),
    component: IndustryDetailPage,
  });

  function IndustryDetailPage() {
    const { industry } = Route.useLoaderData();
    return <IndustryTemplate industry={industry} />;
  }
