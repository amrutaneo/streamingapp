import { useEffect, useState } from "react";
import Corousel from "./Corousel";
import axios from "axios";
import {Link} from "react-router-dom";

var img ="vid.png";

var videos = []
function Home(){
    let [video,setVideo]=useState({})
    let api = "http://amrutastream.herokuapp.com/api/allassets"
    useEffect(()=>{
        axios({
            method:"get",
            url:api
        }).then((response)=>{
           setVideo(response.data.videos)
        },(error)=>{
          console.log("Error from Api",error)
        })
        
    },[])
    return (
        <div>
           <Corousel/>
           <div className="row" style={{margin:"5px"}}> 
               
                {video?.length >0 && video.map((each,index)=>{
                      return( <div  key={index}>
                        <div className="card" style={{width: "18rem"}}>
                            <Link to={"/video/"+each}>
                            <video controls style={{minWidth: "300px",maxWidth: "300px",minHeight: "200px",minHeight: "200px"}}>
                            <source src={each} type="video/mp4"/>
                            </video>
                            </Link>
                            <div className="card-body">
                            <p>{each}</p>
                            </div>
                        </div>
                    </div>)
                }) }            
            </div>
        </div>
    )
}

export default Home