
# COMANDOS CMD

```
--- Criar ---
npm create vite@latest
: "Nome"
: "React"
: "JavaScript"
--- Instalar modulos ---
npm install || npm i

--- Rodar ---
npm run dev
- abrir o site
--- Ajuda ---
h + [ENTER] = ajuda
```
___
# EXTENCAO: CSS MODULES

VS Code --- File Structure
```
._(src)
|\(assets)
|\(components)
|
|
|>App.jsx
||
||^component code^
|
|>App.module.css
||
||^css code^
```
___
# jsx:
```
import {Header} from "./components/Header" 

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
	<>
		^CONTEUDO^
	</>
  );
}
```
___
# css:
```
:root{
	--NOME_VARIAVEL: #codigo_hex;
	--NOME_VARIAVEL: #codigo_hex;
	--NOME_VARIAVEL: #codigo_hex;
}

^STYLES^
```