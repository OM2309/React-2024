import Products from "../components/Products"


const Home = () => {
  return (
    <div>
        <h1 className="font-bold text-xl px-16 uppercase py-4">Welcome to the Redux toolkit store</h1>
        <h1 className="font-semibold px-16 pb-4 uppercase ">Products</h1>
        <Products/>
    </div>
  )
}

export default Home