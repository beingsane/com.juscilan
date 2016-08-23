<template>
    <footer id="sobre" class="page-footer teal">
        <div class="container">
            <div class="row">
                <div>
                    <h5 class="white-text">Mais sobre mim...</h5>
                    <p class="grey-text text-lighten-4">
                        Meu nome é Juscilan Moreto, sou graduado em Análise e Desenvolvimento de 
                        Sistemas, ajudei a desenvolver e implantar softwares em grandes empresas como Carrefour, 
                        Alpargatas, Bematech, Leroy Merlin e PRODESP, possuo vasta experiência em análise, modelagem, desenvolvimento dos mais variados tipos de sistemas. 
                        Focando no desenvolvimento de sistemas para Web/Intranet como Asp.NET MVC, C#, SqlServer e Oracle 
                        e também tecnologias JavaScript (MongoDB, Express.js, Vue.js e Node.js).
                    </p>
                </div> 
            </div>
        </div>
        <a href="#nav" class="scrollSuave">
        <div class="footer-copyright">
            <div class="container">
                <span class="grey-text text-lighten-4 left" >&copy; 2016 - juscilan.com</span>
                <span class="grey-text text-lighten-4 right" >Versão {{versao}} - <span>{{counter.visitors}}</span>
            </div>
            </a>
        </div>
    </footer>
</template>

<script>

import {scroll} from './common/jm-scroll'

export default {

    name:'footer-component',

    data () {
    return {
        counter: {}
        , versao:'3.0.1.2'
        }
    },
    ready () {

        scroll("scrollSuave")

        this.$http.get('/counter').then((response) => {
            let objRetorno = JSON.parse(response.body)
            objRetorno.visitors = ('00000' +  objRetorno.visitors).substring(2,8)
            this.$set('counter', objRetorno);
            
        }, (response) => {
            window.console.log('Erro ao realizar operação.');
        });
    }
}
</script>