# Desafio Inema 2017

Site para concurso de fotografias - AngularJS + PHP

## Instalação
    


1. Copiar pasta ou clonar repositório num servidor com suporte a PHP;

2. Na pasta app/public/ , executar o comando bower install (Instalação das dependências do projeto);

3. Importar scripts para criação e carga do banco: Os arquivos .sql estão na pasta sql/, na raiz do projeto;
    

### Visão geral

```
sql/
    varal_das_aguas.sql

app/
  README.md
  php/
    api/
        fotos/
        Connect.class.php
        data.php
  public/
    bower_components/
    css/
        estilo.css
        estilo.scss
    fontes/
        lato/
            Lato-Light.ttf
            Lato-Regular.ttf
        merienda/
            Merienda-Bold.ttf
            Merienda-Regular.ttf
    img/
        bg_aguas_padrao.jpg
        bg_marca.png
        ic_seta_top.svg
        inema.jpg
    js/
        app.js
        FotosAPIService.js
        mainController.js
  bower.json
  config.rb
  index.html
```