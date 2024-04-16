import HomeFirstCard from "../HomeFirstCard";
import BlogCard from '../BlogCard'

const Home=(props)=>{
    const cardsData=props
    
    
    console.log(cardsData.cardsData)
    return(
        <div>
       <HomeFirstCard/>
       <BlogCard cardsData={cardsData.cardsData}/>
           
        </div>
    )
}
export default Home;