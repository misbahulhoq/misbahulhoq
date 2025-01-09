"use client";
import "./styles.css";
import React, { useState } from "react";
import {
  EditorContent,
  useEditor,
  generateHTML,
  JSONContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

const MenuBar = ({ editor }: { editor: ReturnType<typeof useEditor> }) => {
  if (!editor) return null;

  return (
    <div className="menu-bar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`menu-button ${editor.isActive("bold") ? "active" : ""}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`menu-button ${editor.isActive("italic") ? "active" : ""}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={`menu-button ${editor.isActive("underline") ? "active" : ""}`}
      >
        Underline
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`menu-button ${editor.isActive("heading", { level: 1 }) ? "active" : ""}`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`menu-button ${editor.isActive("heading", { level: 2 }) ? "active" : ""}`}
      >
        H2
      </button>
      <button
        onClick={() => {
          const url = prompt("Enter the URL");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
        className="menu-button"
      >
        Add Link
      </button>
      <button
        onClick={() => {
          const url = prompt("Enter the image URL");
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
        className="menu-button"
      >
        Add Image
      </button>
    </div>
  );
};

const ArticleEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Link,
      Image.configure({ inline: true }),
    ],
    content: "<p>Start writing...</p>",
  });
  const [con, setCont] = useState(null);

  const handleSave = () => {
    if (!editor) return;

    const content = editor.getJSON();
    const html = generateHTML(content, [StarterKit]);
    setCont(content);
    console.log(html);
    console.log("Editor Content:", content);
    alert("Article saved! Check the console for JSON content.");
  };

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="editor-content" />
      <button onClick={handleSave} className="btn btn-primary mt-6">
        Save Article
      </button>

      {con && (
        <div
          dangerouslySetInnerHTML={{
            __html: generateHTML(con as JSONContent, [StarterKit]),
          }}
        ></div>
      )}
    </div>
  );
};

export default ArticleEditor;
