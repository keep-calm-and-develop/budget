import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";
import { useSelector } from "react-redux";

const EntryLines = () => {
    const entries = useSelector((state) => state.entries);
    return (
        <Container>
            {
                entries.map((entry) => (
                    <EntryLine
                        key={entry.id}
                        entry={entry}
                    />
                ))
            }
        </Container>
    );
};

export default EntryLines;
