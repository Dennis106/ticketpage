import ticketData from '../ticket.json'

export function configureFakeAPI() {
    let realFetch = window.fetch;
    window.fetch = (url, opts) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                if (url.endsWith('/ticketlist') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);
                    let filteredTickets = ticketData.filter(ticket => {
                        return ticket.title.toLowerCase().includes(params.search.toLowerCase());
                    });
                    resolve({ ok: true, json: () => filteredTickets });
                    return;
                }

                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}
