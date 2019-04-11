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
- Mono repos com angular: https://medium.com/@angularlicious/monorepo-angular-packaged-libs-you-can-have-your-cake-and-eat-it-too-8c5687c4ffe9
- Configurando o Lerna: https://itnext.io/guide-react-app-monorepo-with-lerna-d932afb2e875
- Preparando app pro deploy: https://blog.caelum.com.br/como-preparar-uma-aplicacao-react-para-o-deploy/
- Mais exemplos de códegos em JavaScript: https://www.youtube.com/watch?v=kjhu1LEmRpY&list=PLMdYygf53DP4YTVeu0JxVnWq01uXrLwHi
- Exemplos de mais coisas com JS: https://javascript30.com/
- Lidando com variaveis de ambiente no angular: https://medium.com/beautiful-angular/angular-2-and-environment-variables-59c57ba643be
- https://www.youtube.com/watch?v=Nsjsiz2A9mg
- Alternativa pra estudar Java de grátis: https://www.caelum.com.br/apostila-java-orientacao-objetos/variaveis-primitivas-e-controle-de-fluxo/#declarando-e-usando-variveis


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
- DDD primeira parte: https://www.submarino.com.br/produto/50306100/livro-implementando-domain-driven-design-vernon?WT.srch=1&acc=d47a04c6f99456bc289220d5d0ff208d&epar=bp_pl_00_go_g35177&gclid=EAIaIQobChMI_tbrxIzI4QIVhRGRCh0o5AcVEAQYBSABEgKLW_D_BwE&i=57ef7074eec3dfb1f834a9b2&o=5c3e9c936c28a3cb5052d38d&opn=XMLGOOGLE&sellerId=77824266000183
- DDD Do Erick Evans: https://www.google.com/shopping/product/6951901981461819391?lsf=seller:6243886,store:9367645450747801547,lsfqd:0&prds=oid:17348319947677384318&q=livro&hl=pt-BR&ei=fDqvXKHHCIPC5OUPh_yy2A4&utm_source=store&lsft=gclid:EAIaIQobChMIrsavsYzI4QIVhw-RCh2LaAhJEAQYAiABEgIzRPD_BwE


## Funções no JavaScript
// function
- This varia de acordo com o contexto de execução
    - 
// arrow function
- this é sempre o do contexto de criação
    - Lexical Context
        - Leitura


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


## Classes de Domínio (representação de alguma entidade)
- Sempre enviamos os dados minimos pra criar/atualizar/editar e recuperamos eles via interface nos serviços (ou quando o dado vem do server)
  - Na hora de devolver a partir de uma entrada o dado para a camada do componente, criamos o objeto

## Guia do ultimo dia 
- Como deixar os emails mais bonitos
- Pipe
    - Como lidar com datas
- Removendo emails
    - Propagar um dado de um componente filho pro pai
- Busca (Pipe)
    - Propagar um dado de um componente filho pro pai


## Fazendo SEO
- com Angular https://angular.io/guide/universal
- Se for fazer site estático, usa isso aqui: https://developer.wordpress.org/rest-api/


## Trabalhando com data
- https://momentjs.com/
- https://angular.io/api/common/DatePipe
