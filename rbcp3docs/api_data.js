define({ "api": [
  {
    "type": "get",
    "url": "/channels/:channel/tags",
    "title": "Get channel tags",
    "name": "GetChannelTags",
    "group": "Channels",
    "version": "3.0.0",
    "description": "<p>Request a list of channel tags</p> ",
    "examples": [
      {
        "title": "JS",
        "content": " $.ajax( 'https://redbullcontentpool.com/channels/airrace/tags',\n    function( data ) {\n     …\n    }\n);",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i https://redbullcontentpool.com/channels/airrace/tags",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/channels/:channel/tags"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Channel[]",
            "optional": false,
            "field": "channel",
            "description": "<p>A channel (or mediaroom)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.id",
            "description": "<p>A unique channel identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.path",
            "description": "<p>A pathname, which can be used to require     certain channel data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.name",
            "description": "<p>The human readable name of the channel</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1364917554784-2019235767\",\n        \"name\": \"Athletes & People\",\n        \"path\": \"people\"\n    },\n    …\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/channels",
    "title": "Get channels",
    "name": "GetChannels",
    "group": "Channels",
    "version": "3.0.0",
    "description": "<p>Request a list of channels. The response will return a list of channel objects containing channel metadata. You will need channel information in order to fetch products later.</p> ",
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax( 'https://redbullcontentpool.com/channels', function( data )\n   {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i https://redbullcontentpool.com/channels",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/channels"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Channel[]",
            "optional": false,
            "field": "channel",
            "description": "<p>A channel (or mediaroom)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.id",
            "description": "<p>A unique channel identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.path",
            "description": "<p>A pathname, which can be used to require     certain channel data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.name",
            "description": "<p>The human readable name of the channel</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1364917554784-2019235767\",\n        \"name\": \"Athletes & People\",\n        \"path\": \"people\"\n    },\n    …\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/channels/fresh/products",
    "title": "Get fresh products",
    "name": "GetFreshProducts",
    "group": "Channels",
    "version": "3.0.0",
    "description": "<p>Request a list of products from a virtual channel</p> ",
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax(\n   'https://redbullcontentpool.com/channels/fresh/products',\n   function( data ) {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i\n   https://redbullcontentpool.com/channels/fresh/products",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/channels/fresh/products"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Product[]",
            "optional": false,
            "field": "product",
            "description": "<p>A product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.id",
            "description": "<p>A unique product identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.title",
            "description": "<p>The product title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.channel",
            "description": "<p>The channel from where this product has     been fetched (see <code>channel.path</code>}</p> "
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "product.published",
            "description": "<p>The publishing date (UTC)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.description",
            "description": "<p>The product description</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "product.locale",
            "description": "<p>The locale of this product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.image",
            "description": "<p>Product image</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_width",
            "description": "<p>Product image width</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_height",
            "description": "<p>Product image height</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "product.videos",
            "description": "<p>Product videos</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.width",
            "description": "<p>video with</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.height",
            "description": "<p>video height</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.videos.src",
            "description": "<p>video src</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.duration",
            "description": "<p>duration in seconds</p> "
          },
          {
            "group": "Success 200",
            "type": "[Product]",
            "optional": true,
            "field": "product.contains",
            "description": "<p>Content for this product</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_images",
            "description": "<p>Number of images available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_videos",
            "description": "<p>Number of videos available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_articles",
            "description": "<p>Number of articles available</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product.variations",
            "description": "<p>Array of named formats and     qualities available to download from the Download API</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1402043812616-2047297282\",\n        \"title\": \"Sebastian Vettel - Action\",\n        \"type\": \"image\",\n        \"channel\": \"international\",\n        \"published\": \"2015-02-12T06:45:54.530Z\",\n        \"description\": \"Sebastian Vettel drives a historic Ferrari 88C at\n   the Red Bull Ring in Spielberg, Austria on May 27th, 2014.\",\n    \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\",\n    \"images\": {\n            \"normal\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=450x&m=^\",\n            \"large\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg\",\n            \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\"\n        }\n    },\n    …\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/product/:id",
    "title": "Get product",
    "name": "GetProduct",
    "group": "Channels",
    "version": "3.0.0",
    "description": "<p>Request a single product</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>Unique channel identifier</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique product identifier</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax(\n   'https://redbullcontentpool.com/products/1402043812616-2047297282',\n   function( data ) {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i\n   https://redbullcontentpool.com/products/1402043812616-2047297282",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/product/:id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Product",
            "optional": false,
            "field": "product",
            "description": "<p>A product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.id",
            "description": "<p>A unique product identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.title",
            "description": "<p>The product title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.channels",
            "description": "<p>A list of channels in which the product     can appear.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.exclusive",
            "description": "<p>(Still to be specified). True if product     is exclusive to the global channel</p> "
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "product.published",
            "description": "<p>The publishing date (UTC)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.description",
            "description": "<p>The product description</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "product.locale",
            "description": "<p>The locale of this product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.image",
            "description": "<p>Product image</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_width",
            "description": "<p>Product image width</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_height",
            "description": "<p>Product image height</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "product.videos",
            "description": "<p>Product videos</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.width",
            "description": "<p>video with</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.height",
            "description": "<p>video height</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.videos.src",
            "description": "<p>video src</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.duration",
            "description": "<p>duration in seconds</p> "
          },
          {
            "group": "Success 200",
            "type": "[Product]",
            "optional": true,
            "field": "product.contains",
            "description": "<p>Content for this product</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_images",
            "description": "<p>Number of images available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_videos",
            "description": "<p>Number of videos available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_articles",
            "description": "<p>Number of articles available</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "product.meta",
            "description": "<p>Product metadata</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.source",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.product_title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.production_date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.geolocation",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.product_number",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.person",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.topic",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.essence_type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.file_size",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.media_type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.raw_image_size",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.dimension",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.vin",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.meta.photo_style",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product.variations",
            "description": "<p>Array of named formats and     qualities available to download from the Download API</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"1402043812616-2047297282\",\n    \"title\": \"Sebastian Vettel - Action\",\n    \"type\": \"image\",\n    \"channel\": \"international\",\n    \"published\": \"2015-02-12T06:45:54.530Z\",\n    \"description\": \"Sebastian Vettel drives a historic Ferrari 88C at the\n   Red Bull Ring in Spielberg, Austria on May 27th, 2014.\",\n    \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\",\n    \"images\": {\n        \"normal\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=450x&m=^\",\n        \"large\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg\"\n    }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Get products",
    "name": "GetProducts",
    "group": "Channels",
    "version": "3.0.0",
    "description": "<p>Request a list of products from a channel</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>Unique channel identifier</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax(\n   'https://redbullcontentpool.com/products',\n   function( data ) {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i\n   https://redbullcontentpool.com/products",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/products"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Product[]",
            "optional": false,
            "field": "product",
            "description": "<p>A product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.id",
            "description": "<p>A unique product identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.title",
            "description": "<p>The product title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.channel",
            "description": "<p>The channel from where this product has     been fetched (see <code>channel.path</code>}</p> "
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "product.published",
            "description": "<p>The publishing date (UTC)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.description",
            "description": "<p>The product description</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "product.locale",
            "description": "<p>The locale of this product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.image",
            "description": "<p>Product image</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_width",
            "description": "<p>Product image width</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_height",
            "description": "<p>Product image height</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "product.videos",
            "description": "<p>Product videos</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.width",
            "description": "<p>video with</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.height",
            "description": "<p>video height</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.videos.src",
            "description": "<p>video src</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.duration",
            "description": "<p>duration in seconds</p> "
          },
          {
            "group": "Success 200",
            "type": "[Product]",
            "optional": true,
            "field": "product.contains",
            "description": "<p>Content for this product</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_images",
            "description": "<p>Number of images available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_videos",
            "description": "<p>Number of videos available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_articles",
            "description": "<p>Number of articles available</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product.variations",
            "description": "<p>Array of named formats and     qualities available to download from the Download API</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1402043812616-2047297282\",\n        \"title\": \"Sebastian Vettel - Action\",\n        \"type\": \"image\",\n        \"channel\": \"international\",\n        \"published\": \"2015-02-12T06:45:54.530Z\",\n        \"description\": \"Sebastian Vettel drives a historic Ferrari 88C at\n   the Red Bull Ring in Spielberg, Austria on May 27th, 2014.\",\n    \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\",\n    \"images\": {\n            \"normal\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=450x&m=^\",\n            \"large\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg\",\n            \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\"\n        }\n    },\n    …\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/products?ids=[list]",
    "title": "Get products (list)",
    "name": "GetProductsList",
    "group": "Channels",
    "version": "3.0.0",
    "description": "<p>Request a list of products from a list of product IDs</p> ",
    "examples": [
      {
        "title": "CURL",
        "content": "curl -i https://redbullcontentpoo;.com/products?ids=[1,2,3,4]",
        "type": "curl"
      }
    ],
    "filename": "app/routes/api.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/products?ids=[list]"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Product[]",
            "optional": false,
            "field": "product",
            "description": "<p>A product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.id",
            "description": "<p>A unique product identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.title",
            "description": "<p>The product title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.channel",
            "description": "<p>The channel from where this product has     been fetched (see <code>channel.path</code>}</p> "
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "product.published",
            "description": "<p>The publishing date (UTC)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.description",
            "description": "<p>The product description</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "product.locale",
            "description": "<p>The locale of this product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.image",
            "description": "<p>Product image</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_width",
            "description": "<p>Product image width</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_height",
            "description": "<p>Product image height</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "product.videos",
            "description": "<p>Product videos</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.width",
            "description": "<p>video with</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.height",
            "description": "<p>video height</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.videos.src",
            "description": "<p>video src</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.duration",
            "description": "<p>duration in seconds</p> "
          },
          {
            "group": "Success 200",
            "type": "[Product]",
            "optional": true,
            "field": "product.contains",
            "description": "<p>Content for this product</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_images",
            "description": "<p>Number of images available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_videos",
            "description": "<p>Number of videos available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_articles",
            "description": "<p>Number of articles available</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product.variations",
            "description": "<p>Array of named formats and     qualities available to download from the Download API</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1402043812616-2047297282\",\n        \"title\": \"Sebastian Vettel - Action\",\n        \"type\": \"image\",\n        \"channel\": \"international\",\n        \"published\": \"2015-02-12T06:45:54.530Z\",\n        \"description\": \"Sebastian Vettel drives a historic Ferrari 88C at\n   the Red Bull Ring in Spielberg, Austria on May 27th, 2014.\",\n    \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\",\n    \"images\": {\n            \"normal\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=450x&m=^\",\n            \"large\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg\",\n            \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\"\n        }\n    },\n    …\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/news",
    "title": "Get news",
    "name": "GetNews",
    "group": "News",
    "version": "3.0.0",
    "description": "<p>Request a list of news.</p> ",
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax( 'https://redbullcontentpool.com/news', function( data )\n   {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i https://redbullcontentpool.com/news",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "News",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/news"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Product[]",
            "optional": false,
            "field": "product",
            "description": "<p>A product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.id",
            "description": "<p>A unique product identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.title",
            "description": "<p>The product title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.channel",
            "description": "<p>The channel from where this product has     been fetched (see <code>channel.path</code>}</p> "
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "product.published",
            "description": "<p>The publishing date (UTC)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.description",
            "description": "<p>The product description</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "product.locale",
            "description": "<p>The locale of this product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.image",
            "description": "<p>Product image</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_width",
            "description": "<p>Product image width</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_height",
            "description": "<p>Product image height</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "product.videos",
            "description": "<p>Product videos</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.width",
            "description": "<p>video with</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.height",
            "description": "<p>video height</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.videos.src",
            "description": "<p>video src</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.duration",
            "description": "<p>duration in seconds</p> "
          },
          {
            "group": "Success 200",
            "type": "[Product]",
            "optional": true,
            "field": "product.contains",
            "description": "<p>Content for this product</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_images",
            "description": "<p>Number of images available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_videos",
            "description": "<p>Number of videos available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_articles",
            "description": "<p>Number of articles available</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product.variations",
            "description": "<p>Array of named formats and     qualities available to download from the Download API</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1402043812616-2047297282\",\n        \"title\": \"Sebastian Vettel - Action\",\n        \"type\": \"image\",\n        \"channel\": \"international\",\n        \"published\": \"2015-02-12T06:45:54.530Z\",\n        \"description\": \"Sebastian Vettel drives a historic Ferrari 88C at\n   the Red Bull Ring in Spielberg, Austria on May 27th, 2014.\",\n    \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\",\n    \"images\": {\n            \"normal\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=450x&m=^\",\n            \"large\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg\",\n            \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\"\n        }\n    },\n    …\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/photography",
    "title": "Get products for photography channel",
    "name": "GetPhotography",
    "group": "Photography",
    "version": "3.0.0",
    "description": "<p>Request a list of products from photography channel</p> ",
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax(\n   'https://redbullcontentpool.com/photography',\n   function( data ) {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i\n   https://redbullcontentpool.com/photography",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Photography",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/photography"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Product[]",
            "optional": false,
            "field": "product",
            "description": "<p>A product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.id",
            "description": "<p>A unique product identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.title",
            "description": "<p>The product title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.channel",
            "description": "<p>The channel from where this product has     been fetched (see <code>channel.path</code>}</p> "
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "product.published",
            "description": "<p>The publishing date (UTC)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.description",
            "description": "<p>The product description</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "product.locale",
            "description": "<p>The locale of this product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.image",
            "description": "<p>Product image</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_width",
            "description": "<p>Product image width</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_height",
            "description": "<p>Product image height</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "product.videos",
            "description": "<p>Product videos</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.width",
            "description": "<p>video with</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.height",
            "description": "<p>video height</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.videos.src",
            "description": "<p>video src</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.duration",
            "description": "<p>duration in seconds</p> "
          },
          {
            "group": "Success 200",
            "type": "[Product]",
            "optional": true,
            "field": "product.contains",
            "description": "<p>Content for this product</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_images",
            "description": "<p>Number of images available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_videos",
            "description": "<p>Number of videos available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_articles",
            "description": "<p>Number of articles available</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product.variations",
            "description": "<p>Array of named formats and     qualities available to download from the Download API</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1402043812616-2047297282\",\n        \"title\": \"Sebastian Vettel - Action\",\n        \"type\": \"image\",\n        \"channel\": \"international\",\n        \"published\": \"2015-02-12T06:45:54.530Z\",\n        \"description\": \"Sebastian Vettel drives a historic Ferrari 88C at\n   the Red Bull Ring in Spielberg, Austria on May 27th, 2014.\",\n    \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\",\n    \"images\": {\n            \"normal\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=450x&m=^\",\n            \"large\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg\",\n            \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\"\n        }\n    },\n    …\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Get products",
    "name": "GetProducts",
    "group": "Products",
    "version": "3.0.0",
    "description": "<p>Request a list of products. The response will return a list of product objects containing product metadata. You will need product in order to fetch media later.</p> ",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "channels",
            "description": "<p>List of channels to restrict    products by. If no channels are entered global is used.</p> "
          },
          {
            "group": "Query",
            "type": "Number",
            "size": "0-99",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Max number of products returned</p> "
          },
          {
            "group": "Query",
            "type": "Number",
            "size": "0..",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>From which offset products should     be returned</p> "
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"image\"",
              "\"video\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>The type of product you     wanna fetch</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax( 'https://redbullcontentpool.com/products', function( data )\n   {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i https://redbullcontentpool.com/products",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Products",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/products"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Product[]",
            "optional": false,
            "field": "product",
            "description": "<p>A product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.id",
            "description": "<p>A unique product identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.title",
            "description": "<p>The product title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.channel",
            "description": "<p>The channel from where this product has     been fetched (see <code>channel.path</code>}</p> "
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "product.published",
            "description": "<p>The publishing date (UTC)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.description",
            "description": "<p>The product description</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "product.locale",
            "description": "<p>The locale of this product</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.image",
            "description": "<p>Product image</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_width",
            "description": "<p>Product image width</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.image_height",
            "description": "<p>Product image height</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "product.videos",
            "description": "<p>Product videos</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.width",
            "description": "<p>video with</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.height",
            "description": "<p>video height</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.videos.src",
            "description": "<p>video src</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.videos.duration",
            "description": "<p>duration in seconds</p> "
          },
          {
            "group": "Success 200",
            "type": "[Product]",
            "optional": true,
            "field": "product.contains",
            "description": "<p>Content for this product</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_images",
            "description": "<p>Number of images available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_videos",
            "description": "<p>Number of videos available</p> "
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "product.num_articles",
            "description": "<p>Number of articles available</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "product.variations",
            "description": "<p>Array of named formats and     qualities available to download from the Download API</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1402043812616-2047297282\",\n        \"title\": \"Sebastian Vettel - Action\",\n        \"type\": \"image\",\n        \"channel\": \"international\",\n        \"published\": \"2015-02-12T06:45:54.530Z\",\n        \"description\": \"Sebastian Vettel drives a historic Ferrari 88C at\n   the Red Bull Ring in Spielberg, Austria on May 27th, 2014.\",\n    \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\",\n    \"images\": {\n            \"normal\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=450x&m=^\",\n            \"large\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg\",\n            \"thumbnail\":\n   \"https://redbullcontentpool.com/channels/international/products/1402043812616-2047297282/img.jpg?s=170x&m=^\"\n        }\n    },\n    …\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/search",
    "title": "Search products",
    "name": "Search",
    "group": "Search",
    "version": "3.0.0",
    "description": "<p>Request a list of products by a given search term. The response will return a list of product objects containing product metadata.</p> ",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>The search term</p> "
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Filter results by type (e.g. image,     video, story, …)</p> "
          },
          {
            "group": "Query",
            "type": "Number",
            "size": "0-99",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Max number of products     returned</p> "
          },
          {
            "group": "Query",
            "type": "Number",
            "size": "0..",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>From which offset products     should be returned</p> "
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "facet",
            "description": "<p>facet:facetName. A facet to filter the     search by. If the type parameter is set then the facet:mediaType     parameter is ignored.</p> "
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": true,
            "field": "queryInfo",
            "description": "<p>If true the query parameters are     returned in the &quot;queryInfo&quot; result field</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "size": "0..",
            "optional": false,
            "field": "quantity",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "facets",
            "description": "<p>List of most frequent facets found in this search</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "results",
            "description": "<p>List of products</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "queryInfo",
            "description": "<p>Information on the query that created this result</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax( 'https://redbullcontentpool.com/search?q=Lindsey+Vonn',\n   function( data )\n   {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i https://redbullcontentpool.com/search?q=Lindsey+Vonn",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Search",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/search"
      }
    ]
  },
  {
    "type": "get",
    "url": "/search/facets/facetName",
    "title": "Search facets",
    "name": "SearchFacets",
    "group": "Search",
    "version": "3.0.0",
    "description": "<p>Request a list of facet values related to a search query</p> ",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "facetName",
            "description": ""
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>The search term</p> "
          },
          {
            "group": "Query",
            "type": "Number",
            "size": "0-99",
            "optional": true,
            "field": "limit",
            "defaultValue": "0",
            "description": "<p>Max number of facet values</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax(\n   'https://redbullcontentpool.com/search/facets/people?q=Lindsey+Vonn',\n   function( data )\n   {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i\n   https://redbullcontentpool.com/search/facets/people?q=Lindsey+Vonn",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Search",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/search/facets/facetName"
      }
    ]
  },
  {
    "type": "get",
    "url": "/search/related/productId",
    "title": "Search related",
    "name": "SearchRelated",
    "group": "Search",
    "version": "3.0.0",
    "description": "<p>Request a list of related products</p> ",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": ""
          },
          {
            "group": "Query",
            "type": "Number",
            "size": "0-99",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Max number of products returned</p> "
          },
          {
            "group": "Query",
            "type": "Number",
            "size": "0..",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>From which offset products should     be returned</p> "
          },
          {
            "group": "Query",
            "type": "String",
            "allowedValues": [
              "\"image\"",
              "\"video\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>The type of product you     wanna fetch</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax(\n   'https://redbullcontentpool.com/search/facets/people?q=Lindsey+Vonn',\n   function( data )\n   {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i\n   https://redbullcontentpool.com/search/facets/people?q=Lindsey+Vonn",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Search",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/search/related/productId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/search/suggest",
    "title": "Search suggestions",
    "name": "SearchSuggestions",
    "group": "Search",
    "version": "3.0.0",
    "description": "<p>Request a list of suggestions for products you might     wanna search for. metadata.</p> ",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>The search term</p> "
          },
          {
            "group": "Query",
            "type": "Number",
            "size": "0-99",
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>Max number of products     returned</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "JS",
        "content": "$.ajax(\n   'https://redbullcontentpool.com/search/suggestions?q=Lindsey+Vonn',\n   function( data )\n   {\n    …\n} );",
        "type": "js"
      },
      {
        "title": "CURL",
        "content": "curl -i\n   https://redbullcontentpool.com/search/suggestions?q=Lindsey+Vonn",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "5xx": [
          {
            "group": "5xx",
            "type": "Object",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>A generic error, something     went south on server side</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"status\": \"Internal Server Error\",\n    \"message\": \"Cannot access database\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Search",
    "sampleRequest": [
      {
        "url": "http://api.rbcp.at/search/suggest"
      }
    ]
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/public/docs/main.js",
    "group": "_Users_lewis_freshfx_rbcp3_api_app_public_docs_main_js",
    "groupTitle": "_Users_lewis_freshfx_rbcp3_api_app_public_docs_main_js",
    "name": ""
  }
] });