import React, { Component, createRef } from 'react'
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom'
import { Algolia } from 'styled-icons/fa-brands/Algolia'

import { Root, SearchBox, HitsWrapper, By } from './styles'
import * as hitComps from './hits'

const events = [`mousedown`, `touchstart`]

const noResultsStr = {
  en: `No results for `,
  de: `Keine Ergebnisse für `,
}

const resultsStr = {
  en: [` result`, ` results`],
  de: [` Ergebnis`, ` Ergebnisse`],
}

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits
      ? children
      : noResultsStr[process.env.GATSBY_LANG || `en`] + state.query
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res &&
    res.nbHits > 0 &&
    res.nbHits +
      resultsStr[process.env.GATSBY_LANG || `en`][res.nbHits > 1 ? 1 : 0]
)

export default class Search extends Component {
  state = { query: ``, focussed: false, ref: createRef() }

  updateState = state => this.setState(state)

  focus = () => {
    this.setState({ focussed: true })
  }

  disableHits = () => {
    this.setState({ focussed: false })
  }

  handleClickOutside = event => {
    if (!this.state.ref.current.contains(event.target)) {
      this.setState({ focussed: false })
    }
  }

  componentDidMount() {
    events.forEach(event =>
      document.addEventListener(event, this.handleClickOutside)
    )
  }

  componentWillUnmount() {
    events.forEach(event =>
      document.removeEventListener(event, this.handleClickOutside)
    )
  }

  render() {
    const { query, focussed, ref } = this.state
    const { indices, collapse, hitsAsGrid } = this.props
    return (
      <InstantSearch
        appId={process.env.GATSBY_ALGOLIA_APP_ID}
        apiKey={process.env.GATSBY_ALGOLIA_SEARCH_KEY}
        indexName={indices[0].name}
        onSearchStateChange={this.updateState}
        root={{ Root, props: { ref } }}
      >
        <SearchBox onFocus={this.focus} {...{ collapse, focussed }} />
        <HitsWrapper
          show={query.length > 0 && focussed}
          hitsAsGrid={hitsAsGrid}
        >
          {indices.map(({ name, title, hitComp }) => (
            <Index key={name} indexName={name}>
              <header>
                <h3>{title}</h3>
                <Stats />
              </header>
              <Results>
                <Hits hitComponent={hitComps[hitComp](this.disableHits)} />
              </Results>
            </Index>
          ))}
          <By>
            Powered by{` `}
            <a href="https://www.algolia.com">
              <Algolia size="1em" /> Algolia
            </a>
          </By>
        </HitsWrapper>
      </InstantSearch>
    )
  }
}
