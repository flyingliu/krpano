$(function() {


    let numbers = $('.g-number');

    setInterval(() => {
        Array.prototype.slice.call(numbers).forEach((key) => {
            $(key).attr('data-digit', parseInt(Math.random() * 9));
        });
    }, 2000);

    $.ajax('http://jsonplaceholder.typicode.com/posts/1', {
        dataType: 'jsonp'
    }).then(function(data) {
        console.log(data);
    });
});