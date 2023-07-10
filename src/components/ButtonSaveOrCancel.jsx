import { Button } from 'semantic-ui-react';

const ButtonSaveOrCancel = () => (
    <Button.Group style={{ marginTop: 20 }}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary>Add Transaction</Button>
    </Button.Group>
);

export default ButtonSaveOrCancel;
