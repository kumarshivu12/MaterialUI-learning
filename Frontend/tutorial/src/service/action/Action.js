import { Increment,Decrement } from "../Constant"

export const increment = (data) => {
  return{
    type:Increment,
    payLoad:data
  }
}
export const decrement = (data) => {
  return{
    type:Decrement,
    payLoad:data
  }
}