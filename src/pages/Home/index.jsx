import React from 'react'
import { Categories, Sort, ToysBlock } from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import {setSelectCategory} from '../../actions'

 export const Home = () => {
  const dispatch = useDispatch();
  const {items} = useSelector((state)=>{
    return{
      items: state.toysData.items
    }
   })

   const onSelectCategoryF = React.useCallback((index) => {
    dispatch(setSelectCategory(index))
   }, []);

   const arrItems = ['Мягкие','Пластмассовые','Гипс','Меховые'];
  //  const sortItems = [{name:'популярности', type: "popular"},
  //                     {name:'цена', type: 'price'},
  //                     {name:'алфавит', type: 'alfabit'}
  //                   ];
  const sortItems = ['популярности',"цена","алфавит"];

    return (
        <div className="container">
          <div className="content__top">
            <Categories onClickItem={onSelectCategoryF} 
                        items={arrItems}/>
            <Sort items={sortItems}/>
          </div>
          <h2 className="content__title">Все игрушки</h2>
          <div className="content__items">
           {
             items?.map(obj => 
              <ToysBlock key={obj.id} {...obj}/>)
           }
          </div>
        </div>
    )
}

