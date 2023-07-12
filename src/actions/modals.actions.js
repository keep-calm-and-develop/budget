
export const openEditModalAction = (id) => {
    return ({ type: 'OPEN_EDIT_MODAL', payload: id });
};

export const closeEditModalAction = () => {
    return ({ type: 'CLOSE_EDIT_MODAL' });
};