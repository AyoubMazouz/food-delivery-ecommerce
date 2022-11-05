import React from "react";
import Rating from "../../components/Rating";
import { useAlert } from "../../contexts/AlertContext";
import { IcStar } from "../../data/icons";
import useComment from "../../hooks/useComment";

const CommentSection = ({ id }) => {
    const [commentsLs, setCommentLs] = React.useState([]);
    const [fullName, setFullName] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [rating, setRating] = React.useState(0);

    const { getComments, addComment, loading } = useComment();
    const { setAlert } = useAlert();

    const memo = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, total: 0 };
    commentsLs.forEach((comment) => {
        memo[comment.rating]++;
        memo["total"] += comment.rating;
    });
    const oneStar = Math.round((memo[1] / commentsLs.length) * 100).toFixed(1);
    const twoStars = Math.round((memo[2] / commentsLs.length) * 100).toFixed(1);
    const threeStars = Math.round((memo[3] / commentsLs.length) * 100).toFixed(
        1
    );
    const fourStars = Math.round((memo[4] / commentsLs.length) * 100).toFixed(
        1
    );
    const fiveStars = Math.round((memo[5] / commentsLs.length) * 100).toFixed(
        1
    );
    const average = Math.round(memo["total"] / commentsLs.length).toFixed(1);

    React.useEffect(() => {
        getComments(id).then((comments) => {
            setCommentLs(comments);
        });
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await addComment(rating, fullName, comment, id);
            if (res) {
                setAlert(["success", "Comment has been add successfully."]);
                getComments(id).then((comments) => {
                    setCommentLs(comments);
                });
            }
        } catch (err) {
            setAlert(["danger", "Something went wrong, please try again."]);
        }
    };

    return (
        <div className="flex justify-center mt-12">
            <div className="max-w-[1400px] w-full grid grid-cols-12 gap-12 px-2 md:px-4">
                <div className="col-span-full md:col-span-5 flex flex-col gap-y-3 text-sm">
                    <div className="text-3xl">OverAll Rating</div>
                    <div className="flex items-end gap-x-1 text-dark/75">
                        <div className="text-6xl">
                            {isNaN(average) ? "N/A" : average}
                        </div>
                        <div>{commentsLs.length + " Reviews"}</div>
                    </div>
                    <div className="w-full space-y-2 text-dark/75">
                        {/* Star 5 */}
                        <div className="flex gap-x-2 w-[252px]">
                            <div>{5}</div>
                            <div className="w-[242px] h-[26px] bg-secondary">
                                <div
                                    style={{
                                        width: fiveStars + "%",
                                    }}
                                    className="bg-primary h-full max-w-[242px] rounded text-center text-warn-dark font-semibold"
                                >
                                    {memo[5] > 0 && memo[5]}
                                </div>
                            </div>
                            <div>
                                {isNaN(fiveStars) ? "N/A" : fiveStars + "%"}
                            </div>
                        </div>
                        {/* Star 4 */}
                        <div className="flex gap-x-2 w-[252px] text-dark/75">
                            <div>{4}</div>
                            <div className="w-[242px] h-[26px] bg-secondary">
                                <div
                                    style={{
                                        width: fourStars + "%",
                                    }}
                                    className="bg-primary h-full max-w-[242px] rounded text-center text-warn-dark font-semibold"
                                >
                                    {memo[4] > 0 && memo[4]}
                                </div>
                            </div>
                            <div>
                                {isNaN(fourStars) ? "N/A" : fourStars + "%"}
                            </div>
                        </div>
                        {/* Star 3 */}
                        <div className="flex gap-x-2 w-[252px]">
                            <div>3</div>
                            <div className="w-[242px] h-[26px] bg-secondary">
                                <div
                                    style={{
                                        width: threeStars + "%",
                                    }}
                                    className="bg-primary h-full max-w-[242px] rounded text-center text-warn-dark font-semibold"
                                >
                                    {memo[3] > 0 && memo[3]}
                                </div>
                            </div>
                            <div>
                                {isNaN(threeStars) ? "N/A" : threeStars + "%"}
                            </div>
                        </div>
                        {/* Star 2 */}
                        <div className="flex gap-x-2 w-[252px]">
                            <div>2</div>
                            <div className="w-[242px] h-[26px] bg-secondary">
                                <div
                                    style={{
                                        width: twoStars + "%",
                                    }}
                                    className="bg-primary h-full max-w-[242px] rounded text-center text-warn-dark font-semibold"
                                >
                                    {memo[2] > 0 && memo[2]}
                                </div>
                            </div>
                            <div>
                                {isNaN(twoStars) ? "N/A" : twoStars + "%"}
                            </div>
                        </div>
                        {/* Star 1 */}
                        <div className="flex gap-x-2 w-[252px]">
                            <div>1</div>
                            <div className="w-[242px] h-[26px] bg-secondary">
                                <div
                                    style={{
                                        width: oneStar + "%",
                                    }}
                                    className="bg-primary h-full max-w-[242px] rounded text-center text-warn-dark font-semibold"
                                >
                                    {memo[1] > 0 && memo[1]}
                                </div>
                            </div>
                            <div>{isNaN(oneStar) ? "N/A" : oneStar + "%"}</div>
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={onSubmit}
                    className="col-span-full md:col-span-7 w-full"
                >
                    <div className="mb-4">
                        <label className="form-label">Rating</label>
                        <Rating setRating={setRating} rating={rating} />
                    </div>
                    <div className="w-full">
                        <label htmlFor="fullName" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            className="form-input w-full"
                            required
                            placeholder="Full name..."
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="w-full mb-4">
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
                {/* Comments */}
                <div className="col-span-full space-y-4">
                    <div className="text-3xl">Comments</div>
                    {commentsLs.map((comment) => (
                        <div className="px-2 py-3 bg-secondary border-2 border-dark/15 shadow text-base rounded-md w-full">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-x-3">
                                    <div className="capitalize max-w-[25ch] line-clamp-1">
                                        {comment.fullName}
                                    </div>
                                    <div className="flex items-center">
                                        {new Array(5).fill(0).map((_, i) => (
                                            <IcStar
                                                className={`${
                                                    i <= comment.rating
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
                            </div>
                            <div className="text-sm font-light my-2">
                                {comment.comment}
                            </div>
                            <div className="text-xs font-light text-right">
                                {comment.createdAtStr}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommentSection;
