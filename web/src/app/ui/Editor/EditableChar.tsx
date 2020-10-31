import React, { useState } from 'react'
import { stylesheet, classes } from 'typestyle'

type Props = {
  value: string | null,
  onChange: (value: string) => void
}

const css = stylesheet({
  editableChar: {
  },
  editableCharInput: {
    width: '80%'
  }
})

export default function EditableChar(props: Props) {
  const [isEditing, setIsEditing] = useState<boolean>()
  if (isEditing) {
    return <input
      className={classes(css.editableChar, css.editableCharInput)}
      autoFocus
      size={2}
      maxLength={4}
      onInput={event => {
        props.onChange((event.target as HTMLInputElement).value)
        setIsEditing(false)
      }}
      onChange={() => { }}
      onBlur={
        () => setIsEditing(false)
      }
    />
  }
  return <span
    className={css.editableChar}
    onClick={
      () => setIsEditing(true)}>
    {props.value}
  </span>
}
