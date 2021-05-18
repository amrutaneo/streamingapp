var img1 = "images.jpeg";
var img2 = "images1.jpeg";


var imgheightwidth = { 
    width:100,
    height:300
}

function Corousel(){
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." style={imgheightwidth}/>
                </div>
                <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." style={imgheightwidth}/>
                </div>
               
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
    )
}

export default Corousel;