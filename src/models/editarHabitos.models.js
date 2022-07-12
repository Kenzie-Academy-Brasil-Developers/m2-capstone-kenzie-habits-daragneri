import deletaHabito from '../models/excluirHabitos.model.js'

const body = document.querySelector('body');

class editarHabito {
    static criarEdit(habitId) {
        const fundoPreto = document.createElement('div');
        fundoPreto.classList.add('fundo__preto')

        const form = document.createElement('form');
        form.classList.add('form__modal')

        fundoPreto.append(form)

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('form__modal__header')

        const modalName  = document.createElement('h2')
        modalName.classList.add('form__modal__name')
        modalName.innerText = 'Editar hábito'

        const buttonClose = document.createElement('button')
        buttonClose.innerText = 'X'

        modalHeader.append(modalName, buttonClose)
        form.appendChild(modalHeader)

        buttonClose.addEventListener('click', (e) => {
            e.preventDefault()
            fundoPreto.style.display = 'none';
        })

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

        const modalBody4 = document.createElement('div')
        modalBody4.classList.add('form__modal__body', 'status')

        const span     = document.createElement('span')
        span.innerText = 'Status'
        const input    = document.createElement('input')
        input.type     = 'checkbox'
        modalBody4.append(span, input)
        form.appendChild(modalBody4)

        const divEdicao    = document.createElement('div')
        divEdicao.classList.add('btn__editar')

        const botaoExcluir = document.createElement('button')
        botaoExcluir.classList.add('btn', 'btn--cinza-claro')
        botaoExcluir.innerText = 'Excluir'

        botaoExcluir.addEventListener('click', (e) => {
            e.preventDefault();
            form.style.display = 'none';
            deletaHabito.excluirHabito(habitId).style.display = 'block';
        })

        const botaoSalvar  = document.createElement('button')
        botaoSalvar.classList.add('btn', 'btn--disabled')
        botaoSalvar.innerText = 'Salvar alterações'

        //BOTAO SALVAR NAO FUNCIONA

        divEdicao.append(botaoExcluir, botaoSalvar)
        form.appendChild(divEdicao)

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

//editarHabito.criarEdit()