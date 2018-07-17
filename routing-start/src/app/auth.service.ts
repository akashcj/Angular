export class AuthService{

    private loggedIn:boolean = false;

    login()
    {
        this.loggedIn = true;
    }

    logout()
    {
        this.loggedIn = false;
    }

    isAuthenticated()
    {
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.loggedIn);
            },800);
        });

        return promise;

    }
}