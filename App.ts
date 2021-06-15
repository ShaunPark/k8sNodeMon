import axios from 'axios'

function checkIsAWS():boolean {
    let ret = false;

    axios.get("http://169.254.169.254/latest/meta-data").then(() => {
        ret = true;
    }).catch(()=> {ret = false;})

    return ret;    
}

async function myFunc(isAWS:boolean){
    // sleep for 1 second
    await new Promise(res=>setTimeout(res,1000))
    console.log("Finished myFunc")
    process.nextTick(myFunc)
    // setImmediate(myFunc)
    // setTimeout(myFunc, 0)
}

let isAWS = checkIsAWS()
console.log(isAWS)
myFunc(isAWS) // initial call to myFunc