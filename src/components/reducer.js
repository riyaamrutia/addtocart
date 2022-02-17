export const reducer = (state, action) => {
   if(action.type === "REMOVE_ITEM"){
       return {
           ...state,
           item: state.item.filter((curElem) => {
               return curElem.id !== action.payload;
           }),
       };
   }

   if(action.type === "CLEAR_CART"){
       return { 
           ...state , 
           item:[]
        };
   }

   if(action.type === "INCREMENT"){
       let updatedCart = state.item.map((curElem) => {
           if(curElem.id === action.payload){
               return {
                   ...curElem,
                   quantity: curElem.quantity +1
               };
           }
           return curElem;

       });
       return {...state, item: updatedCart};
   };

   if(action.type === "DECREMENT"){
       let updatedCart = state.item.map((curElem) => {
           if(curElem.id === action.payload){
               return {
                   ...curElem,
                   quantity:curElem.quantity-1
               };
           }
           return curElem;
       })
       .filter((curElem) => {
           return curElem.quantity !==0;
       });
       return { ...state , item: updatedCart };
   }

   if(action.type === "GET_TOTAL"){
       let {totalItem, totalAmount } = state.item.reduce((accumulator , curVal) => {
               let {price , quantity} = curVal;
               let updatedTotalAmount = price * quantity;
               accumulator.totalAmount += updatedTotalAmount;
               accumulator.totalItem += quantity;
               return accumulator;
           },
           {
               totalItem:0,
               totalAmount:0
           }
       );
       return {...state, totalItem , totalAmount};
   }
   return state;
};