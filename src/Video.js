import { useParams } from "react-router";

function Video(){
   
    let params = useParams();
    let api = "http://amrutastream.herokuapp.com/api/playvideo?filename="+params.path
    return (
        <div>
            
                <video controls >
                <source src={api} type="video/mp4"/>
                </video>
                <div className="card-body">
                    
                </div>
            
        </div>
    )
}

export default Video

