import "./Contact.css"

function Contact(props) {
  return (
    <section>
      <div>
        <div class="container container--pad container--space-bottom">
          <Hero/>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <div>
      <div class="breadcrumb">
        <a class="breadcrumb__link" href="/">Hjem</a>
        <span>/</span>
        <span class="breadcrumb__curent">Kontakt</span>
      </div>
    </div>
  )
}


export default Contact