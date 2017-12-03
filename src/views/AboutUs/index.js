import React, { Component } from 'react'

import Header from '../../components/Header'
import PageHeader from '../../components/PageHeader'
import PageSection from '../../components/PageSection'
import FixedHeaderAfterScroll from '../../components/FixedHeaderAfterScroll'

class AboutUs extends Component {
  render() {
    return (
      <div>
        <PageHeader title='Über Uns' bgImage='/assets/oldcity.jpg' />
        <FixedHeaderAfterScroll>
          <Header />
        </FixedHeaderAfterScroll>
        <PageSection fullWidth={true} title='Über Uns'>
          <div className='textRow'>
            <p className='paragraph'>
              Der Deutsch-jemenitische Verein für Hilfe und Entwicklung ist ein ehrenamtlicher Gesellschaftsverein, 
              der 2013 offiziell in Deutschland gegründet wurde.
            </p>
            <p className='paragraph'>
              Unser großes Ziel ist es, eine Brücke zwischen den Bedürftigen im Jemen und den Spendern aus Deutschland und Europa 
              zu etablieren.
            </p>
          </div>
        </PageSection>
      </div>
    )
  }
}

export default AboutUs