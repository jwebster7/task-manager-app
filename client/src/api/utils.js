export const isNullOrUndefined = (field) => {
    return field === undefined || field === null || field === ""  ? true : false;
};