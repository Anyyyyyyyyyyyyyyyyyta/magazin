import React from 'react'
import ContentLoader from 'react-content-loader';


export const Loading = () => {
    return (
        <div>
            <ContentLoader 
                className='toys-block'
                speed={2}
                width={280}
                height={424}
                viewBox="0 0 280 424"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"

            >
                <rect x="9" y="1" rx="5" ry="5" width="260" height="260" /> 
                <rect x="3" y="292" rx="4" ry="4" width="280" height="44" /> 
                <rect x="0" y="354" rx="4" ry="4" width="280" height="44" />
            </ContentLoader>
        </div>
    );
}


