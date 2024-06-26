import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CardProduto.module.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { handleCarrinho } from '../../../util/carrinho/handleCarrinho';

interface Produto {
    nome: string
    descricao: string
    preco: string
    imagem: string
    categoria: string
}

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {

    return (
        <div className={styles.cardProduto}>
            <FontAwesomeIcon onClick={() => handleCarrinho(produto)} className={styles.cartShopping} icon={faCartShopping} />
            <Link to={`/${produto.nome}`}>
                <div className={styles.imgBox}>
                    <img src={`produtos/${produto.imagem}`} alt={produto.descricao} />
                </div>
                <p>{produto.nome}</p>
                <p className={styles.preco}>{produto.preco}</p>
            </Link>
        </div>
    )
}

export default CardProduto;
