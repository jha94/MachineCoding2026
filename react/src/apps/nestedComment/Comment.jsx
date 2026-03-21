import { useState } from "react";
import "../appStyles.css";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [commentTree, setCommentTree] = useState([]);
  const [replyParentInd, setReplyParentInd] = useState();
  const [reply, setReply] = useState("");

  const addReply = (replyParentInd, commentTree = []) => {
    return (
      commentTree.length &&
      commentTree.map((comment) => {
        if (comment.id === replyParentInd) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                value: reply,
                id: new Date().getTime(),
                replies: [],
              },
            ],
          };
        }
        return {
          ...comment,
          replies: addReply(replyParentInd, comment.replies),
        };
      })
    );
  };

  const handleOnClick = (type) => {
    if (type === "comment") {
      setCommentTree((prev) => {
        return [
          ...prev,
          {
            value: comment,
            id: new Date().getTime(),
            replies: [],
          },
        ];
      });
      setComment("");
    }
    if (type === "reply") {
      const updatedCommentTree = addReply(replyParentInd, commentTree);
      setCommentTree([...updatedCommentTree]);
      setReply();
      setReplyParentInd();
    }
  };

  const renderCommentUI = () => {
    return (
      <div>
        <input
          type="text"
          className="commentInput"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="commentBtn" onClick={() => handleOnClick("comment")}>
          Comment
        </button>
      </div>
    );
  };

  const renderReplyUI = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          className="commentInput"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button className="commentBtn" onClick={() => handleOnClick("reply")}>
          Reply
        </button>
        <button className="commentBtn" onClick={() => setReplyParentInd()}>
          Cancel
        </button>
      </div>
    );
  };

  const renderComments = (commentTree) => {
    return commentTree.map((comment) => {
      return (
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <p>{comment.value}</p>
          {comment.id === replyParentInd ? (
            renderReplyUI()
          ) : (
            <div onClick={() => setReplyParentInd(comment.id)}>💬</div>
          )}
          {comment?.replies?.length
            ? comment.replies.map((reply) => renderComments([reply]))
            : null}
        </div>
      );
    });
  };

  return (
    <div>
      {renderCommentUI()}
      {renderComments(commentTree)}
    </div>
  );
};

export default Comment;
