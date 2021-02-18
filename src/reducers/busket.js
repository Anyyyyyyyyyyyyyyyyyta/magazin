import {CLEAR_BUSKET_TOYS, SET_ADD_TOYS_ITEMS,DELETE_ALL_THIS_TOYS,
    ADD_ONE_THIS_TOYS, DELETE_ONE_THIS_TOYS} from '../constants'

const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
}

const getPrice = arr=> arr.reduce((sum,obj) => (obj.price + sum), 0)

 const busket = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADD_TOYS_ITEMS: {
            const currentIdToysPrice = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload]

            const newItems = {   //хранение актуальных данных
                ...state.items,
                [action.payload.id]: {
                    items: currentIdToysPrice,
                    allPrice: getPrice(currentIdToysPrice),
                }
            }
           // let arrPrice = [].concat.apply([],Object.values(newItems).map(obj => obj.items))
            const itemsCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].allPrice + sum, 0)
           
            return {
                ...state, 
                items: newItems,
                itemsCount: itemsCount,
                totalPrice: totalPrice
            }
        }
        
        case CLEAR_BUSKET_TOYS: {
            return {
               ...state,
               items: {}, itemsCount : 0,totalPrice: 0,
            }
        }

        case DELETE_ALL_THIS_TOYS: {
            const newItem={
                ...state.items
            }
            const currentItemsCount = newItem[action.payload].items.length;
            const currentItemsPrice = newItem[action.payload].allPrice
            delete newItem[action.payload]
            return {
                ...state,
                items: newItem, 
                itemsCount: state.itemsCount - currentItemsCount ,
                totalPrice: state.totalPrice - currentItemsPrice
                
            }
        }

        case ADD_ONE_THIS_TOYS: {
            const newItem = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0] // добавление в конец ещё одного элемента
            ]
            

              const newObjectItems = {
                ...state.items,
                [action.payload]: {
                  items: newItem,
                  totalPrice: getPrice(newItem),
                  allPrice: getPrice(newItem)
                },
              };

            const itemsCount = Object.keys(newObjectItems).reduce((sum, key) => newObjectItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newObjectItems).reduce((sum, key) => newObjectItems[key].allPrice + sum, 0)

            return {
                ...state,
                items: newObjectItems,
                itemsCount: itemsCount,
                totalPrice: totalPrice

            }
        }
        case DELETE_ONE_THIS_TOYS: {
            const oldArray = [...state.items[action.payload].items]

            const newObjectItems = oldArray.length > 1 ? [
                ...state.items[action.payload].items.slice(1) // добавление в конец ещё одного элемента
            ] : oldArray;

            const newItem ={ ...state.items,
            [action.payload]: {
              items: newObjectItems,
              allPrice: getPrice(newObjectItems),
            },
        }

        const itemsCount = Object.keys(newItem).reduce((sum, key) => newItem[key].items.length + sum, 0)
        const totalPrice = Object.keys(newItem).reduce((sum, key) => newItem[key].allPrice + sum, 0)

            return {
                ...state,
                items: newItem,
                itemsCount:itemsCount,
                totalPrice: totalPrice

            }
        }
        default: {
            return state
        }
    }
}

export default busket