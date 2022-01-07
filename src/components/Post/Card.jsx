import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import FollowHandler from "../Profil/FollowHandler";
import LikeButton from "./LikeButton";
import SocialShare from "./SocialShare";
import { updatePost } from "../../actions/postActions";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";

const Card = ({ post })=> {
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdated, setIsUpdated] = useState(false);
    const [textUpdate, setTextUpdate] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const updateItem = () => {
        if(textUpdate) {
            dispatch(updatePost(post.uuid, textUpdate))
        }
        setIsUpdated(false);
    }

    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false);
    }, [usersData])

    return (
        <li className="card-container" key={post.uuid}>
            {isLoading ? (
                <i className='fas fa-spinner fa-spin'></i>
            ) : (
                <>
                <div className="card-left">
                    <img src={
                        !isEmpty(usersData[0]) && 
                        usersData.map((user) => {
                            if (user.uuid === post.posterUuid) {
                                return user.picture
                            } else return null
                            }).join('')
                        } 
                        alt="poster-pic" 
                        />
                </div>
                <div className="card-right">
                    <div className="card-header">
                        <div className="pseudo">
                            <h3>
                                {
                                !isEmpty(usersData[0]) && 
                                usersData.map((user) => {
                                    if (user.uuid === post.posterUuid){
                                        return user.username
                                    }
                                    return null
                                    })
                                }
                            </h3>
                            {post.posterUuid !== userData.uuid && (
                                <FollowHandler idToFollow={post.posterUuid} type={'card'}/>
                            )}
                        </div>
                        <span>{dateParser(post.createdAt)}</span>
                    </div>
                    {isUpdated === false && <p>{post.message}</p>}
                    {isUpdated && (
                        <div className="update-post">
                            <textarea
                                defaultValue={post.message}
                                onChange={(e) => setTextUpdate(e.target.value)}
                            />
                            <div className="button-container">
                                <button className="btn" onClick={updateItem}>
                                    Valider modification
                                </button>
                            </div>
                        </div>
                    )}
                    {post.picture && (
                        <img src={post.picture} alt="card-pic" className="card-pic"/>
                    )}
                    {post.video && (
                        <iframe
                            width="500"
                            height="300"
                            src={post.video}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={post.uuid}
                        ></iframe>
                    )}
                    {userData.uuid === post.posterUuid && (
                        <div className="button-container">
                            <div onClick={() => setIsUpdated(!isUpdated)}>
                                <img src="./img/icons/edit.svg" alt="edit" />
                            </div>
                            <DeleteCard id={post.uuid}/>
                        </div>
                    )}
                    <div className="card-footer">
                        <div className="comment-icon">
                            <img 
                                onClick={() => setShowComments(!showComments)} 
                                src="./img/icons/message1.svg" 
                                alt="comment" />
                            <span>{post.comments.length}</span>
                        </div>
                        <LikeButton post={post}/>
                        <SocialShare post={post}/>
                        
                    </div>
                    {showComments && <CardComments post={post} />}
                </div>
                </>
            )}
        </li>
    );
};

export default Card;