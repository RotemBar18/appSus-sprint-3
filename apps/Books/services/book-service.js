import { utilService } from '../../../services/util-service.js'
import { storageService } from './storage-service.js'

export const bookService = {
    query,
    queryGoogle,
    getBookById,
    addReview,
    removeReviewById,
    addBookfromGoogle
}

const KEY = 'books';
var gBooks = [{
        "id": "OXeMG8wNskc",
        "title": "metus hendrerit",
        "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
        "authors": [
            "Barbara Cartland"
        ],
        "publishedDate": 1999,
        "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
        "pageCount": 713,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "en",
        "listPrice": {
            "amount": 109,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "JYOJa2NpSCq",
        "title": "morbi",
        "subtitle": "lorem euismod dictumst inceptos mi",
        "authors": [
            "Barbara Cartland"
        ],
        "publishedDate": 1978,
        "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
        "pageCount": 129,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 44,
            "currencyCode": "EUR",
            "isOnSale": true
        }
    },
    {
        "id": "1y0Oqts35DQ",
        "title": "at viverra venenatis",
        "subtitle": "gravida libero facilisis rhoncus urna etiam",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
        "pageCount": 972,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "he",
        "listPrice": {
            "amount": 108,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {
        "id": "kSnfIJyikTP",
        "title": "dictum",
        "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1978,
        "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
        "pageCount": 303,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
        "language": "en",
        "listPrice": {
            "amount": 30,
            "currencyCode": "EUR",
            "isOnSale": true
        }
    },
    {
        "id": "f4iuVmbuKCC",
        "title": "sem himenaeos aptent",
        "subtitle": "interdum per habitasse luctus purus est",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 2011,
        "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
        "pageCount": 337,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 19,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {
        "id": "U2rfZO6oBZf",
        "title": "mi ante posuere",
        "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 1978,
        "description": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
        "pageCount": 748,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/1.jpg",
        "language": "en",
        "listPrice": {
            "amount": 91,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "xI0wrXaaAcq",
        "title": "non",
        "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
        "pageCount": 65,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
        "language": "he",
        "listPrice": {
            "amount": 90,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {
        "id": "9laHCEdSpFy",
        "title": "tristique",
        "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
        "pageCount": 299,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/11.jpg",
        "language": "he",
        "listPrice": {
            "amount": 176,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "nGhVwZvGCGp",
        "title": "urna ornare gravida",
        "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
        "authors": [
            "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
        "pageCount": 803,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 116,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "Q8Q9Lsd03BD",
        "title": "consequat neque volutpat",
        "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1978,
        "description": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
        "pageCount": 891,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/5.jpg",
        "language": "en",
        "listPrice": {
            "amount": 145,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "bd7a76kARao",
        "title": "risus",
        "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
        "pageCount": 86,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 157,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    },
    {
        "id": "qKyG0vqeO3e",
        "title": "interdum etiam vulputate",
        "subtitle": "velit sapien eget tincidunt nunc tortor",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
        "pageCount": 882,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/17.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 57,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "2RvT48ZNInj",
        "title": "sagittis justo",
        "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
        "authors": [
            "Agatha Christie"
        ],
        "publishedDate": 2011,
        "description": "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
        "pageCount": 598,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
        "language": "en",
        "listPrice": {
            "amount": 167,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {
        "id": "5z2s9pDXAYj",
        "title": "quam ullamcorper himenaeos",
        "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
        "pageCount": 608,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
        "language": "he",
        "listPrice": {
            "amount": 150,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "zBZu5cDEWha",
        "title": "quis",
        "subtitle": "suscipit turpis etiam turpis libero lobortis",
        "authors": [
            "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
        "pageCount": 583,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
        "language": "en",
        "listPrice": {
            "amount": 58,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    },
    {
        "id": "aOI7tQuPZ2f",
        "title": "aliquam aliquet dapibus",
        "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
        "pageCount": 497,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
        "language": "en",
        "listPrice": {
            "amount": 78,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {
        "id": "WBooB82Uvwu",
        "title": "class",
        "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
        "pageCount": 804,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "en",
        "listPrice": {
            "amount": 118,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {
        "id": "xm1z5bbZjlS",
        "title": "vitae",
        "subtitle": "class habitant at commodo semper ligula a bibendum",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 1999,
        "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
        "pageCount": 231,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "he",
        "listPrice": {
            "amount": 60,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "u3j6QIKLlJb",
        "title": "rhoncus vivamus",
        "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
        "authors": [
            "Agatha Christie"
        ],
        "publishedDate": 1978,
        "description": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
        "pageCount": 652,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "he",
        "listPrice": {
            "amount": 110,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "vxYYYdVlEH3",
        "title": "donec mi ullamcorper",
        "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
        "authors": [
            "William Shakespeare"
        ],
        "publishedDate": 2011,
        "description": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
        "pageCount": 904,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 186,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    }
]

var gBooksGoogle = {
    "kind": "books#volumes",
    "totalItems": 472,
    "items": [{
            "kind": "books#volume",
            "id": "nBuA0hmspdMC",
            "etag": "805L2fuXnMg",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/nBuA0hmspdMC",
            "volumeInfo": {
                "title": "Effective JavaScript",
                "subtitle": "68 Specific Ways to Harness the Power of JavaScript",
                "authors": [
                    "David Herman"
                ],
                "publisher": "Addison-Wesley",
                "publishedDate": "2012-11-26",
                "description": "???It???s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You???ll find when you finish the book that you???ve gained a strong and comprehensive sense of mastery.??? ???Paul Irish, developer advocate, Google Chrome ???This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It???s one of the few books on JS that I???ll recommend without hesitation.??? ???Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language???s flexible, expressive features and how to avoid its pitfalls. No matter how long you???ve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma???s JavaScript standardization committee, illuminates the language???s inner workings as never before???helping you take full advantage of JavaScript???s expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you???ll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You???ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript???s functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript???s unique ???run-to-completion??? approach to concurrency",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9780132902250"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0132902257"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 240,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "2.7.6.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=nBuA0hmspdMC&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=nBuA0hmspdMC&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=nBuA0hmspdMC"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=nBuA0hmspdMC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "You???ll find when you finish the book that you???ve gained a strong and comprehensive sense of mastery.??? ???Paul Irish, developer advocate, Google Chrome ???This is not a book for those looking for shortcuts; rather it is hard-won ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "5SaWDwAAQBAJ",
            "etag": "mzpzPCrYp3c",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/5SaWDwAAQBAJ",
            "volumeInfo": {
                "title": "D3 for the Impatient",
                "subtitle": "Interactive Graphics for Programmers and Scientists",
                "authors": [
                    "Philipp K. Janert"
                ],
                "publisher": "O'Reilly Media",
                "publishedDate": "2019-05-02",
                "description": "If you???re in a hurry to learn D3.js, the leading JavaScript library for web-based graphics and visualization, this book is for you. Written for technically savvy readers with a background in programming or data science, the book moves quickly, emphasizing unifying concepts and patterns. Anticipating common difficulties, author Philipp K. Janert teaches you how to apply D3 to your own problems. Assuming only a general programming background, but no previous experience with contemporary web development, this book explains supporting technologies such as SVG, HTML5, CSS, and the DOM as needed, making it a convenient one-stop resource for a technical audience. Understand D3 selections, the library???s fundamental organizing principle Learn how to create data-driven documents with data binding Create animated graphs and interactive user interfaces Draw figures with curves, shapes, and colors Use the built-in facilities for heatmaps, tree graphs, and networks Simplify your work by writing your own reusable components",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9781492046752"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1492046752"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 256,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=5SaWDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=5SaWDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=5SaWDwAAQBAJ&pg=PA220&dq=effective+javascript&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=5SaWDwAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/D3_for_the_Impatient.html?hl=&id=5SaWDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=5SaWDwAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "JavaScript will attempt to insert a semicolon ter???minating a statement. However, \u003cbr\u003e\nthe precise ... 1 A good summary of the rules can be found in Item 6 of \u003cb\u003eEffective\u003c/b\u003e \u003cbr\u003e\n\u003cb\u003eJavaScript\u003c/b\u003e by David Herman (Addison-Wesley Professional). 2 This feature is&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "lT2g_y4VYx0C",
            "etag": "bJ/Wrpp8vMc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/lT2g_y4VYx0C",
            "volumeInfo": {
                "title": "Effective JavaScript",
                "authors": [
                    "Devid Herman"
                ],
                "publisher": "?????????",
                "publishedDate": "2013-04-13",
                "description": "JavaScript???????????????????????????????????????68????????????????????? ?????????Web?????????????????????????????????????????????????????????????????????????????????????????????????????????JavaScript??????????????????Effective??????????????????????????????????????????!???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????1????????????68??????????????????!?????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? (?????????)",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9784798131528"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "4798131520"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 202,
                "printType": "BOOK",
                "categories": [
                    "Technology & Engineering"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "4.1329.533.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=lT2g_y4VYx0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=lT2g_y4VYx0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "ja",
                "previewLink": "http://books.google.com/books?id=lT2g_y4VYx0C&pg=PT268&dq=effective+javascript&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=lT2g_y4VYx0C&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=lT2g_y4VYx0C"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Effective_JavaScript-sample-epub.acsm?id=lT2g_y4VYx0C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Effective_JavaScript-sample-pdf.acsm?id=lT2g_y4VYx0C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=lT2g_y4VYx0C&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "... Good Parts ????????????????????????????????????????????????????????????(Douglas Crockford ???\u003cbr\u003e\n??????????????????????????????????????????????????????2008 ???) ??????????????????????????????????????????\u003cbr\u003e\n??????(ZUNIGA)????????????????????????????????????????????? \u003cb\u003eEffective JavaScript\u003c/b\u003e."
            }
        },
        {
            "kind": "books#volume",
            "id": "gg20DgAAQBAJ",
            "etag": "CodoIEUIjT4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/gg20DgAAQBAJ",
            "volumeInfo": {
                "title": "Effective JavaScript ?????????(?????????)",
                "subtitle": "",
                "authors": [
                    "David Herman"
                ],
                "publisher": "??????????????????????????????",
                "publishedDate": "2013-07-29",
                "description": "?????? JavaScript ??? 68 ??????????????? JavaScript ????????? Brendan Eich ???????????? ???????????????????????????????????? David ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? JavaScript ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? JavaScript ???????????????????????????????????? ???Paul Irish???Google Chrome ????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? JavaScript ???????????? ???Alex Russell???TC39 ?????????Google ??????????????? ?????????????????? JavaScript??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? JavaScript ????????????Effective JavaScript ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????? David Herman ?????? Ecma ??? JavaScript ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? JavaScript ????????????????????????????????? JavaScript ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? Effective JavaScript ?????? 68 ???????????????????????????????????????????????? JavaScript ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? JavaScript ???????????????????????????????????????????????????????????????concurrency?????????????????????????????? ??? ??????????????????????????????????????????prototype?????????????????????????????? ??? ????????????????????????dictionary??????????????????????????????????????????????????????????????? ??? ??? JavaScript ????????????????????????variable scoping???????????????????????????????????? ??? ????????? JavaScript ?????????????????????????????????????????????????????????options objects?????????????????????method chaining??? ??? ???????????? JavaScript ????????????run-to-completion??????????????? David Herman???Mozilla Research ??????????????????????????? Ecma TC39 ????????????????????????????????? JavaScript ?????????????????????????????? Grinnell College ???????????????????????????????????? Northeastern University ??????????????????????????????????????? #???????????? GOTOP Information Inc.",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9789862768921"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "9862768924"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 244,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=gg20DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=gg20DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "zh-CN",
                "previewLink": "http://books.google.com/books?id=gg20DgAAQBAJ&pg=PR3&dq=effective+javascript&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=gg20DgAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript_%E4%B8%AD%E6%96%87%E7%89%88_%E9%9B%BB%E5%AD%90%E6%9B%B8.html?hl=&id=gg20DgAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Effective_JavaScript_%E4%B8%AD%E6%96%87%E7%89%88_%E9%9B%BB%E5%AD%90%E6%9B%B8-sample-pdf.acsm?id=gg20DgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=gg20DgAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "\u003cb\u003eEffective JavaScript\u003c/b\u003e ?????????????????????????????? Effective Software Development ??????\u003cbr\u003e\n??????????????????????????????,??????????????? JavaScript ????????????????????????????????????,Dave \u003cbr\u003e\nHerman ??? \u003cb\u003eEffective JavaScript\u003c/b\u003e ???????????????????????????????????? JavaScript ????????????\u003cbr\u003e\n??????&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "haVQAAAAMAAJ",
            "etag": "I4yZyWFh38w",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/haVQAAAAMAAJ",
            "volumeInfo": {
                "title": "JavaScript Unleashed",
                "authors": [
                    "Richard Wagner"
                ],
                "publisher": "Sams",
                "publishedDate": "1997",
                "description": "This second edition provides the reader with a thorough understanding of the JavaScript scripting language. Using the provided examples and explanations, the reader will be able to apply his or her new JavaScript skills to the development of interactive content for the World Wide Web. The CD-ROM contains code from the book, sample applications, and third-party products.",
                "industryIdentifiers": [{
                    "type": "OTHER",
                    "identifier": "UOM:39015043102311"
                }],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 1014,
                "printType": "BOOK",
                "categories": [
                    "JavaScript (Computer program language)"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.3.1.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=haVQAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=haVQAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=haVQAAAAMAAJ&q=effective+javascript&dq=effective+javascript&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=haVQAAAAMAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript_Unleashed.html?hl=&id=haVQAAAAMAAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=haVQAAAAMAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Along this line , most of the JavaScript objects have HTML tags that they \u003cbr\u003e\nrepresent . If you have little background in HTML , you will discover that to be an \u003cbr\u003e\n\u003cb\u003eeffective JavaScript\u003c/b\u003e developer , you also need to learn the ins and outs of HTML ."
            }
        },
        {
            "kind": "books#volume",
            "id": "HE-HKJ-b6PgC",
            "etag": "wzdzlP+XTy4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/HE-HKJ-b6PgC",
            "volumeInfo": {
                "title": "Internet Audio Sourcebook",
                "authors": [
                    "Lee Purcell",
                    "Jordan Hemphill"
                ],
                "publisher": "Wiley",
                "publishedDate": "1997-09-16",
                "description": "Enliven your Web pages with voices, sound, and music. New audio techniques can be used to create musical backdrops to Web pages, produce Web presentations with narration, provide audio help to Web page visitors, broadcast radio material over the Web, and communicate globally using audio conferencing and Internet phones. Internet Audio Sourcebook explains the processes, tools, and techniques for enhancing Web sites with sound, using JavaScript, HTML, Java applets, and advanced sound-editing and production applications. CD-ROM contains fully functional demos of top-notch sound processing applications, such as Sonic Foundry's Sound Forge and Hohner Midia's Samplitude Studio.",
                "industryIdentifiers": [{
                        "type": "ISBN_10",
                        "identifier": "0471191507"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780471191506"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 553,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.0.1.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=HE-HKJ-b6PgC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=HE-HKJ-b6PgC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=HE-HKJ-b6PgC&q=effective+javascript&dq=effective+javascript&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=HE-HKJ-b6PgC&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Internet_Audio_Sourcebook.html?hl=&id=HE-HKJ-b6PgC"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=HE-HKJ-b6PgC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Part Two ??? Chapter 5 Using Basic \u003cb\u003eJavaScript\u003c/b\u003e for Audio Control \u003cb\u003eJavaScript\u003c/b\u003e is a \u003cbr\u003e\ncompact, adaptable scripting language for ... The downside of this, of course, is \u003cbr\u003e\nthat you have to learn a new language in order to use \u003cb\u003eJavaScript effectively\u003c/b\u003e."
            }
        },
        {
            "kind": "books#volume",
            "id": "--gvDwAAQBAJ",
            "etag": "kWW6nrm/Bds",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/--gvDwAAQBAJ",
            "volumeInfo": {
                "title": "An Effective Guide to Modern JavaScript",
                "subtitle": "(ECMAScript 2017 / ES 8)",
                "authors": [
                    "Chong Lip Phang"
                ],
                "publisher": "Chong Lip Phang",
                "publishedDate": "2017-08-08",
                "description": "ES8 was finalized in June 2017. This book: - effectively teaches standard JavaScript from A to Z. - includes all the JavaScript common APIs, presented in a highly organized fashion. - lists in the Appendix the new features introduced in each JavaScript edition from ES5 to ES8 and beyond, and illustrates all of them. - clearly explains advanced concepts such as closures, Proxy, generators, Promise, async functions, and Atomics. - covers OOP techniques -- classical JavaScript OOP, the new 'class' syntax, data encapsulation, multiple inheritance, abstract classes, object relay etc. - teaches you how to define and use iterators and various iterables. - turns you into an efficient JavaScript coder.",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9781974207923"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1974207927"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 127,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=--gvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=--gvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=--gvDwAAQBAJ&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=--gvDwAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/An_Effective_Guide_to_Modern_JavaScript.html?hl=&id=--gvDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/An_Effective_Guide_to_Modern_JavaScript-sample-pdf.acsm?id=--gvDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=--gvDwAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This book: - effectively teaches standard JavaScript from A to Z. - includes all the JavaScript common APIs, presented in a highly organized fashion. - lists in the Appendix the new features introduced in each JavaScript edition from ES5 to ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "ofVSAAAAMAAJ",
            "etag": "LXWKAM2fUvA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/ofVSAAAAMAAJ",
            "volumeInfo": {
                "title": "Effective Website Development",
                "subtitle": "Tools and Techniques",
                "authors": [
                    "Keith Darlington"
                ],
                "publisher": "Addison Wesley Longman",
                "publishedDate": "2005",
                "description": "[Shelving category: Internet, Web Programming] The phenomenal growth of the World Wide Web has brought with it the need for people to program increasingly sophisticated websites in order to display information in an intuitive and efficient way. Effective Website Development examines the entire Web development project lifecycle and covers a range of Web development tools and techniques including XML, XHTML and Dreamweaver. The AUTHOR takes a step-by-step approach, leading from one concept to the next, and provides the reader with the expertise to design, build and maintain dynamic websites. This book is ideal for undergraduates taking courses in Web design or Internet computing and, as it assumes no prior Web programming knowledge, is also the perfect introduction for anyone with an interest in this exciting subject area. Features Split into four parts to reflect the various stages of a website's development. Easily accessible, jargon-free language. Loaded with examples to reinforce your understanding of the concepts. Uses complete Web programs rather than fragments so that you can run and test the whole program directly. Exercises throughout and at the END of chapters to help you practice the concepts and gain a genuine understanding. Keith Darlington is a senior lecturer at London South Bank University. There is an accompanying website for this book containing resources for both students and lecturers at www.booksites.net/darlington.",
                "industryIdentifiers": [{
                    "type": "OTHER",
                    "identifier": "UOM:39015062556314"
                }],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 476,
                "printType": "BOOK",
                "categories": [
                    "Web sites"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.1.2.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=ofVSAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=ofVSAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=ofVSAAAAMAAJ&q=effective+javascript&dq=effective+javascript&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=ofVSAAAAMAAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_Website_Development.html?hl=&id=ofVSAAAAMAAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=ofVSAAAAMAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "\u003cb\u003eJavaScript\u003c/b\u003e is case - sensitive - use lower case for \u003cb\u003eJavaScript\u003c/b\u003e statements . \u003cbr\u003e\n\u003cb\u003eJavaScript\u003c/b\u003e source files are contained within the &lt; script &gt; . . . &lt; / script &gt; tags . You \u003cbr\u003e\ncan specify which language is being used by means of the language attribute in \u003cbr\u003e\nthe&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "uTbZCSn4TjIC",
            "etag": "Xu3+isezUoU",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/uTbZCSn4TjIC",
            "volumeInfo": {
                "title": "The Unofficial Guide?to Macromedia Dreamweaver 8",
                "authors": [
                    "Lynn Kyle"
                ],
                "publisher": "Wiley",
                "publishedDate": "2006-03-27",
                "description": "The inside scoop...for when you want more than the official line! You can dream big with Macromedia's robust Dreamweaver Web design software, but to use it with confidence you need to understand its quirks and shortcuts. Find out what the manual doesn't always tell you in this insider's guide to using Dreamweaver in the real world. Must you know HTML to design Web pages? How do the pros add data to Web sites? From working with frames and forms to jumping into multimedia ina big way--first get the official way, then the best way from an expert. Unbiased coverage on getting the most out of Dreamweaver, including how to set up a site structure, design your interface, and use graphics, media, and text to draw visitors Savvy, real-world advice on topics from using templates, libraries,and application panels, to adding scripts and live data Time-saving techniques and practical guidance on using Flash(r)and other media, adding forms, and more ways to create, build, andmanage your Web site effectively Tips and hacks on how to increase productivity and avoid pitfalls Sidebars and tables on sketching a site flow plan, selecting ahosting service, and checking files in and out Watch for these graphic icons in every chapter to guide you to specific practical information. * Bright Ideas are smart innovations that will save you time or hassle. * Hacks are insider tips and shortcuts that increase productivity. * When you see Watch Out! heed the cautions or warnings to help you avoid commonpitfalls. * And finally, check out Inside Scoops for practical insights from the author. It's like having your own expert at your side!",
                "industryIdentifiers": [{
                        "type": "ISBN_10",
                        "identifier": "0471774979"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780471774976"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 505,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.2.2.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=uTbZCSn4TjIC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=uTbZCSn4TjIC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=uTbZCSn4TjIC&q=effective+javascript&dq=effective+javascript&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=uTbZCSn4TjIC&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/The_Unofficial_Guide_to_Macromedia_Dream.html?hl=&id=uTbZCSn4TjIC"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=uTbZCSn4TjIC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "First, here are a few sites with \u003cb\u003egood JavaScript\u003c/b\u003e: ??? www.yahoo.com: The front \u003cbr\u003e\npage of Yahoo! uses a very nice JavaScript in association with its search box. If \u003cbr\u003e\nyou click one of the search types (for example, Local), the color around the \u003cbr\u003e\nsearch&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "25AEAwAAQBAJ",
            "etag": "qR7sCcJHbLM",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/25AEAwAAQBAJ",
            "volumeInfo": {
                "title": "You Don't Know JS: Scope & Closures",
                "authors": [
                    "Kyle Simpson"
                ],
                "publisher": "\"O'Reilly Media, Inc.\"",
                "publishedDate": "2014-03-10",
                "description": "No matter how much experience you have with JavaScript, odds are you don???t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You???ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset. Like other books in the \"You Don???t Know JS\" series, Scope and Closures dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can achieve true JavaScript mastery. Learn about scope, a set of rules to help JavaScript engines locate variables in your code Go deeper into nested scope, a series of containers for variables and functions Explore function- and block-based scope, ???hoisting???, and the patterns and benefits of scope-based hiding Discover how to use closures for synchronous and asynchronous tasks, including the creation of JavaScript libraries",
                "industryIdentifiers": [{
                        "type": "ISBN_13",
                        "identifier": "9781449335540"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1449335543"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 98,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.7.8.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=25AEAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=25AEAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=25AEAwAAQBAJ&printsec=frontcover&dq=effective+javascript&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=25AEAwAAQBAJ&dq=effective+javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/You_Don_t_Know_JS_Scope_Closures.html?hl=&id=25AEAwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=25AEAwAAQBAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "No matter how much experience you have with JavaScript, odds are you don???t fully understand the language."
            }
        }
    ]
}

function query(filterBy) {
    if (filterBy) {
        var { name, maxPrice, minPrice } = filterBy
        maxPrice = maxPrice ? maxPrice : Infinity
        minPrice = minPrice ? minPrice : 0
        const filteredBooks = gBooks.filter(book => {
            return book.title.includes(name) && book.listPrice.amount > minPrice && book.listPrice.amount < maxPrice
        })
        return Promise.resolve(filteredBooks)
    }
    _saveBooksToStorage();
    return Promise.resolve(gBooks)
}

function queryGoogle(filterBy) {
    if (filterBy) {
        const filteredBooks = gBooksGoogle.items.filter(book => {
            return book.volumeInfo.title.toLowerCase().includes(filterBy)
        })
        return Promise.resolve(filteredBooks)
    }
    // _saveBooksToStorage();
    return Promise.resolve(gBooksGoogle.items)
}

function addBookfromGoogle(bookId) {
    let book = gBooksGoogle.items.find(book => book.id === bookId)
    const { title } = book.volumeInfo;
    const { subtitle } = book.volumeInfo;
    const { language } = book.volumeInfo;
    const authors = book.volumeInfo.authors;
    const { publishedDate } = book.volumeInfo;
    const { pageCount } = book.volumeInfo;
    const { categories } = book.volumeInfo;
    const { thumbnail } = book.volumeInfo.imageLinks;
    const { description } = book.volumeInfo;
    const amount = (book.saleInfo.saleability === "NOT_FOR_SALE") ? " NOT FOR SALE" : book.saleInfo.saleability;
    const currencyCode = book.saleInfo.country;
    const isOnSale = (book.saleInfo.saleability === "NOT_FOR_SALE") ? false : true
    book = _createBook(title, subtitle, authors, publishedDate, pageCount, categories, thumbnail, description, amount, currencyCode, isOnSale, language);
    addBook(book)
    return Promise.resolve()
}

function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function(book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();
}

function addBook(book) {
    gBooks.unshift(book)
    _saveBooksToStorage();
}

function getBookById(bookId) {
    var book = gBooks.find(function(book) {
        return bookId === book.id
    })
    return Promise.resolve(book)
}

function addReview(bookId, review) {
    const book = gBooks.find(book => book.id === bookId)
    if (!book) return Promise.reject('No Book Id Found in add Review Func')
    if (!book.reviews) book.reviews = []
    book.reviews.push(review)
    return Promise.resolve()
}

function removeReviewById(book, reviewId) {
    const reviewIdx = book.reviews.findIndex(review => reviewId === review.id)
    book.reviews.splice(reviewIdx, 1)
    return Promise.resolve()
}

function updateBook(bookId, newSpeed) {
    var book = gBooks.find(function(book) {
        return book.id === bookId;
    })
    book.speed = newSpeed;
    _saveBooksToStorage();
}

function _createBook(title, subtitle, authors, publishedDate, pageCount, categories, thumbnail, description, amount, currencyCode, isOnSale, language) {
    return {
        id: utilService.makeId(),
        title,
        subtitle,
        authors,
        publishedDate,
        pageCount,
        language,
        categories,
        thumbnail,
        description,
        listPrice: {
            amount,
            currencyCode,
            isOnSale,
        }
    }
}

function _createBooks() {
    var books = storageService.loadFromStorage(KEY)
    if (!books || !books.length) {
        books = []
        for (let i = 0; i < 5; i++) {
            var name = gVendors[i]
            books.push(_createBook(name))
        }
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _saveBooksToStorage() {
    storageService.saveToStorage(KEY, gBooks)
}