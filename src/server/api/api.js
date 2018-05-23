var db = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var connection = mysql.createConnection(db);
connection.connect(function (err) {
  if (err) {
    console.log("数据库连接失败" + err);
    return;
  } else {
    console.log("数据库连接成功")
  }
});


var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

//查询这个分类中包含的标签
router.get('/selectLabel', (req, res) => {
  var params = req.query.classification;
  if (params === "allApp" || params === "allGame") {
    return;
  } else {
    var sql = "select * from app." + params;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        jsonWrite(res, result)
      }
    })
  }
});

//查询应用列表
router.get('/selectList', (req, res) => {
  var params = req.query.label;
  var sql = '';
  if (params === "allApp1") {
    sql = $sql.classification.select;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        jsonWrite(res, result)
      }
    })
  } else {
    sql = $sql.classification.select1;
    connection.query(sql, [params], function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        jsonWrite(res, result)
      }
    })
  }
});
//应用的下载数量+1
router.get('/downloadNoPlus', (req, res) => {
  var params = req.query.id;
  var sql = $sql.classification.update1;
  connection.query(sql, [params], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//查询应用的详细信息
router.get('/getAppDetail', (req, res) => {
  var params = req.query.id;
  var sql = $sql.classification.select2;
  connection.query(sql, [params], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//热门下载排行
router.get('/select4', (req, res) => {
  var sql = $sql.software.select4;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//更换每日推荐
router.get('/select5', (req, res) => {
  var sql = $sql.software.select5;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//更换优秀新软件
router.get('/select6', (req, res) => {
  var sql = $sql.software.select6;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//热门应用
router.get('/select7', (req, res) => {
  var sql = $sql.software.select7;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//编辑推荐
router.get('/select8', (req, res) => {
  var sql = $sql.software.select8;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//周下载排行
router.get('/select9', (req, res) => {
  var sql = $sql.software.select9;
  var sql2 = 'select upTime from app.apps order by upTime desc limit 1';
  var upTime = '';
  var a = '';

  connection.query(sql2, [upTime], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      var string = JSON.stringify(result);
      var data = JSON.parse(string);
      upTime = data[0].upTime;
    }
  });
  connection.query(sql, [upTime], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//编辑推荐
router.get('/select10', (req, res) => {
  var sql = $sql.software.select10;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//查询游戏列表
router.get('/select11', (req, res) => {
  var params = req.query.label;
  var sql = '';
  if (params === "allGame1") {
    sql = $sql.game.select12;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        jsonWrite(res, result)
      }
    })
  } else {
    sql = $sql.game.select11;
    connection.query(sql, [params], function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        jsonWrite(res, result)
      }
    })
  }
});
//查询游戏的详细信息
router.get('/select13', (req, res) => {
  var params = req.query.id;
  var sql = $sql.game.select13;
  connection.query(sql, [params], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//游戏下载排行/热门游戏
router.get('/select14', (req, res) => {
  var sql = $sql.game.select14;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//游戏下载排行/热门游戏
router.get('/select15', (req, res) => {
  var sql = $sql.game.select15;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});
//网游/单机下载排行榜
router.get('/select16', (req, res) => {
  var ol = req.query.ol;
  var sql = '';
  if (ol === "1") {
    sql = $sql.game.select16;
  } else if (ol === "0") {
    sql = $sql.game.select17;
  }
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//游戏的下载数量+1
router.get('/downloadNoPlus1', (req, res) => {
  var params = req.query.id;
  var sql = $sql.game.update2;
  connection.query(sql, [params], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//游戏新品速递
router.get('/select20', (req, res) => {
  var sql = $sql.game.select20;
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});

//用户登录
router.post('/login', (req, res) => {
  var sql1 = $sql.user.loginSelect;
  var parma1 = req.body.username;
  var parma2 = req.body.password;
  connection.query(sql1, [parma1], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result[0] == null) {
      jsonWrite(res, 'login-failed');
    } else {
      var string = JSON.stringify(result);
      var data = JSON.parse(string);
      if (parma2 === data[0].password){
        jsonWrite(res,result)
      }else{
        jsonWrite(res,"login-failed")
      }
    }
  })
});
//用户注册
router.post('/register', (req, res) => {
  var sql = $sql.user.insert1;
  var parma1 = req.body.username;
  var parma2 = req.body.password;
  var parma3 = req.body.sex;
  var parma4 = req.body.nickname;
  connection.query(sql, [parma1, parma2, parma3, parma4], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
});
//添加评论
router.post('/addComment',(req,res)=>{
  var sql=$sql.software.addComment;
  var parma1=req.body.appId;
  var parma2=req.body.username;
  var parma3=req.body.content;
  // console.log(parma1,parma2,parma3);
  connection.query(sql,[parma1,parma2,parma3],function (err,result) {
    if (err){
      console.log(err);
    }if(result){
      jsonWrite(res,'add-comment-success')
    }
  })

})
//搜索评论
router.post('/selectComment',(req,res)=>{
  var sql=$sql.software.selectComment;
  var parma1=req.body.appId;
  connection.query(sql,[parma1],function (err,result) {
    if (err){
      console.log(err);
    }if(result){
      jsonWrite(res,result)
    }
  })

})
//点赞数量+1
router.post('/updatePro',(req,res)=>{
  var sql=$sql.software.updatePro;
  var parma1=req.body.id;
  connection.query(sql,[parma1],function (err,result) {
    if (err){
      console.log(err);
    }if(result){
      jsonWrite(res,'updatePro-success')
    }
  })

})
module.exports = router;
