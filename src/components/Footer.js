import Buttoncon from "./Buttoncon";
import Form from "./Form";

function Footer () {
    return(
        <div className="cony">
         <h4>copyright &copy; {new Date().getFullYear()}</h4> 
         <a href= "mailto:csunbabaara@gmail.com">csunbabaara@gmail.com</a> 
         <Form/>
        </div>
        
    );
}
export default Footer;