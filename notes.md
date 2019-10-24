### Startland News
1. Replace tablet with desktop
    {
      "label": "desktop",
      "width": 1366,
      "height": 768
    }
2. To hide the ads rotating
    ".mom-e3lanat-wrap"
3. Other things that may need to be hid: 
 - sponsors
 - Headline

### Coding and cocktails

1. Replace URL and label: https://codingandcocktails.kcwomenintech.org/
2. We want to register
3. {
      "keyPressSelectors": [
        {
          "selector": "#mce-EMAIL",
          "keyPress": "andie@me.com"
        },
        {
          "selector": "#mce-FNAME",
          "keyPress": "Andie"
        },
        {
          "selector": "#mce-LNAME",
          "keyPress": "Johnson"
        }

        "clickSelector": "#mc-embedded-subscribe"

### The problem child: Southern Enduro Series

url: https://www.southernendurotour.com/



{
  "id": "backstop_default",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "desktop",
      "width": 1366,
      "height": 768
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
    {
      "keyPressSelectors": [
        {
          "selector": "#mce-EMAIL",
          "keyPress": "andiesj@me.com"
        },
        {
          "selector": "#mce-FNAME",
          "keyPress": "Andie"
        },
        {
          "selector": "#mce-LNAME",
          "keyPress": "Johnson"
        }
      ],
      "label": "",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 1000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "#mc-embedded-subscribe",
      "postInteractionWait": 1000,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}

