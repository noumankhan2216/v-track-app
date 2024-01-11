export class User {
    constructor(
        public email: string,
        public id: number,
        public _token: string,
        public _tokenExpirationDate: Date ,
        public type: string
    ) {}

    get token(){
        if( !this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null;
        }
        return this._token;
    }
}