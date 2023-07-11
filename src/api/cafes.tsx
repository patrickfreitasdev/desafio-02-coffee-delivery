import { Cafe } from "../contexts/CafesContext";
import { v4 as uuidv4 } from 'uuid';
import ExpressoTradicional from '../assets/cafes/expresso-tradicional.png';
import ExpressoAmericano from '../assets/cafes/expresso-americano.png';
import ExpressoCremoso from '../assets/cafes/expresso-cremoso.png';
import ExpressoGelado from '../assets/cafes/expresso-gelado.png';
import CafeComLeite from '../assets/cafes/cafe-com-leite.png';
import Latte from '../assets/cafes/latte.png';
import Capuccino from '../assets/cafes/capuccino.png';
import Macchiato from '../assets/cafes/macchiato.png';
import Mocaccino from '../assets/cafes/Mocaccino.png';
import ChocolateQuente from '../assets/cafes/chocolate-quente.png';
import Cubano from '../assets/cafes/cubano.png';
import Havaiano from '../assets/cafes/havaiano.png';
import Arabe from '../assets/cafes/arabe.png';
import Irish from '../assets/cafes/irish.png';


export const CafeApi: Cafe[] = [
    {
        id: '5ba64fb8-1a32-11ee-be56-0242ac120002',
        imgPath: ExpressoTradicional,
        tags: ['tradicional'],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba65508-1a32-11ee-be56-0242ac120002',
        imgPath: ExpressoAmericano,
        tags: ['tradicional'],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba6567a-1a32-11ee-be56-0242ac120002',
        imgPath: ExpressoCremoso,
        tags: ['tradicional'],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba657d8-1a32-11ee-be56-0242ac120002',
        imgPath: ExpressoGelado,
        tags: ['tradicional', 'gelado'],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba65936-1a32-11ee-be56-0242ac120002',
        imgPath: CafeComLeite,
        tags: ['tradicional', 'com leite'],
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba65a76-1a32-11ee-be56-0242ac120002',
        imgPath: Latte,
        tags: ['tradicional', 'com leite'],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba65bc0-1a32-11ee-be56-0242ac120002',
        imgPath: Capuccino,
        tags: ['tradicional', 'com leite'],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba65d00-1a32-11ee-be56-0242ac120002',
        imgPath: Macchiato,
        tags: ['tradicional', 'com leite'],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba660ac-1a32-11ee-be56-0242ac120002',
        imgPath: Mocaccino,
        tags: ['tradicional', 'com leite'],
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba66200-1a32-11ee-be56-0242ac120002',
        imgPath: ChocolateQuente,
        tags: ['especial', 'com leite'],
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba6632c-1a32-11ee-be56-0242ac120002',
        imgPath: Cubano,
        tags: ['especial', 'alcoólico', 'gelado'],
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba6657a-1a32-11ee-be56-0242ac120002',
        imgPath: Havaiano,
        tags: ['especial'],
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba670ce-1a32-11ee-be56-0242ac120002',
        imgPath: Arabe,
        tags: ['especial'],
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
    {
        id: '5ba66f52-1a32-11ee-be56-0242ac120002',
        imgPath: Irish,
        tags: ['especial', 'alcoólico'],
        title: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        qtd: 0,
        inCart: false
    },
]