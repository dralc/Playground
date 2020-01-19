async function doDelay(chuckError?:string) {
    if (chuckError) {
        // 😍Throw an error in an async function to reject the internal promise
        throw new Error(chuckError);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 👎Don't throw an error inside the Promise executor function...
            // just use reject()

            console.log('delayed by 500');
            resolve('resolved');
        }, 500);
    });
}

async function normal() {
    await doDelay();
    return 'normal done'; // 😍 Internal promise is resolved with the data 'normal done'
}

async function forceError() {
    await doDelay('my error'); // Here the internal promise is rejected with 'my error'
    return 'forceError done';
}

normal()
    .then((dat) => {
        dat
    });

forceError()
    .then((dat) => {
        dat // it didn't resolve
    })
    .catch((er) => {
        er
    });
