import NoteEditor from "./NoteEditor";
import SideBar from "./SideBar";
import ToolBar from "./ToolBar";
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import usePrevious from "../../hooks/usePrevious";

export default function NoteApp() {
  const editor = useEditor({
    extensions: [StarterKit],
    //content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-base mx-auto max-w-none focus:outline-none',
      },
    },
  })

  const [note, setNote] = useState({} as any)
  const preNote = usePrevious(note)
  const [notes, setNotes] = useState([] as any)
  const [selectedNoteId, setSelectedNoteId] = useState(0)
  const preNoteId = usePrevious(selectedNoteId)
  const [showCreateTime, setShowCreateTime] = useState(true)

  const supabase = useSupabaseClient()
  const user = useUser()

  const insertNote = useCallback(async () => {
    const { data, error }: any = await supabase
    .from('Notes')
    .insert([
      { title: '', content: '', created_at: new Date(), updated_at: new Date(), user_id: user?.id },
    ])
    .select()
    setNotes((notes: any) => data.concat(notes))

    setSelectedNoteId(data[0].id)
    console.log(data, error)
  }, [])
  
  const deleteNote = useCallback(async () => {
    const { data, error } = await supabase
    .from('Notes')
    .delete()
    .eq('id', selectedNoteId)
    setSelectedNoteId(0)
    setNotes((notes: any) => notes.filter((t: any) => t.id !== selectedNoteId))
    console.log(data, error)
  }, [selectedNoteId])

  const selectNote = (id: number) => {
    setSelectedNoteId(id)
  }

  const saveChanges = () => {
    if(!note.id) { return }
    (async () => {
      const { data, error } = await supabase
      .from('Notes')
      .update(note)
      .eq('id', note.id)
    })()
  }

  const titleChange = (e: any) => {
    setNote((note: any) => {
      return {...note, title: e.target.value}
    })
  }
  
  const fetchNotes = async () => {
    let { data, error }: any = await supabase
    .from('Notes')
    .select('*')
    .order('updated_at', { ascending: false })

    setNotes(data || [])
    if(error) {
      console.log(error)
    }
  }

  // selected note changes
  useEffect(() => {
    if(selectedNoteId > 0 && preNoteId?.current !== selectedNoteId) {
      const nt = notes.find((t: any) => t.id == selectedNoteId) || {}
      setNote(nt)
      editor?.commands?.setContent(nt.content)
    }
    saveChanges()
  }, [selectedNoteId])

  // fetch notes
  useEffect(() => {
    (async () => await fetchNotes())()
  }, [])

  // note value changes  
  useEffect(() => {
    const onUpdate = ({ editor }: any) => {
      setNote((note: any) => {
        return {...note, content: editor.getHTML(), updated_at: new Date()} //editor.getJSON()
      })
    }
    editor?.on('update', onUpdate)
    return () => {
      editor?.off('update', onUpdate)
    }
  }, [editor])

  // note sync
  useLayoutEffect(() => {
    if(note.id){ 
      setNotes((notes: any) => {
        const n = notes.find((t: any) => t.id === note.id)
        n.title = note.title
        n.content = note.content
        return notes
      })
    }
    const timer = setTimeout(() => saveChanges(), 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [note])
  
  if(!editor) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ToolBar editor={editor} insertNote={insertNote} deleteNote={deleteNote}></ToolBar>
      <div className="flex h-[calc(100%_-_3rem)]">
        <div className="basis-3/12 border-r-2 overflow-y-auto scrollbar">
          <SideBar notes={notes} selectNote={selectNote} selectedNoteId={selectedNoteId}></SideBar>
        </div>
        <div className="basis-9/12 overflow-y-auto scrollbar p-5 pt-2">
          { (selectedNoteId > 0) &&
            <>
              <div className="text-center">
                {note.created_at && <span className="text-sm cursor-pointer" onClick={() => setShowCreateTime(t => !t)}>{ (showCreateTime? "Created: ": "") + (new Date(showCreateTime? note.created_at : note.updated_at)).toLocaleString('en-US', { timeStyle: "medium", dateStyle: "short" })}</span>}
              </div>
              <input className="prose focus:outline-none w-full font-bold text-2xl mb-5" maxLength={100} placeholder="Title" value={note.title} onChange={(e) => titleChange(e)}></input>
              <NoteEditor editor={editor}></NoteEditor>
            </>
          }
        </div>
      </div>
    </>
  )
}