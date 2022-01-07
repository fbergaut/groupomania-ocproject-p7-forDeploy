import React, { useContext, useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment, editComment } from '../../actions/postActions';
import { UidContext } from "../AppContext";

const EditDeletComment = ({ comment,postUuid }) => {
    const [isAuthor, setIsAuthor] = useState(false);
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState("");
    const uid = useContext(UidContext);
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();

        if (text){
            dispatch(editComment(postUuid, comment.uuid, text));
            setText('');
            setEdit(false);
        }
    };

    const handleDelete = () => {
        dispatch(deleteComment(postUuid, comment.uuid));
    };

    useEffect(() => {
        const checkAuthor = () => {
            if (uid === comment.commenterUuid){
                setIsAuthor(true);
            }
        }
        checkAuthor();
    }, [uid, comment.commenterUuid])

    return (
        <div className="edit-comment">
            {isAuthor && edit === false && (
                <span onClick={() => setEdit(!edit)}>
                    <img src="./img/icons/edit.svg" alt="edit-comment" />
                </span>
            )}
            {isAuthor && edit && (
                <form action="" onSubmit={handleEdit} className='edit-comment-form'>
                    <label htmlFor="text" onClick={() => setEdit(!edit)}>Editer</label>
                    <br />
                    <input 
                        type="text" 
                        name="text" 
                        onChange={(e) => setText(e.target.value)}
                        defaultValue={comment.text} 
                    />
                    <br />
                    <div className="btn">
                        <span onClick={() => {
                            if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
                                handleDelete();
                            }
                        }}>
                            <img src="./img/icons/trash.svg" alt="trash" />
                        </span>
                        <input type="submit" value="Valider modification" />
                    </div>
                </form>
            )}
        </div>
    );
};

export default EditDeletComment;