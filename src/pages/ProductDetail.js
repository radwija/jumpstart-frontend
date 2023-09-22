import React, { useEffect, useState } from "react";
import { CartIcon } from "../assets/SvgIcons";
import Layout from "../components/Layout";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AlertMessage } from "../components/AlertMessage";
import { showProductDetailsApiBySlug } from "../api/public-api";
import { CategoryBadge } from "../components/CategoryBadge";
import useDocumentTitle from "./useDocumentTitle";
import NotFound from "./NotFound";
import { useHistoryState } from "@uidotdev/usehooks";
import { addProductToCartApi } from "../api/user-api";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

const ProductDetail = () => {
  const auth = useAuthUser();
  const role = auth()?.role?.[0]
  const token = auth()?.token
  const isLogin = useIsAuthenticated()
  const isAdmin = isLogin() && role === "ROLE_ADMIN"
  const navigate = useNavigate();
  const [isNotFound, setIsNotFound] = useState(false);

  const [alertMessage, setAlertMessage] = useState(null)
  const handleAddProductToCart = (id) => {
    const cartItemRequest = {
      productId: id,
      quantity: productNumber,
      requestFrom: null
    }
    addProductToCartApi(token, cartItemRequest)
      .then(res => {
        console.log(res)
        setAlertMessage({
          messageType: "success",
          message: res.data.message
        })
        setTimeout(() => {
          setAlertMessage(null)
        }, 3000)
      })
      .catch(error => {
        if (error?.response?.data) {
          // error message from backend
          setAlertMessage(
            {
              messageType: "error",
              message: error?.response?.data.message
            }
          )
        } else if (error) {
          // error message from client
          setAlertMessage(
            {
              messageType: "error",
              message: error.message
            }
          )
        } else {
          setAlertMessage(
            {
              messageType: "error",
              message: "No response from server"
            }
          )
        }
        setTimeout(() => {
          setAlertMessage(null)
        }, 3000)
      })
  }

  const { slug } = useParams();
  const [product, setProduct] = useState({
    productId: 0,
    productName: "",
    description: "",
    price: 0,
    stock: 0,
    weight: 0,
    createdAt: null,
    updatedAt: null,
    category: {
      categoryId: 0,
      categoryName: "",
      categorySlug: ""
    }
  })
  useDocumentTitle(product.productName)
  const [productNumber, setProductNumber] = useState(1)

  const handleProductNumber = (counter) => {
    if (counter === "+") {
      return setProductNumber((prev) => (prev + 1 > product.stock ? prev : prev + 1))
    }
    else {
      setProductNumber((prev) => (prev - 1 === 0 ? 1 : prev - 1))
    }
  }

  const stockValidation = (productNumber <= 0 || productNumber > product.stock) ? true : false

  useEffect(() => {
    showProductDetailsApiBySlug(slug)
      .then(res => {
        setProduct(res.data.result)
      })
      .catch(error => {
        if (typeof error === "string") {
          console.log("Error message: " + error)
        } else {
          if (error.status === 404) {
            setIsNotFound(true)
          }
        }
      })
    window.history.replaceState(null, null)
  }, [slug])

  const location = useLocation();
  const isNewAddedProduct = location?.state?.isNewAddedProduct;
  const messageType = location?.state?.messageType;
  const message = location?.state?.message;

  return (
    <>
      {isNotFound ? (<NotFound />) : (
        <Layout>
          <div className='py-10 sm:flex sm:flex-wrap sm:flex-col gap-y-10 md:grid md:grid-cols-12 px-5 sm:px-5 md:px-36 lg:px-20'>
            <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-4'>
              {/* // TODO: create time alert shown for 2 seconds and then set isNewAddedProduct null */}
              {isNewAddedProduct &&
                <div className="mb-3">
                  <AlertMessage messageType={messageType} message={message} />
                </div>
              }
              <div className="aspect-square border rounded">
                <img src="https://thumbs.dreamstime.com/b/vertical-panorama-country-road-9905521.jpg" alt="product thumbnail" className="object-contain w-full h-full rounded" />
              </div>
            </div>
            <div className='mx-5 sm:col-span-12 md:col-span-12 lg:col-span-5 bg-white'>
              <h1 className="text-xl font-semibold">{product.productName}</h1>
              <div className="text-4xl font-bold">${product.price.toLocaleString("en-US")}</div>

              <hr className="my-3" />

              <h1 className="text-xl font-semibold">Details</h1>
              <div>Weight: {product.weight} kg</div>
              <div>Category: <CategoryBadge categoryName={product.category.categoryName} categoryUrl={product.category?.categorySlug} /></div>

              <hr className="my-3" />

              <h1 className="text-xl font-semibold">Description</h1>
              <p className="paragraph">{product.description}</p>
            </div>
            <div className='fixed bottom-0 left-0 right-0 z-10 lg:static sm:col-span-12 md:col-span-12 lg:col-span-3'>
              <div className="p-5 rounded bg-white border shadow">
                {alertMessage &&
                  <div className="mb-3">
                    <AlertMessage messageType={alertMessage.messageType} message={alertMessage.message} />
                  </div>
                }
                <h1 className="text-xl font-semibold">Order product</h1>
                <div className="mb-3">Stocks: {product.stock}</div>

                <div className="join w-full mb-3">
                  <button type="button" className="btn join-item" onClick={() => handleProductNumber("-")}>-</button>
                  <input
                    type="number"
                    className="join-item mx-2 w-full border text-center"
                    value={productNumber === 0 ? setProductNumber(1) : productNumber}
                    onChange={(e) => setProductNumber(Number(e.target.value))}
                  // onInput={(e) => setProductNumber(Number(e.target.value))}
                  />
                  <button type="button" className="btn join-item" onClick={() => handleProductNumber("+")}>+</button>
                </div>
                <div className="flex justify-between mb-3">
                  <div>Total:</div>
                  <div className="text-xl font-semibold">${(productNumber * product.price).toLocaleString("en-US")}</div>
                </div>
                <button
                  type="button"
                  disabled={stockValidation}
                  className="btn btn-primary w-full"
                  onClick={() => handleAddProductToCart(product.productId)}
                >
                  <CartIcon /> Add to cart
                </button>
              </div>
            </div>
          </div >
        </Layout >
      )}
    </>
  )
}

export default ProductDetail;