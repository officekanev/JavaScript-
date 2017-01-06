// function ticket(input, sortingTarget) {
//
//     class Ticket {
//         constructor(destination, price, status){
//             this.destination = destination;
//             this.price = price;
//             this.status = status;
//         }
//     }
//
//     let store = [];
//
//     for(let line of input){
//         let[destinationName, price, status] = line.split("|");
//         let createTicket = new Ticket(destinationName, price, status);
//         store.push(createTicket);
//     }
//
//     if(sortingTarget == 'destination'){
//        store.sort(function (a,b) {
//           if(a.destination < b.destination) {
//               return -1;
//           }
//           if(a.destination > b.destination) {
//               return 1;
//           }
//            return 0;
//        });
//     }else if(sortingTarget == 'status'){
//         store.sort(function (a,b) {
//             if(a.status < b.status)
//                 return -1;
//             if(a.status > b.status)
//                 return 1;
//
//             return 0;
//         });
//     }else if(sortingTarget == 'price'){
//         store.sort(function (a,b) {
//             if(a.price < b.price)
//                 return -1;
//             if(a.price > b.price)
//                 return 1;
//
//             return 0;
//         });
//     }
//
//     return store;
// }

function ticket(arr, t) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticket = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split('|');
        let destination = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        let tt = new Ticket(destination, price, status);
        ticket.push(tt);
    }

    if(t == 'destination'){
        ticket.sort(function(a,b) {
            if (a.destination < b.destination ) //sort string ascending
                return -1;
            if (a.destination > b.destination)
                return 1;
            return 0
        });
    }else if(t == 'price'){
        ticket.sort(function(a,b) {
            if (a.price < b.price ) //sort string ascending
                return -1;
            if (a.price > b.price)
                return 1;
            return 0
        });
    }else if(t == 'status'){
        ticket.sort(function(a,b) {
            if (a.status < b.status ) //sort string ascending
                return -1;
            if (a.status > b.status)
                return 1;
            return 0
        });
    }

    return ticket;
}

console.log(ticket(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));

console.log();

console.log(ticket(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));