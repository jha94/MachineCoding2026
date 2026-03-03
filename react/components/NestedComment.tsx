const NestedComment = () => {
    const comments = [{
        key: 1,
        content: 'comment1',
        replies: [{
            key: 11,
            content: 'comment1_1',
            replies: [{
                key: 111,
                content: 'comment1_1_1',
                replies: []
            }, {
                key: 112,
                content: 'comment1_1_2',
                replies: [{
                    key: 1121,
                    content: 'comment1_1_2_1',
                    replies: []
                }]
            }]
        }]
    }, {
        key: 2,
        content: 'comment2',
        replies: []
    }, {
        key: 3,
        content: 'comment3',
        replies: [{
            key: 31,
            content:'comment3_1'
        }]
    }]
    const renderComment = (comment) => {
        const {key, content, replies} = comment
        return(
            <div key={key} style={{
                paddingLeft:'40px'
            }} >
                <p>{content}</p>
                {
                    replies?.length?replies.map((reply)=>renderComment(reply)):<></>
                }
            </div>
        )
    }
    return (
        <>
        {
            comments.map((value)=>renderComment(value))
        }
        </>
    )
}

export default NestedComment