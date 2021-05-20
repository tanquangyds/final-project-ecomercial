import React from 'react';

import "../comment/Comment.css"
import Formwrite from './Formwrite/Formwrite';
import Listcomment from './Listcomment/Listcomment';

function Comment(props) {
    return (
        <div className="row">
            <Formwrite/>
        </div>
    );
}

export default Comment;