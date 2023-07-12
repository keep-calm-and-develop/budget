import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "semantic-ui-react";
import { updateEntryAction } from "../actions/entries.actions";
import EntryForm from "./EntryForm";
import { closeEditModalAction } from "../actions/modals.actions";
import useEntryDetails from "../hooks/useEntryDetails";


const EditEntryModal = () => {
    const { entry } = useEntryDetails();
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

    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(closeEditModalAction());
    };

    const onSave = () => {
        dispatch(updateEntryAction({ description, value, isExpense, id: entry.id }));
        onClose();
    };

    return (
        <Modal open={!!entry}>
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
                <Button onClick={onSave} primary>Save</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default EditEntryModal;
