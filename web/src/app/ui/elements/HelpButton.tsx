import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useHelp } from '../../services'
import { EditorHelp } from '../Editor'

export function HelpButton() {
  const { toggleHelp } = useHelp()
  return (
    <>
      <FontAwesomeIcon title="Help" icon={faQuestionCircle} onClick={toggleHelp}/>
      <EditorHelp/>
    </>
  )
}
