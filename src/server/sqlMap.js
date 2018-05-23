var sqlMap = {
  // 用户
  classification: {
    selectLabel: 'select * from ?',//无法这样传递参数
    //最热应用
    select: 'select id,name,downloadNo from app.apps order by downloadNo desc',
    //最新应用
    select3: 'slect id,name,downloadNo from app.apps order by upTime desc',
    //查询某一标签的所有应用
    select1: 'select id,name,downloadNo from app.apps where label= ? order by downloadNo desc',
    //查询某一应用的详细信息
    select2: 'select * from app.apps where id = ?',
    //下载量+1
    update1: 'update app.apps set downloadNo=downloadNo+\'1\' where id = ?;'
  },
  software: {
    //热门下载排行
    select4: 'select id,name,downloadNo from app.apps order by downloadNo desc limit 7',
    //每日推荐
    select5: 'select id,name,introduce from app.apps order by rand() limit 1',
    //优秀新软件
    select6: 'select id,name from app.apps order by upTime desc limit 14',
    //热门应用
    select7: 'select id,name from app.apps order by downloadNo desc limit 14',
    //编辑推荐
    select8: 'select id,name from app.apps order by rand() limit 14',
    //最近一周下载排行
    select9: ' select id,name,downloadNo from app.apps where upTime >= ? order by downloadNo desc limit 9',
    //热门标签
    select10: 'select label ',
    //添加评论
    addComment: 'insert into app.comments(id,appId,username,upTime,approve,content) values(null,?,?,now(),0,?)',
    //搜索评论
    selectComment: 'select app.comments.id,app.users.nickname,app.comments.id,app.comments.upTime,app.comments.approve,app.comments.content from app.users,app.comments where users.username=comments.username and appId= ? order by approve desc',
    //更新赞的数量
    updatePro: 'update app.comments set approve=approve+\'1\' where id = ?;'

  },
  game: {
    //某一标签下的所有游戏
    select11: 'select id,name,downloadNo from app.games where label= ? order by downloadNo desc',
    //全部游戏
    select12: 'select id,name,downloadNo from app.games order by downloadNo desc',
    //游戏的详细信息
    select13: 'select * from app.games where id = ?',
    //热门游戏
    select14: 'select id,name,downloadNo from app.games order by downloadNo desc limit 14',
    //游戏推荐
    select15: 'select id,name from app.games order by rand() limit 14',
    //网游下载排行
    select16: 'select id,name,downloadNo from app.games where ol = 1 order by downloadNo desc limit 9',
    //单机下载排行榜
    select17: 'select id,name,downloadNo from app.games where ol = 0 order by downloadNo desc limit 9',
    //下载量+1
    update2: 'update app.games set downloadNo=downloadNo+\'1\' where id = ?',
    //新品速递
    select20: 'select id,name,downloadNo from app.games order by upTime desc limit 4'
  },
  user: {
    //注册
    insert1: 'insert into app.users (username,password,sex,nickname) values (?,?,?,?)',
    //登录
    loginSelect: 'select username,password,nickname from app.users where username = ? '
  }
}

module.exports = sqlMap;
