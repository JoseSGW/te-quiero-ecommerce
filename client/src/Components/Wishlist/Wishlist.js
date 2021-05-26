import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";
import { Container, ContainerFlex, ContainerList } from "./Wishlist.styled";
import { getAllWishes } from "../../actions/wishlistActions";


export default function Wishlist() {
    const [wishesUser, setWishesUser]= useState([])
    const dispatch = useDispatch();
    const wish = useSelector((state) => state.products.wish);

   const wishes = useSelector((state)=> state.products.wishes)   

   const user = useSelector((state)=> state.users.user)

   useEffect(() => {
       if (user.id && user.id!==null && wish.length === 0){
      dispatch(getAllWishes(user.id))
    //   console.log("entre en el useffect")
      
    //   setWishesUser(wishes)
    }
    setWishesUser(wishes)
   }, [wishes.length])
 
    return (
        <Container>
            <ContainerList>
                {((!user.id ||user.id == null) && wish?.map((item) => {

                    return (
                        <WishlistItem
                            id={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            key={item.id}
                            imageurl = {item.images[0].name}
                            description={item.description}
                          
                        />
                    );
                })  ) ||(
                user.id && wish.length==0 && wishesUser?.map((item) => {
                    
                    return (
                        <WishlistItem
                            id={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            key={item.id}
                            description={item.description}
                            imageurl = {item.imageurl}
                          
                        />
                    );
                })  )
                
                }
            </ContainerList>
            
        </Container>
    );
}


