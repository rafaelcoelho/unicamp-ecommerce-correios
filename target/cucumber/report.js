$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Frete.feature");
formatter.feature({
  "line": 3,
  "name": "Shipping",
  "description": "As a user\nI want to calculate the value and the max time to deliver\nSo that I get the order value and estimated date to deliver.",
  "id": "shipping",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Get shipping value for valid address",
  "description": "",
  "id": "shipping;get-shipping-value-for-valid-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I set the CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I get price for shipping \u003cprice\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "shipping;get-shipping-value-for-valid-address;",
  "rows": [
    {
      "cells": [
        "cep",
        "price"
      ],
      "line": 16,
      "id": "shipping;get-shipping-value-for-valid-address;;1"
    },
    {
      "cells": [
        "\"12216510\"",
        "\"11\""
      ],
      "line": 17,
      "id": "shipping;get-shipping-value-for-valid-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1452324064,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get shipping value for valid address",
  "description": "",
  "id": "shipping;get-shipping-value-for-valid-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I set the CEP \"12216510\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I get price for shipping \"11\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculaFreteSteps.an_order()"
});
formatter.result({
  "duration": 104076013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12216510",
      "offset": 15
    }
  ],
  "location": "CalculaFreteSteps.i_set_the_CEP(String)"
});
formatter.result({
  "duration": 48664030,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 174565792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 26
    }
  ],
  "location": "CalculaFreteSteps.i_get_price_for_shipping(String)"
});
formatter.result({
  "duration": 29882750,
  "status": "passed"
});
formatter.after({
  "duration": 98390781,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Get shipping value for invalid address",
  "description": "",
  "id": "shipping;get-shipping-value-for-invalid-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I set the invalid CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 25,
    "value": "O CEP informado é invalido"
  }
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "shipping;get-shipping-value-for-invalid-address;",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 30,
      "id": "shipping;get-shipping-value-for-invalid-address;;1"
    },
    {
      "cells": [
        "\"99999000\""
      ],
      "line": 31,
      "id": "shipping;get-shipping-value-for-invalid-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32045823,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Get shipping value for invalid address",
  "description": "",
  "id": "shipping;get-shipping-value-for-invalid-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 19,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I set the invalid CEP \"99999000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 25,
    "value": "O CEP informado é invalido"
  }
});
formatter.match({
  "location": "CalculaFreteSteps.an_order()"
});
formatter.result({
  "duration": 46187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99999000",
      "offset": 23
    }
  ],
  "location": "CalculaFreteSteps.i_set_the_invalid_CEP(String)"
});
formatter.result({
  "duration": 551674,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 5367913,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.an_exception_shall_be_throw_with_following_error_message(String)"
});
formatter.result({
  "duration": 3245038,
  "status": "passed"
});
formatter.after({
  "duration": 104040518,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Get due date to deliver at valid address",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-valid-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I set the CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I get the maximum date to deliver \u003cdate\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-valid-address;",
  "rows": [
    {
      "cells": [
        "cep",
        "date"
      ],
      "line": 41,
      "id": "shipping;get-due-date-to-deliver-at-valid-address;;1"
    },
    {
      "cells": [
        "\"12216510\"",
        "20"
      ],
      "line": 42,
      "id": "shipping;get-due-date-to-deliver-at-valid-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9524282,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Get due date to deliver at valid address",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-valid-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 33,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I set the CEP \"12216510\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I get the maximum date to deliver 20",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculaFreteSteps.an_order()"
});
formatter.result({
  "duration": 37633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12216510",
      "offset": 15
    }
  ],
  "location": "CalculaFreteSteps.i_set_the_CEP(String)"
});
formatter.result({
  "duration": 230933,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 13823060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 34
    }
  ],
  "location": "CalculaFreteSteps.i_get_the_maximum_date_to_deliver(int)"
});
formatter.result({
  "duration": 5167771,
  "status": "passed"
});
formatter.after({
  "duration": 2896500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Get due date to deliver at invalid address",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-invalid-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I set the invalid CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 50,
    "value": "O CEP informado é invalido"
  }
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-invalid-address;",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 55,
      "id": "shipping;get-due-date-to-deliver-at-invalid-address;;1"
    },
    {
      "cells": [
        "\"99999000\""
      ],
      "line": 56,
      "id": "shipping;get-due-date-to-deliver-at-invalid-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9360491,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Get due date to deliver at invalid address",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-invalid-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 44,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I set the invalid CEP \"99999000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 50,
    "value": "O CEP informado é invalido"
  }
});
formatter.match({
  "location": "CalculaFreteSteps.an_order()"
});
formatter.result({
  "duration": 27370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99999000",
      "offset": 23
    }
  ],
  "location": "CalculaFreteSteps.i_set_the_invalid_CEP(String)"
});
formatter.result({
  "duration": 198432,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 5748525,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.an_exception_shall_be_throw_with_following_error_message(String)"
});
formatter.result({
  "duration": 121026,
  "status": "passed"
});
formatter.after({
  "duration": 875836,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "Service to get price and date unavailable (timeout)",
  "description": "",
  "id": "shipping;service-to-get-price-and-date-unavailable-(timeout)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "I set the CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the service to calculate is unavailable",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 65,
    "value": "Serviço indisponivel"
  }
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "shipping;service-to-get-price-and-date-unavailable-(timeout);",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 70,
      "id": "shipping;service-to-get-price-and-date-unavailable-(timeout);;1"
    },
    {
      "cells": [
        "\"12216510\""
      ],
      "line": 71,
      "id": "shipping;service-to-get-price-and-date-unavailable-(timeout);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5291363,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Service to get price and date unavailable (timeout)",
  "description": "",
  "id": "shipping;service-to-get-price-and-date-unavailable-(timeout);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 58,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "I set the CEP \"12216510\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the service to calculate is unavailable",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 65,
    "value": "Serviço indisponivel"
  }
});
formatter.match({
  "location": "CalculaFreteSteps.an_order()"
});
formatter.result({
  "duration": 32074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12216510",
      "offset": 15
    }
  ],
  "location": "CalculaFreteSteps.i_set_the_CEP(String)"
});
formatter.result({
  "duration": 250605,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.the_service_to_calculate_is_unavailable()"
});
formatter.result({
  "duration": 135567,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 5002511184,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.an_exception_shall_be_throw_with_following_error_message(String)"
});
formatter.result({
  "duration": 205702,
  "status": "passed"
});
formatter.after({
  "duration": 99498833,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Get response from server unformatted",
  "description": "",
  "id": "shipping;get-response-from-server-unformatted",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I set the CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "an unformat response shall be done",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 80,
    "value": "Could not get answer from remote server"
  }
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "shipping;get-response-from-server-unformatted;",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 85,
      "id": "shipping;get-response-from-server-unformatted;;1"
    },
    {
      "cells": [
        "\"12216510\""
      ],
      "line": 86,
      "id": "shipping;get-response-from-server-unformatted;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 30444687,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Get response from server unformatted",
  "description": "",
  "id": "shipping;get-response-from-server-unformatted;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@tag6"
    },
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I set the CEP \"12216510\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "an unformat response shall be done",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 80,
    "value": "Could not get answer from remote server"
  }
});
formatter.match({
  "location": "CalculaFreteSteps.an_order()"
});
formatter.result({
  "duration": 47470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12216510",
      "offset": 15
    }
  ],
  "location": "CalculaFreteSteps.i_set_the_CEP(String)"
});
formatter.result({
  "duration": 1396718,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.an_unformat_response_shall_be_done()"
});
formatter.result({
  "duration": 3767204,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 5042040,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.an_exception_shall_be_throw_with_following_error_message(String)"
});
formatter.result({
  "duration": 62009,
  "status": "passed"
});
formatter.after({
  "duration": 99142169,
  "status": "passed"
});
});