import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries, deleteEntry, openEntryEditModal }) => {
    return (
        <Container>
            {
                entries.map((entry) => (
                    <EntryLine
                        key={entry.id}
                        entry={entry}
                        deleteEntry={deleteEntry}
                        openEntryEditModal={openEntryEditModal}
                    />
                ))
            }
        </Container>
    );
};

export default EntryLines;
