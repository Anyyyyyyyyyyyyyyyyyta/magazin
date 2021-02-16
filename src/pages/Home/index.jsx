import React from 'react'
import { Categories, Sort, ToysBlock } from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import {setSelectCategory, setSelectSortBy} from '../../actions'
import ContentLoader from "react-content-loader"
// import LoadingBlock from '../../components/ToysBlock/LoadingBlock'

 export const Home = () => {
  const dispatch = useDispatch();
  const dispatch0 = useDispatch();
  const {items} = useSelector((state)=>{
    return{
      items: state.toysData.items
    }
   })
   const {isLoading} = useSelector((state)=>{
    return{
      isLoading: state.toysData.isLoading
    }
   })

   const {sortBy, category} = useSelector(({filter}) => filter)

   console.log(sortBy, category)

   const onClickSortF = React.useCallback((index) => {
    dispatch(setSelectSortBy(index))
   }, []);

   const onSelectCategoryF = React.useCallback((index) => {
    dispatch0(setSelectCategory(index))
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
            <Sort items={sortItems}
                   activeSortType={sortItems.type}
                   onClickSort={onClickSortF}/>
          </div>
          <h2 className="content__title">Все игрушки</h2>
          <div className="content__items">
           {isLoading &&
             items?.map(obj => 
              <ToysBlock key={obj.id} {...obj} isLoading={true}/>)
              
           }
           {/* {Array(10).fill(<LoadingBlock />)} */}
          </div>
        </div>
    )
}

