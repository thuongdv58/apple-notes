const SideBarGrid = () => {
  const notes = [{
    title: 'title long',
    content: 'content',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    title: 'title',
    content: 'content',
    created_at: new Date(),
    updated_at: new Date(),
  },
  ]
  return (
    <>
    {
      notes.map(note => <div className="bg-slate-100 rounded-md hover:bg-slate-500 h-24 m-3">
        <div className="font-bold text-xl mx-5 pt-5 truncate">
          {note.title}
        </div>
        <div className="mx-5 pt-1 truncate">
          <span>
            {note.updated_at.toLocaleString("en-US", { timeStyle: 'short', dateStyle: 'short'})}
          </span>
          &nbsp;&nbsp;
          <span>
            {note.content}
          </span>
        </div>
      </div>)
    }
    </>
  )
}

export default SideBarGrid