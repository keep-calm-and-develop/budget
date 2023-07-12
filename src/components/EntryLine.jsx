import { useDispatch } from "react-redux";
import { Button, Grid, Segment } from "semantic-ui-react";
import { removeEntryAction } from "../actions/entries.actions";
import { openEditModalAction } from "../actions/modals.actions";

const EntryLine = ({
    entry: {
        id,
        description,
        value,
        isExpense = false,
    },
}) => {
    const dispatch = useDispatch();
    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={9} textAlign='left'>{description}</Grid.Column>
                        <Grid.Column width={3}>{value}</Grid.Column>
                        <Grid.Column width={4}>
                            <Button.Group>
                                <Button onClick={() => dispatch(openEditModalAction(id))}>Edit</Button>
                                <Button onClick={() => dispatch(removeEntryAction(id))}>Remove</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            
        </>
    );
};

export default EntryLine;
