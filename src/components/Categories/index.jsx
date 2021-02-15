import React from 'react'
import {useState} from 'react'


export const Categories = React.memo(({items, onClickItem}) => {
    const [itemActive, setItemActive] = useState(null)
    
    const onActive = index => {
        setItemActive(index)
        onClickItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={itemActive == null? 'active': ''}
                    onClick={() => onActive(null)}>Все</li>
                {   
                     items?.map((item, index) => 
                        <li className={itemActive === index?'active':''}
                            onClick={() => onActive(index)}
                            key={`${item}`}>{item}
                        </li>
                    )
                }
            </ul>
        </div>
    )
})


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



