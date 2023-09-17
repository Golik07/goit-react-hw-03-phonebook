import {Li,Button} from "./Item.styled"
import PropTypes from "prop-types"




const Item = ({name,number,id,handleDelete}) => {
return (
    <Li>
        <p>{name}</p>
        <p>{number}</p>
        <Button onClick={()=> handleDelete(id)}type="button">Delete</Button>
    </Li>
    );
}


Item.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
}


export default Item 