import { ListBulletIcon } from '@heroicons/react/24/solid'
import { Squares2X2Icon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { QueueListIcon } from '@heroicons/react/24/outline'
import { LinkIcon } from '@heroicons/react/24/outline'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

import classNames from 'classnames'

const ToolBar = ({ editor, insertNote, deleteNote }: any) => {
  if (!editor) {
    return null
  }

  return (
    <div className="bg-gray-100 h-12 flex text-left">
      <button className='flex-none w-20'>
        <ListBulletIcon className="h-8 w-8 text-black mx-auto"></ListBulletIcon>
      </button>
      <button className='flex-initial w-20'>
        <Squares2X2Icon className="h-7 w-7 text-black mx-auto"></Squares2X2Icon>
      </button>
      <button className='flex-initial w-40 ml-20'
        onClick={() => deleteNote()}
      >
        <TrashIcon className="h-8 w-8 text-black mx-auto"></TrashIcon>
      </button>
      <button className='flex-initial w-40'
        onClick={() => insertNote()}
      >
        <PencilSquareIcon className="h-6 w-6 text-black mx-auto"></PencilSquareIcon>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={classNames(
          editor.isActive('bold')  ? 'is-active' : '',
          'font-bold text-2xl w-20'
        )}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={classNames(
          editor.isActive('italic')  ? 'is-active' : '',
          'font-light italic text-2xl w-20'
        )}      >
        I 
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={classNames(
          editor.isActive('strike')  ? 'is-active' : '',
          'font-light line-through text-2xl w-20'
        )}   
      >
        S
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className='w-20'
      >
        <QueueListIcon className="h-6 w-6 text-black mx-auto"></QueueListIcon>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className='w-20'
      >
        <LinkIcon className="h-6 w-6 text-black mx-auto"></LinkIcon>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className='w-20'
      >
        <PhotoIcon className="h-6 w-6 text-black mx-auto"></PhotoIcon>
      </button>
    </div>
  )
}

export default ToolBar
