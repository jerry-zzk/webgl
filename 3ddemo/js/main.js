;(function(window, ht) {
    var E = window.Editor;

    var g3d = E.main = new ht.graph3d.Graph3dView();

    var easing = function (t) {
        return 1 - (--t) * t * t * t;
    };

    // 设置中心位置
    var setCenter = function(center, finish) {
        if (!center) return;
        var c = g3d.getCenter().slice(0),
            dx = center[0] - c[0],
            dy = center[1] - c[1],
            dz = center[2] - c[2];
        // 启动 500 毫秒的动画过度
        ht.Default.startAnim({
            duration: 500,
            easing: easing,
            finishFunc: finish || function() {},
            action: function(v, t) {
                g3d.setCenter([
                    c[0] + dx * v,
                    c[1] + dy * v,
                    c[2] + dz * v
                ]);
            }
        });
    };

    // 设置眼睛位置
    var setEye = function(eye, finish) {
        if (!eye) return;
        var e = g3d.getEye().slice(0),
            dx = eye[0] - e[0],
            dy = eye[1] - e[1],
            dz = eye[2] - e[2];
        // 启动 500 毫秒的动画过度
        ht.Default.startAnim({
            duration: 500,
            easing: easing,
            finishFunc: finish || function() {},
            action: function(v, t) {
                g3d.setEye([
                    e[0] + dx * v,
                    e[1] + dy * v,
                    e[2] + dz * v
                ]);
            }
        });
    };

    E.focusTo = function(center, eye) {
        center = center || [0, 0, 0];
        setCenter(center);

        eye = eye || [780, 916, 841];
        setEye(eye);
    };

    E.setAlarmVisible = function(value) {
        E.alarmVisible = value;
        g3d.invalidateAll();
    };

    g3d.isMovable = function() { return false; };
    g3d.mi(function(e) {
        if (e.kind !== 'doubleClickData') 
            return;
        var data = e.data, p3;

        if (data.a('cabinet')) 
            p3 = data.p3();
        else {
            host = data.getHost();
            if (host && host.a('cabinet')) {
                p3 = host.p3();
            }
        }

        if (!p3) return;

        setCenter(p3);
        setEye([p3[0], 211, p3[2] + 247]);
    });

    E.focusTo();

    var view = g3d.getView();
    view.style.background = '#222222';

    var dm = g3d.dm();

    // 创建墙体
    var wall = new ht.CSGShape();
    wall.setClosePath(true);
    wall.setTall(240);
    wall.setElevation(120);
    wall.setThickness(20);
    wall.setPoints([
        {x: -400, y: -600},
        {x: 400, y: -600},
        {x: 400, y: 480},
        {x: 200, y: 480},
        {x: 200, y: 600},
        {x: -400, y: 600}
    ]);
    wall.s({
        'shape.border.width': 20,
        'shape.border.color': '#898989',
        'all.color': '#5D5D5D',
        'front.color': 'lightgray',
        'back.color': 'lightgray',
        'csg.color': '#DDDDDD'
    });
    dm.add(wall);

    // 地板
    var floor = new ht.Shape();
    floor.setClosePath(true);
    floor.setThickness(-1);
    floor.setTall(1);
    floor.setElevation(-0.51);
    floor.setPoints([
        {x: -400, y: -600},
        {x: 400, y: -600},
        {x: 400, y: 480},
        {x: 200, y: 480},
        {x: 200, y: 600},
        {x: -400, y: 600}
    ]);
    floor.s({
        'repeat.uv.length': 40,
        'shape.border.width': 0,
        'shape3d.top.image': './assets/floor.png'
    });
    dm.add(floor);

    // 门
    var door = new ht.DoorWindow();
    door.setTall(200);
    door.setElevation(100);  
    door.setWidth(100);
    door.setHost(wall);
    door.s({
        'attach.index': 2,
        'attach.offset': 100,
        'attach.offset.opposite': true,
        'dw.axis': 'left',
        'all.image': 'door',
        'front.uv': [1,0, 1,1, 0,1, 0,0]
    });
    // door.setExpanded(true, true);
    dm.add(door);

    // 空调
    var air = new ht.Node();
    air.setTall(120);
    air.setElevation(60);
    air.setWidth(60);
    air.setHeight(30);
    air.setHost(wall);
    air.s({
        'front.image': '冷却',
        'all.color': 'rgb(217,217,217)',
        'attach.index': 5,
        'attach.offset': 90,
        // 'attach.offset.opposite': true,
        'attach.gap': 25,
    });
    air.r3(0, Math.PI / 2, 0);
    dm.add(air);

    // 机柜，第一排
    var i, node, len = 9;
    for (i = 0; i < len; i++) {
        node = new E.Cabinet({
            'color': 'rgb(46,45,45)',
            'doorFrontImg': '服务器3',
            'doorBackImg': '服务器3',
            's3': [60, 120, 40]
        });
        node.addToDataModel(dm);
        node.p3((i - 4) * 65, 60, -400);
    }

    for (i = 0; i < len; i++) {
        if (i === 4) continue;
        node = new E.Cabinet({
            'color': 'rgb(217,217,217)',
            'doorFrontImg': '柜门 带通气孔',
            'doorBackImg': '柜门背面 带通气孔',
            's3': [60, 120, 40]
        });
        node.addToDataModel(dm);
        node.p3((i - 4) * 65, 60, -200);
    }

    for (i = 0; i < len; i++) {
        node = new E.Cabinet({
            'color': 'rgb(217,217,217)',
            'doorFrontImg': '服务器',
            'doorBackImg': '服务器',
            's3': [60, 120, 40]
        });
        node.addToDataModel(dm);
        node.p3((i - 4) * 65, 60, -0);
    }


    for (i = 0; i < len; i++) {
        if (i === 4) continue;
        node = new E.Cabinet({
            'color': 'rgb(46,45,45)',
            'doorFrontImg': '服务器3',
            'doorBackImg': '服务器3',
            's3': [60, 120, 40]
        });
        node.addToDataModel(dm);
        node.p3((i - 4) * 65, 60, 200);
    }
}(window, ht));