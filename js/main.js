;(function ($) {
// Deveria fazer a magica 
  var HTJSON = function (html) {

  // Elementos do HTML
    var elementos = ['ul', 'li', 'a', 'span'],
      retorno = [],

    // Função que faz a coisa acontecer
      parse = function (h) {

      // Percore os itens do objeto
        $.each(h, function (tagName, tagContent) {

        // É um elemento?
          if ($.inArray(tagName, elementos) == -1) return false;

          // Abre tags
            retorno.push('<'+tagName);
            // Coloca os atributos
              if ($.isPlainObject(tagContent.attr)) {
                $.each(tagContent.attr, function (attrName, attrValue) {
                  retorno.push(' '+ attrName +'="'+attrValue+'"');
                });
              }

            retorno.push('>');

          // É um objeto de uma outra tag
            if ($.isPlainObject(tagContent.content)) {
              parse(tagContent.content);

          // Apenas um string  
            } else if ((typeof tagContent.content).toLowerCase() == 'string') {
            
              retorno.push(tagContent.content);

          // É um array de tags
            } else if ($.isArray(tagContent.content)) {
              for (var a=0; a<tagContent.content.length; a++) {
                parse(tagContent.content[a]);
              }
            }

          // Fecha tag aberta la em cima
            retorno.push('</'+tagName+'>');
        });
      }

    // Primeira chamada
      parse(html);

    return retorno.join('');;
  }

// Curto e grosso =/
  window.HTJSON = HTJSON;
})(jQuery);