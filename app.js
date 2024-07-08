//  core module

const readline = require("readline");
const fs = require("fs");
const http = require("http");
const url = require("url");
const events = require("events");

// USER DEFINED MODULES
const replaceHtml = require("./Modules/replaceHtml");
const user = require("./Modules/user");
// lecture 8 Creating a simple web server

const html = fs.readFileSync("./Template/index.html", "utf-8");

let products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8"));

let productListHtml = fs.readFileSync("./Template/product-list.html", "utf-8");

let productDetailHtml = fs.readFileSync(
  "./Template/product-details.html",
  "utf-8"
);

// STEP 1 : CREATE A SERVER

// const server = http.createServer((request, response) => {
//   let { query, pathname: path } = url.parse(request.url, true);

//   if (path === "/" || path.toLocaleLowerCase() === "/home") {
//     response.writeHead(200, {
//       "Content-Type": "text/html",
//       "my-header": "Hello , babi world",
//     });
//     response.end(html.replace("{{%CONTENT%}}", "you are in product"));
//   } else if (path.toLocaleLowerCase() === "/about") {
//     response.writeHead(200, {
//       "Content-Type": "text/html",
//       "my-header": "Hello , babi world",
//     });
//     response.end(html.replace("{{%CONTENT%}}", "You are in About page"));
//   } else if (path.toLocaleLowerCase() === "/contact") {
//     response.writeHead(200, {
//       "Content-Type": "text/html",
//       "my-header": "Hello , babi world",
//     });
//     response.end(html.replace("{{%CONTENT%}}", "You are in Contact page"));
//   } else if (path.toLocaleLowerCase() === "/products") {
//     if (!query.id) {
//       let productHtmlArray = products.map((product) => {
//         return replaceHtml(productListHtml, product);
//       });
//       let productResponseHtml = html.replace(
//         "{{%CONTENT%}}",
//         productHtmlArray.join(",")
//       );
//       response.writeHead(200, {
//         "Content-Type": "text/html",
//       });
//       response.end(productResponseHtml);
//     } else {
//       let prod = products[query.id];
//       let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
//       response.end(html.replace("{{%CONTENT%}}", productDetailResponseHtml));
//     }
//   } else {
//     response.writeHead(404, {
//       "Content-Type": "text/html",
//       "my-header": "Hello , babi world",
//     });
//     response.end(html.replace("{{%CONTENT%}}", "ERROR 404 : PAGE NOT FOUND"));
//   }
// });

// STEP 2 : LISTEN TO REQUEST ON PORT 8000

const server = http.createServer();

server.on("request", (request, response) => {
  let { query, pathname: path } = url.parse(request.url, true);

  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Hello , babi world",
    });
    response.end(html.replace("{{%CONTENT%}}", "you are in product"));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Hello , babi world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in About page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Hello , babi world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in Contact page"));
  } else if (path.toLocaleLowerCase() === "/products") {
    if (!query.id) {
      let productHtmlArray = products.map((product) => {
        return replaceHtml(productListHtml, product);
      });
      let productResponseHtml = html.replace(
        "{{%CONTENT%}}",
        productHtmlArray.join(",")
      );
      response.writeHead(200, {
        "Content-Type": "text/html",
      });
      response.end(productResponseHtml);
    } else {
      let prod = products[query.id];
      let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
      response.end(html.replace("{{%CONTENT%}}", productDetailResponseHtml));
    }
  } else {
    response.writeHead(404, {
      "Content-Type": "text/html",
      "my-header": "Hello , babi world",
    });
    response.end(html.replace("{{%CONTENT%}}", "ERROR 404 : PAGE NOT FOUND"));
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});

// lecture 21 - Event Emitter

let myEmitter = new user();

// myEmitter.on("sleep", () => {
//   console.log("Good Night");
// });

// myEmitter.emit("sleep");
// myEmitter.emit("userCreated");

// myEmitter.on("userCreated", () => {
//   console.log("User Created Event Emitted");
// });

myEmitter.on("sleep", () => {
  console.log("Good Night");
});

myEmitter.on("userCreated", (id, name) => {
  console.log(`A new user created with id ${id} and name ${name}`);
});

myEmitter.emit("sleep");
myEmitter.emit("userCreated", 1, "Babita");
