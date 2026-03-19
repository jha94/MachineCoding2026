import { useState, useEffect } from "react";
import "../appStyles.css";
const Comment = () => {
  const [comment, setComment] = useState("");
  const [commentTree, setCommentTree] = useState([]);
  const [reply, setReply] = useState("");
  const [replyInd, setReplyInd] = useState();

  useEffect(() => {
    console.log("commentTree", commentTree);
  }, [commentTree]);

  const addReply = (commentTree = [], parentId) => {
    return commentTree.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: new Date().getTime(),
              value: reply,
              replies: [],
            },
          ],
        };
      }
      return {
        ...comment,
        replies: addReply(comment.replies, parentId),
      };
    });
  };

  const handleClick = (eventType, parentId) => {
    if (eventType === "comment") {
      setCommentTree((prev) => [
        ...prev,
        {
          id: new Date().getTime(),
          value: comment,
          replies: [],
        },
      ]);
      setComment("");
    }
    if (eventType === "reply") {
      const updatedCommentTree = addReply(commentTree, parentId);
      setCommentTree([...updatedCommentTree]);
      setReplyInd(null);
      setReply("");
    }
  };

  const renderCommentInput = () => {
    return (
      <>
        <input
          type="text"
          className="commentInput"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="commentBtn" onClick={() => handleClick("comment")}>
          Comment
        </button>
      </>
    );
  };

  const renderReplyInput = (parentId) => {
    return (
      <div>
        <input
          type="text"
          className="commentInput"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <div>
          <button className="commentBtn" onClick={() => setReplyInd(null)}>
            Cancel
          </button>
          <button
            className="commentBtn"
            onClick={() => handleClick("reply", parentId)}
          >
            Reply
          </button>
        </div>
      </div>
    );
  };
  const renderComments = (commentTree) => {
    return (
      <div>
        {commentTree?.length
          ? commentTree.map((comment) => {
              const { id, value, replies = [] } = comment;
              return (
                <div>
                  <p>{value}</p>
                  {replyInd === id ? (
                    <div
                      style={{
                        marginLeft: "20px",
                      }}
                    >
                      {renderReplyInput(id)}
                    </div>
                  ) : (
                    <button onClick={() => setReplyInd(id)}>💬</button>
                  )}
                  <div
                    style={{
                      marginLeft: "40px",
                    }}
                  >
                    {replies.map((reply) => renderComments([reply]))}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  };

  return (
    <div>
      {renderCommentInput()}
      {renderComments(commentTree)}
    </div>
  );
};

export default Comment;
