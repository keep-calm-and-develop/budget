import { Button } from 'semantic-ui-react';

const ButtonSaveOrCancel = ({ onSave, onCancel }) => (
    <Button.Group style={{ marginTop: 20 }}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button.Or />
        <Button onClick={onSave} primary>Add Transaction</Button>
    </Button.Group>
);

export default ButtonSaveOrCancel;
