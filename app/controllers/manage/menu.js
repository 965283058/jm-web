const db = require("../../db/Schema");


exports.edit = async(ctx, next)=> {
    var id = ctx.request.body.id;
    var text = ctx.request.body.text;
    var index = Number.parseInt(ctx.request.body.index);

    let result = await db.Menu.update({'_id': id}, {
        '$set': {
            'text': text,
            'index': index
        }
    })
    if (result instanceof Error) {
        ctx.body = {"status": 10, 'message': result}
    } else {
        ctx.body = {"status": 0, 'message': '', "data": result}
    }
}

exports.getTreeMenu = async(ctx, next)=> {
    var where = {};
    if (!ctx.session.admin.superAdmin) {
        where._id = {$in: ctx.session.admin.power};
    }
    let data =await db.Menu.find(where).sort({'parantId':1,'index':1});
    if (data instanceof Error) {
        ctx.body = {"status": 10, 'message': data}
    } else {
        let json = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].parentId==0) {
                let menu = {
                    id: data[i]._id,
                    text: data[i].text,
                    icon: data[i].icon,
                    code: data[i].code,
                    index: data[i].index,
                    parentId:data[i].parentId,
                    children: []
                }
                for (let j = 0; j < data.length; j++) {
                    if (data[j].parentId == data[i]._id) {
                        menu.children.push(
                            {
                                id: data[j]._id,
                                text: data[j].text,
                                icon: data[j].icon,
                                code: data[j].code,
                                index: data[j].index,
                                parentId:data[j].parentId,
                            }
                        )
                    }
                }
                json.push(menu)
            }
        }
        ctx.body = {"status": 0, 'message': '', "data": json}
    }
}

