import { Checkbox, Form, Segment } from "semantic-ui-react";

const EntryForm = ({
    description, setDescription,
    value, setValue,
    isExpense, setIsExpense,
}) => {
    return (
        <>
            <Form.Group>
                <Form.Input
                    icon='tags'
                    width={12}
                    label='Description'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    icon='rupee'
                    iconPosition='left'
                    width={4}
                    label='Amount'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox
                    label='Expense?'
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}
                    toggle
                />
            </Segment>
        </>
    );
};

export default EntryForm;
