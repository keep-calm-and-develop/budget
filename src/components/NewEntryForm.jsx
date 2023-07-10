import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => (
    <Form unstackable>
        <Form.Group>
            <Form.Input icon='tags' width={12} label='Description'></Form.Input>
            <Form.Input icon='rupee' iconPosition='left' width={4} label='Amount'></Form.Input>
        </Form.Group>
        <ButtonSaveOrCancel />
    </Form>
);

export default NewEntryForm;
