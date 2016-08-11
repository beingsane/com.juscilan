<template>
    <footer id="qq" class="page-footer teal">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
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
                <div class="col l3 s12">
                <h5 class="white-text">Social</h5>
                <ul>
                    <li><a class="white-text" href="https://br.linkedin.com/in/juscilan-moreto-8815641b">Linkedin</a></li>
                    <li><a class="white-text" href="http://twitter.com/juscilan">Twitter</a></li>
                    <li><a class="white-text" href="https://www.facebook.com/jota.moreto?hc_location=ufi">Facebook</a></li>
                    <li><a class="white-text" href="http://Github.com/juscilan">Github</a></li>
                </ul>
                </div>
                <div class="col l3 s12">
                <h5 class="white-text">Meus contatos</h5>
                <ul>
                    <li><a class="white-text" href="#">+55 11 98167-1595</a></li>
                    <li><a class="white-text" href="mailto:juscilan@gmail.com">juscilan@gmail.com</a></li>
                    <li><a class="white-text" href="#">Skype: mjuscilan</a></li>
                </ul>
                <h5 class="white-text">Google Play Store</h5>
                <ul>
                    <li><a class="white-text" href="https://play.google.com/store/apps/developer?id=Juscilan+Moreto">Aplicativos Android publicados</a></li>
                </ul>
                <p class="grey-text text-lighten-4">
                    &copy; 2016 - juscilan.com </a>
                </p>
                </div>
            </div> 
        </div>
        <div>
            <div class="center"><a class="white-text scrollSuave" href="#nav">Topo</a></div>
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

    methods: {

    },  

    ready () {

        scroll("scrollSuave")

        this.$http.get('/counter').then((response) => {
            this.$set('counter', JSON.parse(response.body));
            
        }, (response) => {
            window.console.log('Erro ao realizar operação.');
        });
    }
}
</script>