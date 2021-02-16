import React, {useState} from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'

export const ToysBlock = ({name, imageUrl, price, sizes, isLoading}) => {
    const [activeSelect, setActiveSelect] = useState(0);

    const sizesToys = [sizes[0], sizes[1], sizes[2]]

    const onActive= (index) => {
        setActiveSelect(index)
    }

    return(
        <div className="toy-block">
              <img
                className="toy-block__image"
                src={imageUrl}
                alt="toy"
              />
              <h4 className="toy-block__title">{name}</h4>
              <div className="toy-block__selector">
                <ul>
                    {
                        sizesToys?.map((size, index) => (
                            <li key={`${index}`} className={ className({
                                active: activeSelect === index,
                                disabled: !sizesToys.includes(size),
                               
                                
                            })} 
                                onClick={()=>onActive(index)}>{size}</li>
                        ))
                    }
                </ul>
              </div>
              <div className="toy-block__bottom">
                <div className="toy-block__price">от {price} BYN</div>
                <div className="button button--outline button--add">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Добавить</span>
                  <i>2</i>
                </div>
              </div>
            </div> 
    );
}
ToysBlock.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    imageUrl: PropTypes.string,
}