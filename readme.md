# synonyms-pl

Finds synonyms for polish words

## Example code:
### ES5:

```javascript
var synonyms = require("synonyms-pl");

synonyms("jestem").then(function(syns) {
	console.log("syns", syns.join(", "));
}).catch(function(err) {
	console.error(err);
});
```

### ES6:

```javascript
import synonyms from "synonyms-pl";

synonyms("jestem").then((syns) => {
	console.log(`Syns: ${syns.join(", ")}`);
}).catch((err) => {
	console.error(err);
});
```