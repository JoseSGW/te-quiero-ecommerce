import {types} from "../types/types"
import moment from 'moment';
import "moment/locale/es";

//Cantidad de productos agregado al carrito
export function totalCarrito() {
    return async function(dispatch) {
        return await fetch(`http://localhost:3001/statistics/totalCart`)
            .then(response => response.json())
            .then(sales => {
                
                dispatch({
                    type: types.getCart,
                    payload: sales.cantidad,
                });
            });
    };
}

//Cantidad de productos vendidos
export function totalVendidos(){
    return async function(dispatch) {
        return await fetch(`http://localhost:3001/statistics/totalSold`)
            .then(response => response.json())
            .then(sales => {
                const productos = sales.map((p)=>p.products)
                var arr=0
                for (let i=0; i<productos.length;i++){
                    arr= arr+ productos[i].reduce((acc, curr)=> acc+curr.order_details.quantity, 0)
                    
                 }
                 
                 dispatch({
                     type: types.getSalesQ,
                     payload: arr,
                 });
            });
    };
}


//Cantidad de ventas en pesos
export function totalVentas(){
    return async function(dispatch) {
        return await fetch(`http://localhost:3001/statistics/totalSold`)
            .then(response => response.json())
            .then(sales => {
                const productos = sales.map((p)=>p.products)
                var arr=0
                for (let i=0; i<productos.length;i++){
                    arr= arr+ productos[i].reduce((acc, curr)=> acc+(curr.order_details.quantity*curr.price), 0)
                    
                 }
                dispatch({
                    type: types.getSalesP,
                    payload: arr,
                });
            });
    };   
}

//Total de ventas en pesos por país
export function totalPorPais(){
    return async function(dispatch) {
        return await fetch(`http://localhost:3001/statistics/totalSold`)
            .then(response => response.json())
            .then(sales => {
                //ARGENTINA
                const prodArg= sales.filter(prod=> prod.user.country=="argentina")
                var arr=0
                if (prodArg.length>0){
                const prodArgentina = prodArg.map((p)=>p.products)
                
                for (let i=0; i<prodArgentina.length;i++){
                    arr= arr+ prodArgentina[i].reduce((acc, curr)=> acc+(curr.order_details.quantity*curr.price), 0)
                    
                 }
                }
                // CHILE
                const prodChi= sales.filter(prod=> prod.user.country=="chile")
                var array=0
                if (prodChi.length>0){
                const prodChile = prodChi.map((p)=>p.products)
                
                for (let i=0; i<prodChile.length;i++){
                    array= array+ prodChile[i].reduce((acc, curr)=> acc+(curr.order_details.quantity*curr.price), 0)
                    
                 }
                }
                 //COLOMBIA
                const prodCol= sales.filter(prod=> prod.user.country=="colombia")
                 var arrayBase=0
                if (prodCol.length>0) {
                const prodColombia = prodCol.map((p)=>p.products)
                for (let i=0; i<prodColombia.length;i++){
                    arrayBase= arrayBase+ prodColombia[i].reduce((acc, curr)=> acc+(curr.order_details.quantity*curr.price), 0)
                    
                 }}

                 //VENEZUELA
                const prodVen= sales.filter(prod=> prod.user.country=="venezuela")
                var arrayV=0
                if (prodVen.length>0){
                const prodVenezuela = prodVen.map((p)=>p.products)
                
                for (let i=0; i<prodVenezuela.length;i++){
                    arrayV= arrayV+ prodVenezuela[i].reduce((acc, curr)=> acc+(curr.order_details.quantity*curr.price), 0)
                    
                 }}
                
                 //OTROS
                const prodOtros= sales.filter(prod=> prod.user.country=="other")
                 var arrOtros=0
                if (prodOtros.length>0){
                const prodOtrosPaises = prodOtros.map((p)=>p.products)
               
                for (let i=0; i<prodOtrosPaises.length;i++){
                    arrOtros= arrOtros+ prodOtrosPaises[i].reduce((acc, curr)=> acc+(curr.order_details.quantity*curr.price), 0)
                    
                 }}
                
                dispatch ({
                    type: types.getCountries,
                    payload: sales
                })
                dispatch({
                    type: types.getArg,
                    payload: arr,
                });
                dispatch({
                    type: types.getCol,
                    payload: arrayBase,
                });
                dispatch({
                    type: types.getChi,
                    payload: array,
                });
                dispatch({
                    type: types.getVen,
                    payload: arrayV,
                });
                dispatch({
                    type: types.getOtros,
                    payload: arrOtros,
                });

            });
    };   
}


export function totalVendidosPorColor(){
    return async function(dispatch) {
        return await fetch(`http://localhost:3001/statistics/totalSold`)
            .then(response => response.json())
            .then(sales => {
               
                const allProducts = sales.map((p)=>p.products)
                var colorsBlack=[]
                var colorBlue=[]
                var colorWhite=[]
                var colorGreen=[]
                var colorYellow=[]
                var colorRed=[]
                var colorsArr={}
                // var arr=0
                //TE NEGRO
                 for (let i=0; i<allProducts.length;i++){
                      colorsBlack =colorsBlack.concat(allProducts[i].filter(p=> p.color=="black"))
                }
                var ventasBlack= colorsBlack.reduce((acc, p)=> acc+ (p.price* p.order_details.quantity), 0)
                //TE Blanco
                for (let i=0; i<allProducts.length;i++){
                    colorWhite =colorWhite.concat(allProducts[i].filter(p=> p.color=="white"))
              }                
              var ventasWhite= colorWhite.reduce((acc, p)=> acc+ (p.price* p.order_details.quantity), 0)
                //TE VERDE
                for (let i=0; i<allProducts.length;i++){
                    colorGreen =colorGreen.concat(allProducts[i].filter(p=> p.color=="green"))
              }  
              var ventasGreen= colorGreen.reduce((acc, p)=> acc+ (p.price* p.order_details.quantity), 0)
                //TE AMARILLO
                for (let i=0; i<allProducts.length;i++){
                    colorYellow =colorYellow.concat(allProducts[i].filter(p=> p.color=="yellow"))
              } 
              var ventasYellow= colorYellow.reduce((acc, p)=> acc+ (p.price* p.order_details.quantity), 0)
                //TE AZUL
                for (let i=0; i<allProducts.length;i++){
                    colorBlue =colorBlue.concat(allProducts[i].filter(p=> p.color=="blue"))
              }     
              var ventasBlue= colorBlue.reduce((acc, p)=> acc+ (p.price* p.order_details.quantity), 0)
                //TE ROJO
                for (let i=0; i<allProducts.length;i++){
                    colorRed =colorRed.concat(allProducts[i].filter(p=> p.color=="red"))
              }                        
              var ventasRed= colorRed.reduce((acc, p)=> acc+ (p.price* p.order_details.quantity), 0)   
             const infoColors={
                 red:colorRed,
                 blue:colorBlue,
                 yellow:colorYellow,
                 black:colorsBlack,
                 white:colorWhite,
                 green:colorGreen
             }
             
              colorsArr= {
                  red: ventasRed,
                  blue: ventasBlue,
                  white: ventasWhite,
                  yellow:ventasYellow,
                  black: ventasBlack,
                  green: ventasGreen
              }

                dispatch({
                    type: types.getColor,
                    payload: colorsArr,
                });
               dispatch( productosMasVendidos(infoColors))
            });
    };
}

export function productosMasVendidos(arr){
    return async function(dispatch) {
            const fullArr=[]
        const allProductsArr= fullArr.concat(arr.blue, arr.red, arr.white, arr.black, arr.yellow, arr.green)
                  var m;
          for(let j=0; j<allProductsArr.length; j++){
            for(let i=0; i<allProductsArr.length-1; i++){
                      
                    if(allProductsArr[i].order_details.quantity<allProductsArr[i+1].order_details.quantity){
                        m= allProductsArr[i];
                        allProductsArr[i]= allProductsArr[i+1]
                        allProductsArr[i+1]=m
                    }
                }
            }
          
            dispatch({
                type: types.mostSold,
                payload: allProductsArr,
            });
     };   
}

export function SalesByMonth(){
    return async function(dispatch) {
        return await fetch(`http://localhost:3001/statistics/totalSold`)
        .then(response => response.json())
        .then(sales => {
        
        moment.locale("es");
        
        const monthNames= [0, 0, 0, 0, 0, 0, 0]
        for (let i = 0; i < 7; i++) {
        monthNames.unshift(moment().subtract(i, 'month').format('MMMM'));
        }
       
        
        const prodCurrentMonth= sales.filter(prod=> prod.monthDate==monthNames[6])
        
        var arr=0;
        
        if (prodCurrentMonth.length>0){
        const monthCero = prodCurrentMonth.map((p)=>p.products)
        
        for (let i=0; i<monthCero.length;i++){
            arr= arr+ monthCero[i].reduce((acc, curr)=> acc+(curr.order_details.quantity*curr.price), 0)
            
         }
        }
        
        const salesPerMonth= [ 0, 0, 0, 0, 0, 0, arr]
           
        dispatch({
            type: types.salesPerMonth,
            payload: salesPerMonth,
        });
        // const productos = sales.map((p)=>p.products)
        // var arr=0
        // for (let i=0; i<productos.length;i++){
        //     arr= arr+ productos[i].reduce((acc, curr)=> acc+(curr.order_details.quantity*curr.price), 0)
            
        //  }
        })
    
    }
}
