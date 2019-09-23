report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_The_Atlantic_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20190923-131731/backstop_default_The_Atlantic_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_The_Atlantic_Homepage_0_document_0_phone.png",
        "label": "The Atlantic Homepage",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.6,
        "url": "https://www.theatlantic.com/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.10",
          "analysisTime": 88
        },
        "diffImage": "../bitmaps_test/20190923-131731/failed_diff_backstop_default_The_Atlantic_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_The_Atlantic_Homepage_0_document_1_tablet.png",
        "test": "../bitmaps_test/20190923-131731/backstop_default_The_Atlantic_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_The_Atlantic_Homepage_0_document_1_tablet.png",
        "label": "The Atlantic Homepage",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.6,
        "url": "https://www.theatlantic.com/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 4
          },
          "misMatchPercentage": "12.44",
          "analysisTime": 259
        },
        "diffImage": "../bitmaps_test/20190923-131731/failed_diff_backstop_default_The_Atlantic_Homepage_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});