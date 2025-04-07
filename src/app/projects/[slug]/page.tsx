import { MDXRemote } from "next-mdx-remote/rsc";
import { readFileSync } from "fs";
import "../../../styles/editor.css";
export default function Page({ params }: { params: { slug: string } }) {
  const workDir =
    process.cwd() + "/src/contents/projects/" + params.slug + ".mdx";

  const content = readFileSync(workDir, "utf8");

  return (
    <div className="container-center project-details py-6">
      <MDXRemote source={content} />
    </div>
  );
}
