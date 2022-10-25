import Tiptap from "./TipTap"
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const NoteEditor = ({ editor }: any) => {
  if(!editor) return null
  const onChange = (e: any) => {
    console.log('change')
    console.log(e)
  }

  //editor.getJSON()
  
  // editor.commands.setContent({
  //   "type": "doc",
  //   "content": [
  //     // …
  //   ]
  // })
  return (
    <EditorContent onChange={(e) => onChange(e)} editor={editor} />
  )
}

export default NoteEditor