import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AdminHeader from '../Components/AdminHeader/AdminHeader';
import CategoryIngredientCreateEdit from '../Components/CategoryIngredientCreateEdit/CategoryIngredientCreateEdit';
import CategoriesManagement from '../Pages/Admin/CategoriesManagement/CategoriesManagement';
import CreateProduct from '../Pages/Admin/CreateProduct/CreateProduct';
import IngredientsManagement from '../Pages/Admin/IngredientsManagement/IngredientsManagement';
import OrderByIdScreen from '../Pages/Admin/OrderByIdScreen/OrderByIdScreen';
import OrdersManagement from '../Pages/Admin/OrdersManagement/OrdersManagement';
import ProductsManagement from '../Pages/Admin/ProductsManagement/ProductsManagement';
import ProductView from '../Pages/Admin/ProductView/ProductView';
import StatsScreen from '../Pages/Admin/StatsScreen/StatsScreen';
import StoresManagement from '../Pages/Admin/StoresManagement/StoresManagement';
import UsersManagement from '../Pages/Admin/UsersManagement/UsersManagement';

const AdminRoutes = (props) => {

  // En este componente se añadiran las
  // rutas / componentes (formularios) de
  // creación de productos, usuarios, etc.

  return (
    <>
      <AdminHeader />
      <div>
      <Switch>
        <Route exact path="/admin/users" component={UsersManagement} />
        <Route exact path="/admin/products" component={ProductsManagement} />
        <Route exact path="/admin/categories" component={CategoriesManagement} />

        <Route exact path="/admin/ingredients" component={IngredientsManagement} />


                  {/* use render intead, in order to pass ingredient or category */}
        <Route exact path='/admin/categories/createeditcategory' 
          render={() => (<CategoryIngredientCreateEdit props={props} isCat={true} /> )} />
        <Route exact path='/admin/categories/createeditcategory' 
          render={() => (<CategoryIngredientCreateEdit props={props} isCat={true} /> )} />
        <Route exact path='/admin/categories/createeditcategory' 
          render={() => (<CategoryIngredientCreateEdit props={props} isCat={true} /> )} />
        <Route exact path='/admin/ingredients/createeditingredient' 
          render={() => (<CategoryIngredientCreateEdit props={props} isCat={false} /> )} />
        <Route exact path='/admin/ingredients/createeditingredient' 
          render={() => (<CategoryIngredientCreateEdit props={props} isCat={false} /> )} />
        <Route exact path='/admin/ingredients/createeditingredient' 
          render={() => (<CategoryIngredientCreateEdit props={props} isCat={false} /> )} />

        {/* <Route exact path="/admin/categories/createeditcategory" component={CategoryIngredientCreateEdit} />
        <Route exact path="/admin/categories/createeditcategory" component={CategoryIngredientCreateEdit} />
        <Route exact path="/admin/categories/createeditcategory" component={CategoryIngredientCreateEdit} />
        <Route exact path="/admin/ingredients/createeditingredient" component={CategoryIngredientCreateEdit} />
        <Route exact path="/admin/ingredients/createeditingredient" component={CategoryIngredientCreateEdit} />
        <Route exact path="/admin/ingredients/createeditingredient" component={CategoryIngredientCreateEdit} /> */}


        <Route exact path="/admin/orders" component={OrdersManagement} />
        <Route exact path="/admin/stores" component={StoresManagement} />
        <Route exact path="/admin/stats" component={StatsScreen} />
        <Route exact path="/admin/edit-product/:id" component={ProductView} />
        <Route exact path="/admin/create-product" component={CreateProduct} />
        <Route exact path="/admin/view-order/:id" component={OrderByIdScreen} />
        <Redirect to='/admin/products' />
      </Switch>
      </div>
    </>
  )
}

export default AdminRoutes;
