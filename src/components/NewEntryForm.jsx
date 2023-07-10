import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

const NewEntryForm = ({ addEntry }) => {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState(0);
    const [isExpense, setIsExpense] = useState(true);

    const onSave = () => {
        addEntry({ description, value, isExpense });
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
