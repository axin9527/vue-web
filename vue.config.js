//别名配置 其实 src 对应 @ src:@ 任何文件都可以用$router  $store拿到数据
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}