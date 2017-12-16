'use strict';
import uuid from 'uuid/v4';


const initialState =
  [
    {
      id: uuid,
      timestamp: false,
      name: false,
      budget: false,
    }
  ];


export default (state=initialState, action) => {

    let {type, payload} = action;

    switch ( type ) {

        case "CATEGORY_ADD":
            return [...state, payload];

         case "CATEGORY_UPDATE":
            return state.map( (item,i) => item.id === payload.id ? payload : item );

         case "CATEGORY_DELETE":
            return state.filter( (item,i) => item.id !== payload );

        default:
            return state;

          }
}
