import { Button, Grid, Segment } from "semantic-ui-react";


const EntryLine = ({
    entry: {
        id,
        description,
        value,
        isExpense = false,
    },
    deleteEntry,
    openEntryEditModal,
}) => {
    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={9} textAlign='left'>{description}</Grid.Column>
                        <Grid.Column width={3}>{value}</Grid.Column>
                        <Grid.Column width={4}>
                            <Button.Group>
                                <Button onClick={() => openEntryEditModal(id)}>Edit</Button>
                                <Button onClick={() => deleteEntry(id)}>Delete</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            
        </>
    );
};

export default EntryLine;
