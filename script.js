function parseUrl(url) {
    let hash = url.match(/#[A-Za-z]+/g)?.join(", ");

    let hostname = url.split("/")?.[2];

    let pathname = url.match(/\/\w+\/\w+.\w+/g)?.join(", ");

    //for query params
    let query = url
        .match(/\?\w+\=\w+/g)
        ?.join(", ")
        ?.replace(/\?/g, "");

    return {
        hostname,
        pathname,
        hash,
        query
    };
}

let obj = parseUrl("http://ffwgency.com/do/any.php?a=1#foo");

console.log(obj.hash);
console.log(obj.hostname);
console.log(obj.pathname);
// console.log(obj.query);
