import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";
import { useSelector } from "react-redux";

const EntryLines = ({ openEntryEditModal }) => {
    const entries = useSelector((state) => state.entries);
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
