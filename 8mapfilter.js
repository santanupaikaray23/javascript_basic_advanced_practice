var a = [3,5,6,789,89,23,34,56,67]
a.map((data)=>{console.log(data)})
var a = [3,5,6,789,89,23,34,56,67]
a.map((data)=>{return data})
(9) [3, 5, 6, 789, 89, 23, 34, 56, 67]
var a = [3,5,6,789,89,23,34,56,67]
a.map((data)=>{return data*2})
(9) [6, 10, 12, 1578, 178, 46, 68, 112, 134]

>Map is use to iterate over the Array
>It always return same lengthof output as Input Array
>It is use to apply logics (sum,mul,div) or return html, bind data

var a = [2,3,4,51,23,7,67,78,45,89,10]
a.map((data) => {return `<p>${data*2}</p>`})
 ['<p>4</p>', '<p>6</p>', '<p>8</p>', '<p>102</p>', '<p>46</p>', '<p>14</p>', '<p>134</p>', '<p>156</p>', '<p>90</p>', '<p>178</p>', '<p>20</p>']

var a = [4,34,12,6,7,8,34,21,20,55]
a.filter((data)=> {return data>10})
 [34, 12, 34, 21, 20, 55]
>It is used to filter out the value
>It may or may not return same length of input Array
>It only return those value for which condition/output is true.

