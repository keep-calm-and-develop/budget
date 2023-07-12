import { useSelector } from "react-redux";

const useEntryDetails = () => {
    const entries = useSelector((state) => state.entries);
    const editEntryID = useSelector((state) => state.modals.editEntryID);
    return {
        entry: entries.find(entry => entry.id === editEntryID),
    };
};

export default useEntryDetails;
