import React from "react";

const SingleUsers = ({item}) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{item.firstName} {item.lastName}</span>
                    </div>
                    <div className="card-action">
                        <p>{item.username}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleUsers