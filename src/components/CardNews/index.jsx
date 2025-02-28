import CardNewsWrapper from "./style";  
import { useState } from "react";


const CardNews = (props)=>{
    const [heartImage, setHeartImage] = useState("/icon/non-filled-heart.svg");

    const handleHeartClick = ()=>{
        if (heartImage === "/icon/non-filled-heart.svg") {
            setHeartImage("/icon/filled-heart.svg");
        } else {
            setHeartImage("/icon/non-filled-heart.svg");
        }
    }

    return(
        <CardNewsWrapper>
            <header>
                <span>{props.date}</span>
                <h1>
                    <img src={heartImage} alt="heart"  onClick={handleHeartClick}/>
                </h1>
            </header>
            <h1>{props.title}</h1>
            <p>{props.info}</p>
        </CardNewsWrapper>
    );
}

export default CardNews;