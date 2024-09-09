 import { Card} from "react-bootstrap"
import { BsTicket } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5"
import { Link } from "react-router-dom";
import "../../pages/style.scss"
const CardProductComponent = (props) => {
    const {data,addProduct} = props

    const  formatNumber = (number) =>{
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return(
        
        <Card className="cardProduct" style={{ width: '100%' ,marginBottom:"10px",padding:"10px"}}>
            <Card.Img variant="top" src={data?.img} />
            <Card.Body>
                <span>
                    {data?.time}
                </span>
                <Link to="/productdetail" state={{ data }} className="crop-text2" href="">
                    {data?.content}       
                </Link>
                <span >
                code:
                </span>
                <Card.Text className="crop-text2">
                    <BsTicket /> {data?.ticket}
                </Card.Text>
                <Card.Text className="crop-text2">
                Departure Point: <span  style={{fontWeight:"600"}}>{data?.address}</span>
                </Card.Text>
               
                <div style={{display:"flex",justifyContent:"space-between"}}>
                   
                    <button className="buttonCommonProduct detailProduct"><Link to="/productdetail" state={{ data }} style={{fontSize: "15px", color:"#2d4271"}}>Detail</Link></button>
                </div>
            
            </Card.Body>
            
        </Card>
        
    )
}
export default CardProductComponent