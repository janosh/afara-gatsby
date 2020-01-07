import React from 'react'
import { Body, Updated } from './styles'

const PageBody = ({ children, html, updatedAt }) => (
  <Body>
    {children}
    <main>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {updatedAt && <Updated>Zuletzt bearbeitet: {updatedAt}</Updated>}
    </main>
  </Body>
)

export default PageBody
