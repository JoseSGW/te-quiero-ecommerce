import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoadingOrderById,
  updateOrderById,
} from "../../../actions/orders";
import {
  Container,
  DetailGrid,
  ProductsContainer,
  StatusModify,
} from "./OrderByIdScreen.styles";
import {
  DeleteModal,
  Modal,
  StatusSelectors,
} from "../ProductsManagement/ProductsManagement.styles";
import { useState } from "react";

import axios from "axios";

import { removeAll } from "../../../actions/shoppingActions";

const OrderByIdScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { orderById } = useSelector((state) => state.orders);
  const { orderByUserId } = useSelector((state) => state.orders);
  const { loading } = useSelector((state) => state.loading);
  const [statusSelect, setStatusSelect] = useState("null");
  const [reload, setReload] = useState("");

  useEffect(() => {
    dispatch(startLoadingOrderById(id));
  }, [reload]);

  let idOrder;
  const editButton = (idO) => {
    document.querySelector("#statusModal").classList.add("active");
    idOrder = idO;
  };

  const CancelButton = () => {
    document.querySelector("#statusModal").classList.remove("active");
  };

  const updateStatus = async () => {
    const body = { status: statusSelect };
    await dispatch(removeAll());
    try {
      await dispatch(updateOrderById(orderById.id, body));

      document.querySelector("#statusModal").classList.remove("active");

      setReload(body.status);
    } catch (error) {
      console.log(error);
    }
  };

  const statusSelector = () => {
    const st = document.getElementById("statusSelector");
    const stSelect = st.options[st.selectedIndex].value;
    setStatusSelect(stSelect);
  };

  const dateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  };

  const total =
    orderById.products &&
    orderById.products.reduce(
      (acc, el) => acc + el.price * el.order_details.quantity,
      0
    );

  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <DetailGrid>
            <div>
              <h2>Detalle de la orden: ({orderById.id})</h2>
              <h3>FECHA DE CREACIÓN:</h3>
              <p>
                {new Date(orderById.createdAt).toLocaleDateString(
                  "es-ES",
                  dateOptions
                )}
              </p>
              <h3>COMPRADOR:</h3>
              <p>
                Usuario: {orderById.user?.username} ({orderById.user?.id})
              </p>
              <p>Email: {orderById.user?.email}</p>
            </div>
            <div>
              <StatusModify>
                {orderById.status === "InProcess" && (
                  <h2>
                    Estado: <span>Procesando</span>
                  </h2>
                )}
                {orderById.status === "Open" && (
                  <h2>
                    Estado: <span>Creada</span>
                  </h2>
                )}
                {orderById.status === "Cancelled" && (
                  <h2>
                    Estado: <span>Cancelada</span>
                  </h2>
                )}
                {orderById.status === "Complete" && (
                  <h2>
                    Estado: <span>Completada</span>
                  </h2>
                )}
                {(orderById.status == "InProcess" ||
                  orderById.status == "Open") && (
                  <button onClick={() => editButton(orderById.id)}>
                    actualizar estado
                  </button>
                )}
              </StatusModify>
              <h3 className="h3S">TOTAL COBRADO:</h3>
              <p>{total} $</p>
            </div>
          </DetailGrid>
          <h2>Productos:</h2>
          {orderById.products?.length !== 0 ? (
            orderById.products?.map((product) => (
              <ProductsContainer key={product.id}>
                <div>
                  <h3>PRODUCTO: ({product.id})</h3>
                  <p>{product.name}</p>
                  <Link to={`/product/detail/${product.id}`}>Ver producto</Link>
                </div>
                <div>
                  <div>
                    <h3>PRECIO:</h3>
                    <p>$ {product.price}</p>
                  </div>
                  <div>
                    <h3>CANTIDAD:</h3>
                    <p>{product.order_details.quantity} unidades</p>
                  </div>
                </div>
              </ProductsContainer>
            ))
          ) : (
            <h1>No hay productos</h1>
          )}
        </>
      )}
      <DeleteModal id="statusModal">
        <Modal status>
          {orderById.status == "InProcess" && (
            <>
              <StatusSelectors>
                <div>
                  <h3>Estado actual:</h3>
                  <h4>Procesando</h4>
                </div>
                <div>
                  <h3>Nuevo estado:</h3>
                  <select
                    id="statusSelector"
                    name="statusSelector"
                    onChange={statusSelector}
                  >
                    <option value="null" selected>
                      ...
                    </option>
                    <option value="Cancelled">Cancelada</option>
                    <option value="Complete">Completada</option>
                  </select>
                </div>
                <p>"Esta acción no tiene marcha atras"</p>
              </StatusSelectors>
            </>
          )}
          {orderById.status == "Open" && (
            <>
              <StatusSelectors>
                <div>
                  <h3>Estado actual:</h3>
                  <h4>Creada</h4>
                </div>
                <div>
                  <h3>Nuevo estado:</h3>
                  <select
                    id="statusSelector"
                    name="statusSelector"
                    onChange={statusSelector}
                  >
                    <option value="null" selected>
                      ...
                    </option>
                    <option value="InProcess">Procesando</option>
                    <option value="Cancelled">Cancelada</option>
                  </select>
                </div>
                <p>"Esta acción no tiene marcha atras"</p>
              </StatusSelectors>
            </>
          )}
          <button
            disabled={statusSelect === "null" ? true : false}
            onClick={updateStatus}
          >
            Actualizar Estado
          </button>
          <button onClick={CancelButton}>Cancelar</button>
        </Modal>
      </DeleteModal>
    </Container>
  );
};

export default OrderByIdScreen;
