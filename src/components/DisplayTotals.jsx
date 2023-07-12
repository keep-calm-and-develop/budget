import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";


const DisplayTotals = ({
    totalExpenses,
    totalIncome,
}) => {
    return (
        <Segment textAlign='center'>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance
                            title='Income'
                            value={totalIncome}
                            color='green'
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance
                            title='Expenses'
                            value={totalExpenses}
                            color='red'
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default DisplayTotals;
