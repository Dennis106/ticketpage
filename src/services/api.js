const wrapRequest = func => {
    return async (...args) => {
        const res = await func(...args);
        if (
            res &&
            res.status &&
            res.status !== 200 &&
            res.status !== 201 &&
            res.status !== 204
        ) {
            throw res;
        } else {
            return res;
        }
    };
};

const getTickets = wrapRequest(async params => {
    console.log(params)
    return fetch("https://test.com/ticketlist", {
        method: 'POST',
        body: JSON.stringify(params)
    }).then(response => response.json())
});

export { getTickets };