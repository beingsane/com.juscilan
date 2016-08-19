
export const mutations = {

    ATUALIZA_MODAL (state, obj) {
      state.Modal = obj
    },
    
    OK_CLICK_MODAL (state, obj, Vue) {

        state.Modal = obj

        if(obj.tipo === 'DOWNLOAD'){
            
            if(obj.senha === ''){
                state.Modal.titulo      =  'Atenção'
                state.Modal.mensagem    =   'A senha é obrigatória :('
                state.Modal.tipo        =   'WARNING'
                state.Modal.inputvisible=   false
                state.Modal.btnokvisible=   false    

                return
            }

            Vue.$http.get('/arquivos/' + obj.senha).then((response) => {
                
                let objRetorno = response.body
                
                if(objRetorno == 'Erro'){
                    
                    state.Modal.titulo      =  'Atenção'
                    state.Modal.mensagem    =   'A senha digitada é inválida :('
                    state.Modal.tipo        =   'WARNING'
                    state.Modal.senha ='' 
                    state.Modal.inputvisible=   false
                    state.Modal.btnokvisible=   false  

                    return
                }    

                let address = "/arquivos/Juscilan_Moreto-11-98167-1595.pdf/" + obj.senha;
                window.location = address;
                state.Modal.senha ='' 
                state.Modal.tipo        =   'WARNING'
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