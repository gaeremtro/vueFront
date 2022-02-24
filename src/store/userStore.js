import { defineStore } from "pinia";
import { toHandlers } from "vue";
let users = [
    {name:'gabriel',
    surname:'penalva',
    email:'gabripenalva@gmail.com',
    pass: '123456'}
]
const useStore = defineStore("userStore", {
    state: () => {
        return {
            name:'',
            email:'',
            surname:'',
            isAdmin: false,
            isLogged: false,
            isOpenLogin:false,
            isOpenRegister:false,
        };
    },
    actions: {

        close(){
            this.isOpenLogin = false;
            this.isOpenRegister = false;
        },
        openLogin() {
            this.isOpenLogin = true;
            this.isOpenRegister = false;
        },
        openRegister(){
            
            this.isOpenLogin = false;
            this.isOpenRegister = true;
        },

        loggin(email,pass) {
            let userFound = users.filter((user)=> user.email === email && user.pass === pass);
            if ( !this.isLogged && userFound.length !== 0 ){
                this.email = email;
                this.surname = userFound.surname;
                this.name = userFound.name;
                this.isLogged = true;
                if (email === 'gabripenalva@gmail.com')
                    this.isAdmin = true;
                this.close(); // closing the  popup
            }
            else {
                alert ('this user isnt registered yet')
            }
        },
        register(name, surname, email, password){
            if(!users.some(user=>user.email === email)){
                this.name = name;
                this.email = email;
                this.surname = surname;
                this.isLogged = true;
                this.visible = false;
                users.push({name,email,surname,pass:password})
                this.close(); // closing the  popup
            }else alert('this user is already registered');
        },

        toggleAdmin() {
            this.isAdmin = !this.isAdmin;
        },

        loggout() {
            if (this.isLogged){
                this.name='';
                this.email='';
                this.surname='';
                this.isLogged = false;
                this.isAdmin=false;
            }else {
                alert('there are no user to logout');
            }
        },
//cambiar a getters
        getUserInfo(){
            if (this.isLogged){
                return {name:this.name, surname:this.surname, email:this.email};
            }
        },

        
         //solo a modo de test, con los metodos existentes no deberia ser necesario
        getProperty(key) {
            return this[key];
        },
       
        setProperty(key, value) {
            this[key] = value;
        },
        //-----------------------------------------------------------------
      
    },
    getters: {
        getAll(state) {
            return state
        },
        getIsAdmin(state){
            return state.isAdmin
        },
        getIsLogged(state){
            return state.isLogged
        }
    }
});

export default useStore;
