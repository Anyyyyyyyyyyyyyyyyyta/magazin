import React from 'react'
import { Categories, Sort, ToysBlock } from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import {setSelectCategory, setSortBy} from '../../actions'
import ContentLoader from "react-content-loader"
import {setNameToys, fetchToys} from '../../actions'
import {useEffect} from 'react'
 import {Loading} from '../../components'

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
  useEffect(() => {
    dispatch(fetchToys(sortBy,category)) 
  }, [sortBy, category])
  
   const onClickSortF = React.useCallback((type) => {
    dispatch(setSortBy(type))
   }, []);
   const onSelectCategoryF = React.useCallback((index) => {
    dispatch0(setSelectCategory(index))
   }, []);


   const arrItems = ['Мягкие','Пластмассовые','Гипс','Меховые'];
   const sortItems = [
                      {name:'популярности', type: "popular", order: "desc"},
                      {name:'цена', type: 'price', order: "desc"},
                      {name:'алфавит', type: 'name', order: "asc"}
                    ];
 // const sortItems = ['популярности',"цене","названию"];

    return (
        <div className="container">
          <div className="content__top">
            <Categories onClickItem={onSelectCategoryF} 
                        items={arrItems}
                        activeCategory={category}/>
            <Sort items={sortItems}
                   activeSortType={sortBy.type}
                   onClickSort={onClickSortF}/>
          </div>
          <h2 className="content__title">Все игрушки</h2>
          <div className="content__items">
           {isLoading ?
             items?.map(obj => 
              <ToysBlock key={obj.id} {...obj} isLoading={true}/>):
               Array(13).fill(<Loading />)
            }
           
          </div>
        </div>
    )
}

