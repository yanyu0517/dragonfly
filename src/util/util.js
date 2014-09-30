/**
 * 工具模块
 *
 * @ignore
 */
define(function(require) {
    var _ = require('underscore').noConflict();

    /**
     * 工具模块
     *
     * @class util
     * @singleton
     */
    var util = {};

    _.extend(
        util,
        require('util/cookie')
    );

    /**
     * 判断是否是undefined类型
     *
     * @param {*} o 判断变量
     * @return true/false 是否为undefined类型
     *
     *     @example
     *     util.isUndefined(object);
     */
    util.isUndefined = function(o) {
        return typeof o === 'undefined';
    };

    /**
     * 模板函数，替换通配符
     *
     * @param {String} s 模板
     * @param {Object} o 模板数据
     * @return {String} 字符串
     *
     *     @example
     *     var html = '<table width="{width}" {attrs} cellspacing="1" class="{className}" style="{style}"></table>';
     *     var data = {width: "300px", className: "class"};
     *     util.sub(html, data);//"<table width="300px" cellspacing="1" class="class" style=""></table>"
     */
    util.sub = function(s, o) {
        var subRegex = /\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g;
        return s.replace ? s.replace(subRegex, function (match, key) {
        return util.isUndefined(o[key]) ? '' : o[key];
        }) : s;
    };

    /**
     * escape html字符串
     *
     * @param {String} a html字符串
     * @return {String} html字符串
     *
     *     @example
     *     var html = '<table></table>';
     *     util.escapeHTML(html, data); // '&lt;table&gt;&lt;/table&gt;'
     */
    util.escapeHTML = function(a){
        a = "" + a;
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                .replace(/>/g, "&gt;");
    };

    return util;
});
