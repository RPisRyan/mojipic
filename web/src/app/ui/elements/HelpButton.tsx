import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useHelp } from '../../services/helpState'
import { EditorHelp } from '../Editor/EditorHelp'

export function HelpButton() {
  const { toggleHelp } = useHelp()
  return (
    <>
      <FontAwesomeIcon title="Help" icon={faQuestionCircle} onClick={toggleHelp} />
      <EditorHelp />
    </>
  )
}
