export const HomeJS=()=>{
    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.dumpsters.com/images/blog/grocery-store-waste_1540998058/grocery-store-waste-1200x600.jpg"  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>GrocerStore</h5>
        <p>We carry a wide variety of multicultural foods, grocery items and prepared foods</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://limetray.com/blog/wp-content/uploads/2020/04/nrd-D6Tu_L3chLE-unsplash.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Serve Best</h5>
        <p>We will do our best to serve the community and introduce ethnic foods and culture to the local community.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/XIT6IEAZI5ACVKJ6RCDZHXYLVE.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Wear Mask</h5>
        <p>A simple step everyone can take for their safety and the safety of others in our facilities</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        )
}