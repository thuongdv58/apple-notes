import classNames from 'classnames'
import { useEffect, useState } from 'react'

const SideBar = ({ notes, selectNote, selectedNoteId }: any) => {
  const onSelect = (id: number) => {
    selectNote(id)
  }

  return (
    <>
      {notes.map((note: any) => (
        <div
          className={classNames(
            note.id === selectedNoteId ? 'bg-slate-500' : '',
            'bg-slate-100 rounded-md hover:bg-slate-500 h-24 m-3 cursor-pointer'
          )}
          onClick={() => onSelect(note.id)}
          key={note.id}
        >
          <div className="font-bold text-xl mx-5 pt-5 truncate">
            {note.title}
          </div>
          <div className="mx-5 pt-1 truncate">
            <span>
              {new Date(note.updated_at).toLocaleString('en-US', {
                timeStyle: 'short',
                dateStyle: 'short'
              })}
            </span>
            &nbsp;&nbsp;
            <span>{note.content.replace(/<[^>]+>/g, '')}</span>
          </div>
        </div>
      ))}
    </>
  )
}

export default SideBar
