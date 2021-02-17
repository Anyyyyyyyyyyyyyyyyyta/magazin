import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types'

export const Categories = React.memo(({activeCategory, items, onClickItem}) => {
    //const [itemActive, setItemActive] = useState(null)
    
   // const onActive = index => {
        //setItemActive(index)
     //   onClickItem(index)
    //}
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory == null? 'active': ''}
                    onClick={() => onClickItem(null)}>Все</li>
                {   
                     items?.map((item, index) => 
                        <li className={activeCategory === index?'active':''}
                            onClick={() => onClickItem(index)}
                            key={`${item}`}>{item}
                        </li>
                    )
                }
            </ul>
        </div>
    )
})

// Categories.propTypes = {
//     activeCategory: PropTypes.number, 
//     items: PropTypes.arrayOf(PropTypes.object), 
//     onClickItem: PropTypes.func,

//   };
  
//   Categories.defaultProps = {
//     activeCategory: 0,
//     items: [],
//   };


// export class Categories extends React.Component{
//     state = {
//         itemActive: 0
//     }
//     onSelectItem = index =>{
//         this.setState({
//             itemActive: index
//         })
//         this.forceUpdate();
//     }

//     render() {
//         const {items, onClickItem} = this.props;
//         return(
//         <div className="categories">
//             <ul>
//                 <li className='active'>Все</li>
//                 {
//                     items.map((item, index) => 
//                         <li className={this.state.itemActive === index?'active':''} 
//                             onClick={() => this.onSelectItem(index)} 
//                             key={`${item}`}>{item}
//                         </li>
//                     )
//                 }
//             </ul>
//         </div>
//         )
//     }
// } 



