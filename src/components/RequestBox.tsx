import React from 'react';

const RequestBox = function () {
    return (
        <div className="RequestBox">
            <form>
                <input type="text" name="requestURL" />
                <button type="button" value="보내기">보내기</button>
            </form>
        </div>
    )
}

export default RequestBox;