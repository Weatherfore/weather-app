import asset2 from '../../asset/asset2.jpg';
import asset3 from '../../asset/asset3.jpg';
import asset4 from '../../asset/asset4.jpg';
import asset5 from '../../asset/asset5.jpg';
import asset6 from '../../asset/asset6.jpg';
import asset7 from '../../asset/asset7.jpg';


// source: https://getbootstrap.com/docs/4.0/components/carousel/ 
// source: https://daveceddia.com/react-image-tag/ 

const BsStuff = () => {


    return (
        <div className="border border-primary">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block  w-100" src={asset2} alt="First slide" ></img>
                        <div>
                             <div class="carousel-caption d-none d-md-block jumbotron-dark">
                             <h3 class="display-1">Which valcano eruptions are the deadliest ?</h3>
                             <a href="https://time.com/5300683/volcanoes-most-dangerous-active/" class="display-4"><u>Visit Valcanoes</u></a>
                             </div>
                        </div>
                        
                    </div>
                    <div class="carousel-item">
                        <img class="d-block  w-100" src={asset3} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                             <h3 class="display-1 text-danger jumbotron ">10 biggest snowstorms of all time...</h3>
                             <a href="https://science.howstuffworks.com/nature/climate-weather/storms/10-biggest-snowstorms.htm" class="display-4 jumbotron"><u>Visit Snowstorms</u></a>
                             </div>
                        </div>
                    <div class="carousel-item">
                        <img class="d-block  w-100" src={asset4} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                             <h3 class="display-1 text-dark jumbotron">Know Some Interesting Facts About Tides...</h3>
                             <a href="https://www.surfertoday.com/surfing/10-interesting-facts-about-tides" class="display-4 jumbotron"><u>Visit this link to know more...</u></a>
                             </div>
                        
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={asset5} alt="Fourth slide" />
                        <div class="carousel-caption d-none d-md-block">
                             <h3 class="display-1 text-dark jumbotron">Deadliest Landslides in Recorded History!</h3>
                             <a href="https://www.worldatlas.com/articles/deadliest-landslides-in-recorded-history.html" class="display-4 text-danger bg-light"><u>Visit the link to know more...</u></a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block  w-100" src={asset6} alt="Fifth slide" />
                        <div class="carousel-caption d-none d-md-block">
                             <h6 class="display-2 text-dark jumbotron">The world's 10 highest ski resorts may surprise you</h6>
                             <a href="https://www.accuweather.com/en/weather-news/the-worlds-10-highest-ski-resorts-may-surprise-you-2/434275" class="display-4 text-danger"><u>Visit the link to know more...</u></a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block  w-100" src={asset7} alt="sixth slide" />
                        <div class="carousel-caption d-none d-md-block">
                             <h6 class="display-2 text-dark jumbotron">What are the consequency of flood ?</h6>
                             <a href="https://www.chiefscientist.qld.gov.au/publications/understanding-floods/flood-consequences" class="display-4 text-danger"><u>Visit the link to know more...</u></a>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default BsStuff;