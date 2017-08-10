;(function(window, ht) {
    var E = window.Editor;

    var C = E.Cabinet = function(obj) {
        var color = obj.color,
            doorFrontImg = obj.doorFrontImg,
            doorBackImg = obj.doorBackImg,
            s3 = obj.s3;

        var node = this._node = new ht.Node();
        node.s3(s3);
        node.a('cabinet', this);
        node.s({
            'all.color': color,
            'front.visible': false
        });

        if (Math.random() > 0.5) {
            node.addStyleIcon('alarm', {
                names: ['icon 温度计'],
                face: 'top',
                position: 17,
                autorotate: 'y',
                t3: [0, 16, 0],
                width: 37,
                height: 32,
                textureScale: 4,
                visible: { func: function() { return !!E.alarmVisible; }}
            });
        }

        var door = this._door = new ht.DoorWindow();
        door.setWidth(s3[0]);
        door.setHeight(1);
        door.setTall(s3[1]);
        door.setElevation(0);
        door.setY(s3[2] * 0.5);
        door.setHost(node);
        door.s({
            'all.color': color,
            'front.image': doorFrontImg,
            'front.transparent': true,
            'back.image': doorBackImg,
            'back.uv': [1,0, 1,1, 0,1, 0,0],
            'dw.axis': 'right'
        });

        var serverList = this._serverList = [];
        var max = 6,
            list = E.randomList(max, Math.floor(Math.random() * (max - 2)) + 2);
        var server, h = s3[0] / 4;
        list.forEach(function(r) {
            var server = new E.Server({
                color: 'rgb(51,49,49)',
                frontImg: '服务器 组件精细'
            });
            server.s3(s3[0] - 2, h, s3[2] - 4);
            server.setElevation((r - max * 0.5) * (h + 2));
            server.setHost(node);

            serverList.push(server);
        });
    };

    ht.Default.def('Editor.Cabinet', Object, {
        addToDataModel: function(dm) {
            dm.add(this._door);
            dm.add(this._node);
            this._serverList.forEach(function(s) { 
                s.addToDataModel(dm); 
            });
        },
        p3: function() {
            this._node.p3.apply(this._node, arguments);
        }
    });
}(window, ht));