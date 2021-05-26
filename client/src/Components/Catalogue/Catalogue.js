import React, {useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Fondo, SidebarAndProductsContainer } from "./Catalogue.styles";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { setProducts, startLoadingProducts } from "../../actions/products";
import Loading from "../Loading/Loading";
import { searchProduct } from "../../actions/products";
import { showCategories } from "../../actions/categories";
import { showIngredients } from "../../actions/ingredients";

export default function Catalogue() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showProducts, setShowProducts]= useState([])
    const { products, search } = useSelector((state) => state.products);
    const { loading } = useSelector((state) => state.loading);
    
    // const nameProductQuery = history.location.search.slice(7);
    
    // useEffect(()=>{
    //     if (products.length === 0)dispatch(startLoadingProducts())
    // })

    useEffect(() => {
        {products.length !== 0
            ? setShowProducts(products) 
            : dispatch(startLoadingProducts())
        }
    
        if (search.length > 0) 
        setShowProducts(search)
        if (history.location.search.length === 0)
        //dispatch(startLoadingProducts());
        setShowProducts(products)
    }, [search, products]);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(showCategories());
        dispatch(showIngredients());
    }, []);

    

    if (loading) return <Loading />;

    return (
        <SidebarAndProductsContainer>
            <CategoryFilter />
            <Fondo>
                {showProducts?.map((p) => {
                    if (p.stock !== 0) {
                        return (
                            <ProductCard
                                key={p.id}
                                name={p.name}
                                price={p.price}
                                description={p.description}
                                color={p.color}
                                ingredients={p.ingredients}
                                category={p.categories}
                                
                                img={
                                    p.images
                                        ? p.images[0]
                                            ? p.images[0].name
                                            : "https://okdiario.com/img/recetas/2016/10/26/beneficios-del-te-de-limon.jpg"
                                        : "https://okdiario.com/img/recetas/2016/10/26/beneficios-del-te-de-limon.jpg"
                                }
                                id={p.id}
                            />
                        );
                    }
                })}
            </Fondo>
        </SidebarAndProductsContainer>
    );
}
