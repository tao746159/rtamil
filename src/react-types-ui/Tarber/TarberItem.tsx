import React, { ReactElement } from 'react'

interface Props {
  title: string,
  selected: boolean,
  name: string,
  onPress: Function
}

export default function TarberItem(props: Props): ReactElement {
  let { title, selected, name, onPress } = props
  return (
    <div>

    </div>
  )
}
