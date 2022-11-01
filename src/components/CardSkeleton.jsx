import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import '@styles/CardSkeleton.scss'

export const CardSkeleton = ({ ncards }) => {
    return Array(ncards).fill(0).map((card,i) => {
        return (
            <div className="skeleton-container" key={i}> 
                <div className="top-skeleton">
                    <Skeleton height={'100%'} />
                </div>
                <div className="bottom-skeleton">
                    <div className="price-skeleton">
                        <Skeleton count={2} />
                    </div>

                    <div className="button-skeleton">
                        <Skeleton circle={true} height={'100%'} />
                    </div>
                </div>
            </div>
        )
    })


};
