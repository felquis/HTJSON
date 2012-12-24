# HTJSON é Hypertext JavaScript Object Notation

**Filosofia:** pegamos um JSON, que representa uma certa estrutura HTML e se você quiser também pegamos um outro JSON que representa dados(Como os de um Web Service transformamos em HTML propriamente dito pra você! E isso pode ser feito tanto no servidor em PHP(e outras linguagem legais de servidor) e em requisições Ajax no client-side.

Nota: Por enquanto só temos a versão de testes em JavaScript.

Exemplo de JSON que representa HTML
===================================

```js
var template = {
    ul : {
        content : [{
          li : {
              content : {
                  a : {
                      attr : {
                          href   : 'http://tutsmais.com.br',
                          title  : 'TutsMais',
                          target : '_blank'
                      },
                      content  : 'TutsMais'
                  }
              }
          }
        },{
          li : {
              content : {
                  a : {
                      attr : {
                          href   : 'http://devcast.com.br',
                          title  : 'DevCast',
                          target : '_blank'
                      },
                      content  : 'DevCast'
                  }
              }
          }
        }]
    }
}

```

A palavra `attr` representa atributos do elemento em que esta atribuído, e `content` o conteúdo do elemento que esta atribuído.

HTML Gerado com o exemplo acima.
===============================

Exatamente

```html
<ul>
	<li>
		<a href="http://tutsmais.com.br" title="TutsMais" target="_blank">TutsMais</a>
	</li>
	<li>
		<a href="http://devcast.com.br" title="DevCast" target="_blank">DevCast</a>
	</li>
</ul>
```

Como usa?
=========
```js
 // Retorna o HTML representa por JSON
    var html = HTJSON(template);

 // É inserido no DOM
    $('#menu').html(html);
```
Alias, se você fazer download do repositório, é só abrir o index.html que tem um belo exemplo te esperando.

Dependências
============
Por enquanto só existe uma versão de teste feita com jQuery, mas para o futuro teremos também só em JavaScript sem precisar de nenhuma library.

Pra que isso é útil?
====================
Essa é uma pergunta difícil, inicialmente eu imaginei o seguinte: Quando estamos trabalhando com um Web Service no client-side, ou seja estamos fazendo uma requisição ajax a um Web Service, quando recebemos o JSON deste Web Service, geralmente temos que criar uma estrutura HTML baseado naquilo, até ai tudo bem, mas as vezes também precisamos criar o mesmo HTML no servidor geralmente por assunto de indexação. A ideia é, que tal usar o mesmo gerador de HTML tando para o client-side quanto para o server-side? Então essa é a ideia, não sei existe outros iniciativas parecidas, encontrei um [JSONML](http://www.jsonml.org/) um [JSON2HTML](http://json2html.com/), mas nada igual o HTJSON.

Quem esta por trás disso?
==============

O [Ofequis](http://github.com/felquis "Ofequis") meio chapado e um monte de outras pessoas legais.

Licença
=======

[MIT License](http://htjson.mit-license.org/)