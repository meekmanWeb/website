import type { Editor } from "@tiptap/core";
import { useEditorState } from "@tiptap/react";
import { menuBarStateSelector } from "./MenubarState";
import { cn } from "@/lib/utils";

export const MenuBar = ({ editor }: { editor: Editor }) => {
  const editorState = useEditorState({
    editor,
    selector: menuBarStateSelector,
  });
  const activeClass = "bg-blue-600 p-2 border-none";
  const allClass = "border border-gray-400 rounded px-3 p-2 text-xs";
  if (!editor) {
    return null;
  }
  return (
    <div className="control-group ">
      <div className="button-group p-4  flex flex-wrap gap-4">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState.canBold}
          className={cn(allClass, editorState.isBold ? activeClass : "")}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          type="button"
          disabled={!editorState.canItalic}
          className={cn(allClass, editorState.isItalic ? activeClass : "")}
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={cn(allClass, editorState.isParagraph ? activeClass : "")}
        >
          Paragraph
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          type="button"
          className={cn(allClass, editorState.isHeading1 ? activeClass : "")}
        >
          H1
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          type="button"
          className={cn(allClass, editorState.isBulletList ? activeClass : "")}
        >
          Bullet list
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={cn(allClass, editorState.isOrderedList ? activeClass : "")}
        >
          Ordered list
        </button>

        <button
          type="button"
          className={allClass}
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          Hard break
        </button>
        <button
          type="button"
          className={allClass}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editorState.canUndo}
        >
          Undo
        </button>
        <button
          type="button"
          className={allClass}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editorState.canRedo}
        >
          Redo
        </button>
      </div>
    </div>
  );
};
