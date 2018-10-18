$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Frete.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Shipping",
  "description": "As a user\nI want to calculate the value and the max time to deliver\nSo that I get the order value and estimated date to deliver.",
  "id": "shipping",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Get shipping value for valid address",
  "description": "",
  "id": "shipping;get-shipping-value-for-valid-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I set the CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I get price for shipping \u003cprice\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "shipping;get-shipping-value-for-valid-address;",
  "rows": [
    {
      "cells": [
        "cep",
        "price"
      ],
      "line": 33,
      "id": "shipping;get-shipping-value-for-valid-address;;1"
    },
    {
      "cells": [
        "\"12216510\"",
        "\"11\""
      ],
      "line": 34,
      "id": "shipping;get-shipping-value-for-valid-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1521397881,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Get shipping value for valid address",
  "description": "",
  "id": "shipping;get-shipping-value-for-valid-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 25,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I set the CEP \"12216510\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 100804887,
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
  "duration": 42657202,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 156054361,
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
  "duration": 27306563,
  "status": "passed"
});
formatter.after({
  "duration": 86900146,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Get shipping value for invalid address",
  "description": "",
  "id": "shipping;get-shipping-value-for-invalid-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I set the CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 42,
    "value": "Invalid address"
  }
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "shipping;get-shipping-value-for-invalid-address;",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 47,
      "id": "shipping;get-shipping-value-for-invalid-address;;1"
    },
    {
      "cells": [
        "\"99999000\""
      ],
      "line": 48,
      "id": "shipping;get-shipping-value-for-invalid-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16105022,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Get shipping value for invalid address",
  "description": "",
  "id": "shipping;get-shipping-value-for-invalid-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 36,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I set the CEP \"99999000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 42,
    "value": "Invalid address"
  }
});
formatter.match({
  "location": "CalculaFreteSteps.an_order()"
});
formatter.result({
  "duration": 61155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99999000",
      "offset": 15
    }
  ],
  "location": "CalculaFreteSteps.i_set_the_CEP(String)"
});
formatter.result({
  "duration": 454597,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 51079848,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.an_exception_shall_be_throw_with_following_error_message(String)"
});
formatter.result({
  "duration": 99216,
  "status": "passed"
});
formatter.after({
  "duration": 96020295,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Get due date to deliver at valid address",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-valid-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I set the CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I get the maximum date to deliver \u003cdate\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-valid-address;",
  "rows": [
    {
      "cells": [
        "cep",
        "date"
      ],
      "line": 58,
      "id": "shipping;get-due-date-to-deliver-at-valid-address;;1"
    },
    {
      "cells": [
        "\"12216510\"",
        "20"
      ],
      "line": 59,
      "id": "shipping;get-due-date-to-deliver-at-valid-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4973615,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Get due date to deliver at valid address",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-valid-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 50,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I set the CEP \"12216510\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 55,
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
  "duration": 20100,
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
  "duration": 301068,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 9588430,
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
  "duration": 4361216,
  "status": "passed"
});
formatter.after({
  "duration": 103496969,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 62,
  "name": "Get due date to deliver at invalid address",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-invalid-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 61,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "I set the CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 67,
    "value": "Invalid address"
  }
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-invalid-address;",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 72,
      "id": "shipping;get-due-date-to-deliver-at-invalid-address;;1"
    },
    {
      "cells": [
        "\"99999000\""
      ],
      "line": 73,
      "id": "shipping;get-due-date-to-deliver-at-invalid-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23135653,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Get due date to deliver at invalid address",
  "description": "",
  "id": "shipping;get-due-date-to-deliver-at-invalid-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 61,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 64,
  "name": "I set the CEP \"99999000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 67,
    "value": "Invalid address"
  }
});
formatter.match({
  "location": "CalculaFreteSteps.an_order()"
});
formatter.result({
  "duration": 62865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99999000",
      "offset": 15
    }
  ],
  "location": "CalculaFreteSteps.i_set_the_CEP(String)"
});
formatter.result({
  "duration": 474696,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 13163189,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.an_exception_shall_be_throw_with_following_error_message(String)"
});
formatter.result({
  "duration": 111190,
  "status": "passed"
});
formatter.after({
  "duration": 1511757,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 76,
  "name": "Service to get price and date unavailable (timeout)",
  "description": "",
  "id": "shipping;service-to-get-price-and-date-unavailable-(timeout)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 75,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I set the CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 81,
    "value": "Remote service unavailable"
  }
});
formatter.examples({
  "line": 85,
  "name": "",
  "description": "",
  "id": "shipping;service-to-get-price-and-date-unavailable-(timeout);",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 86,
      "id": "shipping;service-to-get-price-and-date-unavailable-(timeout);;1"
    },
    {
      "cells": [
        "\"99999000\""
      ],
      "line": 87,
      "id": "shipping;service-to-get-price-and-date-unavailable-(timeout);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8748518,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Service to get price and date unavailable (timeout)",
  "description": "",
  "id": "shipping;service-to-get-price-and-date-unavailable-(timeout);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 75,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I set the CEP \"99999000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 81,
    "value": "Remote service unavailable"
  }
});
formatter.match({
  "location": "CalculaFreteSteps.an_order()"
});
formatter.result({
  "duration": 65859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99999000",
      "offset": 15
    }
  ],
  "location": "CalculaFreteSteps.i_set_the_CEP(String)"
});
formatter.result({
  "duration": 243335,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 11244306,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.an_exception_shall_be_throw_with_following_error_message(String)"
});
formatter.result({
  "duration": 82965,
  "status": "passed"
});
formatter.after({
  "duration": 93517236,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 90,
  "name": "Get response from server unformatted",
  "description": "",
  "id": "shipping;get-response-from-server-unformatted",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 89,
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "I set the CEP \u003ccep\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 95,
    "value": "Could not get answer from remote server"
  }
});
formatter.examples({
  "line": 99,
  "name": "",
  "description": "",
  "id": "shipping;get-response-from-server-unformatted;",
  "rows": [
    {
      "cells": [
        "cep"
      ],
      "line": 100,
      "id": "shipping;get-response-from-server-unformatted;;1"
    },
    {
      "cells": [
        "\"99999000\""
      ],
      "line": 101,
      "id": "shipping;get-response-from-server-unformatted;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15368602,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Get response from server unformatted",
  "description": "",
  "id": "shipping;get-response-from-server-unformatted;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 89,
      "name": "@tag6"
    },
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "an order",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "I set the CEP \"99999000\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "I select calculate shipping",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "an exception shall be throw with following error message:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 95,
    "value": "Could not get answer from remote server"
  }
});
formatter.match({
  "location": "CalculaFreteSteps.an_order()"
});
formatter.result({
  "duration": 50463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99999000",
      "offset": 15
    }
  ],
  "location": "CalculaFreteSteps.i_set_the_CEP(String)"
});
formatter.result({
  "duration": 565786,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.i_select_calculate_shipping()"
});
formatter.result({
  "duration": 11107457,
  "status": "passed"
});
formatter.match({
  "location": "CalculaFreteSteps.an_exception_shall_be_throw_with_following_error_message(String)"
});
formatter.result({
  "duration": 120170,
  "status": "passed"
});
formatter.after({
  "duration": 102842658,
  "status": "passed"
});
});