import { ListBulletIcon } from '@heroicons/react/24/solid'
import { Squares2X2Icon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { QueueListIcon } from '@heroicons/react/24/outline'

import classNames from 'classnames'

const ToolBar = ({ editor }: any) => {
  if (!editor) {
    return null
  }

  return (
    <div className="bg-gray-100 h-12 flex text-left">
      <button>
        <ListBulletIcon className="h-8 w-8 text-black mx-3"></ListBulletIcon>
      </button>
      <button>
        <Squares2X2Icon className="h-7 w-7 text-black mx-5"></Squares2X2Icon>
      </button>
      <button>
        <TrashIcon className="h-8 w-8 text-black mx-16"></TrashIcon>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={classNames(
          editor.isActive('bold')  ? 'is-active' : '',
          'font-bold text-2xl mx-5'
        )}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={classNames(
          editor.isActive('italic')  ? 'is-active' : '',
          'font-light italic text-2xl mx-5'
        )}      >
        I 
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={classNames(
          editor.isActive('strike')  ? 'is-active' : '',
          'font-light line-through text-2xl mx-5'
        )}   
      >
        S
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <QueueListIcon className="h-6 w-6 text-black mx-16"></QueueListIcon>
      </button>
    </div>
  )
}

export default ToolBar
