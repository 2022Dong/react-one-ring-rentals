import Copyright from "../components/Copyright"

const ContactPage = () => {
  return (
    <>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="main col-sm-12">
              <h1 class="section-title">Contact Us</h1>
              <div class="contact-form">
                <form action="contact.php" method="post">
                  <div class="form-group">
                    <label for="name">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="subject">Subject:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      name="subject"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea
                      class="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  )
}

export default ContactPage
