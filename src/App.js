import { useState } from "react";
import style from './style.css'

const App = () => {
  const [title, setTitle] = useState(false);

  const [showContent, setShowContent] = useState(false);

  const handleTitle = () => {
    setTitle(!title);
  }

  const handleContent = () => {
    setShowContent(!showContent) //oposto do estado atual
  }

  return (
    <>
      <h1> {title ? `Hello World` : `Bye Bye World`} </h1>
      {<ExclusiveContent showContent={showContent} />}
      {/* passa variavel e  verifica se seu valor é verdadeiro ou falso, se verdadeiro, ela é exibida, se não, não é */}
      <button onClick={handleTitle}> Mudar titulo </button>
      &nbsp; 
      {/* espaço em branco */}
      <button onClick={handleContent}> {showContent ? `Clique para esconder o conteudo` : `Clique para exibir o conteudo`} </button>
    </>
  );
}

const ExclusiveContent = (props) => {
  return (
      <div>
        {props.showContent && <h2> Essa é uma mensagem secreta </h2>}
      </div>
  )
}

export default App;
