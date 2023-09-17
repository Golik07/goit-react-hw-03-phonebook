import { Form,Section,Label,Input } from "./Filter.styled";
import PropTypes from "prop-types"


const FilterContact = ({value,onChange}) =>  {
        return(
            <Section>
                <Form>
                <Label>Find contact by name</Label>
                <Input
                type="text"
                name="name"
                value={value}
                onChange={onChange}
                required
                />
                </Form>
            </Section>
        )
    
}


FilterContact.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}


export default FilterContact;