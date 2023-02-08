import { Container } from "./style";
import { FiPlus, FiX } from 'react-icons/fi'
export function InputWrapper({ isNew = false, onClick, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        readOnly={!isNew}
        value={value}
        {...rest}
      />
      <button
        onClick={onClick}
        type="button"
      >
        {
          isNew ? <FiPlus className="Plus" size={20}/> : <FiX className='Cross'size={20}/>
        }
      </button>
    </Container>
  )
}