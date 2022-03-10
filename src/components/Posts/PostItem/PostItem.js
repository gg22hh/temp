import React, {useState} from "react";
import "./PostItem.css";
import image from '../../../images/item-img.jpg'
import FavoriteIcon from "@mui/icons-material/Favorite";

export const PostItem = () => {
	const [like, setLike] = useState(false)
	const color = like ? 'crimson' : 'black'

    return (
        <div className="post__item">
            <div className="post__item-img">
                <img src={image} alt="Item image" />
            </div>
            <h3 className="post__item-title">Post 1</h3>
            <div className="post__item-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                blanditiis a facilis tempora? Itaque culpa officiis nam ab,
                nihil obcaecati
            </div>
            <button onClick={() => setLike(!like)}>
				<FavoriteIcon style={{fill: color}} />
            </button>
        </div>
    );
};
