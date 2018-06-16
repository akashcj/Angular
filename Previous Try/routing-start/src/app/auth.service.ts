
export class AuthService{
    loggedin = false;
    
    login()
    {
        this.loggedin = true;
    }

    logout()
    {
        this.loggedin = false;
    }

    isAuthenticated(){
        // waits some time before replying
        const promise = new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    resolve(this.loggedin);
                },800);
            }
        );
        return promise;
    }
}