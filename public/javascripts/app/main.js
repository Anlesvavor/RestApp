const app = new Vue({
    el:'#app',
    data:{
        //objetos que contengan informacion de la App (modelos)
        users:[

        ],
        user:{
            name: 'Jesus',
            lastName: 'Saenz'
        },
        operators:{
            n1: 0,
            n2: 0,
            res: 0
        }
    },
    methods:{
        //Todas las funciones  comunes de la app
        sum: function (event){
            this.operators.res = this.operators.n1 + this.operators.n2;
        }
    },
    computed:{
        //contiene funciones que podr'an ser desplegales en las vistas solo si regresan el resultado
        result(){
            return this.operators.n1 + this.operators.n2;
        }
    },
    created() {
        //Aqui se ejecuta c'odigo al inicial la aplicacion
        fetch('/users/get/')
            .then(response => response.json())
            .then(json => {
                this.users = json.data.docs
            });
    }
});