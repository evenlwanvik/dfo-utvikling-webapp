import "./Footer.css"

function Footer(props) {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="small-12 medium-6 nav nav--nomargin nav--light">
            <div class="nav nav--light">
            <ul class="nav__links">
              <li class="nav__item">
                <a class="nav__link" href="/dfø.no">
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
          <div class="small-8 medium-3 medium-offset-1">
            <div class="footer__contact-wrapper">
              <img class="footer__logo" src="/images/logo-white.svg"></img>
            </div>
            <ul class="footer__contact">
              <li>Lørenfaret 1 C</li>
              <li>Pb 7154 St. Olavs plass, 0130 Oslo</li>
              <li>Tlf: <a href="tel:+4740007997">400 07 997</a></li>
              <li>Org. nr. 986 252 932</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
