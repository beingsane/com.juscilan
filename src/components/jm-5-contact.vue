<template>
    <div id="contato">
        <br><br> 
        <div  class="section" >
            <div class="row">
                <div class="col s12 center" >
                    <h5>Formulário para contato:</h5>
                    <form class="col s12" >
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name"  type="text" class="validate" v-model="dados.name">
                            <label for="first_name">Nome</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate" v-model="dados.email">
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="mensagem" type="text" class="validate" v-model="dados.mensagem">
                            <label for="first_name">Mensagem</label>
                        </div>
                    </div>
                    <div class="row">
                        <h6><a class="black-text" href="mailto:juscilan@gmail.com">Ou pelo email: juscilan@gmail.com</a></h6>
                    </div>
                    <div class="row"> 
                        <button @click="enviar($event)" class="btn waves-effect waves-light" 
                            name="action">Enviar<i class="material-icons right">send</i>
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {scroll} from './common/jm-scroll'

export default {

    vuex:{
        actions:{
            executa : function ({dispatch}) {
                let data = JSON.parse(JSON.stringify(this.$data));

                dispatch('ATUALIZA_MODAL',data)
                jQuery('#modal1').openModal();

                setTimeout(function(){ 
                    jQuery('#modal1').closeModal();
                }, 1500);
            },
            loader : function ({dispatch},data) {
                
                dispatch('UPDATE_LOADER',data)
            }            
        },
   },
    ready () {
        scroll("scrollSuave")
    },   
    data () {
        return {
                titulo: ''
                ,mensagem :''
                ,tipo :'WARNING'
                ,inputvisible:false
                ,senha:''
                ,dados:{
                    name: ''
                    ,email: ''
                    ,mensagem: ''
                    }

            }
    },
    methods:{

        enviar(event){
        
            event.preventDefault()

            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            if(this.$data.dados.name === "" || this.$data.dados.email === "" || this.$data.dados.mensagem === ""){
                
                this.$data.titulo = 'Atenção'
                this.$data.mensagem ='Todos os campos são obrigatórios ;)'
                this.$data.btnokvisible = false

                this.executa()

                return
            }

            var er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
            if(!er.exec(this.$data.dados.email ))
	        {
                this.$data.titulo   =   'Atenção'
                this.$data.mensagem =   'Formato de Email inválido :('
                this.$data.btnokvisible = false

                this.executa()                

                return        
            }

        
            this.loader({visible:true})

            var dados = 'dados=' + JSON.stringify(this.$data.dados);

            this.$http.post('/email',dados,config).then((response) => {


                this.$data.titulo   =   'Mensagem enviada!'
                this.$data.mensagem =   'Logo, logo entro em contato :)'
                this.$data.btnokvisible = false                

                this.executa()
                this.$data.dados = {}
                
                this.loader({visible:false})
                
            }, (response) => {

                this.$data.titulo   =   'Erro ao enviar'
                this.$data.mensagem =   'Por gentileza tente novamente :('
                this.$data.btnokvisible = false                

                this.executa()

                this.loader({visible:false})
            });      
        }
    }
}
</script>

            