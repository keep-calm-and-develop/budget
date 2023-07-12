import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries, openEntryEditModal }) => {
    return (
        <Container>
            {
                entries.map((entry) => (
                    <EntryLine
                        key={entry.id}
                        entry={entry}
                        openEntryEditModal={openEntryEditModal}
                    />
                ))
            }
        </Container>
    );
};

export default EntryLines;
