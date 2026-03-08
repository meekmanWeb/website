"use client";
import "./styles.css";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "./Menubar";
import { Dispatch, SetStateAction } from "react";
interface TiptapProps {
  setFeatures: Dispatch<SetStateAction<string>>;
  features?: string;
}
const Tiptap = ({ setFeatures, features }: TiptapProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: features ?? "", // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setFeatures(html);
    },
  });
  if (!editor) return null;
  return (
    <div className="max-w-3xl space-y-4">
      {/* Editor */}
      <div className="border outline-none rounded-md  min-h-[200px]">
        <MenuBar editor={editor} />

        <EditorContent editor={editor} className="border-none p-4 " />
      </div>
    </div>
  );
};

export default Tiptap;
