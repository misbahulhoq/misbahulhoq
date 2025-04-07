import { MDXRemote } from "next-mdx-remote/rsc";
export default function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  return (
    <div className="container-center">
      {" "}
      <MDXRemote source={`## ${params.slug}`} />
    </div>
  );
}
