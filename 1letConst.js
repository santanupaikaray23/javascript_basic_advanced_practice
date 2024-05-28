var > we are able to redeclare and reassign
let > We can't redeclare but we can reassign
const> We cann't redeclare but nor reassign.
var a = 10
undefined
> var a = 12
undefined
> a
12
> a
12
> let b = 20
undefined
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 24
24
> const c = 10
undefined
> c
10
> const c =20
Uncaught SyntaxError: Identifier 'c' has already been declared
> c
10
