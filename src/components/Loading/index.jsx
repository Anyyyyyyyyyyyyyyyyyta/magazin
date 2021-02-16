import React, {ContentLoader} from 'react'

 const LoadingBlock = ({}) => {
    return (
        <ContentLoader 
          speed={2}
          width={280}
          height={424}
          viewBox="0 0 280 424"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
      
        >
          <rect x="2" y="-1" rx="0" ry="0" width="201" height="201" />
        </ContentLoader>
        );
}

export default LoadingBlock

