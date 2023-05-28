import React from 'react';
import LatestNews from '../components/LatestNews';
import AdComponent from '../components/AdComponent';

const Latestnews = () => {
    return (
        <div>
            <h1>Latest News</h1>
            <LatestNews />

            {/* Add the AdComponent */}
            <div className="mt-8">
                <AdComponent />
            </div>
        </div>
    );
};

export default Latestnews;
