import "./Home.css";

function Home () {
  return (
    <section>
      <div class="container container--pad container--space-bottom">
        <Hero/>
        <PortalItems/>
        <NavBottom/>
      </div>
      <Ribbon/>
    </section>
  );
}

/* Hero preamble and image */ 
function Hero () {
  return (
    <div class="hero">
    <div class="hero__content"> 
      <div class="row small-collapse medium-expand">
        <div class="medium-6 small-12 column">
          <div class="content">
            <p class="preamble"> 
              Denne siden er et bindeledd mellom ulike disipliner av utvikling innen DFØ. Her kan du se hvilke prosjekter det jobbes med samt bla gjennom diverse informasjon knyttet til prosjektet.
            </p>
          </div>
        </div>
        <div class="medium-6 small-12 column hero-illustration">
          <img class="hero__illustration" src='/images/dfo-utviklerportal.png' alt="DFØ utviklere"></img>
        </div>
      </div>   
    </div>
  </div>
  )
}

/* Clickable items that links to out services? */
function PortalItems(){
  return(        
    <div class="row margin-bottom-xlarge">
      <a href="/dfo-sky" class="portal__wrapper">
        <div class="container container--portalitem">
          <div class="h2 portal-item-header"> Sky </div> 
          <div class="container container--portalitem-illustration"> 
            <img class="portalitem__illustration" src="/images/dfo-sky.png" alt="DFØ skyplatform"></img> 
          </div>
          <div class="h4 portal-item-body"> Utvikle eller ta i bruk tjenester i skyplattformen </div> 
      </div> 
      </a>
      <a href="/dfo-sky" class="portal__wrapper">
        <div class="container container--portalitem">
          <div class="h2 portal-item-header"> Utvikling </div>
          <div class="container container--portalitem-illustration"> 
            <img class="portalitem__illustration" src="/images/dfo-utvikling.png" alt="DFØ Utvikling"></img> 
          </div>
          <div class="h4 portal-item-body"> Automatisering, webdesign eller annen utvikling i DFØ </div>
        </div> 
      </a>
      <a href="/dfo-sky" class="portal__wrapper">
        <div class="container container--portalitem">
          <div class="h2 portal-item-header"> API </div> 
          <div class="container container--portalitem-illustration"> 
            <img class="portalitem__illustration" src="/images/dfo-api.png" alt="DFØ API"></img> 
          </div>
          <div class="h4 portal-item-body"> Ta i bruk eller tilgjengeliggjøre API </div> 
        </div> 
      </a>
    </div>
  )
}

/* List of navigation items at the bottom of the page */
function NavBottom(){
  return(        
    <div class="row small-collapse">
      <div class="row medium-expand">
        <div class="nav">
          <div class="nav__heading">
            <p class="h2 nav-heading"> Oppslag </p>
            <ul class="nav__links">
              <li class="nav__item">
                <a class="nav__link" href="https://www.dfo.no">
                  <div class="nav__link__content">
                    DFØ hjemmeside
                  </div>
                  <div class="nav__link__symbol">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="/">
                  <div class="nav__link__content">
                    Les videre om hvilke tjenester vi tilbyr utviklere innen dfø
                  </div>
                  <div class="nav__link__symbol">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="/">
                  <div class="nav__link__content">
                    RD dashboard
                  </div>
                  <div class="nav__link__symbol">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row medium-expand">
        <div class="nav">
          <div class="nav__heading">
            <p class="h2 nav-heading"> Nyeste dokumenterte prosjekter i Wiki.js </p>
            <ul class="nav__links">
              <li class="nav__item">
                <a class="nav__link" href="/">
                  <div class="nav__link__content">
                    Link til ny side opprettet i wikijs.
                  </div>
                  <div class="nav__link__symbol">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="/">
                  <div class="nav__link__content">
                    Nok et rart prosjekt som nettopp ble dokumentert
                  </div>
                  <div class="nav__link__symbol">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link" href="/">
                  <div class="nav__link__content">
                    Dette må være et tulleprosjekt?
                  </div>
                  <div class="nav__link__symbol">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Just a ribbon followed by a white line at the bottom.
Future content can be inserted here? For now its purely aesthetics */
function Ribbon(){
  return(
    <div class="ribbon-container">
      <div class="ribbon">
        <div class="container container--nomargin">
          <div class="h3"> Drift? </div>
          <div class="h4"> 
            Her kan det stå et lite bånd om nå driftsinformasjon av vår dataplatform osv 
            med en link til <a href="/home/driftsstatus"> driftsstatus </a>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Home

