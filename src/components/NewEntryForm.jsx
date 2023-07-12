import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import { addEntryAction } from '../actions/entries.actions';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

const NewEntryForm = () => {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);
    const [isExpense, setIsExpense] = useState(true);
    const dispatch = useDispatch();

    const onSave = () => {
        dispatch(addEntryAction({ description, value, isExpense, id: uuid() }));
        onCancel();
    };
    
    const onCancel = () => {
        setDescription('');
        setValue('');
    };
    return (
        <Form unstackable>
            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveOrCancel onSave={onSave} onCancel={onCancel} />
        </Form>
    );
};

export default NewEntryForm;
