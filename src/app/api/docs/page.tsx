import { Metadata } from "next";
import { getApiDocs } from "../../../../swagger";
import ReactSwagger from "@/app/components/ReactSwagger";

export const metadata: Metadata = {
  title: "API Docs",
  description: "API Documentation with Swagger for Nextjs",
};

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}
