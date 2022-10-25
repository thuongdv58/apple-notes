import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolBar from './ToolBar'

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: 'content'
  })

  return (
    <div>
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
export default TipTapEditor
