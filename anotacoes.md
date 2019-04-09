## Por que angular?
- Alguém escolheu por mim
- Fábrica escolheu
    - Alguém viu uma palestra, ficou feliz e saiu fora depois
- Mais organizado
    - Pega muito do backend
        - 
- Mais completo
    - Ti da mais segurança

- Ecossistema React
    - react-router-dom
    - Pubsub, Redux 
    - https://nextjs.org/

- Google Apoia
    - isso nao necessariamente é bom
- TypeScript
    - 

## Quando usar angular?
- Muitos acessos;
- Uma app mais robusta
- Crescer melhor como uma aplicação monolitica
  - Sem precisar quebrar muito
- Componentes que se repetem    
  - Design System
- Quebrar aplicações em pedacinhos
- Aplicações com muita interação
  - SPA (single page applications)
  - Cmail
  - 


## Peça pelo amor de deus pra usar o VsCode de algum jeito
- Alternativa: https://stackblitz.com/
- Solução burgues safado: https://www.jetbrains.com/webstorm/


## Primeiros Passos
- Criar a App
- Dentro da pasta do projeto, rodar `npm start` via terminal (sobe a a app)
- 

## Dicas de conteúdo
- https://hipsters.tech/angular-vs-react-hipsters-142/
- https://hipsters.tech/pull-requests-e-code-review-hipsters-64/ (eu sei que não é facil implementar, mas n custa tentar sem ngm saber)
- Como lidar com ngClass no react é meio estranho: https://medium.com/@omariosouto/001-como-lidar-de-uma-forma-mais-feliz-com-classes-css-condicionais-no-react-dicas-de-react-915c13a2ab0e
- https://medium.com/equals-lab/princ%C3%ADpios-s-o-l-i-d-o-que-s%C3%A3o-e-porque-projetos-devem-utiliz%C3%A1-los-bf496b82b299
- 


## Formularios no Angular
- Exemplos de todas as variações possiveis de coisas dos campos: https://angular.io/api/forms/NgModel
- Lib do React que faz algo parecido, mas não próximo: https://jaredpalmer.com/formik/docs/overview


## Ferramentas
- https://www.browsersync.io/

## Fluxo de carregamento do angular

1 - index.html
    - Dentro do HTML tem as tags script
    - O main.ts é chamado
        - Ele chama o app module
        - O app module tem todas as dependências do nosso projeto declaradas direta ou indiretamente

2 - Roteamento
    - Quando o módulo de roteamento é carregado
        - A gente sempre usa o mesmo RouterModule, só configuramos Ele
    - O AppComponent é SEMPRE chamado 
        - e o <router-outlet> decide baseado na URL quem vai aparecer


=====

- OO
    - Java, C# 

- JavaScript/Python
    - React 

- VueJS
    - Ele é agradável 
    - AngularJs


## Livros

- Mythical Man Month
- Refactoring: https://www.amazon.com.br/Refactoring-Improving-Existing-Addison-Wesley-Signature-ebook/dp/B07LCM8RG2?tag=goog0ef-20&smid=A18CNA8NWQSYHH&ascsubtag=go_1686871380_65779544836_327582895583_pla-581169666159_c_
- https://www.casadocodigo.com.br/products/livro-oo-solid
- 

## Gerando senhas seguras
- https://blog.alura.com.br/como-criar-uma-boa-senha/

- Você não obriga a nada
    - coloque uma frase ou palavras que vc vai lembrar
    - senhas aleatórias salvas em algum lugar
- no back end
    - pega a senha
        - converte pra md5 (reduz pra 32)
        - passa o bcrypt (72 caracteres)

## Fluxo do cadastro
- Campos
- Validar
    - Criar as validações
- Formulario
    - Preparar cada um dos campos do formulario
- Submitar os dados
    - Você mesmo interagir 
- Capturar o submit
    - Preparar o código pra saber se pode enviar ou nao
- Enviar os dados pro backend
    - Preparar os dados que vieram do form pra isso
