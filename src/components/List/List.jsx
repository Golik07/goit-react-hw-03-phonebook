
import Item from "./Item/Item"
import PropTypes from "prop-types"





const List = ({contacts,handleDelete}) => {
    return (
        <ul>
            {contacts.map(({id,number,name}) => (
                <Item 
                id={id}
                key={id}
                name={name}
                number={number}
                handleDelete={handleDelete}
                ></Item>
            ))}
        </ul>
    )
}


List.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            number:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
        })
    ),
    handleDelete: PropTypes.func.isRequired,
}

export default List