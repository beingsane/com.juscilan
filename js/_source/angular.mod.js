angular.module("myapp", [])
	.controller("MyController", function($anchorScroll, $location, $scope, $http) {

		$scope.myData = {};
    
        var scopo = $scope;
        var local = $location;
        var ancora = $anchorScroll;
		
        $scope.myData.enviou = false; 
        $scope.myData.vlPasswordVisivel = false; 
    
        $scope.myData.doClick = function(item, event) {
            
            $scope.myData.vlPasswordVisivel = false;
            
            
            if (!$scope.myData.email || !$scope.myData.name || !$scope.myData.mensagem ){
                $scope.myData.modalCabecalho = 'Atenção';
                $scope.myData.modalCorpo = 'Favor preencher todos os campos';
                $('#modal1').openModal();
                return false;
            }            

            var er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
            if( !er.exec($scope.myData.email) )
	        {
                $scope.myData.modalCabecalho = 'Atenção';
                $scope.myData.modalCorpo = 'Email inválido.';
                $('#modal1').openModal();
                return false;        
            }
            
			var address = '/email';
			
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }	
            
            var objeto = {
                 'name' :$scope.myData.name
                ,'email':$scope.myData.email
                ,'mensagem' : $scope.myData.mensagem
                
            }
            
            var dados = 'dados=' + JSON.stringify(objeto);
		
            $('#corposup').append("<div id='loader' class='loader'> </div>");
            
            $http.post(address, dados, config)
						.success(function (data, status, headers, config) {
                            
                            if(data == 'ok'){
                                $scope.myData.modalCabecalho = 'Mensagem enviada!';
                                $scope.myData.modalCorpo = 'Logo, logo entro em contato ;)';                                
                                $('#modal1').openModal();
                                
                            }else{
                                $scope.myData.modalCabecalho = 'Erro!';
                                $scope.myData.modalCorpo = 'Erro ao enviar mensagem, por favor tente novamente mais tarde.';                                
                                $('#modal1').openModal();                               
                            }
                            $('#loader').hide();
                            
						})
						.error(function (data, status, header, config) {
                            alert('Erro ao enviar mensagem, por favor tente novamente mais tarde.');
                            $('#loader').hide();
						}).then(function(){
                            scope.$apply();
                        });
            
            
            $location.hash('mensagemenviada');
            $anchorScroll();
            
		}
        
        $scope.myData.novoContato = function(item, event) {
            scopo.myData.enviou = false;
            $('.button-collapse').sideNav('hide');
            local.hash('contato');
            ancora();
        }

        $scope.myData.corpo = function(item, event) {
            $('.button-collapse').sideNav('hide');
            local.hash('corpo');
            ancora();
        }
        
        $scope.myData.sobre = function(item, event) {
            $('.button-collapse').sideNav('hide');
            local.hash('sobre');
            ancora();
        } 
        
        
        //visitors bfcfc4 767c78

        address = "/counter/5654a92235fd4b34180f04e2";

        var configput = {
            headers : {
                'Content-Type': 'application/force-download'
            }
        }	
        
        if(!localStorage.getItem("count")){            
            $http.put(address, {}, configput)
                .success(function (data, status, headers, config) {
                    if(data){
                        scopo.myData.visitors = "0000" + data.visitors;
                        count = data.visitors;
                        localStorage.setItem("count", count);
                    }                            
                });           
        }else{
            $http.get(address, {}, configput)
                .success(function (data, status, headers, config) {
                    if(data){
                        scopo.myData.visitors = "0000" + data.visitors;
                    }                            
                });              
        };
        //visitors
    
        //Get cv
        $scope.myData.cv = function(item, event) {
        
            $scope.myData.modalCabecalho = 'Atenção';
            $scope.myData.modalCorpo = 'Digite sua senha';
            $scope.myData.vlPasswordVisivel = true;
            
            $('#modal1').openModal();
            $("#senhaModal").focus();
            /*
            var element = findElement("#senhaModal");
            element.focus();   
            */
        };
    
        function findElement(query)
        {
            //Funcion para realizar la busqueda del elemento.
            var id = document.querySelector(query);
            var elements = angular.element(id);
            return elements[0];
        };
    
        $scope.myData.ok = function(item, event) {
            var senha = $scope.myData.vlPassword;
            
            if (!senha) return false;

            address = "/arquivos/Juscilan_Moreto-11-98167-1595.pdf/" + senha;
            window.location = address;
       
        };    
        //end get cv
        
	});


