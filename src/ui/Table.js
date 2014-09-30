/**
 * 表格
 *
 * @ignore
 */
define(function(require) {
    var _ = require('underscore').noConflict(),
        base = require('base/base'),
        Widget = require('ui/Widget');

    var tpl = [
        '<table width="100%" border="0" cellspacing="0" cellpadding="0" >',
        '<thead>',
        '<tr class="tr_style"><th>表头</th><th>表搜索头</th></tr>',
        '</thead>',
        '<tbody>',
        '<tr><td>ssssssssssss</td><td>dddddddddddd</td></tr>',
        '<tr><td>dddddddddddd</td><td>ssssssssssss</td></tr>',
        '</tbody>',
        '</table>'
    ].join('');

    var defaultCfg = {
        hidden:false,
        columns: [],
        checkbox:false,
        data: [],
        noDataHtml: '没有数据',
        fixedHead: false
    };

    /**
     * 表格
     *
     * @extends Widget
     * @constructor
     */
    function Table(options) {
        Widget.call(this, options);
    }


    //----------------------------all settings ------------------------------
    //重置Table主元素的ZIndex
    function resetMainZIndex(table){
        table.main.style.zIndex = table.zIndex || '';
    }

    //------------------------------ head -------------------------------
    //表格头事件 鼠标移入单元格
    function titleOverHandler(element, e){

    }
    //表格头事件 鼠标移出单元格
    function titleOutHandler(element, e){

    }
    //表格头事件 鼠标点击单元格
    function titleClickHandler(element, e){

    }
    //表格头事件 拖拽处理（多个方法）
    //创建基准线
    function createDragMark(table){

    }
    //显示基准线
    function showDragMark(table, left){

    }
    //隐藏基准线
    function hideDragMark(table){

    }
    //表格头移动(鼠标事件）
    function headMoveHandler(table, e){

    }
    //表格头点击开始(鼠标事件）
    function dragStartHandler(table, e){

    }
    //表格头拖拽中(鼠标事件）
    function dragingHandler(table, evt){

    }
    //表格头点击结束(鼠标事件）
    function dragEndHandler(table, evt){

    }

    //------------------------------ body -------------------------------
    //获取表格行的html
    function getRowHtml(table, data, index, builderList){

    }
    //表格行鼠标移上事件
    function rowOverHandler(element, e){

    }
    //表格行鼠标移出事件
    function rowOutHandler(element, e){

    }
    //表格行鼠标点击事件
    function rowClickHandler(element, e){
        selectMulti(table, index, !input.checked);
    }
    //行的checkbox点击处理
    function rowCheckboxClick(element, e){
        var index = getAttr(element, 'index');
        selectMulti(this, index);
        resetMutilSelectedStatus(this);
    }
    //全选/全不选
    function toggleSelectAll(arg){

    }
    
    function selectAll(table, checked) {
        selectMulti(table, -1, checked);
        resetMutilSelectedStatus(table);
    }
    //选择
    function selectMulti(table, index, isSelected) {
        var selectedClass = 'row-selected';
        if (index >= 0) {
            //选择一个
        } else if(hasValue(isSelected)){
            //全选
            var inputs = findSelectBox(table, 'checkbox');
            for (var i = 0, len = inputs.length; i < len; i++) {
                var input = inputs[i];
                input.checked = isSelected;
                var inputIndex = getAttr(input, 'index');
                var row = getRow(table, inputIndex);
                if (isSelected) {
                    helper.addPartClasses(table, selectedClass, row);
                } else {
                    helper.removePartClasses(table, selectedClass, row);
                }
            }
        }
    }
    //重置多选的选中状态，包括是否全选和selectedIndex
    function resetMutilSelectedStatus(table) {
        var selectAll = getHeadCheckbox(table);
        var inputs = findSelectBox(table, 'checkbox');
        var allChecked = true;
        var selected = [];
        var cbIdPrefix = getId(table, 'multi-select');

        for (var i = 0, len = inputs.length; i < len; i++) {
            var input = inputs[i];
            if (input.id.indexOf(cbIdPrefix) >= 0) {
                var inputIndex = getAttr(input, 'index');
                if (!input.checked) {
                    allChecked = false;
                }
                else {
                    selected.push(inputIndex);
                }
            }
        }

        setSelectedIndex(table, selected);
        table.fire('select', {selectedIndex: selected});

        selectAll.checked = allChecked;
    }
    //获取第一列的多选框
    function getMultiSelectField(table){

    }



    //------------------------------ foot -------------------------------
    //获取foot的html
    function getFootHtml(table){

    }
    //渲染foot
    function renderFoot(table){

    }


    //------------------------------ main -------------------------------
    //根据元素获取匹配函数
    function getHandlers(table, el, eventType){

    }
    //批量添加Handlers
    function addHandlers(table, el, eventType, handlers){

    }
    //批量删除Handlers
    function removeHandlers(table, el, eventType, handlers){

    }
    //初始化main元素事件处理函数
    function initMainEventhandler(table){
    }

    Table.prototype = {

        //构造函数内顺序执行 main->initStates->initOptions->initPainters

        /**
         * 创建主元素
         *
         * @protected
         * @override
         */
        createMain: function() {
            var div = document.createElement('div');
            div.className = 'classic_01 mb10';
            return div;
        },

        /**
         * 初始化控件状态
         *
         * @param {Object} [options] 初始化参数
         * @protected
         */
        initStates: function(options) {
            this.states = {};
            if (options && typeof options.disabled !== 'undefined') {
                this.states.disabled = options.disabled;
            }
            if (options && typeof options.hidden !== 'undefined') {
                this.states.hidden = options.hidden;
            }
            this.states.columns = [];
            for(var i = 0; i < options.columns.length; i++){
                var column = options.columns[i];
                this.states.columns.push({
                    width: column.width, //列宽，单位：px
                    minWidth: column.minWidth, //最小列宽，单位：px
                    field: column.field //数据字段标示
                });
            };
            this.states.selectedRow = options.selectedRow;
            this.states.data        = options.data;
        },

        /**
         * 初始化参数
         *
         * @param {Object} [options] 初始化参数
         * @protected
         * @override
         */
        initOptions: function(options) {
            this.options = _.extend(defaultCfg, options || {});
        },

        /**
         * 初始化绘制函数
         *
         * @protected
         * @override
         */
        initPainters: function() {
            this.painters = {
                hidden: function(hidden) {
                    this.main.style.display = hidden ? 'none' : '';
                },
                columns: this.renderHeader,
                data:this.renderBody
            };
        },
        //渲染head
        renderHeader: function(columns){
            this.header = document.createElement('div');
            this.header.className = 'ui-table-head';
            var html = '<table border="0" cellspacing="0" cellpadding="0" ><tr class="tr_style">';
            for (var i = 0; i < columns.length; i++) {
                //宽度
                var width = columns[i].width ? columns[i].width : (columns[i].minWidth ? columns[i].minWidth : '');
                //对齐
                var align = columns[i].align ? ' align='+columns[i].align : '';
                //title
                var title = columns[i].title ? ' title='+columns[i].title : '';
                //tips
                var tips = columns[i].tips ? '<i class="ui-table-tips" ></i>' : '';
                //排序
                var sortable = columns[i].sortable ? '<i class="ui-table-sortable" ></i>' : '';
                //
                html += '<th width='+width+align+title+'>'+tips+columns[i].label+sortable+'</th>';
            };
            html += '</tr></table>';
            this.header.innerHTML = html;
            this.main.appendChild(this.header);//追加到main
        },
        //渲染body
        renderBody:function(data){
            this.body = document.createElement('div');
            this.body.className = 'ui-table-body';
            //获取表头table宽度，用来设置body的宽度
            var rowTotalWidth = base.get('.ui-table-head table')[0].offsetWidth + 'px';

            //分两种情况：数据空，数据不空
            if(data.length == 0){
                //数据空，整个表格被替换，不只是body
                this.main.innerHTML = this.options.noDataHtml;
            }else if(data.length > 0){
                //数据不空
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    html += '<div style="width:'+rowTotalWidth+'" class="ui-table-row"><table border="0" cellspacing="0" cellpadding="0" ><tr>';
                    var row = data[i];
                    for (var cellKey in row) {
                        var cellAttr = this.getCellAttrByField(cellKey);
                        var shadowRow = '';
                        if(_.isArray(cellAttr.render)){
                            html+='<td'+cellAttr.width+cellAttr.align+'>'+cellAttr.render[0].call(this, row[cellKey], row)+'</td>';
                            shadowRow+='<td'+cellAttr.width+cellAttr.align+'>'+cellAttr.render[1].call(this, row[cellKey], row)+'</td>';
                        }else{
                            if(_.isFunction(cellAttr.render)){
                                html+='<td rowspan="2" '+cellAttr.width+cellAttr.align+'>'+cellAttr.render.call(this, row[cellKey], row)+'</td>';
                            }else{
                                html+='<td rowspan="2" '+cellAttr.width+cellAttr.align+'>'+row[cellKey]+'</td>';
                            }
                        }
                    };
                    html += (_.isArray(cellAttr.render) ? "</tr><tr>"+shadowRow : '')+ '</tr></table></div>';
                };
                this.body.innerHTML = html;
            }
            this.main.appendChild(this.body);//追加到main

            //设置表格宽度
            base.get('.ui-table-head')[0].style.width = rowTotalWidth;
            base.get('.ui-table-body')[0].style.width = rowTotalWidth;
            base.parent(base.get('.ui-table-body')[0]).style.width = rowTotalWidth;
        },
        getCellAttrByField:function(fieldName){
            var attr = {};
            for (var i = 0; i < this.options.columns.length; i++) {
                var column = this.options.columns[i];
                if(column.field == fieldName){
                    var width = column.width ? column.width : (column.minWidth ? column.minWidth : '');
                    attr['width']  = width ? ' width='+width : '';
                    attr['align']  = column.align ? ' align='+column.align : '';
                    attr['render'] = column.render ? column.render : '';
                }
            };
            return attr;
        },


        //render内部函数 appendMain->initElements->initEvents->repaint->initExtensions
        //其中repaint绘制两次，第一次是初始化，第二次是改变的值
        /**
         * 创建其他元素
         *
         * @protected
         * @override
         */
        initElements: function() {
            this.main.style.display = 'none';
            //this.main.innerHTML = _.template(tpl)({});
            //console.log(this.main.innerHTML);
        },

        /**
         * 绑定事件
         *
         * @protected
         * @override
         */
        initEvents: function() {
            /**
             * 点击
             * @event click
             */
            this.addFiredDOMEvent(this.main, 'click');
        },

        /**
         * 解绑事件
         *
         * @protected
         * @override
         */
        destroyEvents: function() {
            this.removeDOMEvent(this.main);
        },

        //----------------------------- 对外提供的方法 --------------------
        //初始化DOM结构
        initStructure: function() {
            this.realWidth = getWidth(this);
            if (this.realWidth) {
               this.main.style.width = this.realWidth + 'px';
            }

            resetMainZIndex(this);

            initBaseBuilderList(this);
            initResizeHandler(this);
            initMainEventhandler(this);
        },
        getId: function(id) {
            return getId(this, id);
        },
        getBodyCellId: function(rowIndex, fieldIndex){
            return getBodyCellId(this, rowIndex, fieldIndex);
        },
        getRow: function(index) {
            return getRow(this, index);
        },
        //获取表格相关ClassName
        getClass: function(name) {
            return getClass(this, name);
        },
        //设置单元格的文字 isEncodeHtml是布尔类型
        setCellText: function (text, rowIndex, columnIndex, isEncodeHtml) {

        },
        //添加table主元素上事件委托  handlers 处理函数数组或单个函数
        addHandlers: function(eventType, handlers) {
            if (!handlers.length) {
                handlers = [handlers];
            }

            return addHandlers(this, this.main, eventType, handlers);
        },

        //删除table主元素上事件委托  handlers 处理函数数组或单个函数
        removeHandlers: function(eventType, handlers) {
            if (!handlers.length) {
                handlers = [handlers];
            }

            removeHandlers(this, this.main, eventType, handlers);
        },
        //设置数据源，并强制更新
        setDatasource: function(datasource){
            this.repaint();
        },
        //重新绘制某行
        updateRowAt: function(index, data) {

        },
        //获取选中项数据
        getSelectedItems: function() {

        },
        //设置行选中
        setRowSelected: function(index, isSelected) {

        },
        //设置所有行选中
        setAllRowSelected: function(isSelected) {
            this.setRowSelected(-1, isSelected);
        },
    };

    base.inherit(Table, Widget);

    return Table;
});
     