import React from 'react';

const EventDetail = ({match}) => {
    const{
        params: {id},
    } = match;
    return(
        <div className="chitiet">
            <p>Chi tiet event</p>
        </div>
    );
};

export default EventDetail;