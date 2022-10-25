import NoteEditor from "./NoteEditor";
import SideBar from "./SideBar";
import ToolBar from "./ToolBar";
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function NoteApp() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: 'content',
    editorProps: {
      attributes: {
        class: 'prose prose-base mx-auto max-w-none focus:outline-none',
      },
    },
  })
  return (
    <>
      <ToolBar editor={editor}></ToolBar>
      <div className="flex h-[calc(100%_-_3rem)]">
        <div className="basis-3/12 border-r-2 overflow-y-auto scrollbar">
          <SideBar></SideBar>
        </div>
        <div className="basis-9/12 overflow-y-auto scrollbar p-5 pt-2">
          <div className="text-center">
            <span className="text-sm">{ (new Date()).toLocaleString('en-US', { timeStyle: "medium",
  dateStyle: "long" })}</span>
          </div>
          <input className="prose focus:outline-none w-full font-bold text-2xl mb-5" maxLength={100}></input>
          <NoteEditor editor={editor}></NoteEditor>
        </div>
      </div>
    </>
  )
}