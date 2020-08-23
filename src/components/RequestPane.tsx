import React from 'react';
import RequestBox from './RequestBox';
import ResponseBox from './ResponseBox';

const RequestPane = function () {
    return (
        <div className="RequestPane">
            <RequestBox />
            <ResponseBox />
        </div>
    );
}

export default RequestPane;