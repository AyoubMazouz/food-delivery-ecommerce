import React from "react";
import Rating from "../../../components/Rating";
import { useAlert } from "../../../contexts/AlertContext";
import { IcBin, IcStar } from "../../../data/icons";
import useComment from "../../../hooks/useComment";
import ConfirmDeleteComments from "../components/ConfirmDeleteComments";

const ViewItem = ({
    id,
    tags,
    sizes,
    description,
    imageURL,
    createdAtStr,
    modifiedAtStr,
    setCurrModel,
}) => {
    const [rating, setRating] = React.useState(0);
    const [fullName, setFullName] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [commentsLs, setCommentsLs] = React.useState([]);

    const { getComments, addComment, deleteComment, loading } = useComment();
    const { setAlert } = useAlert();

    React.useEffect(() => {
        getComments(id).then((comments) => setCommentsLs(comments));
    }, []);

    const deleteHandler = async (id, itemId) => {
        try {
            const res = await deleteComment(id, itemId);
            if (res) {
                setAlert(["success", "Comment has been deleted."]);
                getComments(itemId).then((comments) => setCommentsLs(comments));
            }
        } catch (err) {
            setAlert(["danger", "Something went wrong, please try again."]);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await addComment(rating, fullName, comment, id);
            if (res) {
                setAlert(["success", "Comment has been added."]);
                getComments(id).then((comments) => setCommentsLs(comments));
            }
        } catch (err) {
            setAlert(["danger", "Something went wrong, please try again."]);
            console.log(err);
        }
    };
    return (
        <div className="max-w-[900px] grid md:grid-cols-2 gap-6">
            <div>
                <img
                    src={imageURL}
                    alt={id}
                    className="w-full max-w-[256px] rounded shadow-md"
                />
                <div className="font-light">
                    <span className="font-medium">ID: </span>
                    {id}
                </div>
                <div className="font-light">
                    <span className="font-medium">Tags: </span>
                    {tags}
                </div>
                <div className="font-light">
                    <span className="font-medium">Created At: </span>
                    {createdAtStr}
                </div>
                <div className="font-light">
                    <span className="font-medium">Last Modified: </span>
                    {modifiedAtStr}
                </div>
                <div>
                    <div className="font-medium">Options: </div>
                    {sizes.map((size) => (
                        <div className="font-light">
                            <span>{size.label} : </span>
                            <span>{size.price}</span>
                        </div>
                    ))}
                </div>
                <div className="font-light">
                    <span className="font-medium">Description: </span>
                    {description}
                </div>
            </div>
            <div>
                <form onSubmit={onSubmit} className="space-y-3">
                    <div className="space-y-2 mt-4">
                        <div className="flex justify-between item-center">
                            <div className="font-medium text-xl">
                                Comments ({commentsLs ? commentsLs.length : 0})
                            </div>
                            <button
                                className="btn-danger"
                                onClick={() =>
                                    setCurrModel(
                                        <ConfirmDeleteComments
                                            id={id}
                                            setCurrModel={setCurrModel}
                                        />
                                    )
                                }
                            >
                                Delete all comments
                            </button>
                        </div>
                        {commentsLs ? (
                            commentsLs.map((comment) => (
                                <div className="px-2 py-3 bg-secondary border-2 border-dark/15 shadow text-base">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-x-3">
                                            <div className="capitalize max-w-[25ch] line-clamp-1">
                                                {comment.fullName}
                                            </div>
                                            <div className="flex items-center">
                                                {new Array(5)
                                                    .fill(0)
                                                    .map((_, i) => (
                                                        <IcStar
                                                            className={`${
                                                                i <=
                                                                comment.rating
                                                                    ? "text-primary"
                                                                    : ""
                                                            }`}
                                                        />
                                                    ))}
                                                <span className="text-primary mx-1">
                                                    ({comment.rating})
                                                </span>
                                            </div>
                                        </div>
                                        <IcBin
                                            className="icon-bin"
                                            onClick={() =>
                                                deleteHandler(
                                                    comment.id,
                                                    comment.itemId
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="text-sm font-light my-2">
                                        {comment.comment}
                                    </div>
                                    <div className="text-xs font-light text-right">
                                        {comment.createdAtStr}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>There are not comments</div>
                        )}
                    </div>
                    <div>
                        <label className="form-label">Rating</label>
                        <Rating setRating={setRating} rating={rating} />
                    </div>
                    <div>
                        <label htmlFor="fullName" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            className="form-input"
                            required
                            placeholder="Full name..."
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="comment" className="form-label">
                            Comment
                        </label>
                        <textarea
                            type="text"
                            name="comment"
                            className="form-input"
                            required
                            placeholder="Comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button className="btn" type="submit" disabled={loading}>
                        Add new comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ViewItem;
