import Copyright from "../components/Copyright"
const NewsPage = () => {
  return (
      <>
        <div class="content">
        <div class="container">
          <div class="row">
            <div class="main col-sm-12">
              <h1 class="section-title">Latest News</h1>
              <div class="grid-style1 clearfix">
                <div class="item col-md-4">
                  <div class="image">
                    <a href="#">
                      <span class="btn btn-default"
                        ><i class="fa fa-file-o"></i> Read More</span
                      >
                    </a>
                    <img src="http://placehold.it/766x515" alt="" />
                  </div>
                  <div class="tag"><i class="fa fa-file-text"></i></div>
                  <div class="info-blog">
                    <span class="title">New Rental Regulations Announced</span>
                    <span class="text"
                      >The government has announced new rental regulations
                      effective from next month. Find out how this impacts
                      you.</span
                    >
                    <span class="meta">
                      <span class="author"
                        ><i class="fa fa-user"></i> Admin</span
                      >
                      <span class="date"
                        ><i class="fa fa-clock-o"></i> 2024-08-08</span
                      >
                    </span>
                  </div>
                </div>
                <div class="item col-md-4">
                  <div class="image">
                    <a href="#">
                      <span class="btn btn-default"
                        ><i class="fa fa-file-o"></i> Read More</span
                      >
                    </a>
                    <img src="http://placehold.it/766x515" alt="" />
                  </div>
                  <div class="tag"><i class="fa fa-file-text"></i></div>
                  <div class="info-blog">
                    <span class="title"
                      >Top 10 Rental Properties in Sydney</span
                    >
                    <span class="text"
                      >Explore our list of the top 10 rental properties in
                      Sydney for the month of August.</span
                    >
                    <span class="meta">
                      <span class="author"
                        ><i class="fa fa-user"></i> Admin</span
                      >
                      <span class="date"
                        ><i class="fa fa-clock-o"></i> 2024-08-07</span
                      >
                    </span>
                  </div>
                </div>
                <div class="item col-md-4">
                  <div class="image">
                    <a href="#">
                      <span class="btn btn-default"
                        ><i class="fa fa-file-o"></i> Read More</span
                      >
                    </a>
                    <img src="http://placehold.it/766x515" alt="" />
                  </div>
                  <div class="tag"><i class="fa fa-file-text"></i></div>
                  <div class="info-blog">
                    <span class="title"
                      >Customer Stories: Finding the Perfect Home</span
                    >
                    <span class="text"
                      >Read our customer stories about their journey to finding
                      the perfect home through One Ring Rentals.</span
                    >
                    <span class="meta">
                      <span class="author"
                        ><i class="fa fa-user"></i> Admin</span
                      >
                      <span class="date"
                        ><i class="fa fa-clock-o"></i> 2024-08-06</span
                      >
                    </span>
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

export default NewsPage
