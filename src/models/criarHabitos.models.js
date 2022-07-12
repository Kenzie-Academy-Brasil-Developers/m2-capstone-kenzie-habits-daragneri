const body = document.querySelector('body');

class criarHabito {
    static criaHabito() {
        const fundoPreto = document.createElement('div');
        fundoPreto.classList.add('fundo__preto')

        const form = document.createElement('form');
        form.classList.add('form__modal')

        fundoPreto.append(form)

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('form__modal__header')

        const modalName  = document.createElement('h2')
        modalName.classList.add('form__modal__name')
        modalName.innerText = 'Criar hábito'

        const buttonClose = document.createElement('button')
        buttonClose.innerText = 'X'
        modalHeader.append(modalName, buttonClose)
        form.appendChild(modalHeader)

        let modalBody = this.modalBody()
        let titulo = this.modalInputName('Título')
        const formTitle = document.createElement('input')
        formTitle.classList.add('campo__titulo')
        modalBody.append(titulo, formTitle)
        form.appendChild(modalBody)

        let modalBody2 = this.modalBody()
        let descricao = this.modalInputName('Descrição')
        const textField = document.createElement('textarea')
        textField.classList.add('campo__descricao')
        textField.placeholder = 'Digite uma descrição'
        modalBody2.append(descricao, textField)
        form.appendChild(modalBody2)

        let modalBody3 = this.modalBody()
        let categoria = this.modalInputName('Categoria')
        const select = document.createElement('select')
        select.name = 'categoria'
        
        const option = document.createElement('option')
        option.disabled, option.selected, option.hidden
        option.text = 'Selecionar Categoria'

        const opt1 = document.createElement('option')
        opt1.value = 'saude'
        opt1.text = '🧡 Saúde'
        
        const opt2 = document.createElement('option')
        opt2.value = 'alimentacao'
        opt2.text = '🍴 Alimentação'

        const opt3 = document.createElement('option')
        opt3.value = 'exercicios'
        opt3.text = '🏃 Exercícios'
        
        const opt4 = document.createElement('option')
        opt4.value = 'estudos'
        opt4.text = '📖 Estudos'
        
        select.add(option)
        select.add(opt1)
        select.add(opt2)
        select.add(opt3)
        select.add(opt4)
        modalBody3.append(categoria, select)
        form.appendChild(modalBody3)
        
        const buttonSubmit = document.createElement('button')
        buttonSubmit.classList.add('btn', 'btn--azul')
        buttonSubmit.innerText = 'Inserir'

        /* buttonSubmit.addEventListener('click', () => {
            postmethod
        }) */

        form.appendChild(buttonSubmit)

        body.append(fundoPreto)
    }

    static modalBody() {
        const modalBody = document.createElement('div')
        modalBody.classList.add('form__modal__body')

        return modalBody
    }

    static modalInputName(nome) {
        const h5 = document.createElement('h5')
        h5.classList.add('form__input__name')
        h5.innerText = nome

        return h5
    }
}

//criarHabito.criaHabito()