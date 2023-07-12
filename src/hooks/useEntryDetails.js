import { useRef, useState } from "react";
import { useSelector } from "react-redux";

const useEntryDetails = () => {
    const entries = useSelector((state) => state.entries);
    const [isOpen, setIsOpen] = useState(false);
    const currentEntry = useRef(null);

    const openEntryEditModal = (id) => {
        currentEntry.current = entries.find(entry => entry.id === id);
        setIsOpen(true);
    };

    const closeModal = () => {
        currentEntry.current = null;
        setIsOpen(false);
    };

    return {
        isOpen,
        currentEntry: currentEntry.current,
        openEntryEditModal,
        closeModal,
    };
};

export default useEntryDetails;
