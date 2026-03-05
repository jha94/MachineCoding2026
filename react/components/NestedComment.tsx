import { useState, useEffect } from "react";
import './component.css';
type comment = {
    key: number,
    content: string,
    replies: comment[]
}
type changeVal = {
    val: string,
    index?: number
}

const NestedComment = () => {
    const [commentTree, setCommentTree] = useState<comment[]>([]);
    const [comment, setComment] = useState<string>('');
    const [reply, setReply] = useState<string>('');
    const [replyIndex, setReplyIndex] = useState<number>(0);

    const handleChange = (type: string, value: changeVal) => {
        const { val } = value
        if (type === 'comment') {
            setComment(val)
        }
        if (type === 'reply') {
            return setReply(val)
        }
    }

    const addReply = (commentTree: comment[], replyIndex: number) => {
        const commentTreeWithAddedComment = commentTree.map((comment) => {
            const { key, replies } = comment
            if (key === replyIndex) {
                replies.push({
                    key: new Date().getTime(),
                    content: reply,
                    replies: []
                })
            } else {
                addReply(replies, replyIndex)
            }
            return comment
        })
        setCommentTree([...commentTreeWithAddedComment])
        setReply('')
        setReplyIndex(0)
    }

    const handleClick = (type: string) => {
        if (type === 'comment') {
            setCommentTree((prev) => [
                ...prev, {
                    key: new Date().getTime(),
                    content: comment,
                    replies: []
                }
            ])
            setComment('')
        }
        if (type === 'cancel') {
            setComment('')
        }
        if (type === 'add reply') {
            addReply(commentTree, replyIndex)
        }
        if (type === 'cancel reply') {
            setReplyIndex(0)
            setReply('')
        }
    }

    const renderComment = (comment: comment) => {
        const { key, content, replies } = comment
        return (
            <div key={key} className="commentList" style={{
                marginLeft: '40px'
            }} >
                <p>{content}</p>
                {
                    replyIndex === key ?
                        <div >
                            <input type="text" className="commentInput" value={reply} onChange={(e) => handleChange('reply', { val: e.target.value })} />
                            <div className="commentBtnWrapper" >
                                <button onClick={() => handleClick('cancel reply')} >Cancel</button>
                                <button onClick={() => handleClick('add reply')}>Add Reply</button>
                            </div>
                        </div> : <button onClick={() => setReplyIndex(key)} >Reply</button>
                }

                {
                    replies?.length ? replies.map((reply) => renderComment(reply)) : <></>
                }
            </div>
        )
    }
    return (
        <div className="commentWrapper" >
            <input value={comment} type="text" className="commentInput" onChange={(e) => handleChange('comment', { val: e.target.value })} />
            {comment?.length ? <div className="commentBtnWrapper" >
                <button onClick={() => handleClick('cancel')}>Cancel</button>
                <button onClick={() => handleClick('comment')} >Comment</button>
            </div> : ''}
            {commentTree?.length ? commentTree.map((comment) => renderComment(comment)) : <></>}
        </div>
    )
}

export default NestedComment