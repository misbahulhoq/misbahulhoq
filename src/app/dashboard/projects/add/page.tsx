/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { baseUrl } from "@/api/api";
import "./styles.css";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Link from "@tiptap/extension-link";
import { EditorContent, generateHTML, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useCallback, useState } from "react";

const MenuBar = ({
  editor,
  setShowPopup,
}: {
  editor: ReturnType<typeof useEditor>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const addLink = () => {
    const url = prompt("Enter the URL");
    if (url) {
      editor
        ?.chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="button-group flex flex-wrap items-center gap-4">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          Code
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          Clear marks
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}>
          Clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          Paragraph
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          H3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }
        >
          H4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }
        >
          H5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          Blockquote
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          Horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          Redo
        </button>
        <button
          onClick={() => editor.chain().focus().setColor("#958DF1").run()}
          className={
            editor.isActive("textStyle", { color: "#958DF1" })
              ? "is-active"
              : ""
          }
        >
          Purple
        </button>
        <button onClick={() => setShowPopup(true)}>Insert HTML</button>
        <button
          onClick={addLink}
          className={editor.isActive("link") ? "is-active" : ""}
        >
          Set link
        </button>
        <button
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive("link")}
        >
          Unset link
        </button>
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit,
  Link.configure({
    openOnClick: true,
    autolink: true,
    linkOnPaste: true,
  }),
];

interface ProjectDetails {
  title?: string;
  slug?: string;
  thumbnail?: string;
  liveUrl?: string;
  html?: string;
}
const AddProjectPage = () => {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>({
    title: "",
    slug: "",
    thumbnail: "",
    liveUrl: "",
    html: "",
  });
  const [loading, setLoading] = React.useState(false);
  const editor = useEditor({ extensions: extensions });
  // I am using this only to handle the image upload functionality of the editor. By the way, it's a trick created by me.
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [htmlInput, setHtmlInput] = useState(""); // State to store HTML input

  const handeSave = () => {
    if (!editor) return;
    const html = editor.getHTML();
    console.log("html", html);
    setProjectDetails({ ...projectDetails, html });
    if (html == projectDetails?.html) {
      setLoading(true);
      fetch(`${baseUrl}/api/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          dashboardtoken: process.env.NEXT_PUBLIC_DASHBOARD_TOKEN as string,
        },
        body: JSON.stringify(projectDetails),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          console.log(data);
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    }
  };

  const handleInsertHTML = () => {
    if (htmlInput.trim() !== "") {
      editor?.commands.insertContent(htmlInput);
    }
    setShowPopup(false); // Close popup after insertion
    setHtmlInput(""); // Clear the input
  };

  // const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const data = Object.fromEntries(formData);
  //   data.slug = (data.title as string).split(" ").join("-").toLowerCase();
  //   setProjectDetails({ ...projectDetails, ...data });
  // };

  return (
    <div>
      <div>
        <MenuBar editor={editor} setShowPopup={setShowPopup} />
        <EditorContent editor={editor} />
      </div>

      <div>
        <form>
          <div className="form-control">
            <label className="label" htmlFor="title">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              id="title"
              name="title"
              placeholder="Type here"
              onChange={(e) => {
                const title = e.target.value;
                const slug = title.split(" ").join("-").toLowerCase();
                setProjectDetails({
                  ...projectDetails,
                  title: title,
                  slug: slug,
                });
              }}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="thumbnail">
              <span className="label-text">Thumbnail Url</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              id="thumbnail"
              name="thumbnail"
              placeholder="Enter thumbnail url"
              onChange={(e) => {
                const thumbnail = e.target.value;
                setProjectDetails({
                  ...projectDetails,
                  thumbnail: thumbnail,
                });
              }}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="liveUrl">
              <span className="label-text">Live Url</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              id="liveUrl"
              name="liveUrl"
              placeholder="Enter live url"
              onChange={(e) => {
                const liveUrl = e.target.value;
                setProjectDetails({
                  ...projectDetails,
                  liveUrl: liveUrl,
                });
              }}
            />
          </div>
        </form>
      </div>

      <button
        className="btn btn-secondary mt-6 !text-secondary-content"
        onClick={handeSave}
        disabled={loading}
      >
        Submit
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/2 rounded bg-base-100 p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-bold">Insert HTML</h2>
            <textarea
              className="h-40 w-full rounded border p-2"
              placeholder="Enter your HTML here..."
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="btn btn-secondary mr-2 !text-secondary-content"
              >
                Cancel
              </button>
              <button
                onClick={handleInsertHTML}
                className="btn btn-primary !text-primary-content"
              >
                Insert
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddProjectPage;
