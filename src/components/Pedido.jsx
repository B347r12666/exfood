import {useState} from 'react'

//Array de objetos contewndo o estado inicial do cardapio
const cardapio=[
    { id: 1, nome: "Combo-01", preco: 25.00, disponivel: true, quantidade: 0 },
    { id: 2, nome: "Combo-02", preco: 35.00, disponivel: true, quantidade: 0 },
    { id: 3, nome: "Combo-03", preco: 45.00, disponivel: false, quantidade: 0 },
    { id: 4, nome: "Combo-04", preco: 55.00, disponivel: true, quantidade: 0 }
];

const Pedido = () => {

    //HOOk-useState- Manipula o estado da variavel
    //Estados para gerenciar a lista de items do cardápio
    const[items,setItems]=useState(cardapio);
    const[status,setStatus]=useState("");
    const[enviar,setEnviar]=useState(false);

    //Valor fixo adicionado ao total quando tiver items no carrinho
    const taxaEntrega = 5.00;

    //Função que altera a quantidade do pedido
    const AlterarQuantidade =(id,valor)=>{
        setItems(alt =>
            //Cria um novo array e percorre os items sem modificar o original(Imutabilidade)
            alt.map(item=>
                //Ternario: Verifica seu item da iteração atual é o que deve ser alterado
                //Spread `(..item)`:Manter os valores antigos e adiciona os novos
                //Math.max : Objeto que garante que a quantidade nuca seja menor que 0
                item.id === id ? {...item,quantidade : Math.max(0,item.quantidade + valor)}:item
            )
        )
    }

    //Filter: Seleciona apenas os produtos disponiveis no carrinho
    const produtosDisponiveis = items.filter(item => item.disponivel);
    const carrinho = items.filter(item => item.quantidade > 0);

    //Reduce: Calcula a soma dos items (preco + quantidade) e adiciona a taxa de entrega
    const subTotal = carrinho.reduce((ac,item) => ac + item.preco * items.quantidade,0)
    const total = subTotal > 0 ? + taxaEntrga: 0;

    //Simulação do ciclo de vida de entrega usando temporizador assicrono
    const ConfirmarPedido=()=>{
        setEnviar(true);
        setStatus("Restaurante Confirnou pagamento, preparando pedido");
        setTimeout (()=>{
            setStatus("Seu pedido saiu para a entrega")
            setEnviar(false);
        },5000)
        setTimeout(()=>{
            setStatus("Seu pedido foi entregue com sucesso");
            setEnviar(false)
        },10000)
    }

  return (
    <>
      
    </>
  )
}

export default Pedido
