import { Container, Grid, Header, Icon, Segment, Statistic, Form, Button } from 'semantic-ui-react';

function App() {
    return (
        <Container>
            <Header as="h1">Budget</Header>
            <Statistic size="small">
                <Statistic.Label>Your Balance:</Statistic.Label>
                <Statistic.Value>2500.50</Statistic.Value>
            </Statistic>
            <Segment textAlign='center'>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Statistic size="tiny" color='green'>
                                <Statistic.Label style={{ textAlign: 'left' }}>Income:</Statistic.Label>
                                <Statistic.Value>1000</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                        <Grid.Column>
                            <Statistic size="tiny" color='red'>
                                <Statistic.Label style={{ textAlign: 'left' }}>Expenses:</Statistic.Label>
                                <Statistic.Value>600</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Header as='h3'>History</Header>
            <Segment color="red">
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={9} textAlign='left'>Zomato</Grid.Column>
                        <Grid.Column width={3}>100</Grid.Column>
                        <Grid.Column width={4}>
                            <Button.Group>
                                <Button icon='edit'>Edit</Button>
                                <Button icon='trash'>Delete</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
                    
            <Segment color="red">
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={9} textAlign='left'>Groceries</Grid.Column>
                        <Grid.Column width={3}>800</Grid.Column>
                        <Grid.Column width={4}>
                            <Button.Group>
                                <Button icon='edit'>Edit</Button>
                                <Button icon='trash'>Delete</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
                    
            <Segment color="green">
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={9} textAlign='left'>Salary</Grid.Column>
                        <Grid.Column width={3}>3000</Grid.Column>
                        <Grid.Column width={4}>
                            <Button.Group>
                                <Button icon='edit'>Edit</Button>
                                <Button icon='trash'>Delete</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
                    
            <Segment color="red">
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={9} textAlign='left'>Cab</Grid.Column>
                        <Grid.Column width={3}>250</Grid.Column>
                        <Grid.Column width={4}>
                            <Button.Group>
                                <Button icon='edit'>Edit</Button>
                                <Button icon='trash'>Delete</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Header as='h3'>Add new transaction</Header>
            <Form unstackable>
                <Form.Group>
                    <Form.Input icon='tags' width={12} label='Description'></Form.Input>
                    <Form.Input icon='rupee' iconPosition='left' width={4} label='Amount'></Form.Input>
                </Form.Group>
                <Button.Group style={{ marginTop: 20 }}>
                    <Button>Cancel</Button>
                    <Button.Or />
                    <Button primary>Add Transaction</Button>
                </Button.Group>
            </Form>
        </Container>
    );
}

export default App;
