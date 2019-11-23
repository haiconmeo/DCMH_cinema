export const datve = (rapchieu,phimchieu,giochieu) => {
    return {
        type: "ADD_BILL",
        data :[rapchieu,phimchieu,giochieu]
    };
}