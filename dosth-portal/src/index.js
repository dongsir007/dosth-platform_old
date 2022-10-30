import $ from 'jquery'

import './css/index.css'

import './css/index.less'

import logo from './image/logo.png'

$(function() {
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'blue')

    $(".box").attr("src", logo)
})

// 定义装饰器函数
function info(target) {
    target.info = "Person info"
}

@info
class Person {}

console.log(Person.info)