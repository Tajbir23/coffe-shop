import FollowInstagram from "./productBodyComponents/FollowInstagram"
import PopularProducts from "./productBodyComponents/PopularProducts"


const ProductBody = () => {
  return (
    <div id="product">
        <PopularProducts />
        <FollowInstagram />
    </div>
  )
}

export default ProductBody