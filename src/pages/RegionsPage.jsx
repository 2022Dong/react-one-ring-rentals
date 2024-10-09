import Copyright from "../components/Copyright"

const RegionsPage = () => {
  return (
    <>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="main col-sm-12">
              <h1 class="section-title">Regions in Australia</h1>
              <div class="grid-style1 clearfix">
                <div class="item col-md-4">
                  <div class="image">
                    <a href="#">
                      <h3>Sydney</h3>
                      <span class="location">New South Wales</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
                <div class="item col-md-4">
                  <div class="image">
                    <a href="#">
                      <h3>Melbourne</h3>
                      <span class="location">Victoria</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
                <div class="item col-md-4">
                  <div class="image">
                    <a href="#">
                      <h3>Brisbane</h3>
                      <span class="location">Queensland</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
                <div class="item col-md-4">
                  <div class="image">
                    <a href="#">
                      <h3>Perth</h3>
                      <span class="location">Western Australia</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
                <div class="item col-md-4">
                  <div class="image">
                    <a href="#">
                      <h3>Adelaide</h3>
                      <span class="location">South Australia</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
                <div class="item col-md-4">
                  <div class="image">
                    <a href="#">
                      <h3>Hobart</h3>
                      <span class="location">Tasmania</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                </div>
              </div>              
            </div>
            <Copyright />
          </div>
        </div>
      </div>
    </>
  )
}

export default RegionsPage
