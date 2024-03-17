import FormularioProduto from '../formularioProduto/FormularioProduto';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalProduto.css'

function ModalProduto() {
  return (
    <>
      <Popup 
      trigger={<button className='bg-laranja text-white border rounded px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-laranjaEsc hover:text-white'>Novo Produto</button>} modal>
        <div>
          <FormularioProduto />
        </div>
      </Popup>
    </>
  );
}

export default ModalProduto;