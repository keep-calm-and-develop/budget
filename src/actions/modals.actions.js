
const types = {
    OPEN_EDIT_MODAL: 'OPEN_EDIT_MODAL',
    CLOSE_EDIT_MODAL: 'CLOSE_EDIT_MODAL'
};

export default types;

export const openEditModalAction = (id) => {
    return ({ type: types.OPEN_EDIT_MODAL, payload: id });
};

export const closeEditModalAction = () => {
    return ({ type: types.CLOSE_EDIT_MODAL });
};