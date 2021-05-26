import { types } from "../types/types";

const initialState = {
  totalCart: 0,
  totalSalesQ:0,
  totalSalesP: 0,
  totalColors: {},
  Arg: 0,
  Countries: 0,
  Col: 0,
  Chi:0,
  Ven:0,
  Otros:0,
  mostSold: [],
  salesPerMonth: []
}

export const statisticsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.getCart:
      return {
        ...state,
        totalCart: action.payload
      }
      case types.getSalesQ:
        return {
          ...state,
          totalSalesQ: action.payload
          
        }
        case types.getSalesP:
          
          return {
               ...state,
               totalSalesP: action.payload
          }
        case types.getColor:
          return {
          ...state,
          totalColors: action.payload
        }
        case types.getArg:
          return {
            ...state,
            Arg: action.payload
          }
          case types.getCountries:
          return {
            ...state,
            Countries: action.payload
          }
          case types.getVen:
          return {
            ...state,
            Ven: action.payload
          }
          case types.getCol:
            return {
              ...state,
              Col: action.payload
            }
          case types.getChi:
          return {
            ...state,
            Chi: action.payload
          }
          case types.getOtros:
          return {
            ...state,
            Otros: action.payload
          }
        case types.mostSold:
          return {
            ...state,
            mostSold: action.payload
          }
          case types.salesPerMonth: 
          return{
            ...state,
            salesPerMonth: action.payload
          }
    default: 
      return state;
  }
}