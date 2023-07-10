import { useEffect, useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";


const EditEntryModal = ({ entry, isOpen, onClose, onSave }) => {
    const [description, setDescription] = useState(entry?.description ?? '');
    const [value, setValue] = useState(entry?.value ?? 0);
    const [isExpense, setIsExpense] = useState(entry?.isExpense ?? true);

    useEffect(() => {
        if (entry) {
            setDescription(entry.description);
            setValue(entry.value);
            setIsExpense(entry.isExpense);
        }
    }, [entry]);

    return (
        <Modal open={isOpen}>
            <Modal.Header>
                Edit Entry
            </Modal.Header>
            <Modal.Content>
                <Form unstackable>
                    <EntryForm
                        description={description}
                        value={value}
                        isExpense={isExpense}
                        setDescription={setDescription}
                        setValue={setValue}
                        setIsExpense={setIsExpense}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={onClose}>Close</Button>
                <Button onClick={() => {
                    onSave({ description, value, isExpense, id: entry.id });
                    onClose();
                }} primary>Save</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default EditEntryModal;
