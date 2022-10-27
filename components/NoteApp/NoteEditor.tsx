import Tiptap from "./TipTap"
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from "react"

const NoteEditor = ({ editor }: any) => {
  if(!editor) return null

  return (
    <EditorContent editor={editor}/>
  )
}

export default NoteEditor