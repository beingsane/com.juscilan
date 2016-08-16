<template>
    <footer id="qq" class="page-footer teal">
        <div class="container">
            <div class="row">
                
                <div class="col  s12">
                <h5 id="sobre" class="white-text">Mais sobre mim...</h5>
                <p class="grey-text text-lighten-4">
                    Meu nome é Juscilan Moreto, sou graduado em Análise e desenvolvimento de 
                    sistemas, ajudei a desenvolver e implantar softwares em grandes empresas como Carrefour, 
                    Alpargatas, Bematech, Leroy Merlin e PRODESP, possuo vasta experiência em testes, 
                    análise, modelagem, desenvolvimento dos mais variados tipos de sistemas. 
                    Focando no desenvolvimento de sistemas para Web/Intranet como Asp.NET MVC, C#, SqlServer e Oracle 
                    e também tecnologias Full-Stack Javascript (MongoDB, Express.js, Vue.js e Node.js).
                </p>
            </div> 
        </div>
        <div>
            <div class="center"><a class="white-text scrollSuave" href="#nav">Voltar ao topo</a></div>
            <br>
            <br>
            <div class="center"><a class="white-text scrollSuave" >&copy; 2016 - juscilan.com</a></div>
            
        </div>
        <div class="footer-copyright">
            <div class="container">
                <p class="center header col s12 light">Versão 3.0.0.0 - <span>{{counter.visitors}}</span> </p>
            </div>
        </div>
        
    </footer>
</template>

<script>

import {scroll} from './jm-9-scrool'

export default {

    name:'footer-component',

    data () {
    return {
        counter: {}
        }
    },
    ready () {

        scroll("scrollSuave")

        this.$http.get('/counter').then((response) => {
            let objRetorno = JSON.parse(response.body)
            objRetorno.visitors = '000' +  objRetorno.visitors
            this.$set('counter', objRetorno);
            
        }, (response) => {
            window.console.log('Erro ao realizar operação.');
        });
    }
}
</script>