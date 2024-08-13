'use client'

import { Link as ScrollLink } from 'react-scroll'

interface Props {
  offset: number
  to: string
  title: string
}

export function ScrollLinkComponent({ offset, to, title }: Props) {
  const activeStyleNavigation = {
    backgroundColor: 'rgb(253, 186, 116)',
    color: 'white',
  }

  return (
    <ScrollLink
      href={`#${to}`}
      to={to}
      spy={true}
      smooth={true}
      duration={700}
      offset={offset}
      activeStyle={activeStyleNavigation}
      activeClass="active-link"
      className="rounded-md p-2"
    >
      {title}
    </ScrollLink>
  )
}
