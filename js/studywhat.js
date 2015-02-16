var options = {
    item: '<li><h3 class="name"></h3></li>'
};

var values = [
    { name: '社工學位', chi: 3, eng: 3, math: 2, gen: 2 }
    , { name: '社工文憑', chi: 3, eng: 3, math: 2, gen: 2 }
];

var hackerList = new List('result-list', options, values);