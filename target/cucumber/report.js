$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BuscaEndereco.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 2,
  "name": "Buscar Endereço",
  "description": "Como um usuário do sistema Ecommerce\nDesejo consultar um endereço a partir do CEP\nPara que eu possa usar o endereço para fazer um pedido",
  "id": "buscar-endereço",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 2289100808,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Consultar um endereço valido",
  "description": "",
  "id": "buscar-endereço;consultar-um-endereço-valido",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "um CEP válido:",
  "rows": [
    {
      "cells": [
        "cep",
        "13083970"
      ],
      "line": 9
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "eu informo o CEP na busca de endereço",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o resultado deve ser o endereço:",
  "rows": [
    {
      "cells": [
        "Logradouro",
        "Cidade"
      ],
      "line": 12
    },
    {
      "cells": [
        "Rua Carlos Gomes",
        "Campinas"
      ],
      "line": 13
    }
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "BuscaEnderecoSteps.eu_possuo_um_CEP_valido(String,String\u003e)"
});
formatter.result({
  "duration": 562004292,
  "status": "passed"
});
formatter.match({
  "location": "BuscaEnderecoSteps.eu_informo_o_CEP_na_busca_de_endereco()"
});
formatter.result({
  "duration": 462386037,
  "status": "passed"
});
formatter.match({
  "location": "BuscaEnderecoSteps.o_resultado_deve_ser_o_endereco(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 112556701,
  "status": "passed"
});
formatter.after({
  "duration": 4558302,
  "status": "passed"
});
formatter.before({
  "duration": 27716207,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Consultar um endereço com CEP não existente",
  "description": "",
  "id": "buscar-endereço;consultar-um-endereço-com-cep-não-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 16,
  "name": "um CEP não existente:",
  "rows": [
    {
      "cells": [
        "cep",
        "99999999"
      ],
      "line": 17
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "eu informo o CEP na busca de endereço",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "o retorno deve conter um valor de erro igual a \"true\"",
  "keyword": "Então "
});
formatter.match({
  "location": "BuscaEnderecoSteps.um_CEP_nao_existente(String,String\u003e)"
});
formatter.result({
  "duration": 624817,
  "status": "passed"
});
formatter.match({
  "location": "BuscaEnderecoSteps.eu_informo_o_CEP_na_busca_de_endereco()"
});
formatter.result({
  "duration": 18502612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 48
    }
  ],
  "location": "BuscaEnderecoSteps.o_retorno_deve_conter_um_valor_de_erro_igual_a(String)"
});
formatter.result({
  "duration": 2081498,
  "status": "passed"
});
formatter.after({
  "duration": 9584271,
  "status": "passed"
});
formatter.before({
  "duration": 66426251,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Consultar um endereço com CEP invalido.",
  "description": "",
  "id": "buscar-endereço;consultar-um-endereço-com-cep-invalido.",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 22,
  "name": "um CEP inválido:",
  "rows": [
    {
      "cells": [
        "cep",
        "1234567890"
      ],
      "line": 23
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "eu informo o CEP na busca de endereço",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "uma exceção deve ser lançada com a mensagem de erro:",
  "keyword": "Então ",
  "doc_string": {
    "content_type": "",
    "line": 26,
    "value": "O CEP informado é invalido"
  }
});
formatter.match({
  "location": "BuscaEnderecoSteps.um_CEP_invalido(String,String\u003e)"
});
formatter.result({
  "duration": 508974,
  "status": "passed"
});
formatter.match({
  "location": "BuscaEnderecoSteps.eu_informo_o_CEP_na_busca_de_endereco()"
});
formatter.result({
  "duration": 17615296,
  "status": "passed"
});
formatter.match({
  "location": "BuscaEnderecoSteps.uma_excecao_deve_ser_lancada_com_a_mensagem_de_erro(String)"
});
formatter.result({
  "duration": 741031,
  "status": "passed"
});
formatter.after({
  "duration": 20419159,
  "status": "passed"
});
formatter.before({
  "duration": 19384386,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Serviço ViaCep não responde",
  "description": "",
  "id": "buscar-endereço;serviço-viacep-não-responde",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 31,
  "name": "um CEP válido:",
  "rows": [
    {
      "cells": [
        "cep",
        "13083970"
      ],
      "line": 32
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 33,
  "name": "o serviço ViaCep não esta respondendo",
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "eu informo o CEP na busca de endereço",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "uma exceção deve ser lançada com a mensagem de erro:",
  "keyword": "Então ",
  "doc_string": {
    "content_type": "",
    "line": 36,
    "value": "Serviço indisponivel"
  }
});
formatter.match({
  "location": "BuscaEnderecoSteps.eu_possuo_um_CEP_valido(String,String\u003e)"
});
formatter.result({
  "duration": 406133,
  "status": "passed"
});
formatter.match({
  "location": "BuscaEnderecoSteps.o_servico_via_cep_nao_esta_respondendo()"
});
formatter.result({
  "duration": 277343,
  "status": "passed"
});
formatter.match({
  "location": "BuscaEnderecoSteps.eu_informo_o_CEP_na_busca_de_endereco()"
});
formatter.result({
  "duration": 5017215649,
  "status": "passed"
});
formatter.match({
  "location": "BuscaEnderecoSteps.uma_excecao_deve_ser_lancada_com_a_mensagem_de_erro(String)"
});
formatter.result({
  "duration": 203785,
  "status": "passed"
});
formatter.after({
  "duration": 6321831,
  "status": "passed"
});
formatter.before({
  "duration": 22974125,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Consultar um endereço com CEP existente",
  "description": "",
  "id": "buscar-endereço;consultar-um-endereço-com-cep-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 41,
  "name": "um CEP existente test:",
  "rows": [
    {
      "cells": [
        "cep",
        "12216510"
      ],
      "line": 42
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 43,
  "name": "eu informo o CEP na busca de endereço",
  "keyword": "Quando "
});
formatter.step({
  "line": 44,
  "name": "o resultado deve ser o endereço:",
  "rows": [
    {
      "cells": [
        "Logradouro",
        "Cidade"
      ],
      "line": 45
    },
    {
      "cells": [
        "Rua Roma",
        "São José dos Campos"
      ],
      "line": 46
    }
  ],
  "keyword": "Então "
});
formatter.match({
  "location": "BuscaEnderecoSteps.um_CEP_existente_test(String,String\u003e)"
});
formatter.result({
  "duration": 455923,
  "status": "passed"
});
formatter.match({
  "location": "BuscaEnderecoSteps.eu_informo_o_CEP_na_busca_de_endereco()"
});
formatter.result({
  "duration": 28127430,
  "status": "passed"
});
formatter.match({
  "location": "BuscaEnderecoSteps.o_resultado_deve_ser_o_endereco(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 215865,
  "status": "passed"
});
formatter.after({
  "duration": 11632954,
  "status": "passed"
});
});