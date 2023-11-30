import './App.css';
import Product from './product';
import Nav from './nav';
import {useState} from "react"

const FIRST_PRODUCT_LIST=[{
  poster:"https://www.urbanmonkey.com/cdn/shop/products/trucker-monkey-001-left_1024x.jpg?v=1652859969",
  name:"Monkey Hat",
  price:"$ 7.0",
  rating:"⭐⭐⭐⭐",

},
{
  poster:"https://rukminim2.flixcart.com/image/550/650/xif0q/t-shirt/r/v/k/m-ausk0165-ausk-original-imaghu9fbhcgf2za.jpeg?q=90&crop=false",
  name:"H&M t-shirt",
  price:"$ 9.0",
  rating:"⭐⭐⭐",
 
},
{
  poster:"https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt.jpg",
  name:"jockey t-shirt",
  price:"$ 6.0",
  rating:"⭐⭐⭐⭐⭐",
  button:"Add to Cart",
},
{
  poster:"https://assets.ajio.com/medias/sys_master/root/20230624/y24W/6496fabeeebac147fc042957/-473Wx593H-465543048-navy-MODEL.jpg",
  name:"Red tape t-shirt",
  price:"$ 8.0",
  rating:"⭐⭐⭐⭐",
 
},
{
  poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2A0OqdFXdKZKuQlMdqUodoWHrALVF62yImA&usqp=CAU",
  name:"Cap",
  price:"$ 6.0",
  rating:"⭐⭐⭐⭐",
  
},
{
  poster:"https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/f/r/b/free-01-rahul-original-imagr92rqfbq6pxf.jpeg?q=70",
  name:"Red Tape Trouser",
  price:"$ 10.0",
  rating:"⭐⭐⭐⭐",

},
{
  poster:"https://5.imimg.com/data5/LN/PI/JS/SELLER-3749501/corparate-trouser.jpg",
  name:"H&M Trouser",
  price:"$ 12.0",
  rating:"⭐⭐⭐⭐⭐",
 
},
{
  poster:"https://cdn.shopify.com/s/files/1/0322/6841/9208/products/Bared_Footwear_Seriema_EcruKhakiLeather_230412_04.jpg?v=1687243474",
  name:"Hrx Sneakers",
  price:"$ 11.0",
  rating:"⭐⭐⭐⭐",
  
}
]
function App() {
  const productList= FIRST_PRODUCT_LIST;
  const [cart,setCart]=useState(0)
  
  return (
    <div>
    <Nav cart={cart} setCart={setCart}/>
      <h1 className='heading'>Shopaholic's</h1>
      <div className="productList">
      {productList.map((pd) => (
        <Product product={pd} cart={cart} setCart={setCart}/>
      ))}
    </div>
    </div>
  );
}

export default App;
