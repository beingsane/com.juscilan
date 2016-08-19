
export const mutations = {

    ATUALIZA_MODAL (state, obj) {
      state.Modal = obj
    },
    
    UPDATE_LOADER (state, obj) {
      state.Loader = obj
    },

    OK_CLICK_MODAL (state, obj, Vue) {

        state.Modal = obj

        if(obj.tipo === 'DOWNLOAD'){
            
            if(obj.senha === ''){
                state.Modal.titulo          =   'Atenção'
                state.Modal.mensagem        =   'A senha é obrigatória :('
                state.Modal.tipo            =   'WARNING'
                state.Modal.inputvisible    =   false
                state.Modal.btnokvisible    =   false 

                setTimeout(function(){ 
                    jQuery('#modal1').closeModal();
                }, 1500);                    

                return
            }

            Vue.$http.get('/arquivos/' + obj.senha).then((response) => {
                
                let objRetorno = response.body
                
                if(objRetorno == 'Erro'){
                    
                    state.Modal.titulo          =   'Atenção'
                    state.Modal.mensagem        =   'A senha digitada é inválida :('
                    state.Modal.tipo            =   'WARNING'
                    state.Modal.senha           =   '' 
                    state.Modal.inputvisible    =   false
                    state.Modal.btnokvisible    =   false  

                    setTimeout(function(){ 
                        jQuery('#modal1').closeModal();
                    }, 1500);                      

                    return
                }    

                window.location     =   "/arquivos/Juscilan_Moreto-11-98167-1595.pdf/" + obj.senha
                state.Modal.senha   =   '' 
                state.Modal.tipo    =   'WARNING'
                jQuery('#modal1').closeModal();                  
                    
                }, (response) => {
                    window.console.log('Erro ao realizar operação.');
            });
        }

        else if(obj.tipo === 'WARNING'){
            jQuery('#modal1').closeModal();
        }
    },    
}