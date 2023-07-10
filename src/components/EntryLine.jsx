import { Button, Grid, Segment } from "semantic-ui-react";


const EntryLine = ({
    description,
    value,
    isExpense = false,
}) => {
    return (
        <Segment color={isExpense ? 'red' : 'green'}>
            <Grid columns={3} textAlign='right'>
                <Grid.Row>
                    <Grid.Column width={9} textAlign='left'>{description}</Grid.Column>
                    <Grid.Column width={3}>{value}</Grid.Column>
                    <Grid.Column width={4}>
                        <Button.Group>
                            <Button icon='edit'>Edit</Button>
                            <Button icon='trash'>Delete</Button>
                        </Button.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default EntryLine;
