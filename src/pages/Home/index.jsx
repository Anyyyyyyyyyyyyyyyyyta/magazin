import React from 'react'
import { Categories, Sort, ToysBlock } from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import {setSelectCategory, setSortBy} from '../../actions'
import {addToys, fetchToys} from '../../actions'
import {useEffect} from 'react'
import {Loading} from '../../components'

 export const Home = () => {
  const arrItems = ['Мягкие','Пластмассовые','Гипс','Меховые'];
  const sortItems = [
                      {name:'популярности', type: 'rating', order: "desc"},
                      {name:'цена', type: 'price', order: "desc"},
                      {name:'алфавит', type: 'name', order: "asc"}
                    ];
  const dispatch = useDispatch();

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
   const itemsBusket = useSelector(({busket})=>busket.items)

   const {sortBy, category} = useSelector(({filter}) => filter)
    useEffect(() => {
      dispatch(fetchToys(sortBy,category)) 
    }, [sortBy, category])
  
   const onClickSortF = React.useCallback((type) => {
      dispatch(setSortBy(type))
   }, []);

   const onSelectCategoryF = React.useCallback((index) => {
      dispatch(setSelectCategory(index))
   }, []);

    const addToysToCart = (obj) => {
      dispatch(addToys(obj))
    }

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
              <ToysBlock  key={obj.id} {...obj} 
                          onClickAddToys={addToysToCart} 
                          isLoading={true}
                          addOneToys={itemsBusket[obj.id] && itemsBusket[obj.id].items.length}
                          />):
               Array(13)
               .fill(0)
               .map((_, index) => (
                <Loading key={index}/>
               ))
            }
           
          </div>
        </div>
    )
}

