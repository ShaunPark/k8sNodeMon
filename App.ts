import axios from 'axios'

async function checkIsAWS():Promise<Boolean> {
    let ret = false;

    await axios.get("http://169.254.169.254/latest/meta-data", { timeout: 1000}).then(() => {
        console.log("AWS");
        ret = true;
    }).catch(()=> {
        console.log("Not AWS");
        ret = false;
    })

    return ret;    
}

async function loopFunc(isAWS:boolean){
    // sleep for 1 second
    await new Promise(res=>setTimeout(res,1000))
    console.log("Finished myFunc")
    process.nextTick(loopFunc)
    // setImmediate(myFunc)
    // setTimeout(myFunc, 0)
}

async function myFunc() {
    let isAWS = await checkIsAWS();
    console.log(isAWS)
    loopFunc(isAWS.valueOf())
}

myFunc() // initial call to myFunc