Consuming an API
1) endpoint
2) GET or POST or whatever
3) What kind of data  - JSON or XML
4) What that data looks like and how much


USER X

1) click on button
2) utilize the endpoint
3)  get data about a random image - if ok, parse
   3) else handle it - error?
5) do something with parsed data
   6) display random image
6) handle errors

Last time - Fetch => built in to Javascript (native)
React -> Axios
axios.verb()
.then()
.catch()