// const Common = require('../controllers/common')
const { Common, LogProjectController } = require("../controllers/controllers")
const TimerUtil = require("../util/timer")
// const log = require("../config/log");
const AccountConfig = require("../config/AccountConfig");
const { accountInfo, localAssetsDomain } = AccountConfig
const masterUuidKey = "monitor-master-uuid"
/**
 * 定时任务
 */
module.exports = async (customerWarningCallback, serverType = "master") => {
    /**
     * 3秒后开始接收消息队列里的数据
     * */
    setTimeout(() => {
        // if (accountInfo.messageQueue === true) {
        //     // 开始接收消息队列的消息
        //     Common.startReceiveMsg()
        //     Common.startReceiveMsgForMog()
        // }
        // // 将每个项目的配置放入全局变量中
        // Common.setProjectConfigList()
        // setTimeout(() => {
        //     console.log("启动监控项目列表：", JSON.stringify(global.logServerInfo.cacheWebMonitorIdList))
        // }, 10000)
        
        // // 将项目的webMonitorId列表放入全局变量，并放入bin/webMonitorIdList.js文件中
        // // Common.setStopWebMonitorIdList()
    }, 3000)
    /**
     * 2秒后开始进行第一次分析
     * */
    setTimeout(() => {
        // 检查是否有系统日志项目
        LogProjectController.checkSysProject()
    }, 20000)
    // Common.consoleLogo()
    
    /** * 定时任务  开始 */
    setTimeout(() => {
        // Common.consoleInfo()
        Common.createTable(0)

        TimerUtil((time) => {
            const minuteTimeStr = time.Format("mm:ss")

            const loopGap = accountInfo.batchInsert.loopGap || 10
            switch(loopGap) {
                case 10:
                    // 每隔10秒钟
                    if (minuteTimeStr.substring(4) == "0") {
                        // 取内存中的数据入库
                        Common.handleLogInfoQueue()
                    }
                    break
                case 20:
                    // 每隔20秒钟
                    if (["00", "20", "40"].includes(minuteTimeStr.substring(3))) {
                        // 取内存中的数据入库
                        Common.handleLogInfoQueue()
                    }
                    break
                case 30:
                    // 每隔30秒钟
                    if (["00", "30"].includes(minuteTimeStr.substring(3))) {
                        // 取内存中的数据入库
                        Common.handleLogInfoQueue()
                    }
                    break
                case 60:
                    // 每隔30秒钟
                    if (["00"].includes(minuteTimeStr.substring(3))) {
                        // 取内存中的数据入库
                        Common.handleLogInfoQueue()
                    }
                    break
                default:
                    // 每隔10秒钟
                    if (minuteTimeStr.substring(4) == "0") {
                        // 取内存中的数据入库
                        Common.handleLogInfoQueue()
                    }
                    break
            }
        })
    }, 6000)
}